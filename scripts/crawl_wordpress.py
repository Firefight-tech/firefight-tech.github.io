#!/usr/bin/env python3
"""Crawl the CMU MRSD team WordPress sites and archive all reusable content.

Pulls everything through the open WordPress REST API (wp-json):
  - all pages and posts (rendered HTML + extracted plain text)
  - the full media library (images, documents, videos), downloaded as originals
  - YouTube links/embeds found anywhere in page content
  - any file links in page HTML that aren't in the media library
    (wp-content/uploads files are downloaded; external links are recorded)

Output layout (per site, under --out):
  crawl/<site>/
    pages/<slug>.html        rendered page HTML
    pages/<slug>.txt         plain-text version
    media/images/...         original-size images
    media/documents/...      pdf/doc/ppt/xls/zip/...
    media/videos/...         mp4/webm/mov/...
    media/other/...          anything else
    manifest.json            everything found, with URLs + local paths
  crawl/SUMMARY.md           human-readable overview of both sites

Re-running is safe: already-downloaded files are skipped.

Usage:
  python3 scripts/crawl_wordpress.py [--out crawl] [--delay 0.3]
"""

import argparse
import html
import json
import re
import sys
import time
import unicodedata
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse, parse_qs

import requests

SITES = {
    "2025teamg": "https://mrsdprojects.ri.cmu.edu/2025teamg/",
    "2026teamf": "https://mrsdprojects.ri.cmu.edu/2026teamf/",
}

USER_AGENT = "firefight-tech-archiver/1.0 (contact: ajong@andrew.cmu.edu)"

DOC_EXTS = {
    ".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx",
    ".csv", ".txt", ".zip", ".tar", ".gz",
}
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".heic"}
VIDEO_EXTS = {".mp4", ".webm", ".mov", ".m4v", ".avi", ".mkv"}

YOUTUBE_RE = re.compile(
    r"(?:https?:)?//(?:www\.)?"
    r"(?:youtube(?:-nocookie)?\.com/(?:watch\?[^\"'\s<>]*v=|embed/|shorts/|v/)"
    r"|youtu\.be/)"
    r"([A-Za-z0-9_-]{11})"
)


def norm_youtube(match_text: str) -> str | None:
    m = YOUTUBE_RE.search(match_text)
    return f"https://www.youtube.com/watch?v={m.group(1)}" if m else None


