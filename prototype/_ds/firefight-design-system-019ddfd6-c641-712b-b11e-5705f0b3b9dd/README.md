# Firefight — Design System

Foundation models for physical intelligence. This project is the visual + verbal language for the Firefight platform — operator consoles, field reports, marketing surfaces, and the brand surrounding them.

The system is split into nine review cards, each a 1280×1600 fixed canvas with consistent header chrome.

---

## CONTENT FUNDAMENTALS

### Audience
We design for **operators** — site supervisors, fleet managers, safety leads, foremen — and the **engineers** who deploy our models. Both are smart, time-pressured, and skeptical of shiny demos. They reward precision and punish fluff.

### Voice in two lines
Confident, technical, plainspoken. Verbs first. Specific numbers over adjectives.

### Tone register
- **Operator console**: blunt, present-tense, action-led. *"Mission paused — weak signal, Zone B-2."*
- **Field report**: clinical, past-tense, evidence-led. *"247 panoramic captures uploaded · 4.8 GB · DroneDeploy synced."*
- **Marketing**: confident, plain, technical. *"Foundation models for physical intelligence."*
- **Internal**: warm but exact. We don't dumb things down for each other.

### What we say (and don't)
| Use | Avoid |
|---|---|
| Product names (capitalized) | "the model" / "our AI" |
| Operator | User |
| Mission | Job, run, task |
| Site / Floor / Zone (in order) | Location, area, place |
| Telemetry, Confidence, Ground truth | Real-time, smart, intelligent |
| E-stop | Kill switch, stop button |
| Foundation model | LLM, neural network |

### Numbers and units
Always show them. Always in mono type. Always with units (`62.4 PSI`, `−72 dBm`, `87%`). Round only when precision adds nothing — `02:14:33` beats "about two hours."

### Forbidden words
revolutionary · game-changing · cutting-edge · unleash · empower · seamless · robust · world-class · next-generation · disrupt · elevate

### Punctuation
- Em-dashes for asides, en-dashes for ranges, hyphens for compounds.
- No exclamation marks in product copy.
- Sentence case for everything except proper nouns (Firefight, DroneDeploy).
- Oxford comma, always.

---

## VISUAL FOUNDATIONS

### Visual DNA
The platform lives mostly on **dark surfaces** — operator consoles, robot HUDs, telemetry panels — punctuated by **paper-warm light surfaces** for reports and marketing. The system is restrained, almost monochromatic, with **signal blue** as the load-bearing accent and three functional colors (alert, warn, ok) for state.

### Type system (3 families, 1 job each)
| Family | Role | Where |
|---|---|---|
| **Manrope** | Display · hero | Cover titles, section headers, marketing |
| **Inter** | UI · body | Everything in product chrome |
| **Roboto Mono** | Telemetry · data | Numbers, codes, IDs, eyebrows |

Never mix display weights below 600. Mono is **always** uppercase for eyebrows and IDs (`GAUGE · G-014`), normal case for numerics.

### Color usage rule
- **Signal blue** is reserved for primary CTA, active state, and brand highlights. If three things on screen are blue, two are wrong.
- **Alert red** is reserved for E-stop, errors, and danger. Never decorative.
- **Warn amber** for paused / in-progress / requires-attention.
- **Ok green** for success / complete / in-range — used sparingly.
- **Violet** is a tertiary accent for exploration / secondary data series; never in core operator UI.

### Spacing rhythm (4 px grid)
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 56 · 80 · 120
- Tight elements (chips, buttons): 4–12.
- Card interior padding: 16–24.
- Section breathing: 32–56.
- Hero / cover separation: 80–120.

### Radii
| Token | Value | Use |
|---|---|---|
| `--r-xs` | 4 px | Buttons, chips |
| `--r-sm` | 7 px | Header pills, status |
| `--r-md` | 12 px | Cards |
| `--r-lg` | 20 px | Sheets, modals |
| `--r-xl` | 28 px | Hero panels |
| `--r-pill` | 999 px | Status pills, tags |

### Layout principles
- **Operator console** uses a 50 px header with a permanent E-stop and breadcrumb (`Site / Floor / Zone`). Never hidden, never collapsed.
- **Cards on dark** sit on `--c-ink` (#131313) with `rgba(255,255,255,0.06)` borders.
- **One bold thing per screen.** A status pill, a CTA, a number — pick what matters and let the rest recede.

---

## Cards (review order)

| # | File | Section | What's in it |
|---|---|---|---|
| 01 | `01-cover.html`        | Brand        | System cover — title, lede, KPI strip, index |
| 02 | `02-typography.html`   | Type         | Manrope display · Inter UI · Roboto Mono telemetry |
| 03 | `03-color.html`        | Colors       | Dark surfaces · light paper · functional signals |
| 04 | `04-spacing.html`      | Spacing      | 4 px grid · radii · shadows · borders |
| 05 | `05-buttons.html`      | Components   | Primary, secondary, danger, ghost, icon |
| 06 | `06-forms.html`        | Components   | Text fields, selects, toggles, sliders, segmented |
| 07 | `07-iconography.html`  | Components   | Line icon set, status pills, badges |
| 08 | `08-components.html`   | Components   | Operator chrome · mission cards · gauge records · sheets · toasts |
| 09 | `09-brand.html`        | Brand        | Logo lockups · voice · do/don't · lexicon |
| 10 | `10-primitives.html`   | Primitives   | The DLS layer ladder · what makes a primitive · the set |
| 11 | `11-sidebar.html`      | Primitives   | Sidebar (P-01) · Setup mode + Real-Time mode · spec |

---

## Primitives layer

A new layer was added between Components and Screens: **Primitives** are spatial+temporal patterns that own a fixed place on the canvas and adapt across mission phases. Three rules — must own a place, must adapt across phases without losing shape, must be reused across products.

The planned set:

| ID   | Name      | Status     | Role |
|------|-----------|------------|------|
| P-01 | Sidebar   | Defined    | Mission lifecycle rail — Setup → Real-Time → Summary |
| P-02 | TopBar    | Planned    | Global chrome — breadcrumb, fleet, E-stop |
| P-03 | Canvas    | Planned    | Work surface — map, video, floorplan |
| P-04 | Drawer    | Planned    | Modal overlay — confirmations, edge config |
| P-05 | Inspector | Planned    | Right rail for selected entity (gauge, robot, waypoint) |

## Source of truth

- **`colors_and_type.css`** — all tokens (color, type, spacing, radii, shadows, motion). Drop into any HTML page and reference the CSS variables.
- **`card-shell.css`** — shared layout shell each review card extends.
- **`assets/`** — wordmark SVG, favicon, marker pins.
- **`fonts/`** — Inter family (locally hosted). Manrope and Roboto Mono load from Google Fonts CDN.

## Tokens at a glance

```
Surfaces      void · night · ink · graphite · slate · iron · steel · mist · fog · bone · paper
Signal        signal (#F26B1A · Firefight orange) · signal-hi · signal-lo · signal-tint
Functional    alert (#E44D4D) · warn (#F1A824) · ok (#3AA860) · violet (#8C79F0)
Type families display=Manrope · sans=Inter · mono=Roboto Mono
Spacing       4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 56 · 80 · 120
Radii         4 · 7 · 12 · 20 · 28 · pill
```

## Next surfaces (not yet built)
- **Operator console** (full screens — mission detail, live mission, fleet view)
- **Mobile robot-supervisor** (iOS-style alerts, pause/approve sheets)
- **Slide template** (decks consuming these tokens for All Hands / sales)
- **Marketing site** (paper-warm sections + dark hero)
