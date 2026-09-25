# Firefight Technologies — firefight-tech.github.io

Marketing site for Firefight (wearable sensors + real-time 3D mapping for
firefighters). Plain static HTML/CSS/JS — no build step, no framework, no
package manager. GitHub Pages serves `main` at the repo root; every push
deploys in ~1 minute.

## Layout

- `index.html` — the whole landing page, deliberately lean and customer-facing
  (audience: fire department buyers). Headline + the live 3D prototype as the
  hero, three one-line points (crew location, heat alerts, replay), one metrics
  row, a Request-a-demo CTA, footer. No JS. Team, stats, how-it-works, videos,
  and victim annotation were cut on purpose (Sep 2026) — don't re-add noise.
- `assets/css/site.css` — all styles. Design tokens at the top mirror the
  prototype's design system; brand orange is `#ef5b0c` (`--c-signal`).
- `assets/logos/` — full brand library (SVG marks + wordmarks in dark/light/
  orange, full lockups). The site references stable copies:
  `assets/logo-mark.svg`, `assets/wordmark-light.svg`, `assets/favicon.svg`.
- `assets/img/og.jpg` — social preview (crop of the hero screenshot). Compress
  any new image as JPEG q≈85, ≤1400px (Pillow is available; no ImageMagick).
- `prototype/` — the SERVED copy of the command-tablet demo (see below).
- `Firefighter Command Tablet Prototype/` — gitignored SOURCE export from
  Claude Design. The user drops updates here and asks to "integrate".
- `scripts/crawl_wordpress.py` — archiver for the two CMU MRSD project sites
  the content came from. Output goes to `crawl/` (gitignored). Re-runnable;
  per-site `manifest.json` holds all YouTube/Google Drive links.

## Prototype integration workflow

When the user updates `Firefighter Command Tablet Prototype/`:

1. `diff -rq "Firefighter Command Tablet Prototype" prototype` — usually only
   the HTML changes; `support.js` and `_ds/` rarely do.
2. Sync with the rebrand rewrite (the export references the old FieldAI
   design-system folder; the repo uses a renamed but functionally identical
   bundle):
   `sed 's|_ds/fieldai-design-system-new-remix-019ddfd6|_ds/firefight-design-system-019ddfd6|g' "Firefighter Command Tablet Prototype/Command Tablet.dc.html" > prototype/index.html`
3. Confirm `grep -ri fieldai prototype/` returns nothing (user requirement).
4. Screenshot-verify locally before pushing (see Verification).
5. If `_ds/` itself ever changes: diff the bundles ignoring the
   FieldAI→Firefight naming; if there are real changes, copy the new bundle
   into `prototype/_ds/firefight-design-system-019ddfd6-…/` and re-apply the
   rename inside its files (comments, `FieldAIDesignSystemRemix` namespace,
   "FieldAI" wordmark string).

The prototype is responsive (as of Aug 2026): the landing page embeds it as
the hero, a plain iframe filling the rest of the first screen (`.demo-stage`
in site.css: flex-fill, 480–820px; 640px min on mobile), no scaling JS. When
verifying, screenshot a desktop width and a ~390px mobile width — headless
Chrome won't go below ~500px, so wrap the page in a 390px-wide iframe.

## Deployment gotchas

- **Never delete `.nojekyll`.** Without it, Pages runs Jekyll, which silently
  drops underscore-prefixed dirs — the prototype's `_ds/` 404s and the demo
  renders as a bare 3D view with ghost panels.
- **Custom domain `firefight.tech`:** DNS at Namecheap is correct (apex A →
  185.199.108–111.153, www CNAME → firefight-tech.github.io). The `CNAME`
  file holds `firefight.tech`; while it exists, firefight-tech.github.io
  301s to the domain, so a missing/stalled HTTPS cert takes the site down
  for everyone. If `https://firefight.tech` stops answering, check
  `gh api repos/Firefight-tech/firefight-tech.github.io/pages`; the fix for
  stalled cert provisioning is removing and re-adding the domain (the user
  has done this via the GitHub UI — expect rejected pushes; rebase). Once
  the cert answers, enforce HTTPS:
  `gh api -X PUT repos/Firefight-tech/firefight-tech.github.io/pages -f cname=firefight.tech -F https_enforced=true`.
- The user sometimes commits via the GitHub UI (CNAME add/delete) — if a push
  is rejected, `git fetch && git rebase origin/main` and check what changed
  before pushing.

## Verification (no chromium-cli / playwright here)

```bash
python3 -m http.server 8901 &          # serve repo root
google-chrome --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1280,800 --virtual-time-budget=20000 \
  --screenshot=out.png http://localhost:8901/prototype/
```

Read the screenshot and actually look at it: the prototype must show the
header bar, floor switcher (ALL/F3/F2/F1), four crew cards, alerts panel,
legend, and timeline — not just the 3D canvas. After pushing, verify live
with `curl` (grep for a string unique to the change).

## Copy rules (user-mandated)

- Never use anti-robot framing ("no robots to deploy") — robot platforms are
  on the company roadmap. Sell wearables as "no new workflow to learn".
- The demo is a "proof of concept", not a "working prototype" (shown as the
  tag on the demo frame).
- Headline is "See through smoke. Command with clarity." — never "see
  through the fire" or "through walls" (inaccurate; through-wall claims are
  fine only for the 915 MHz radio results, which are factual). Subtitle says
  "even in zero visibility" so it doesn't repeat "smoke".
- Contact email on the site: `jerryhou@andrew.cmu.edu` (Request-a-demo mailto).

## Content sources

Site copy and metrics were mined from two CMU MRSD project sites (crawled
into `crawl/` by the script): 2025 Team G "SMoRes" (drone) and 2026 Team F
"FireSense" (wearables). Key claims used on the page — 0.18 m ATE, 15 Mbps
through concrete, 6/6 humans detected, Makita 18V power — come from their
System Performance pages; keep new claims traceable to those write-ups.
~100 formal reports live on Google Drive (links in each site's
`manifest.json`), not downloaded.