def slugify(text: str, fallback: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or fallback


class LinkExtractor(HTMLParser):
    """Collect hrefs, media srcs, and iframe srcs from rendered HTML."""

    def __init__(self):
        super().__init__()
        self.hrefs: list[str] = []
        self.srcs: list[str] = []
        self.iframes: list[str] = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "a" and a.get("href"):
            self.hrefs.append(a["href"])
        elif tag in ("img", "video", "audio", "source", "embed") and a.get("src"):
            self.srcs.append(a["src"])
        elif tag == "iframe" and a.get("src"):
            self.iframes.append(a["src"])


class TextExtractor(HTMLParser):
    """Convert rendered HTML to readable plain text."""

    BLOCK_TAGS = {"p", "div", "br", "li", "h1", "h2", "h3", "h4", "h5", "h6",
                  "tr", "section", "article", "figure", "figcaption", "blockquote"}

    def __init__(self):
        super().__init__()
        self.parts: list[str] = []
        self._skip = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self._skip += 1
        elif tag in self.BLOCK_TAGS:
            self.parts.append("\n")

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self._skip:
            self._skip -= 1
        elif tag in self.BLOCK_TAGS:
            self.parts.append("\n")

    def handle_data(self, data):
        if not self._skip:
            self.parts.append(data)

    def text(self) -> str:
        raw = "".join(self.parts)
        lines = [re.sub(r"[ \t]+", " ", ln).strip() for ln in raw.splitlines()]
        out, blank = [], False
        for ln in lines:
            if ln:
                out.append(ln)
                blank = False
            elif not blank:
                out.append("")
                blank = True
        return "\n".join(out).strip() + "\n"


class Crawler:
    def __init__(self, out_dir: Path, delay: float):
        self.out = out_dir
        self.delay = delay
        self.http = requests.Session()
        self.http.headers["User-Agent"] = USER_AGENT

    # ---------- HTTP helpers ----------

    def get(self, url: str, **kw) -> requests.Response:
        for attempt in range(4):
            try:
                r = self.http.get(url, timeout=60, **kw)
                if r.status_code in (429, 500, 502, 503, 504):
                    raise requests.RequestException(f"HTTP {r.status_code}")
                time.sleep(self.delay)
                return r
            except requests.RequestException as e:
                if attempt == 3:
                    raise
                wait = 2 ** attempt
                print(f"    retry {attempt + 1} for {url} ({e}); waiting {wait}s")
                time.sleep(wait)
        raise RuntimeError("unreachable")

    def api_all(self, base: str, endpoint: str) -> list[dict]:
        """Fetch every item from a paginated wp-json collection."""
        items, page = [], 1
        while True:
            r = self.get(
                f"{base}wp-json/wp/v2/{endpoint}",
                params={"per_page": 100, "page": page},
            )
            if r.status_code == 400:  # past the last page
                break
            r.raise_for_status()
            batch = r.json()
            if not batch:
                break
            items.extend(batch)
            if page >= int(r.headers.get("X-WP-TotalPages", 1)):
                break
            page += 1
        return items

    def download(self, url: str, dest: Path) -> bool:
        """Download url to dest; returns True if the file exists afterwards."""
        if dest.exists() and dest.stat().st_size > 0:
            return True
        dest.parent.mkdir(parents=True, exist_ok=True)
        try:
            r = self.get(url, stream=True)
            if r.status_code != 200:
                print(f"    !! HTTP {r.status_code} for {url}")
                return False
            tmp = dest.with_suffix(dest.suffix + ".part")
            with open(tmp, "wb") as f:
                for chunk in r.iter_content(1 << 16):
                    f.write(chunk)
            tmp.rename(dest)
            return True
        except requests.RequestException as e:
            print(f"    !! failed {url}: {e}")
            return False

    # ---------- classification ----------

    @staticmethod
    def bucket_for(url: str, mime: str = "") -> str:
        ext = Path(urlparse(url).path).suffix.lower()
        if mime.startswith("image/") or ext in IMAGE_EXTS:
            return "images"
        if mime.startswith("video/") or ext in VIDEO_EXTS:
            return "videos"
        if mime.startswith("application/") or mime == "text/csv" or ext in DOC_EXTS:
            return "documents"
        return "other"

    # ---------- per-site crawl ----------

    def crawl_site(self, key: str, base: str) -> dict:
        print(f"\n=== {key} ({base}) ===")
        site_dir = self.out / key
        manifest = {
            "site": base,
            "crawled_by": "scripts/crawl_wordpress.py",
            "pages": [],
            "media": [],
            "youtube": [],
            "external_links": [],
            "extra_files": [],
        }

        # -- pages & posts --------------------------------------------------
        content_items = [(p, "page") for p in self.api_all(base, "pages")]
        content_items += [(p, "post") for p in self.api_all(base, "posts")]
        print(f"  {len(content_items)} pages/posts")

        youtube: dict[str, set] = {}          # url -> set of page slugs
        external: dict[str, set] = {}         # url -> set of page slugs
        extra_file_urls: dict[str, set] = {}  # uploads-hosted files -> slugs
        media_urls_seen: set[str] = set()

        for item, kind in content_items:
            title = html.unescape(item["title"]["rendered"]).strip() or item["slug"]
            slug = slugify(item.get("slug") or title, f"{kind}-{item['id']}")
            rendered = item["content"]["rendered"]

            page_dir = site_dir / "pages"
            page_dir.mkdir(parents=True, exist_ok=True)
            (page_dir / f"{slug}.html").write_text(rendered, encoding="utf-8")

            tx = TextExtractor()
            tx.feed(rendered)
            (page_dir / f"{slug}.txt").write_text(
                f"# {title}\n\nSource: {item['link']}\n\n{tx.text()}", encoding="utf-8"
            )

            # harvest links out of the rendered HTML
            lx = LinkExtractor()
            lx.feed(rendered)
            for raw in lx.hrefs + lx.srcs + lx.iframes:
                url = urljoin(item["link"], html.unescape(raw))
                yt = norm_youtube(url)
                if yt:
                    youtube.setdefault(yt, set()).add(slug)
                    continue
                parsed = urlparse(url)
                if parsed.scheme not in ("http", "https"):
                    continue
                ext = Path(parsed.path).suffix.lower()
                if "/wp-content/uploads/" in parsed.path:
                    extra_file_urls.setdefault(url.split("?")[0], set()).add(slug)
                elif parsed.netloc != urlparse(base).netloc and (
                    ext in DOC_EXTS | VIDEO_EXTS
                    or "drive.google" in parsed.netloc
                    or "docs.google" in parsed.netloc
                    or "vimeo" in parsed.netloc
                ):
                    external.setdefault(url, set()).add(slug)

            # plain-URL YouTube references (WP auto-embeds bare links)
            for m in YOUTUBE_RE.finditer(rendered):
                youtube.setdefault(
                    f"https://www.youtube.com/watch?v={m.group(1)}", set()
                ).add(slug)

            manifest["pages"].append({
                "type": kind,
                "id": item["id"],
                "title": title,
                "slug": slug,
                "url": item["link"],
                "modified": item.get("modified"),
                "local_html": f"{key}/pages/{slug}.html",
                "local_text": f"{key}/pages/{slug}.txt",
            })
            print(f"  [{kind}] {title}")

        # -- media library ---------------------------------------------------
        media_items = self.api_all(base, "media")
        print(f"  {len(media_items)} media library items")
        for m in media_items:
            src = m.get("source_url")
            if not src:
                continue
            mime = m.get("mime_type", "")
            bucket = self.bucket_for(src, mime)
            fname = Path(urlparse(src).path).name
            dest = site_dir / "media" / bucket / fname
            ok = self.download(src, dest)
            media_urls_seen.add(src.split("?")[0])
            manifest["media"].append({
                "id": m["id"],
                "title": html.unescape(m["title"]["rendered"]).strip(),
                "mime_type": mime,
                "url": src,
                "caption": html.unescape(
                    re.sub(r"<[^>]+>", "", m.get("caption", {}).get("rendered", ""))
                ).strip(),
                "alt_text": m.get("alt_text", ""),
                "local_path": f"{key}/media/{bucket}/{fname}" if ok else None,
            })
            print(f"  [media/{bucket}] {fname}" + ("" if ok else "  (FAILED)"))

        # -- uploads-hosted files linked in pages but not in the library ----
        for url, slugs in sorted(extra_file_urls.items()):
            # strip WP thumbnail suffix (-300x200) to compare against originals
            original = re.sub(r"-\d+x\d+(?=\.\w+$)", "", url)
            if url in media_urls_seen or original in media_urls_seen:
                continue
            bucket = self.bucket_for(url)
            fname = Path(urlparse(url).path).name
            dest = site_dir / "media" / bucket / fname
            ok = self.download(url, dest)
            manifest["extra_files"].append({
                "url": url,
                "found_on": sorted(slugs),
                "local_path": f"{key}/media/{bucket}/{fname}" if ok else None,
            })
            print(f"  [extra/{bucket}] {fname}" + ("" if ok else "  (FAILED)"))

        manifest["youtube"] = [
            {"url": url, "found_on": sorted(slugs)}
            for url, slugs in sorted(youtube.items())
        ]
        manifest["external_links"] = [
            {"url": url, "found_on": sorted(slugs)}
            for url, slugs in sorted(external.items())
        ]

        (site_dir / "manifest.json").write_text(
            json.dumps(manifest, indent=2), encoding="utf-8"
        )
        print(f"  -> {len(manifest['youtube'])} YouTube links, "
              f"{len(manifest['external_links'])} external links, "
              f"{len(manifest['extra_files'])} extra files")
        return manifest


def write_summary(out: Path, manifests: dict[str, dict]) -> None:
    lines = ["# WordPress crawl summary", ""]
    for key, m in manifests.items():
        lines += [f"## {key}", f"Source: {m['site']}", ""]
        lines.append(f"- Pages/posts: {len(m['pages'])}")
        by_bucket: dict[str, int] = {}
        for item in m["media"] + m["extra_files"]:
            p = item.get("local_path")
            if p:
                by_bucket[p.split("/")[2]] = by_bucket.get(p.split("/")[2], 0) + 1
        for bucket, n in sorted(by_bucket.items()):
            lines.append(f"- Media ({bucket}): {n}")
        lines.append(f"- YouTube links: {len(m['youtube'])}")
        lines.append(f"- External links: {len(m['external_links'])}")
        lines += ["", "### Pages", ""]
        for p in m["pages"]:
            lines.append(f"- [{p['title']}]({p['url']}) -> `{p['local_text']}`")
        if m["youtube"]:
            lines += ["", "### YouTube videos", ""]
            for y in m["youtube"]:
                lines.append(f"- {y['url']}  (on: {', '.join(y['found_on'])})")
        if m["external_links"]:
            lines += ["", "### External links", ""]
            for e in m["external_links"]:
                lines.append(f"- {e['url']}  (on: {', '.join(e['found_on'])})")
        lines.append("")
    (out / "SUMMARY.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--out", default="crawl", help="output directory (default: crawl)")
    ap.add_argument("--delay", type=float, default=0.3,
                    help="seconds between requests (default: 0.3)")
    args = ap.parse_args()

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    crawler = Crawler(out, args.delay)

    manifests = {}
    for key, base in SITES.items():
        manifests[key] = crawler.crawl_site(key, base)

    write_summary(out, manifests)
    print(f"\nDone. See {out}/SUMMARY.md and per-site manifest.json files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
