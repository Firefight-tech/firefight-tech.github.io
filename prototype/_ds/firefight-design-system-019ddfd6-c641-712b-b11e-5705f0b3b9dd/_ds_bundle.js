/* @ds-bundle: {"format":3,"namespace":"FirefightDesignSystemRemix_019ddf","components":[],"sourceHashes":{"console/atoms.jsx":"137e87bed863","console/connection-states.jsx":"09f297fee42b","console/design-canvas.jsx":"5d0e39003628","console/fleet.jsx":"43e3c0678d04","console/icons.jsx":"d3678551bb3f","console/missions.jsx":"5233bbda43d5","console/projects.jsx":"dec7bab22b6f","console/robot-live.jsx":"d77dfdc0bbd2","console/robot-status.jsx":"a7c797ac1040","console/sections.jsx":"9aa15000b6ca","console/tablet-live.jsx":"447fb0d6ee3b","deck/deck-stage.js":"ad1c016a6256","theme-toggle.js":"fdbb2a82b546"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FirefightDesignSystemRemix_019ddf = window.FirefightDesignSystemRemix_019ddf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// console/atoms.jsx
try { (() => {
// Shared primitives for the Operator Console.
// Atoms only — no screens. Each artboard composes these.

const {
  useState
} = React;

// ── Connection bars ────────────────────────────────────────
function ConnBars({
  level = 'strong',
  label
}) {
  // level: 'strong' (4 bars), 'medium' (3), 'weak' (2), 'offline'
  return /*#__PURE__*/React.createElement("span", {
    className: `oc-conn is-${level}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-conn-bars"
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-conn-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "oc-conn-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "oc-conn-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "oc-conn-bar"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}

// ── Pill / status ───────────────────────────────────────────
function Pill({
  tone = 'ghost',
  dot,
  pulse,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `oc-pill is-${tone}`
  }, dot !== false && /*#__PURE__*/React.createElement("span", {
    className: `oc-pill-dot${pulse ? ' is-pulse' : ''}`
  }), children);
}

// ── Robot avatar (numbered Falcon) ──────────────────────────
function RobotAvatar({
  n,
  status = 'ok',
  size = 44
}) {
  // status: 'ok' (green), 'warn' (yellow), 'alert' (red), 'idle' (mist), 'offline' (iron)
  const ring = {
    ok: 'var(--c-ok)',
    warn: 'var(--c-warn)',
    alert: 'var(--c-alert)',
    idle: 'var(--c-mist)',
    offline: 'var(--c-iron)',
    signal: 'var(--c-signal)'
  }[status];
  const num = String(n).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 8,
      background: 'linear-gradient(135deg, #1c1c1e 0%, #0a0a0a 100%)',
      border: `1.5px solid ${ring}`,
      boxShadow: status !== 'offline' && status !== 'idle' ? `0 0 12px ${ring}40` : 'none',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--ff-mono)',
      fontWeight: 700,
      fontSize: size * 0.32,
      color: ring,
      letterSpacing: '0.02em',
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.14,
      color: 'var(--c-mist)',
      lineHeight: 1,
      marginBottom: -2
    }
  }, "FALCON"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1,
      marginTop: 0
    }
  }, num));
}

// ── Battery bar (mini) ──────────────────────────────────────
function BatteryBar({
  pct,
  charging,
  w = 60
}) {
  const tone = pct < 20 ? 'var(--c-alert)' : pct < 40 ? 'var(--c-warn)' : 'var(--c-ok)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: 6,
      background: 'var(--c-graphite)',
      borderRadius: 2,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: tone,
      transition: 'width 400ms'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 11,
      color: tone,
      minWidth: 28,
      textAlign: 'right'
    }
  }, charging ? '↑' : '', pct, "%"));
}

// ── Stat (numeric KPI) ──────────────────────────────────────
function Stat({
  label,
  value,
  unit,
  tone = 'default',
  sub
}) {
  const valColor = {
    default: 'var(--t-on-dark-1)',
    ok: 'var(--c-ok)',
    warn: 'var(--c-warn)',
    alert: 'var(--c-alert)',
    signal: 'var(--c-signal)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: valColor,
      letterSpacing: '-0.01em'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 12,
      color: 'var(--c-mist)'
    }
  }, unit)), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)',
      marginTop: 2
    }
  }, sub));
}

// ── Console top bar ─────────────────────────────────────────
function TopBar({
  project,
  tabs,
  active,
  onTab,
  hideEstop,
  badge,
  robotContext
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-topbar-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-wordmark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-wordmark-dot"
  }), /*#__PURE__*/React.createElement("span", null, "Firefight")), project && /*#__PURE__*/React.createElement("div", {
    className: "oc-projswitch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-projswitch-thumb",
    style: {
      background: project.color
    }
  }), /*#__PURE__*/React.createElement("span", null, project.name), /*#__PURE__*/React.createElement("span", {
    className: "oc-projswitch-caret"
  }, "\u25BE")), robotContext && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-iron)',
      fontSize: 12
    }
  }, "/"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-mist)'
    }
  }, "Falcon"), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      color: 'var(--t-on-dark-1)'
    }
  }, robotContext.n), robotContext.statusPill))), /*#__PURE__*/React.createElement("div", {
    className: "oc-topbar-mid"
  }, tabs && /*#__PURE__*/React.createElement("div", {
    className: "oc-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `oc-tab ${active === t.id ? 'is-active' : ''}`,
    onClick: () => onTab && onTab(t.id)
  }, t.label, t.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "oc-tab-count"
  }, t.count))))), /*#__PURE__*/React.createElement("div", {
    className: "oc-topbar-right"
  }, badge, /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement(Icon.Bell, null)), /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    title: "Settings"
  }, /*#__PURE__*/React.createElement(Icon.Settings, null)), !hideEstop && /*#__PURE__*/React.createElement("button", {
    className: "oc-estop"
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-estop-glyph"
  }), "E-stop"), /*#__PURE__*/React.createElement("div", {
    className: "oc-avatar"
  }, "JM")));
}

// ── Search input ────────────────────────────────────────────
function SearchInput({
  placeholder,
  w = 260
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 10px',
      width: w,
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      borderRadius: 'var(--r-xs)',
      color: 'var(--c-mist)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Search, {
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--t-on-dark-1)',
      fontSize: 13,
      fontFamily: 'var(--ff-sans)'
    }
  }));
}

// ── Segmented control ───────────────────────────────────────
function Segmented({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 2,
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      borderRadius: 'var(--r-xs)',
      gap: 1
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    onClick: () => onChange && onChange(o.value),
    style: {
      height: 26,
      padding: '0 12px',
      background: value === o.value ? 'var(--c-iron)' : 'transparent',
      color: value === o.value ? 'var(--t-on-dark-1)' : 'var(--c-mist)',
      border: 'none',
      borderRadius: 4,
      fontSize: 12,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, o.icon, o.label)));
}

// ── Map pin ─────────────────────────────────────────────────
function MapPin({
  x,
  y,
  n,
  status = 'ok',
  size = 24,
  label
}) {
  const ring = {
    ok: 'var(--c-ok)',
    warn: 'var(--c-warn)',
    alert: 'var(--c-alert)',
    idle: 'var(--c-mist)',
    signal: 'var(--c-signal)'
  }[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: 'rgba(0,0,0,0.85)',
      border: `2px solid ${ring}`,
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--ff-mono)',
      fontSize: size * 0.40,
      fontWeight: 700,
      color: ring,
      boxShadow: `0 0 16px ${ring}66`
    }
  }, n), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--t-on-dark-2)',
      background: 'rgba(0,0,0,0.7)',
      padding: '1px 5px',
      borderRadius: 3,
      whiteSpace: 'nowrap'
    }
  }, label));
}

// ── Sparkline (simple, last-N values) ───────────────────────
function Sparkline({
  values,
  color = 'var(--c-signal)',
  w = 80,
  h = 20
}) {
  const min = Math.min(...values),
    max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => `${i / (values.length - 1) * w},${h - (v - min) / range * h}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }));
}

// ── Floor plan (SVG-rendered, placeholder office layout) ────
function FloorPlan({
  activePin,
  pins = [],
  path = [],
  constraints = [],
  style,
  walls = 'office',
  label
}) {
  // walls: 'office' | 'warehouse' | 'patrol' — different prebuilt layouts
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 400",
    style: {
      width: '100%',
      height: '100%',
      display: 'block',
      ...style
    },
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "fp-grid",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 0 L 0 0 0 20",
    fill: "none",
    stroke: "rgba(25,148,237,0.06)",
    strokeWidth: "0.5"
  })), /*#__PURE__*/React.createElement("pattern", {
    id: "fp-keepout",
    width: "6",
    height: "6",
    patternUnits: "userSpaceOnUse",
    patternTransform: "rotate(45)"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "6",
    stroke: "rgba(228,77,77,0.6)",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "600",
    height: "400",
    fill: "#0a1018"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "600",
    height: "400",
    fill: "url(#fp-grid)"
  }), walls === 'office' && /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: "2",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "40",
    width: "520",
    height: "320"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "200",
    x2: "280",
    y2: "200"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "280",
    y1: "40",
    x2: "280",
    y2: "220"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "280",
    y1: "260",
    x2: "280",
    y2: "360"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "280",
    x2: "280",
    y2: "280"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "380",
    y1: "40",
    x2: "380",
    y2: "200"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "380",
    y1: "200",
    x2: "560",
    y2: "200"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "460",
    y1: "200",
    x2: "460",
    y2: "360"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(25,148,237,0.7)",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "180",
    y1: "200",
    x2: "200",
    y2: "200",
    stroke: "#0a1018",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "190",
    cy: "200",
    r: "3",
    fill: "rgba(25,148,237,0.7)",
    stroke: "none"
  })), /*#__PURE__*/React.createElement("g", {
    fontFamily: "var(--ff-mono)",
    fontSize: "9",
    fill: "rgba(255,255,255,0.35)",
    letterSpacing: "0.05em"
  }, /*#__PURE__*/React.createElement("text", {
    x: "160",
    y: "120",
    textAnchor: "middle"
  }, "LOBBY"), /*#__PURE__*/React.createElement("text", {
    x: "160",
    y: "240",
    textAnchor: "middle"
  }, "CORRIDOR A"), /*#__PURE__*/React.createElement("text", {
    x: "160",
    y: "320",
    textAnchor: "middle"
  }, "MEETING 1"), /*#__PURE__*/React.createElement("text", {
    x: "330",
    y: "120",
    textAnchor: "middle"
  }, "SERVER"), /*#__PURE__*/React.createElement("text", {
    x: "330",
    y: "290",
    textAnchor: "middle"
  }, "OPS"), /*#__PURE__*/React.createElement("text", {
    x: "470",
    y: "120",
    textAnchor: "middle"
  }, "OFFICE 4"), /*#__PURE__*/React.createElement("text", {
    x: "510",
    y: "290",
    textAnchor: "middle"
  }, "CAFE"))), walls === 'warehouse' && /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: "2",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "40",
    width: "520",
    height: "320"
  }), [100, 180, 260, 340, 420, 500].map((x, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: "80",
    width: "20",
    height: "240",
    fill: "rgba(255,255,255,0.06)",
    stroke: "rgba(255,255,255,0.15)"
  }))), /*#__PURE__*/React.createElement("g", {
    fontFamily: "var(--ff-mono)",
    fontSize: "8",
    fill: "rgba(255,255,255,0.35)"
  }, ['A', 'B', 'C', 'D', 'E', 'F'].map((a, i) => /*#__PURE__*/React.createElement("text", {
    key: a,
    x: 110 + i * 80,
    y: "76",
    textAnchor: "middle"
  }, "AISLE ", a)))), walls === 'patrol' && /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(255,255,255,0.4)",
    strokeWidth: "2",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 40 L 560 40 L 560 360 L 40 360 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200 40 L 200 180 L 400 180 L 400 40"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 100 220 L 100 360 M 500 220 L 500 360"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 100 220 L 500 220"
  }), /*#__PURE__*/React.createElement("g", {
    fontFamily: "var(--ff-mono)",
    fontSize: "9",
    fill: "rgba(255,255,255,0.3)"
  }, /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "115",
    textAnchor: "middle"
  }, "YARD ZONE A"), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "290",
    textAnchor: "middle"
  }, "YARD ZONE B"))), constraints.map((c, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, c.type === 'keepout' && /*#__PURE__*/React.createElement("rect", {
    x: c.x,
    y: c.y,
    width: c.w,
    height: c.h,
    fill: "url(#fp-keepout)",
    stroke: "rgba(228,77,77,0.7)",
    strokeWidth: "1",
    strokeDasharray: "3 3"
  }), c.type === 'slow' && /*#__PURE__*/React.createElement("rect", {
    x: c.x,
    y: c.y,
    width: c.w,
    height: c.h,
    fill: "rgba(241,168,36,0.12)",
    stroke: "rgba(241,168,36,0.5)",
    strokeWidth: "1",
    strokeDasharray: "3 3"
  }), c.label && /*#__PURE__*/React.createElement("text", {
    x: c.x + c.w / 2,
    y: c.y + c.h / 2 + 3,
    textAnchor: "middle",
    fontFamily: "var(--ff-mono)",
    fontSize: "9",
    fill: c.type === 'keepout' ? 'rgba(228,77,77,0.9)' : 'rgba(241,168,36,0.9)'
  }, c.label))), path.length > 1 && /*#__PURE__*/React.createElement("polyline", {
    points: path.map(p => `${p[0]},${p[1]}`).join(' '),
    fill: "none",
    stroke: "var(--c-signal)",
    strokeWidth: "2",
    strokeDasharray: "4 4",
    opacity: "0.7"
  }), pins.map((pin, i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    transform: `translate(${pin.x},${pin.y})`
  }, pin.type === 'wp' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    r: "11",
    fill: "rgba(0,0,0,0.85)",
    stroke: pin.active ? 'var(--c-signal)' : 'var(--c-mist)',
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    textAnchor: "middle",
    dy: "3",
    fontFamily: "var(--ff-mono)",
    fontSize: "9",
    fontWeight: "700",
    fill: pin.active ? 'var(--c-signal)' : 'var(--c-fog)'
  }, pin.label)), pin.type === 'robot' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    r: "9",
    fill: pin.tone || 'var(--c-ok)',
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "5",
    fill: pin.tone || 'var(--c-ok)',
    stroke: "white",
    strokeWidth: "1.5"
  }), pin.heading !== undefined && /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: Math.cos(pin.heading) * 14,
    y2: Math.sin(pin.heading) * 14,
    stroke: pin.tone || 'var(--c-ok)',
    strokeWidth: "2",
    markerEnd: "url(#arrow)"
  })), pin.type === 'dock' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "-10",
    y: "-10",
    width: "20",
    height: "20",
    rx: "3",
    fill: "var(--c-violet-tint)",
    stroke: "var(--c-violet)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    textAnchor: "middle",
    dy: "3",
    fontFamily: "var(--ff-mono)",
    fontSize: "9",
    fontWeight: "700",
    fill: "var(--c-violet)"
  }, "D")))), label && /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "385",
    fontFamily: "var(--ff-mono)",
    fontSize: "10",
    fill: "rgba(255,255,255,0.45)",
    letterSpacing: "0.05em"
  }, label));
}
Object.assign(window, {
  ConnBars,
  Pill,
  RobotAvatar,
  BatteryBar,
  Stat,
  TopBar,
  SearchInput,
  Segmented,
  MapPin,
  Sparkline,
  FloorPlan
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/atoms.jsx", error: String((e && e.message) || e) }); }

// console/connection-states.jsx
try { (() => {
// CONNECTION STATES — minimal (chip) and detailed (popover/diagnostic).
// Shown as a single artboard: a row of "minimal" inline chips at top,
// then below: the detailed connection panel a user gets when they click a chip.

function ConnChip({
  state,
  label,
  latency,
  pct
}) {
  const cfg = {
    strong: {
      tone: 'ok',
      barCount: 4,
      dotPulse: false,
      label: 'Connected'
    },
    medium: {
      tone: 'ok',
      barCount: 3,
      dotPulse: false,
      label: 'Connected'
    },
    weak: {
      tone: 'warn',
      barCount: 2,
      dotPulse: false,
      label: 'Weak signal'
    },
    poor: {
      tone: 'alert',
      barCount: 1,
      dotPulse: true,
      label: 'Poor signal'
    },
    reconnect: {
      tone: 'signal',
      barCount: 0,
      dotPulse: true,
      label: 'Reconnecting'
    },
    failover: {
      tone: 'violet',
      barCount: 3,
      dotPulse: true,
      label: 'Failover · mesh'
    },
    offline: {
      tone: 'ghost',
      barCount: 0,
      dotPulse: false,
      label: 'Offline'
    },
    teleop: {
      tone: 'signal',
      barCount: 4,
      dotPulse: false,
      label: 'Teleop · live'
    }
  }[state];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      borderRadius: 4,
      fontSize: 12,
      color: 'var(--t-on-dark-1)',
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 1.5,
      height: 12
    }
  }, [6, 8, 10, 12].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2.5,
      height: h,
      background: i < cfg.barCount ? `var(--c-${cfg.tone})` : 'rgba(255,255,255,0.12)',
      borderRadius: 1,
      animation: state === 'reconnect' ? `oc-pulse 1.4s ${i * 0.1}s infinite` : 'none'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 500,
      color: 'var(--t-on-dark-1)'
    }
  }, label || cfg.label), (latency || pct !== undefined) && /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 10,
      color: 'var(--c-mist)'
    }
  }, latency && /*#__PURE__*/React.createElement(React.Fragment, null, latency), latency && pct !== undefined && ' · ', pct !== undefined && /*#__PURE__*/React.createElement(React.Fragment, null, pct, "% loss"))), cfg.dotPulse && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: `var(--c-${cfg.tone})`,
      animation: 'oc-pulse 1.6s infinite'
    }
  }));
}
function ConnDetailedPanel({
  title,
  primary,
  backup,
  robot
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--c-ink)',
      border: '1px solid var(--c-slate)',
      borderRadius: 4,
      width: 460,
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon.Wifi, {
    size: 14
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--c-mist)',
      fontFamily: 'var(--ff-mono)'
    }
  }, "Falcon ", robot, " \xB7 last update 0.4s ago"))), /*#__PURE__*/React.createElement(Pill, {
    tone: primary.tone,
    dot: true,
    pulse: primary.pulse
  }, primary.statusLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-eyebrow",
    style: {
      color: 'var(--c-fog)'
    }
  }, "Primary \xB7 ", primary.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-mist)'
    }
  }, primary.signal)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Latency",
    value: primary.lat,
    unit: "ms",
    tone: primary.tone === 'ok' ? 'default' : primary.tone
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Loss",
    value: primary.loss,
    unit: "%",
    tone: primary.loss > 1 ? 'warn' : 'default'
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Throughput",
    value: primary.bw,
    unit: "Mbps"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Jitter",
    value: primary.jit,
    unit: "ms"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, "Latency \xB7 last 60s"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-mist)'
    }
  }, "min ", primary.latMin, " \xB7 max ", primary.latMax)), /*#__PURE__*/React.createElement(Sparkline, {
    values: primary.spark,
    color: `var(--c-${primary.tone})`,
    w: 420,
    h: 36
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-eyebrow",
    style: {
      color: 'var(--c-fog)'
    }
  }, "Backup \xB7 ", backup.kind), /*#__PURE__*/React.createElement(Pill, {
    tone: backup.tone,
    dot: true
  }, backup.statusLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11.5,
      color: 'var(--c-mist)'
    }
  }, /*#__PURE__*/React.createElement("span", null, backup.signal), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, backup.lat, " ms"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "auto-failover ", backup.failover))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "View logs"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm"
  }, "Force failover"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-pri oc-btn-sm"
  }, "Run diagnostic")));
}
function ConnectionStates() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1280,
      height: 900,
      padding: 32,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Primitive \xB7 connection states"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--ff-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.015em'
    }
  }, "Connection states"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 12.5,
      color: 'var(--c-mist)',
      maxWidth: 640
    }
  }, "Connection chips appear inline next to every robot and on the top bar. Tap any chip to expand the detailed panel. States are deliberately limited to seven so they map cleanly to operator behavior.")), /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Minimal \xB7 inline chip"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ConnChip, {
    state: "strong",
    latency: "14 ms",
    pct: 0
  }), /*#__PURE__*/React.createElement(ConnChip, {
    state: "medium",
    latency: "42 ms",
    pct: 0.1
  }), /*#__PURE__*/React.createElement(ConnChip, {
    state: "weak",
    latency: "148 ms",
    pct: 1.4
  }), /*#__PURE__*/React.createElement(ConnChip, {
    state: "poor",
    latency: "412 ms",
    pct: 6.8
  }), /*#__PURE__*/React.createElement(ConnChip, {
    state: "reconnect",
    label: "Reconnecting \xB7 attempt 2/5"
  }), /*#__PURE__*/React.createElement(ConnChip, {
    state: "failover",
    latency: "86 ms",
    pct: 0.4
  }), /*#__PURE__*/React.createElement(ConnChip, {
    state: "teleop",
    latency: "48 ms",
    pct: 0.0
  }), /*#__PURE__*/React.createElement(ConnChip, {
    state: "offline",
    label: "Offline \xB7 last seen 14:18"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 10,
      background: 'rgba(140,121,240,0.06)',
      border: '1px solid rgba(140,121,240,0.18)',
      borderRadius: 3,
      fontSize: 11,
      color: 'var(--t-on-dark-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-violet)',
      fontFamily: 'var(--ff-mono)',
      fontWeight: 600,
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      marginRight: 8
    }
  }, "\u203B Rule"), "Chips never block on a stale value. If a robot hasn't reported in 6s, the chip degrades to ", /*#__PURE__*/React.createElement("em", null, "Reconnecting"), "; if 30s, it goes ", /*#__PURE__*/React.createElement("em", null, "Offline"), ". Latency text is hidden when stale.")), /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Detailed \xB7 expanded panel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ConnDetailedPanel, {
    title: "Falcon 09 \xB7 Lobby",
    robot: "09",
    primary: {
      kind: 'WiFi 6 (mesh)',
      tone: 'ok',
      statusLabel: 'Excellent',
      pulse: false,
      signal: '-48 dBm · 5GHz · ch 36',
      lat: 14,
      latMin: 11,
      latMax: 22,
      loss: 0,
      bw: 84,
      jit: 1.4,
      spark: [14, 12, 15, 11, 13, 14, 12, 15, 16, 13, 11, 14, 12, 13, 14, 15, 12, 11, 13, 14, 12, 11, 14, 16, 13, 12, 11, 14, 12, 13, 14, 15]
    },
    backup: {
      kind: 'LTE',
      tone: 'ok',
      statusLabel: 'Standby',
      signal: '-72 dBm',
      lat: 38,
      failover: '≤ 800 ms'
    }
  }), /*#__PURE__*/React.createElement(ConnDetailedPanel, {
    title: "Falcon 12 \xB7 Floor 3",
    robot: "12",
    primary: {
      kind: 'LTE (Verizon)',
      tone: 'warn',
      statusLabel: 'Degraded',
      pulse: true,
      signal: '-86 dBm · band 13',
      lat: 142,
      latMin: 24,
      latMax: 412,
      loss: 1.4,
      bw: 4.2,
      jit: 38,
      spark: [22, 28, 24, 30, 42, 84, 142, 122, 98, 68, 76, 140, 168, 210, 148, 86, 142, 180, 200, 150, 98, 76, 84, 112, 148, 180, 142, 148, 158, 168, 142, 138]
    },
    backup: {
      kind: 'WiFi mesh (basement)',
      tone: 'warn',
      statusLabel: 'Out of range',
      signal: '-94 dBm',
      lat: 0,
      failover: 'manual'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 20,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "State decision table"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 100px 100px 100px 1fr',
      gap: '6px 16px',
      fontSize: 11.5
    }
  }, [['State', 'Loss', 'Latency', 'Bars', 'Operator behavior'], ['Strong (4)', '< 0.1%', '< 30 ms', '4', 'No banner. Teleop allowed at any speed.'], ['Medium (3)', '< 1%', '< 80 ms', '3', 'No banner. Teleop allowed at any speed.'], ['Weak', '< 5%', '< 200 ms', '2', 'Yellow banner. Speed cap 0.5 m/s for teleop.'], ['Poor', '≥ 5%', '≥ 200 ms', '1', 'Red banner. Teleop blocked. Robot pauses.'], ['Reconnecting', '—', '—', '0 (anim)', 'Banner with attempt count. All controls grayed.'], ['Failover (mesh)', '< 1%', '< 100 ms', '3 (violet)', 'Violet banner. Operator notified.'], ['Offline', 'n/a', 'n/a', '0', 'Last-seen ts pinned. Page on-call. Mission auto-pauses.']].map((row, ri) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: ri
  }, row.map((cell, ci) => /*#__PURE__*/React.createElement("span", {
    key: ci,
    style: {
      fontFamily: ci > 0 && ri > 0 && ci < 4 ? 'var(--ff-mono)' : 'var(--ff-sans)',
      fontSize: ri === 0 ? 10 : 11.5,
      textTransform: ri === 0 ? 'uppercase' : 'none',
      letterSpacing: ri === 0 ? '0.06em' : 'normal',
      color: ri === 0 ? 'var(--c-fog)' : ci === 0 ? 'var(--t-on-dark-1)' : 'var(--t-on-dark-2)',
      fontWeight: ri === 0 ? 600 : 400,
      paddingTop: ri > 0 ? 4 : 0,
      paddingBottom: 4,
      borderTop: ri === 1 ? '1px solid var(--c-slate)' : 'none'
    }
  }, cell)))))));
}
window.ConnectionStates = ConnectionStates;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/connection-states.jsx", error: String((e && e.message) || e) }); }

// console/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), labels/titles are inline-editable,
// and any artboard can be opened in a fullscreen focus overlay (←/→/Esc).
// State persists to a .design-canvas.state.json sidecar via the host
// bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}', '.dc-card{transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px}', '.dc-grip{cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{cursor:pointer;border-radius:4px;padding:3px 6px;display:flex;align-items:center;transition:background .12s}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-expand{position:absolute;bottom:100%;right:0;margin-bottom:5px;z-index:2;opacity:0;transition:opacity .12s,background .12s;', '  width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center}', '.dc-expand:hover{background:rgba(0,0,0,.06);color:#2a251f}', '[data-dc-slot]:hover .dc-expand{opacity:1}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, focused
// artboard). Order/titles/labels persist to a .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Only direct DCSection > DCArtboard children are
  // walked — wrapping them in other elements opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  React.Children.forEach(children, sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const srcIds = [];
    React.Children.forEach(sec.props.children, ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (!aid) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(children);
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const srcOrder = artboards.map(a => a.props.id ?? a.props.label);
  const sec = ctx && sid && ctx.section(sid) || {};
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 56px'
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow",
    style: {
      position: 'absolute',
      bottom: '100%',
      left: -4,
      marginBottom: 4,
      color: DC.label
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    onPointerDown: e => e.stopPropagation(),
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    const ns = sectionOrder[(secIdx + d + sectionOrder.length) % sectionOrder.length];
    const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
    if (first) ctx.setFocus(`${ns}/${first}`);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/design-canvas.jsx", error: String((e && e.message) || e) }); }

// console/fleet.jsx
try { (() => {
// PROJECT HOME — default tab is FLEET (live grid of every Falcon at this site)
// Layout: tabbed shell (Fleet | Sections | Missions | Data | Settings).
// Fleet itself = aggregate KPI strip + map + filterable grid of robot tiles.

const FLEET_ROBOTS = [{
  n: 12,
  name: 'F-12',
  status: 'running',
  battery: 73,
  conn: 'medium',
  section: 'HQ · F3',
  mission: 'Floor 3 · Visual Doc',
  eta: '14:38',
  speed: 0.42,
  heading: 0,
  x: 290,
  y: 130,
  tone: 'signal'
}, {
  n: 14,
  name: 'F-14',
  status: 'running',
  battery: 51,
  conn: 'strong',
  section: 'HQ · F8',
  mission: 'Server room patrol',
  eta: '14:51',
  speed: 0.65,
  heading: 1.2,
  x: 470,
  y: 280,
  tone: 'signal'
}, {
  n: 9,
  name: 'F-09',
  status: 'running',
  battery: 88,
  conn: 'strong',
  section: 'HQ · L1',
  mission: 'Lobby · 360 capture',
  eta: '14:42',
  speed: 0.30,
  heading: 2.0,
  x: 130,
  y: 330,
  tone: 'signal'
}, {
  n: 18,
  name: 'F-18',
  status: 'charging',
  battery: 41,
  conn: 'strong',
  section: 'HQ · BSMT',
  mission: '—',
  eta: '15:42 ready',
  speed: 0,
  heading: 0,
  x: 90,
  y: 350,
  tone: 'violet'
}, {
  n: 3,
  name: 'F-03',
  status: 'idle',
  battery: 96,
  conn: 'strong',
  section: 'HQ · F4',
  mission: '—',
  eta: 'standby',
  speed: 0,
  heading: 0,
  x: 380,
  y: 290,
  tone: 'idle'
}, {
  n: 21,
  name: 'F-21',
  status: 'fault',
  battery: 22,
  conn: 'weak',
  section: 'HQ · F2',
  mission: 'paused — pose lost',
  eta: 'manual',
  speed: 0,
  heading: 0,
  x: 250,
  y: 220,
  tone: 'alert'
}, {
  n: 7,
  name: 'F-07',
  status: 'offline',
  battery: 0,
  conn: 'offline',
  section: 'HQ · F6',
  mission: 'OTA update 3.4.12',
  eta: '~5 min',
  speed: 0,
  heading: 0,
  x: 0,
  y: 0,
  tone: 'offline'
}];
const PROJECT = {
  name: 'Meridian Tower',
  color: 'linear-gradient(135deg,#3b82f6,#1e40af)'
};
function StatusGlyph({
  status
}) {
  const map = {
    running: {
      tone: 'signal',
      label: 'Running',
      dot: true,
      pulse: true
    },
    charging: {
      tone: 'violet',
      label: 'Charging',
      dot: true
    },
    idle: {
      tone: 'ghost',
      label: 'Idle',
      dot: true
    },
    fault: {
      tone: 'alert',
      label: 'Fault',
      dot: true,
      pulse: true
    },
    offline: {
      tone: 'ghost',
      label: 'Offline',
      dot: false
    }
  };
  const c = map[status];
  return /*#__PURE__*/React.createElement(Pill, {
    tone: c.tone,
    dot: c.dot,
    pulse: c.pulse
  }, c.label);
}
function FleetTile({
  r
}) {
  const isRunning = r.status === 'running';
  return /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      position: 'relative',
      background: r.status === 'offline' ? 'repeating-linear-gradient(45deg, #0a0a0a 0px, #0a0a0a 8px, #1a1a1a 8px, #1a1a1a 16px)' : 'radial-gradient(ellipse at center, #1a2a3f, #050810)',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, r.status === 'offline' ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      color: 'var(--c-iron)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Wifi, null), /*#__PURE__*/React.createElement("span", {
    className: "oc-eyebrow"
  }, "No signal"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 110",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: r.status === 'idle' ? 0.45 : 0.85
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0,110 200,110 145,55 55,55",
    fill: "#1a2a3f"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,0 200,0 145,40 55,40",
    fill: "#0a1018"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,0 55,40 55,55 0,110",
    fill: "#0e1822"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "200,0 145,40 145,55 200,110",
    fill: "#0e1822"
  }), r.status === 'fault' && /*#__PURE__*/React.createElement("rect", {
    x: "80",
    y: "55",
    width: "40",
    height: "55",
    fill: "rgba(228,77,77,0.15)"
  })), isRunning && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 6,
      left: 8,
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: 'var(--c-alert)',
      background: 'rgba(0,0,0,0.6)',
      padding: '1px 5px',
      borderRadius: 2
    }
  }, "\u25CF REC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 6,
      right: 8,
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: 'var(--c-fog)',
      background: 'rgba(0,0,0,0.6)',
      padding: '1px 5px'
    }
  }, "FWD")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement(StatusGlyph, {
    status: r.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(RobotAvatar, {
    n: r.n,
    size: 36,
    status: r.status === 'running' ? 'signal' : r.tone
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, "Falcon ", String(r.n).padStart(2, '0')), /*#__PURE__*/React.createElement(ConnBars, {
    level: r.conn
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)',
      marginBottom: 8,
      height: 14,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.mission || r.section), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 6
    }
  }, r.status !== 'offline' ? /*#__PURE__*/React.createElement(BatteryBar, {
    pct: r.battery,
    charging: r.status === 'charging',
    w: 50
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-iron)'
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-fog)'
    }
  }, r.eta))));
}
function SiteMapPanel() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden',
      height: 380,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(FloorPlan, {
    walls: "office",
    label: "HQ \xB7 ALL FLOORS PROJECTED \xB7 LIVE",
    pins: FLEET_ROBOTS.filter(r => r.status !== 'offline' && r.status !== 'charging').map(r => ({
      type: 'robot',
      x: r.x,
      y: r.y,
      heading: r.heading,
      tone: r.tone === 'signal' ? 'var(--c-signal)' : `var(--c-${r.tone})`
    })),
    constraints: [{
      type: 'keepout',
      x: 410,
      y: 220,
      w: 80,
      h: 50,
      label: 'CHARGING'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '6px 12px',
      background: 'rgba(0,0,0,0.7)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon.Map, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, "Live site map"), /*#__PURE__*/React.createElement(Pill, {
    tone: "signal",
    dot: true,
    pulse: true
  }, "5 active")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'f1',
      label: 'F1'
    }, {
      value: 'f2',
      label: 'F2'
    }, {
      value: 'f3',
      label: 'F3'
    }, {
      value: '+',
      label: '+9'
    }],
    value: "all",
    onChange: () => {}
  })));
}
function ProjectFleet() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1440,
      height: 900
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    project: PROJECT,
    tabs: [{
      id: 'fleet',
      label: 'Fleet',
      count: FLEET_ROBOTS.length
    }, {
      id: 'sections',
      label: 'Sections'
    }, {
      id: 'missions',
      label: 'Missions',
      count: 14
    }, {
      id: 'data',
      label: 'Data'
    }, {
      id: 'settings',
      label: 'Settings'
    }],
    active: "fleet"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      padding: '20px 28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Workspace \xB7 Field Operations \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--t-on-dark-1)'
    }
  }, "Meridian Tower")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--ff-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.015em'
    }
  }, "Fleet"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--c-mist)'
    }
  }, "7 Falcons \xB7 3 running \xB7 1 fault \xB7 1 offline"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Filter Falcons\u2026",
    w: 220
  }), /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'tile',
      icon: /*#__PURE__*/React.createElement(Icon.Grid, {
        size: 13
      }),
      label: 'Tiles'
    }, {
      value: 'list',
      icon: /*#__PURE__*/React.createElement(Icon.List, {
        size: 13
      }),
      label: 'List'
    }, {
      value: 'map',
      icon: /*#__PURE__*/React.createElement(Icon.Map, {
        size: 13
      }),
      label: 'Map'
    }],
    value: "tile",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec"
  }, /*#__PURE__*/React.createElement(Icon.Plus, null), " Add Falcon"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-pri"
  }, /*#__PURE__*/React.createElement(Icon.Play, {
    size: 12
  }), " New mission"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Active",
    value: "3",
    tone: "signal",
    sub: "2 capture \xB7 1 patrol"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Avg battery",
    value: "58",
    unit: "%",
    sub: "3 below 50%"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Coverage today",
    value: "74",
    unit: "%",
    tone: "ok",
    sub: "46 of 62 zones"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Open faults",
    value: "1",
    tone: "alert",
    sub: "F-21 \xB7 pose lost"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Up next",
    value: "14:30",
    sub: "F3 \xB7 Mech. Inspection"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SiteMapPanel, null), /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      height: 380,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.Bell, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Site activity"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "last 1h")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--c-signal)',
      cursor: 'pointer'
    }
  }, "Open log \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, [{
    t: '14:32',
    tone: 'warn',
    robot: 12,
    kind: 'Threshold',
    text: 'Server rack SR-01 · 38.2°C exceeds 35°C bound'
  }, {
    t: '14:28',
    tone: 'signal',
    robot: 14,
    kind: 'Mission',
    text: 'Started Server room patrol · 18 waypoints'
  }, {
    t: '14:14',
    tone: 'alert',
    robot: 21,
    kind: 'Fault',
    text: 'Pose lost · ICP outliers > 60% · operator paged'
  }, {
    t: '14:02',
    tone: 'ok',
    robot: 9,
    kind: 'Mission',
    text: 'Lobby capture complete · 84 panos uploaded'
  }, {
    t: '13:58',
    tone: 'violet',
    robot: 18,
    kind: 'Charging',
    text: 'Connected to dock D-BSMT-02 · 41% → target 95%'
  }, {
    t: '13:44',
    tone: 'ghost',
    robot: 7,
    kind: 'System',
    text: 'Started OTA update · firmware 3.4.12'
  }, {
    t: '13:18',
    tone: 'ok',
    robot: 3,
    kind: 'Mission',
    text: 'Returned to dock · Floor 4 visual doc complete'
  }, {
    t: '13:02',
    tone: 'signal',
    robot: 9,
    kind: 'Mission',
    text: 'Started Lobby · 360 capture · 18 waypoints'
  }, {
    t: '12:46',
    tone: 'warn',
    robot: 14,
    kind: 'Insight',
    text: 'Detected 2 unauthorized objects · OFFICE-04'
  }, {
    t: '12:32',
    tone: 'ok',
    robot: 14,
    kind: 'Mission',
    text: 'Floor 8 patrol complete · 0 anomalies'
  }].map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 16px',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 11,
      color: 'var(--c-mist)',
      minWidth: 36
    }
  }, e.t), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: `var(--c-${e.tone})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-fog)',
      minWidth: 56,
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, "F-", String(e.robot).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: `var(--c-${e.tone})`,
      minWidth: 70,
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, e.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--t-on-dark-2)',
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, e.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "oc-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-section-title",
    style: {
      fontSize: 14
    }
  }, "Roster"), /*#__PURE__*/React.createElement("span", {
    className: "oc-section-meta"
  }, "7 Falcons \xB7 sorted \xB7 status")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "All"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "Running"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "Charging"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm",
    style: {
      color: 'var(--c-alert)'
    }
  }, "Faults \xB7 1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 12
    }
  }, FLEET_ROBOTS.map(r => /*#__PURE__*/React.createElement(FleetTile, {
    key: r.n,
    r: r
  })))));
}
window.ProjectFleet = ProjectFleet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/fleet.jsx", error: String((e && e.message) || e) }); }

// console/icons.jsx
try { (() => {
// Line icons — 16px stroke 1.5, neutral, designed to sit inside operator chrome.
// All use currentColor so they inherit text color. Pair with .oc-eyebrow / pill colors.

const iconBase = (children, props = {}) => /*#__PURE__*/React.createElement("svg", {
  width: props.size || 16,
  height: props.size || 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: props.style,
  className: props.className
}, children);
const Icon = {
  Play: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "M4 3v10l9-5z",
    fill: "currentColor",
    stroke: "none"
  }), p),
  Pause: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "3",
    width: "3",
    height: "10",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "3",
    height: "10",
    fill: "currentColor",
    stroke: "none"
  })), p),
  Stop: p => iconBase(/*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "8",
    height: "8",
    fill: "currentColor",
    stroke: "none"
  }), p),
  Search: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 13-2.5-2.5"
  })), p),
  Plus: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 3v10M3 8h10"
  })), p),
  Filter: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "M2 3h12l-4.5 5.5V13l-3 1V8.5z"
  }), p),
  Caret: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "m4 6 4 4 4-4"
  }), p),
  CaretRight: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "m6 4 4 4-4 4"
  }), p),
  Slash: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "m4 13 8-10",
    stroke: "currentColor",
    opacity: "0.4"
  }), p),
  Map: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l4-1 4 1 4-1v9l-4 1-4-1-4 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 3v10M10 4v10"
  })), p),
  List: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 4h10M3 8h10M3 12h10"
  })), p),
  Grid: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "5",
    height: "5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "5",
    height: "5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "5",
    height: "5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "5",
    height: "5"
  })), p),
  Camera: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 5h2l1-1.5h4L11 5h2v8H3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "9",
    r: "2.5"
  })), p),
  Lidar: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3v1.5M8 11.5V13M3 8h1.5M11.5 8H13M4.5 4.5l1 1M10.5 10.5l1 1M11.5 4.5l-1 1M5.5 10.5l-1 1"
  })), p),
  Gauge: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 11a5 5 0 0 1 10 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11l2.5-3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "11",
    r: "0.8",
    fill: "currentColor"
  })), p),
  Battery: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "11",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 7v2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "6.5",
    width: "6",
    height: "3",
    fill: "currentColor",
    stroke: "none"
  })), p),
  Wifi: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 6c3.5-3 8.5-3 12 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 8.5c2.4-2 5.6-2 8 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11c1.4-1.2 2.6-1.2 4 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "13",
    r: "0.5",
    fill: "currentColor"
  })), p),
  Robot: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "10",
    height: "7",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "8.5",
    r: "0.8",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "8.5",
    r: "0.8",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3v2M5 12v1M11 12v1"
  })), p),
  Building: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 13V4l5-1v10M8 13V6l5 1v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 6h1M5 8h1M5 10h1M10 8h1M10 10h1"
  })), p),
  Floor: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m2 6 6-3 6 3-6 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 9 6 3 6-3M2 12l6 3 6-3"
  })), p),
  Calendar: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3.5",
    width: "12",
    height: "10",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5h12M5 2v3M11 2v3"
  })), p),
  Clock: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5v3l2 1.5"
  })), p),
  Settings: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 1.5v2M8 12.5v2M14.5 8h-2M3.5 8h-2M12.6 3.4l-1.4 1.4M4.8 11.2l-1.4 1.4M12.6 12.6l-1.4-1.4M4.8 4.8 3.4 3.4"
  })), p),
  Database: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "8",
    cy: "3.5",
    rx: "5",
    ry: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3.5v9c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5v-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5"
  })), p),
  Brain: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 3.5c-1.5 0-2.5 1-2.5 2.5 0 .5.2 1 .5 1.4-.3.4-.5.9-.5 1.4 0 1 .5 1.7 1.4 2 .1 1.2 1 2.2 2.1 2.2.7 0 1.3-.3 1.7-.8M11 3.5c1.5 0 2.5 1 2.5 2.5 0 .5-.2 1-.5 1.4.3.4.5.9.5 1.4 0 1-.5 1.7-1.4 2-.1 1.2-1 2.2-2.1 2.2-.7 0-1.3-.3-1.7-.8M8 3v10"
  })), p),
  Sparkle: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v3M8 11v3M2 8h3M11 8h3M4 4l2 2M10 10l2 2M12 4l-2 2M6 10l-2 2"
  })), p),
  Alert: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m8 2 6 11H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7v3M8 12v.5"
  })), p),
  Check: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "m3 8.5 3 3 7-7"
  }), p),
  X: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "M3.5 3.5l9 9M12.5 3.5l-9 9"
  }), p),
  ArrowRight: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10M9 4l4 4-4 4"
  })), p),
  ArrowUp: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 13V3M4 7l4-4 4 4"
  })), p),
  Maximize: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6V3h3M13 6V3h-3M3 10v3h3M13 10v3h-3"
  })), p),
  Pin: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 13.5V9M5 3h6l-1 4H6z"
  })), p),
  Layers: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m8 2 6 3-6 3-6-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 8 6 3 6-3M2 11l6 3 6-3"
  })), p),
  Route: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 5.5v3c0 1 .8 2 2 2h2c1 0 2 1 2 2"
  })), p),
  Speed: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 11a5 5 0 0 1 9.5-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11l3-2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "11",
    r: "0.8",
    fill: "currentColor"
  })), p),
  Eye: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 8s2.5-4 6.5-4 6.5 4 6.5 4-2.5 4-6.5 4S1.5 8 1.5 8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "1.8"
  })), p),
  More: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "8",
    r: "0.8",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "0.8",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12.5",
    cy: "8",
    r: "0.8",
    fill: "currentColor"
  })), p),
  Bell: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 11V8c0-2.2 1.8-4 4-4s4 1.8 4 4v3l1 1.5H3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 13.5c.3.6 1 1 1.5 1s1.2-.4 1.5-1"
  })), p),
  Upload: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 11V3M5 6l3-3 3 3M3 13h10"
  })), p),
  Download: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 3v8M5 8l3 3 3-3M3 13h10"
  })), p),
  Edit: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m3 13 3-1 7-7-2-2-7 7zM10 4l2 2"
  })), p),
  Sun: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 1.5v2M8 12.5v2M14.5 8h-2M3.5 8h-2M12.6 3.4l-1.4 1.4M4.8 11.2l-1.4 1.4M12.6 12.6l-1.4-1.4M4.8 4.8 3.4 3.4"
  })), p),
  Moon: p => iconBase(/*#__PURE__*/React.createElement("path", {
    d: "M12 9.5A5 5 0 1 1 6.5 4a4 4 0 0 0 5.5 5.5z"
  }), p),
  Lock: p => iconBase(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "10",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
  })), p)
};
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/icons.jsx", error: String((e && e.message) || e) }); }

// console/missions.jsx
try { (() => {
// MISSIONS tab — Templates · Scheduled · History
// Mission Setup sidebar (right-rail primitive, NOT a wizard)
// Robot Status + Connection states (compact, grouped onto one artboard for the canvas)

const MISSION_HISTORY = [{
  t: '2026-04-22 14:32',
  name: 'Floor 3 · Visual Doc',
  robot: 12,
  status: 'running',
  dur: '14m',
  data: '2.4 GB',
  outcome: '—'
}, {
  t: '2026-04-22 13:02',
  name: 'Lobby · 360 capture',
  robot: 9,
  status: 'success',
  dur: '1h 11m',
  data: '18.4 GB',
  outcome: '84 panos · 0 anomalies'
}, {
  t: '2026-04-22 11:45',
  name: 'F8 patrol',
  robot: 14,
  status: 'success',
  dur: '52m',
  data: '1.1 GB',
  outcome: '2 unauthorized objects'
}, {
  t: '2026-04-22 09:14',
  name: 'F4 visual doc',
  robot: 3,
  status: 'success',
  dur: '1h 04m',
  data: '12.8 GB',
  outcome: 'Map updated · v6'
}, {
  t: '2026-04-22 06:30',
  name: 'Mech inspection · Boilers',
  robot: 12,
  status: 'partial',
  dur: '48m',
  data: '3.2 GB',
  outcome: '1 threshold · pause at WP-09'
}, {
  t: '2026-04-21 22:48',
  name: 'Server room thermal sweep',
  robot: 14,
  status: 'success',
  dur: '2h 18m',
  data: '8.6 GB',
  outcome: 'all racks within bounds'
}, {
  t: '2026-04-21 17:02',
  name: 'F5 visual doc',
  robot: 9,
  status: 'success',
  dur: '58m',
  data: '11.4 GB',
  outcome: 'Map updated · v6'
}, {
  t: '2026-04-21 14:14',
  name: 'F2 patrol',
  robot: 21,
  status: 'failed',
  dur: '06m',
  data: '180 MB',
  outcome: 'Pose lost · operator paged'
}];
function MissionStatusPill({
  s
}) {
  const map = {
    running: {
      tone: 'signal',
      label: 'Running',
      pulse: true
    },
    success: {
      tone: 'ok',
      label: 'Success'
    },
    partial: {
      tone: 'warn',
      label: 'Partial'
    },
    failed: {
      tone: 'alert',
      label: 'Failed'
    },
    scheduled: {
      tone: 'violet',
      label: 'Scheduled'
    }
  };
  const c = map[s];
  return /*#__PURE__*/React.createElement(Pill, {
    tone: c.tone,
    dot: true,
    pulse: c.pulse
  }, c.label);
}
function ProjectMissions() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1440,
      height: 900
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    project: PROJECT,
    tabs: [{
      id: 'fleet',
      label: 'Fleet',
      count: 7
    }, {
      id: 'sections',
      label: 'Sections',
      count: 4
    }, {
      id: 'missions',
      label: 'Missions',
      count: 14
    }, {
      id: 'data',
      label: 'Data'
    }, {
      id: 'settings',
      label: 'Settings'
    }],
    active: "missions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      padding: '20px 28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Workspace \xB7 Field Operations \xB7 Meridian Tower"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--ff-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.015em'
    }
  }, "Missions"), /*#__PURE__*/React.createElement(Pill, {
    tone: "signal",
    dot: true,
    pulse: true
  }, "1 running"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--c-mist)'
    }
  }, "14 scheduled \xB7 247 in history"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search missions, robots, outcomes\u2026",
    w: 260
  }), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec"
  }, /*#__PURE__*/React.createElement(Icon.Calendar, {
    size: 12
  }), " Apr 22"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-pri"
  }, /*#__PURE__*/React.createElement(Icon.Plus, null), " New mission"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginBottom: 16,
      borderBottom: '1px solid var(--c-slate)'
    }
  }, [{
    id: 'tpl',
    label: 'Templates',
    count: 9
  }, {
    id: 'sched',
    label: 'Scheduled',
    count: 14,
    active: true
  }, {
    id: 'hist',
    label: 'History',
    count: 247
  }, {
    id: 'chains',
    label: 'Chains',
    count: 3
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    style: {
      padding: '10px 14px',
      background: 'transparent',
      border: 'none',
      borderBottom: t.active ? '2px solid var(--c-signal)' : '2px solid transparent',
      marginBottom: -1,
      color: t.active ? 'var(--t-on-dark-1)' : 'var(--c-mist)',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, t.label, /*#__PURE__*/React.createElement("span", {
    className: "oc-tab-count"
  }, t.count)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon.Calendar, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Today \xB7 Wednesday Apr 22"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "7 robots \xB7 14 missions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    style: {
      width: 26,
      height: 26
    }
  }, /*#__PURE__*/React.createElement(Icon.Caret, null)), /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    style: {
      width: 26,
      height: 26
    }
  }, /*#__PURE__*/React.createElement(Icon.CaretRight, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--c-slate)',
      paddingBottom: 4,
      marginBottom: 8,
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-mist)'
    }
  }, ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      flex: 1
    }
  }, h))), [{
    robot: 9,
    blocks: [{
      l: 8,
      w: 14,
      tone: 'ok',
      label: 'Lobby AM'
    }, {
      l: 32,
      w: 18,
      tone: 'signal',
      label: '360 cap',
      live: true
    }, {
      l: 64,
      w: 10,
      tone: 'ghost',
      label: 'F1 sweep'
    }]
  }, {
    robot: 12,
    blocks: [{
      l: 0,
      w: 12,
      tone: 'warn',
      label: 'Boilers · partial'
    }, {
      l: 30,
      w: 22,
      tone: 'signal',
      label: 'F3 visual',
      live: true
    }, {
      l: 62,
      w: 14,
      tone: 'violet',
      label: 'F3 thermal'
    }]
  }, {
    robot: 14,
    blocks: [{
      l: 14,
      w: 14,
      tone: 'ok',
      label: 'F8 patrol'
    }, {
      l: 38,
      w: 16,
      tone: 'signal',
      label: 'Server patrol',
      live: true
    }, {
      l: 70,
      w: 12,
      tone: 'violet',
      label: 'F8 patrol'
    }]
  }, {
    robot: 3,
    blocks: [{
      l: 6,
      w: 18,
      tone: 'ok',
      label: 'F4 visual'
    }, {
      l: 48,
      w: 14,
      tone: 'violet',
      label: 'F5 visual'
    }]
  }, {
    robot: 18,
    blocks: [{
      l: 0,
      w: 24,
      tone: 'violet',
      label: 'Charging cycle'
    }, {
      l: 54,
      w: 24,
      tone: 'violet',
      label: 'Maintenance window'
    }]
  }, {
    robot: 21,
    blocks: [{
      l: 14,
      w: 6,
      tone: 'alert',
      label: 'Failed · pose lost'
    }, {
      l: 32,
      w: 24,
      tone: 'ghost',
      label: '(blocked)'
    }]
  }, {
    robot: 7,
    blocks: [{
      l: 30,
      w: 8,
      tone: 'ghost',
      label: 'OTA update'
    }, {
      l: 54,
      w: 14,
      tone: 'violet',
      label: 'F6 visual'
    }]
  }].map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 0',
      borderBottom: '1px solid rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--c-fog)',
      minWidth: 36
    }
  }, "F-", String(row.robot).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      height: 22
    }
  }, row.blocks.map((b, bi) => /*#__PURE__*/React.createElement("div", {
    key: bi,
    style: {
      position: 'absolute',
      left: `${b.l}%`,
      width: `${b.w}%`,
      top: 0,
      height: 22,
      background: b.tone === 'ghost' ? 'rgba(255,255,255,0.04)' : `var(--c-${b.tone}-tint)`,
      border: `1px solid ${b.tone === 'ghost' ? 'var(--c-slate)' : `var(--c-${b.tone})`}`,
      borderRadius: 3,
      padding: '0 6px',
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10.5,
      fontWeight: 500,
      color: b.tone === 'ghost' ? 'var(--c-mist)' : `var(--c-${b.tone})`,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      boxShadow: b.live ? `0 0 12px var(--c-${b.tone})` : 'none'
    }
  }, b.live && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: `var(--c-${b.tone})`,
      animation: 'oc-pulse 1.6s infinite'
    }
  }), b.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '60.6%',
      top: -2,
      bottom: -2,
      width: 1,
      background: 'var(--c-signal)'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon.Clock, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Recent runs")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--c-signal)'
    }
  }, "Filter \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      flex: 1
    }
  }, MISSION_HISTORY.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--t-on-dark-1)'
    }
  }, m.name), /*#__PURE__*/React.createElement(MissionStatusPill, {
    s: m.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-mist)',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "F-", String(m.robot).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, m.t), /*#__PURE__*/React.createElement("span", null, "\xB7 ", m.dur, " \xB7 ", m.data)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-fog)'
    }
  }, m.outcome))))))));
}

// ── MISSION SETUP SIDEBAR (primitive, opens as a right rail) ──────────
function MissionSetupSidebar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc",
    style: {
      width: 1440,
      height: 900,
      position: 'relative',
      background: 'var(--c-void)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--c-night)',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(FloorPlan, {
    walls: "office",
    pins: [{
      type: 'wp',
      x: 130,
      y: 240,
      label: 'A'
    }, {
      type: 'wp',
      x: 320,
      y: 130,
      label: 'B'
    }, {
      type: 'wp',
      x: 470,
      y: 130,
      label: 'C'
    }, {
      type: 'wp',
      x: 510,
      y: 290,
      label: 'D'
    }, {
      type: 'robot',
      x: 200,
      y: 200,
      heading: 0.5,
      tone: 'var(--c-signal)'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.55)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 460,
      background: 'var(--c-ink)',
      borderLeft: '1px solid var(--c-slate)',
      boxShadow: '-8px 0 32px rgba(0,0,0,0.5)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 4
    }
  }, "Mission setup"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "F3 \xB7 Visual Doc")), /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn"
  }, /*#__PURE__*/React.createElement(Icon.X, {
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Mission type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 6
    }
  }, [{
    label: 'Visual Doc',
    icon: /*#__PURE__*/React.createElement(Icon.Camera, {
      size: 14
    }),
    active: true
  }, {
    label: 'Patrol',
    icon: /*#__PURE__*/React.createElement(Icon.Eye, {
      size: 14
    })
  }, {
    label: 'Inspection',
    icon: /*#__PURE__*/React.createElement(Icon.Gauge, {
      size: 14
    })
  }, {
    label: 'Mapping',
    icon: /*#__PURE__*/React.createElement(Icon.Map, {
      size: 14
    })
  }, {
    label: 'Thermal',
    icon: /*#__PURE__*/React.createElement(Icon.Sparkle, {
      size: 14
    })
  }, {
    label: 'Custom',
    icon: /*#__PURE__*/React.createElement(Icon.Plus, {
      size: 14
    })
  }].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    style: {
      padding: '10px 8px',
      borderRadius: 4,
      background: t.active ? 'rgba(242,107,26,0.12)' : 'var(--c-graphite)',
      border: t.active ? '1px solid var(--c-signal)' : '1px solid var(--c-slate)',
      color: t.active ? 'var(--c-signal)' : 'var(--t-on-dark-2)',
      fontSize: 11,
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, t.icon, /*#__PURE__*/React.createElement("span", null, t.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Where"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      flex: 1,
      height: 34,
      padding: '0 10px',
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      color: 'var(--t-on-dark-1)',
      borderRadius: 4,
      fontSize: 12,
      fontFamily: 'var(--ff-sans)'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Section \xB7 Office Floors")), /*#__PURE__*/React.createElement("select", {
    style: {
      flex: 1,
      height: 34,
      padding: '0 10px',
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      color: 'var(--t-on-dark-1)',
      borderRadius: 4,
      fontSize: 12,
      fontFamily: 'var(--ff-sans)'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Floor 3 \xB7 Map v6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: 'var(--c-graphite)',
      border: '1px dashed var(--c-slate)',
      borderRadius: 4,
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-signal)',
      fontFamily: 'var(--ff-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: 10,
      marginRight: 8
    }
  }, "Route"), "4 waypoints \xB7 ~245m \xB7 est. 22 min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Robot"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, [{
    n: 12,
    name: 'Falcon 12',
    battery: 73,
    fit: 'Best fit · in section',
    selected: true
  }, {
    n: 9,
    name: 'Falcon 09',
    battery: 88,
    fit: 'Available · L1 dock'
  }, {
    n: 3,
    name: 'Falcon 03',
    battery: 96,
    fit: 'Available · F4 dock'
  }].map(r => /*#__PURE__*/React.createElement("label", {
    key: r.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      background: r.selected ? 'rgba(242,107,26,0.06)' : 'var(--c-graphite)',
      border: r.selected ? '1px solid var(--c-signal)' : '1px solid var(--c-slate)',
      borderRadius: 4,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "robot",
    defaultChecked: r.selected,
    style: {
      accentColor: 'var(--c-signal)'
    }
  }), /*#__PURE__*/React.createElement(RobotAvatar, {
    n: r.n,
    size: 32,
    status: r.selected ? 'signal' : 'idle'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: r.selected ? 'var(--c-signal)' : 'var(--c-mist)'
    }
  }, r.fit)), /*#__PURE__*/React.createElement(BatteryBar, {
    pct: r.battery,
    w: 40
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "When"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'now',
      label: 'Start now'
    }, {
      value: 'sched',
      label: 'Schedule'
    }, {
      value: 'recur',
      label: 'Recurring'
    }],
    value: "sched",
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    defaultValue: "2026-04-22",
    style: {
      flex: 1,
      height: 34,
      padding: '0 10px',
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      color: 'var(--t-on-dark-1)',
      borderRadius: 4,
      fontSize: 12,
      fontFamily: 'var(--ff-mono)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    defaultValue: "14:30 CT",
    style: {
      flex: 1,
      height: 34,
      padding: '0 10px',
      background: 'var(--c-graphite)',
      border: '1px solid var(--c-slate)',
      color: 'var(--t-on-dark-1)',
      borderRadius: 4,
      fontSize: 12,
      fontFamily: 'var(--ff-mono)'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Constraints"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, [{
    l: 'Max speed',
    v: '0.5 m/s · ped corridor',
    tone: 'warn'
  }, {
    l: 'Battery floor',
    v: '25% · return to dock',
    tone: 'ok'
  }, {
    l: 'Quiet hours',
    v: 'off',
    tone: 'ghost'
  }, {
    l: 'Operator on call',
    v: 'Jamie M.',
    tone: 'signal'
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 10px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: 3,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-mist)'
    }
  }, c.l), /*#__PURE__*/React.createElement("span", {
    style: {
      color: `var(--c-${c.tone === 'ghost' ? 'fog' : c.tone})`,
      fontFamily: 'var(--ff-mono)',
      fontSize: 11
    }
  }, c.v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderTop: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(0,0,0,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, "Estimated 22 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, "Costs F-12 \xB7 18% battery")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-pri"
  }, /*#__PURE__*/React.createElement(Icon.Play, {
    size: 12
  }), " Schedule")))));
}
window.ProjectMissions = ProjectMissions;
window.MissionSetupSidebar = MissionSetupSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/missions.jsx", error: String((e && e.message) || e) }); }

// console/projects.jsx
try { (() => {
// PROJECTS LANDING — at-a-glance cards
// Each card: project identity, fleet health, active missions, data ingestion, alerts.
// Inspired by Linear/Vercel project cards but tuned to operations dashboards.

const {
  useState: useStateProj
} = React;
const PROJECTS_LIST = [{
  id: 'meridian',
  name: 'Meridian Tower',
  subtitle: 'Commercial · 12-story HQ',
  location: 'Austin, TX',
  color: 'linear-gradient(135deg,#3b82f6,#1e40af)',
  fleet: {
    total: 6,
    online: 5,
    charging: 1,
    alert: 0
  },
  missions: {
    running: 2,
    scheduled: 14,
    today: 8
  },
  data: {
    lastSync: '2m ago',
    volume: '247.4 GB',
    integrations: ['DroneDeploy', 'S3', 'Box']
  },
  alerts: 0,
  sections: 4,
  floors: 12,
  coverage: 0.92,
  map: 'office'
}, {
  id: 'argus',
  name: 'Argus Refinery',
  subtitle: 'Industrial · perimeter + process units',
  location: 'Pasadena, TX',
  color: 'linear-gradient(135deg,#f59e0b,#b45309)',
  fleet: {
    total: 12,
    online: 10,
    charging: 1,
    alert: 1
  },
  missions: {
    running: 3,
    scheduled: 28,
    today: 18
  },
  data: {
    lastSync: 'now',
    volume: '1.84 TB',
    integrations: ['NDI', 'OpenSpace', 'Mozart']
  },
  alerts: 2,
  sections: 7,
  floors: 9,
  coverage: 0.78,
  map: 'patrol'
}, {
  id: 'northwind',
  name: 'Northwind DC-04',
  subtitle: 'Distribution · 880k sq ft warehouse',
  location: 'Reno, NV',
  color: 'linear-gradient(135deg,#10b981,#047857)',
  fleet: {
    total: 4,
    online: 4,
    charging: 0,
    alert: 0
  },
  missions: {
    running: 1,
    scheduled: 7,
    today: 4
  },
  data: {
    lastSync: '11m ago',
    volume: '92.1 GB',
    integrations: ['S3']
  },
  alerts: 0,
  sections: 3,
  floors: 1,
  coverage: 0.96,
  map: 'warehouse'
}, {
  id: 'kepler',
  name: 'Kepler Pilot',
  subtitle: 'Hospital · BIM-aligned inspection',
  location: 'Boston, MA',
  color: 'linear-gradient(135deg,#8b5cf6,#5b21b6)',
  fleet: {
    total: 2,
    online: 1,
    charging: 0,
    alert: 0
  },
  missions: {
    running: 0,
    scheduled: 3,
    today: 1
  },
  data: {
    lastSync: '1h ago',
    volume: '14.6 GB',
    integrations: ['Box']
  },
  alerts: 0,
  sections: 2,
  floors: 6,
  coverage: 0.41,
  map: 'office'
}, {
  id: 'helios',
  name: 'Helios Solar Farm',
  subtitle: 'Outdoor · thermal + visual sweep',
  location: 'Tonopah, NV',
  color: 'linear-gradient(135deg,#ef4444,#991b1b)',
  fleet: {
    total: 8,
    online: 6,
    charging: 2,
    alert: 0
  },
  missions: {
    running: 0,
    scheduled: 12,
    today: 0
  },
  data: {
    lastSync: '4h ago',
    volume: '628 GB',
    integrations: ['DroneDeploy', 'S3']
  },
  alerts: 0,
  sections: 12,
  floors: 1,
  coverage: 0.84,
  map: 'patrol'
}, {
  id: 'orion',
  name: 'Orion Datacenter',
  subtitle: 'Critical infra · 24/7 patrol',
  location: 'Quincy, WA',
  color: 'linear-gradient(135deg,#06b6d4,#0e7490)',
  fleet: {
    total: 3,
    online: 3,
    charging: 0,
    alert: 0
  },
  missions: {
    running: 1,
    scheduled: 9,
    today: 12
  },
  data: {
    lastSync: '32s ago',
    volume: '441 GB',
    integrations: ['S3', 'NDI']
  },
  alerts: 0,
  sections: 2,
  floors: 2,
  coverage: 1.0,
  map: 'warehouse'
}];
function ProjectCard({
  p
}) {
  const fleetHealth = p.fleet.alert > 0 ? 'alert' : p.fleet.online < p.fleet.total ? 'warn' : 'ok';
  const sparkData = [12, 18, 14, 22, 19, 28, 24, 32, 30, 35, 33, 40].map(v => v + Math.floor(Math.random() * 4));
  return /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'border-color 220ms, transform 220ms',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '18px 20px 16px',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: p.color,
      opacity: 0.18,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: p.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-0.015em',
      marginBottom: 3
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--c-mist)'
    }
  }, p.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-fog)',
      marginTop: 6,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, p.location, " \xB7 ", p.sections, " sections \xB7 ", p.floors, " floors")), p.alerts > 0 ? /*#__PURE__*/React.createElement(Pill, {
    tone: "alert",
    pulse: true
  }, p.alerts, " alert", p.alerts > 1 ? 's' : '') : /*#__PURE__*/React.createElement(Pill, {
    tone: "ok"
  }, "Healthy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: 16,
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Fleet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 22,
      fontWeight: 500,
      color: fleetHealth === 'ok' ? 'var(--t-on-dark-1)' : `var(--c-${fleetHealth})`
    }
  }, p.fleet.online), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--c-mist)'
    }
  }, "/ ", p.fleet.total, " online")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-fog)'
    }
  }, p.fleet.charging > 0 && /*#__PURE__*/React.createElement("span", null, p.fleet.charging, " charging \xB7 "), p.fleet.alert > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-alert)'
    }
  }, p.fleet.alert, " alert"), p.fleet.alert === 0 && p.fleet.charging === 0 && /*#__PURE__*/React.createElement("span", null, "All Falcons in service"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Missions today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 22,
      fontWeight: 500
    }
  }, p.missions.today), p.missions.running > 0 && /*#__PURE__*/React.createElement(Pill, {
    tone: "signal",
    dot: true,
    pulse: true
  }, p.missions.running, " live")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-fog)'
    }
  }, p.missions.scheduled, " scheduled this week")), /*#__PURE__*/React.createElement(Sparkline, {
    values: sparkData,
    color: "var(--c-signal)",
    w: 56,
    h: 22
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--c-slate)',
      background: 'rgba(255,255,255,0.015)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 4
    }
  }, "Data \xB7 last sync ", p.data.lastSync), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 13,
      color: 'var(--t-on-dark-1)'
    }
  }, p.data.volume), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-iron)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, p.data.integrations.join(' · ')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 4,
      background: 'var(--c-graphite)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.round(p.coverage * 100)}%`,
      height: '100%',
      background: 'var(--c-signal)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, Math.round(p.coverage * 100), "% covered")))));
}
function ProjectsLanding() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1440,
      height: 900
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    hideEstop: true,
    badge: /*#__PURE__*/React.createElement("span", {
      className: "oc-eyebrow",
      style: {
        marginRight: 4
      }
    }, "v1.42 \xB7 Operator Console")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      padding: '32px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Workspace"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--ff-display)',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Field Operations"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      color: 'var(--c-mist)'
    }
  }, "6 projects \xB7 35 Falcons in service \xB7 7 missions live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search projects, robots, missions\u2026",
    w: 280
  }), /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'grid',
      icon: /*#__PURE__*/React.createElement(Icon.Grid, {
        size: 13
      }),
      label: 'Grid'
    }, {
      value: 'list',
      icon: /*#__PURE__*/React.createElement(Icon.List, {
        size: 13
      }),
      label: 'List'
    }],
    value: "grid",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-pri"
  }, /*#__PURE__*/React.createElement(Icon.Plus, null), " New project"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 12,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Falcons in service",
    value: "29",
    unit: "/ 35",
    tone: "default",
    sub: "6 charging \xB7 1 fault"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Missions live",
    value: "7",
    tone: "signal",
    sub: "3 patrol \xB7 4 inspection"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Scheduled today",
    value: "43",
    sub: "next at 14:30 CT"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Data uploaded \xB7 24h",
    value: "412",
    unit: "GB",
    sub: "Box, S3, DroneDeploy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "oc-card oc-card-pad"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Open alerts",
    value: "2",
    tone: "warn",
    sub: "Argus \xB7 Helios"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "oc-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-section-title",
    style: {
      fontSize: 14
    }
  }, "All projects"), /*#__PURE__*/React.createElement("span", {
    className: "oc-section-meta"
  }, "Sorted \xB7 last activity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "All"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "Live now"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "Needs attention"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-ghost oc-btn-sm"
  }, "Archived"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, PROJECTS_LIST.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    p: p
  })))));
}
window.ProjectsLanding = ProjectsLanding;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/projects.jsx", error: String((e && e.message) || e) }); }

// console/robot-live.jsx
try { (() => {
// ROBOT LIVE — Tesla-style video-led with AI Thinking rail
// Layout:
//   ┌──────── 50px topbar ────────┐
//   │  Live video (big)  │ AI Thinking (right rail) │
//   │  ────────────────  │                          │
//   │  Mission strip      │                          │
//   │  Map + telemetry    │                          │
//   └─────────────────────┴──────────────────────────┘

const {
  useState: useStateRL,
  useEffect: useEffectRL,
  useRef: useRefRL
} = React;

// Sample AI Thinking event stream — drawn from ontology event categories.
// Each entry: { t, kind, level, text, sub }
// kind ∈ Lifecycle | Preparation | Execution | Insight | Reasoning | Output | System
// level ∈ info | success | warn | alert | reasoning
const AI_EVENTS = [{
  t: '14:32:08',
  kind: 'Reasoning',
  level: 'reasoning',
  text: 'Approaching WP3-04 (Boiler Room Entry)',
  sub: 'replanning to avoid pedestrian in corridor — costmap inflation +0.3m'
}, {
  t: '14:32:11',
  kind: 'Execution',
  level: 'info',
  text: 'WaypointReached',
  sub: 'WP3-03 · Mech. closet · arrival within 0.18m of goal'
}, {
  t: '14:32:11',
  kind: 'Insight',
  level: 'success',
  text: 'capture-photo · 3 frames',
  sub: 'Gauge PG-17 · confidence 0.94 · queued for upload'
}, {
  t: '14:32:14',
  kind: 'Reasoning',
  level: 'reasoning',
  text: 'Door D-301 detected — badge access required',
  sub: 'invoking authenticate behavior · expected 4-7s dwell'
}, {
  t: '14:32:16',
  kind: 'Execution',
  level: 'info',
  text: 'pre_traverse: open-door D-301',
  sub: 'connection: Main Corridor F3 ↔ Server Room'
}, {
  t: '14:32:22',
  kind: 'Execution',
  level: 'success',
  text: 'DoorPassed',
  sub: 'D-301 · traversal time 5.8s'
}, {
  t: '14:32:23',
  kind: 'Reasoning',
  level: 'reasoning',
  text: 'Entering velocity zone (max 0.5 m/s)',
  sub: 'pedestrian corridor · enforcement: hard · effective until exit'
}, {
  t: '14:32:28',
  kind: 'Insight',
  level: 'warn',
  text: 'Threshold event · temperature',
  sub: 'Server rack SR-01 · 38.2°C exceeds 35°C bound · flagged'
}, {
  t: '14:32:34',
  kind: 'Reasoning',
  level: 'reasoning',
  text: 'Reordering remaining waypoints',
  sub: 'shortest-path · 4 waypoints left · est. completion 14:38:12'
}, {
  t: '14:32:36',
  kind: 'Execution',
  level: 'info',
  text: 'WaypointReached',
  sub: 'WP3-04 · Boiler Room Entry · within 0.22m'
}, {
  t: '14:32:36',
  kind: 'Insight',
  level: 'info',
  text: 'capture-photo + thermal scan',
  sub: 'Boiler BLR-02 · 247 frames + 1 thermal pass'
}];
function Tag({
  tone,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 9.5,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '2px 6px',
      borderRadius: 3,
      color: `var(--c-${tone})`,
      background: `var(--c-${tone}-tint)`,
      whiteSpace: 'nowrap'
    }
  }, children);
}
function AIEvent({
  e,
  isLatest
}) {
  const tone = e.level === 'success' ? 'ok' : e.level === 'warn' ? 'warn' : e.level === 'alert' ? 'alert' : e.level === 'reasoning' ? 'violet' : 'signal';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderLeft: `2px solid var(--c-${tone})`,
      background: isLatest ? `linear-gradient(90deg, var(--c-${tone}-tint), transparent 60%)` : 'transparent',
      marginBottom: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 10,
      color: 'var(--c-fog)'
    }
  }, e.t), /*#__PURE__*/React.createElement(Tag, {
    tone: tone
  }, e.kind), isLatest && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: `var(--c-${tone})`
    }
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--t-on-dark-1)',
      fontWeight: 500,
      marginBottom: 2,
      lineHeight: 1.35
    }
  }, e.level === 'reasoning' && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-violet)',
      marginRight: 6
    }
  }, "\u203B"), e.text), e.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)',
      lineHeight: 1.45,
      fontFamily: e.level === 'reasoning' ? 'var(--ff-mono)' : 'var(--ff-sans)',
      fontStyle: e.level === 'reasoning' ? 'normal' : 'normal'
    }
  }, e.sub));
}
function AIThinkingRail() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--c-ink)',
      borderLeft: '1px solid var(--c-slate)',
      width: 380,
      height: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(140,121,240,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.Brain, {
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "AI Thinking"), /*#__PURE__*/React.createElement(Pill, {
    tone: "violet",
    pulse: true
  }, "Streaming")), /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    style: {
      width: 26,
      height: 26
    }
  }, /*#__PURE__*/React.createElement(Icon.More, {
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 8px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow"
  }, "Filter"), /*#__PURE__*/React.createElement(Pill, {
    tone: "signal"
  }, "All"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "Reasoning"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "Execution"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "Insight")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '6px 0'
    }
  }, AI_EVENTS.slice().reverse().map((e, i) => /*#__PURE__*/React.createElement(AIEvent, {
    key: i,
    e: e,
    isLatest: i === 0
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderTop: '1px solid var(--c-slate)',
      fontSize: 11,
      color: 'var(--c-mist)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "247 events \xB7 14m mission"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-signal)',
      cursor: 'pointer'
    }
  }, "Open transcript \u2192")));
}
function VideoFeed({
  source = 'forward'
}) {
  // Stylized live-camera placeholder
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      width: '100%',
      background: 'radial-gradient(ellipse at center, #1a2333 0%, #050810 70%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 450",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "fl",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#0a0f1a"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "60%",
    stopColor: "#1a2a3f"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#2a3a4f"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "wl",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1a2333",
    stopOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#0a0f1a",
    stopOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#1a2333",
    stopOpacity: "0.9"
  }))), /*#__PURE__*/React.createElement("polygon", {
    points: "0,450 800,450 580,260 220,260",
    fill: "url(#fl)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,0 800,0 580,180 220,180",
    fill: "#0a0f15",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,0 220,180 220,260 0,450",
    fill: "url(#wl)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "800,0 580,180 580,260 800,450",
    fill: "url(#wl)"
  }), [0.2, 0.4, 0.6, 0.8].map(t => {
    const y = 260 + (450 - 260) * t;
    return /*#__PURE__*/React.createElement("line", {
      key: t,
      x1: 220 - 220 * t,
      y1: y,
      x2: 580 + 220 * t,
      y2: y,
      stroke: "rgba(255,255,255,0.06)",
      strokeWidth: "1"
    });
  }), /*#__PURE__*/React.createElement("rect", {
    x: "350",
    y: "195",
    width: "100",
    height: "65",
    fill: "#0e1822",
    stroke: "rgba(25,148,237,0.5)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "400",
    y: "235",
    textAnchor: "middle",
    fontFamily: "var(--ff-mono)",
    fontSize: "9",
    fill: "rgba(25,148,237,0.7)",
    letterSpacing: "0.1em"
  }, "D-301"), /*#__PURE__*/React.createElement("rect", {
    x: "120",
    y: "200",
    width: "40",
    height: "60",
    fill: "#1a2a3f",
    stroke: "rgba(255,255,255,0.1)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "640",
    y: "200",
    width: "40",
    height: "60",
    fill: "#1a2a3f",
    stroke: "rgba(255,255,255,0.1)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(500,210)",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "0",
    cy: "-8",
    rx: "4",
    ry: "5",
    fill: "#3a4a5f"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "-5",
    y: "-3",
    width: "10",
    height: "18",
    fill: "#3a4a5f"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '60.5%',
      top: '44%',
      width: 28,
      height: 56,
      border: '1.5px solid var(--c-warn)',
      boxShadow: '0 0 8px var(--c-warn)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -18,
      left: -2,
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: 'var(--c-warn)',
      background: 'rgba(0,0,0,0.7)',
      padding: '1px 4px'
    }
  }, "person \xB7 0.87")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '42%',
      top: '42%',
      width: 130,
      height: 90,
      border: '1.5px dashed var(--c-signal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -18,
      left: -2,
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: 'var(--c-signal)',
      background: 'rgba(0,0,0,0.7)',
      padding: '1px 4px'
    }
  }, "door D-301 \xB7 approach 1.4m")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 64,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: 1,
      background: 'rgba(255,255,255,0.15)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: 1,
      background: 'rgba(255,255,255,0.15)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 24,
      border: '1px solid rgba(25,148,237,0.6)',
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 14,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "alert",
    pulse: true
  }, "\u25CF REC"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "FWD CAM"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "1080p \xB7 30fps")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 14,
      fontFamily: 'var(--ff-mono)',
      fontSize: 11,
      color: 'var(--t-on-dark-1)',
      background: 'rgba(0,0,0,0.6)',
      padding: '4px 8px',
      borderRadius: 3,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-mist)'
    }
  }, "14:32:36 CT"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-iron)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "00:14:22")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 14,
      display: 'flex',
      gap: 4
    }
  }, ['FWD', 'LEFT', 'RIGHT', 'REAR', 'LIDAR', 'THERM'].map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c,
    style: {
      padding: '4px 10px',
      background: i === 0 ? 'var(--c-signal)' : 'rgba(0,0,0,0.6)',
      color: i === 0 ? 'white' : 'var(--c-fog)',
      border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
      borderRadius: 3,
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.06em',
      cursor: 'pointer'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 14,
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      background: 'rgba(0,0,0,0.7)',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: 'var(--c-mist)',
      letterSpacing: '0.06em'
    }
  }, "SPEED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 18,
      fontWeight: 500,
      color: 'var(--c-warn)'
    }
  }, "0.42"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: 'var(--c-mist)'
    }
  }, "m/s \xB7 capped 0.5"))));
}
function MissionStrip() {
  const wps = [{
    id: 'WP3-01',
    state: 'done'
  }, {
    id: 'WP3-02',
    state: 'done'
  }, {
    id: 'WP3-03',
    state: 'done'
  }, {
    id: 'WP3-04',
    state: 'active',
    label: 'Boiler Room Entry'
  }, {
    id: 'WP3-05',
    state: 'next'
  }, {
    id: 'WP3-06',
    state: 'pending'
  }, {
    id: 'WP3-07',
    state: 'pending'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      background: 'var(--c-ink)',
      borderTop: '1px solid var(--c-slate)',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "signal",
    dot: true,
    pulse: true
  }, "Running"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Floor 3 \xB7 Visual Documentation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)',
      fontFamily: 'var(--ff-mono)'
    }
  }, "MISSION CHAIN ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--t-on-dark-2)'
    }
  }, "BVD-2026-04-20"), " \xB7 RUN 3/5 \xB7 ATOMIC 1/1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.Clock, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 12
    }
  }, "00:14:22 / ~24:00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.Battery, {
    size: 13
  }), /*#__PURE__*/React.createElement(BatteryBar, {
    pct: 73,
    w: 50
  })), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon.Pause, {
    size: 12
  }), " Pause"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-danger oc-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon.Stop, {
    size: 12
  }), " Abort"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0
    }
  }, wps.map((w, i) => {
    const tone = w.state === 'done' ? 'var(--c-ok)' : w.state === 'active' ? 'var(--c-signal)' : w.state === 'next' ? 'var(--c-violet)' : 'var(--c-iron)';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: w.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        minWidth: w.state === 'active' ? 130 : 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: w.state === 'active' ? 24 : 12,
        height: w.state === 'active' ? 24 : 12,
        borderRadius: 999,
        background: w.state === 'done' ? tone : 'transparent',
        border: `2px solid ${tone}`,
        display: 'grid',
        placeItems: 'center',
        fontSize: 9,
        color: w.state === 'done' ? 'white' : tone,
        fontFamily: 'var(--ff-mono)',
        fontWeight: 700,
        boxShadow: w.state === 'active' ? `0 0 12px ${tone}` : 'none'
      }
    }, w.state === 'done' ? '✓' : '', w.state === 'active' && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        background: tone,
        borderRadius: '50%'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--ff-mono)',
        fontSize: 10,
        color: w.state === 'pending' ? 'var(--c-iron)' : 'var(--c-fog)',
        textAlign: 'center'
      }
    }, w.id), w.state === 'active' && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--c-signal)',
        textAlign: 'center'
      }
    }, w.label)), i < wps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: w.state === 'done' ? 'var(--c-ok)' : w.state === 'active' ? 'linear-gradient(90deg, var(--c-signal), var(--c-iron))' : 'var(--c-iron)',
        margin: '0 6px',
        marginTop: -16
      }
    }));
  })));
}
function MapTelemetry() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 0,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#0a1018',
      borderRight: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement(FloorPlan, {
    walls: "office",
    label: "FLOOR 3 \xB7 MAP V4 \xB7 2026-04-15",
    pins: [{
      type: 'dock',
      x: 90,
      y: 350
    }, {
      type: 'wp',
      x: 130,
      y: 240,
      label: '01'
    }, {
      type: 'wp',
      x: 200,
      y: 130,
      label: '02'
    }, {
      type: 'wp',
      x: 160,
      y: 320,
      label: '03'
    }, {
      type: 'wp',
      x: 320,
      y: 130,
      label: '04',
      active: true
    }, {
      type: 'wp',
      x: 470,
      y: 130,
      label: '05'
    }, {
      type: 'wp',
      x: 510,
      y: 290,
      label: '06'
    }, {
      type: 'wp',
      x: 380,
      y: 290,
      label: '07'
    }, {
      type: 'robot',
      x: 290,
      y: 130,
      heading: 0,
      tone: 'var(--c-signal)'
    }],
    path: [[90, 350], [130, 240], [200, 130], [160, 320], [320, 130]],
    constraints: [{
      type: 'keepout',
      x: 410,
      y: 220,
      w: 80,
      h: 50,
      label: 'CHARGING'
    }, {
      type: 'slow',
      x: 280,
      y: 100,
      w: 200,
      h: 50,
      label: 'PED · 0.5 m/s'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '6px 10px',
      background: 'rgba(0,0,0,0.7)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.Map, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500
    }
  }, "Floor 3"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-iron)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-mist)'
    }
  }, "Map v4 \xB7 2026-04-15")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    style: {
      width: 28,
      height: 28,
      background: 'rgba(0,0,0,0.7)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Plus, {
    size: 13
  })), /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    style: {
      width: 28,
      height: 28,
      background: 'rgba(0,0,0,0.7)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Layers, {
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      padding: '8px 12px',
      background: 'rgba(0,0,0,0.7)',
      borderRadius: 4,
      display: 'flex',
      gap: 16,
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-fog)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--c-signal)',
      marginRight: 5,
      verticalAlign: 'middle'
    }
  }), "Robot"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: '50%',
      border: '1.5px solid var(--c-mist)',
      marginRight: 5,
      verticalAlign: 'middle'
    }
  }), "Waypoint"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      background: 'var(--c-violet-tint)',
      border: '1px solid var(--c-violet)',
      marginRight: 5,
      verticalAlign: 'middle'
    }
  }), "Dock"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      background: 'rgba(228,77,77,0.2)',
      border: '1px solid var(--c-alert)',
      marginRight: 5,
      verticalAlign: 'middle'
    }
  }), "Keep-out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--c-ink)',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Robot \xB7 Falcon 12"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Battery",
    value: "73",
    unit: "%",
    tone: "default",
    sub: "\u2193 4%/h \xB7 6h remaining"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Speed",
    value: "0.42",
    unit: "m/s",
    tone: "warn",
    sub: "capped \u2014 vel zone"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Signal",
    value: "-58",
    unit: "dBm",
    tone: "ok",
    sub: "WiFi \xB7 AP-3F-04"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Pose conf.",
    value: "0.94",
    tone: "ok",
    sub: "ICP \xB7 247 inliers"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Payload \xB7 Insight Pro"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [{
    icon: /*#__PURE__*/React.createElement(Icon.Camera, {
      size: 13
    }),
    name: '360° camera',
    state: 'capturing',
    val: '247 frames'
  }, {
    icon: /*#__PURE__*/React.createElement(Icon.Lidar, {
      size: 13
    }),
    name: 'Velodyne VLP-16',
    state: 'streaming',
    val: '10 Hz'
  }, {
    icon: /*#__PURE__*/React.createElement(Icon.Gauge, {
      size: 13
    }),
    name: 'Thermal · FLIR',
    state: 'idle',
    val: 'standby'
  }, {
    icon: /*#__PURE__*/React.createElement(Icon.Sparkle, {
      size: 13
    }),
    name: 'Gas sniffer',
    state: 'idle',
    val: 'CH₄ 0 ppm'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-mist)',
      width: 16
    }
  }, p.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, p.name), /*#__PURE__*/React.createElement(Pill, {
    tone: p.state === 'capturing' ? 'signal' : p.state === 'streaming' ? 'ok' : 'ghost',
    dot: true,
    pulse: p.state !== 'idle'
  }, p.state), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 11,
      color: 'var(--c-fog)',
      minWidth: 70,
      textAlign: 'right'
    }
  }, p.val))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Insight events \xB7 this run"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, [{
    tone: 'warn',
    txt: 'Threshold · temp 38.2°C · SR-01',
    t: '14:32:28'
  }, {
    tone: 'signal',
    txt: 'Detection · 12 panels captured',
    t: '14:31:14'
  }, {
    tone: 'signal',
    txt: 'Detection · gauge PG-17 · 0.94',
    t: '14:30:02'
  }, {
    tone: 'ok',
    txt: 'Classification · clear corridor',
    t: '14:29:18'
  }].map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: `var(--c-${e.tone})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--t-on-dark-2)'
    }
  }, e.txt), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      color: 'var(--c-mist)',
      fontSize: 10
    }
  }, e.t)))))));
}
function RobotLive() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1440,
      height: 900
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    project: {
      name: 'Meridian Tower',
      color: 'linear-gradient(135deg,#3b82f6,#1e40af)'
    },
    robotContext: {
      n: 12,
      statusPill: /*#__PURE__*/React.createElement(Pill, {
        tone: "signal",
        dot: true,
        pulse: true
      }, "Running")
    },
    tabs: [{
      id: 'live',
      label: 'Live'
    }, {
      id: 'status',
      label: 'Status'
    }, {
      id: 'missions',
      label: 'Missions',
      count: 14
    }, {
      id: 'data',
      label: 'Data'
    }],
    active: "live"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1.4 1 0',
      position: 'relative',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(VideoFeed, null)), /*#__PURE__*/React.createElement(MissionStrip, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 0',
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(MapTelemetry, null))), /*#__PURE__*/React.createElement(AIThinkingRail, null)));
}
window.RobotLive = RobotLive;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/robot-live.jsx", error: String((e && e.message) || e) }); }

// console/robot-status.jsx
try { (() => {
// ROBOT STATUS — health, payload, errors. Companion to Robot Live.
// Layout: top bar · left rail (telemetry stack) · main grid (subsystems + payloads + errors)

function VitalRow({
  label,
  value,
  unit,
  status = 'ok',
  sub,
  bar
}) {
  const tone = {
    ok: 'var(--c-ok)',
    warn: 'var(--c-warn)',
    alert: 'var(--c-alert)',
    signal: 'var(--c-signal)',
    idle: 'var(--c-mist)'
  }[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: bar ? 6 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--c-mist)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: tone,
      letterSpacing: '-0.01em'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 10,
      color: 'var(--c-mist)'
    }
  }, unit))), bar !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--c-graphite)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${bar}%`,
      height: '100%',
      background: tone
    }
  })), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--c-mist)',
      marginTop: 4
    }
  }, sub));
}
function SubsystemCard({
  icon,
  title,
  status,
  body,
  kvs
}) {
  const tone = {
    ok: 'ok',
    warn: 'warn',
    alert: 'alert',
    signal: 'signal'
  }[status] || 'ghost';
  return /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, title)), /*#__PURE__*/React.createElement(Pill, {
    tone: tone
  }, status === 'ok' ? 'Nominal' : status === 'warn' ? 'Warning' : status === 'alert' ? 'Fault' : 'Standby')), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, body, kvs && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '6px 16px',
      fontSize: 11.5,
      marginTop: body ? 12 : 0
    }
  }, kvs.map(([k, v, t]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-mist)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      color: t ? `var(--c-${t})` : 'var(--t-on-dark-1)'
    }
  }, v))))));
}
function ErrorRow({
  t,
  code,
  level,
  msg,
  sub,
  ack
}) {
  const tone = level === 'alert' ? 'alert' : level === 'warn' ? 'warn' : 'signal';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      display: 'grid',
      gridTemplateColumns: '76px 1fr auto',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 10,
      color: 'var(--c-fog)',
      paddingTop: 2
    }
  }, t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: tone
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500
    }
  }, msg)), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, ack ? /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "Acked \xB7 ", ack) : /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm"
  }, "Ack")));
}
function RobotStatus() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1440,
      height: 900
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    project: PROJECT,
    robotContext: {
      n: '12',
      statusPill: /*#__PURE__*/React.createElement(Pill, {
        tone: "signal",
        dot: true,
        pulse: true
      }, "Running")
    },
    tabs: [{
      id: 'live',
      label: 'Live'
    }, {
      id: 'status',
      label: 'Status'
    }, {
      id: 'mission',
      label: 'Mission'
    }, {
      id: 'data',
      label: 'Data'
    }, {
      id: 'logs',
      label: 'Logs',
      count: 12
    }],
    active: "status"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      height: '100%',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--c-slate)',
      overflow: 'auto',
      background: 'var(--c-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 12px',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Robot"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(RobotAvatar, {
    n: 12,
    size: 56,
    status: "signal"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "Falcon 12"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)',
      fontFamily: 'var(--ff-mono)'
    }
  }, "SN-0291-A \xB7 v3.4.11"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(ConnBars, {
    level: "medium",
    label: "LTE \xB7 24 ms"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon.Pin, {
    size: 11
  }), " Home"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon.Settings, {
    size: 11
  }), " Service"))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      padding: '10px 14px 4px'
    }
  }, "Power"), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Battery",
    value: "73",
    unit: "%",
    bar: 73,
    status: "ok",
    sub: "Discharging \xB7 est. 2h 14m"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Pack temp",
    value: "32.4",
    unit: "\xB0C",
    status: "ok"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Cell delta",
    value: "14",
    unit: "mV",
    status: "ok",
    sub: "Within tolerance"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Cycle count",
    value: "412",
    status: "ok"
  }), /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      padding: '14px 14px 4px'
    }
  }, "Compute"), /*#__PURE__*/React.createElement(VitalRow, {
    label: "CPU",
    value: "48",
    unit: "%",
    bar: 48,
    status: "ok"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "GPU (Jetson)",
    value: "71",
    unit: "%",
    bar: 71,
    status: "warn",
    sub: "Vision pipeline + LLM agent"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "RAM",
    value: "9.4",
    unit: "/ 16 GB",
    bar: 59,
    status: "ok"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Disk free",
    value: "412",
    unit: "GB",
    status: "ok"
  }), /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      padding: '14px 14px 4px'
    }
  }, "Locomotion"), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Speed",
    value: "0.42",
    unit: "m/s",
    status: "signal"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Heading drift",
    value: "0.3",
    unit: "\xB0/min",
    status: "ok"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "Pose conf.",
    value: "0.97",
    status: "ok"
  }), /*#__PURE__*/React.createElement(VitalRow, {
    label: "IMU temp",
    value: "44.1",
    unit: "\xB0C",
    status: "ok"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      padding: '20px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Falcon 12 \xB7 Subsystem health"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--ff-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.015em'
    }
  }, "Status"), /*#__PURE__*/React.createElement(Pill, {
    tone: "warn"
  }, "1 warning \xB7 2 cautions"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--c-mist)'
    }
  }, "Last self-test 14:00 \xB7 all subsystems online"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon.Download, {
    size: 12
  }), " Diagnostic bundle"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon.Sparkle, {
    size: 12
  }), " Run self-test"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 14,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SubsystemCard, {
    icon: /*#__PURE__*/React.createElement(Icon.Camera, {
      size: 14
    }),
    title: "Cameras",
    status: "ok",
    kvs: [['Forward (Mono)', '1080p · 30 fps', 'ok'], ['Forward (Depth)', 'on · 7m max'], ['Pano (5×)', '4K · synced'], ['Thermal', 'standby'], ['Frame drops', '0.02%', 'ok'], ['Auto-exposure', 'tracking']]
  }), /*#__PURE__*/React.createElement(SubsystemCard, {
    icon: /*#__PURE__*/React.createElement(Icon.Lidar, {
      size: 14
    }),
    title: "LiDAR / Depth",
    status: "ok",
    body: /*#__PURE__*/React.createElement("div", {
      style: {
        height: 60,
        background: '#0a1018',
        borderRadius: 3,
        border: '1px solid var(--c-slate)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 200 60",
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "100",
      cy: "30",
      r: "3",
      fill: "var(--c-signal)"
    }), [...Array(36)].map((_, i) => {
      const a = i / 36 * Math.PI * 2;
      const r = 14 + Math.sin(i * 0.7) * 4 + (i % 5 === 0 ? 6 : 0);
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: 100 + Math.cos(a) * r * 1.8,
        cy: 30 + Math.sin(a) * r * 0.7,
        r: "1",
        fill: "rgba(25,148,237,0.6)"
      });
    }))),
    kvs: [['Returns / s', '256 k', 'ok'], ['Range', '0.3 – 100 m'], ['Spinning', '10 Hz'], ['Window clean', 'OK', 'ok']]
  }), /*#__PURE__*/React.createElement(SubsystemCard, {
    icon: /*#__PURE__*/React.createElement(Icon.Robot, {
      size: 14
    }),
    title: "Joints (12 DoF)",
    status: "ok",
    body: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 4,
        marginBottom: 10
      }
    }, [...Array(12)].map((_, i) => {
      const t = i === 6 ? 0.8 : 0.2 + i % 3 * 0.18;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          height: 18,
          background: `var(--c-${i === 6 ? 'warn' : 'ok'}-tint)`,
          border: `1px solid var(--c-${i === 6 ? 'warn' : 'ok'})`,
          borderRadius: 2,
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--ff-mono)',
          fontSize: 9,
          fontWeight: 600,
          color: `var(--c-${i === 6 ? 'warn' : 'ok'})`
        }
      }, "J", String(i + 1).padStart(2, '0'));
    })),
    kvs: [['Max torque', '94% (J07)', 'warn'], ['Servo temp', '52°C max'], ['Calibration', 'today 09:14'], ['Backlash', '<0.1°', 'ok']]
  }), /*#__PURE__*/React.createElement(SubsystemCard, {
    icon: /*#__PURE__*/React.createElement(Icon.Sparkle, {
      size: 14
    }),
    title: "IMU + GPS",
    status: "ok",
    kvs: [['IMU rate', '400 Hz', 'ok'], ['Bias', 'in-spec'], ['GPS fix', 'RTK · 0.04 m', 'ok'], ['Satellites', '14'], ['Compass', 'calibrated'], ['Pose conf.', '0.97', 'ok']]
  }), /*#__PURE__*/React.createElement(SubsystemCard, {
    icon: /*#__PURE__*/React.createElement(Icon.Wifi, {
      size: 14
    }),
    title: "Comms",
    status: "warn",
    kvs: [['LTE (primary)', '−86 dBm · 24ms', 'warn'], ['Mesh (backup)', 'online'], ['MQTT broker', 'sub · 14k msgs'], ['WebRTC video', 'P2P · 4 Mbps', 'ok'], ['Drops (60s)', '3', 'warn'], ['Operator latency', '142 ms']]
  }), /*#__PURE__*/React.createElement(SubsystemCard, {
    icon: /*#__PURE__*/React.createElement(Icon.Battery, {
      size: 14
    }),
    title: "Thermal",
    status: "ok",
    body: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8,
        marginBottom: 10
      }
    }, [{
      z: 'Battery pack',
      t: 32
    }, {
      z: 'Compute bay',
      t: 58,
      hi: true
    }, {
      z: 'Servo cluster',
      t: 44
    }, {
      z: 'Camera array',
      t: 38
    }].map(z => /*#__PURE__*/React.createElement("div", {
      key: z.z,
      style: {
        padding: '6px 8px',
        background: z.hi ? 'rgba(241,168,36,0.08)' : 'var(--c-graphite)',
        border: `1px solid ${z.hi ? 'var(--c-warn)' : 'var(--c-slate)'}`,
        borderRadius: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--c-mist)'
      }
    }, z.z), /*#__PURE__*/React.createElement("div", {
      className: "oc-num",
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: z.hi ? 'var(--c-warn)' : 'var(--t-on-dark-1)'
      }
    }, z.t, "\xB0C")))),
    kvs: [['Fans', '4/4 nominal', 'ok'], ['Throttle', 'none', 'ok']]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon.Upload, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Payloads & captures")), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "2.4 GB this mission")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 0'
    }
  }, [{
    k: 'Visual photos',
    v: '247 frames',
    s: 'queued · 18 uploaded',
    t: 'signal',
    icon: /*#__PURE__*/React.createElement(Icon.Camera, {
      size: 13
    })
  }, {
    k: 'Pano scans',
    v: '12',
    s: '8K stitched · 1.4 GB',
    t: 'ok',
    icon: /*#__PURE__*/React.createElement(Icon.Sparkle, {
      size: 13
    })
  }, {
    k: 'Thermal pass',
    v: '1',
    s: 'rack SR-01 · 38.2°C',
    t: 'warn',
    icon: /*#__PURE__*/React.createElement(Icon.Eye, {
      size: 13
    })
  }, {
    k: 'Gauge readings',
    v: '14 / 18',
    s: '4 pending re-acquire',
    t: 'signal',
    icon: /*#__PURE__*/React.createElement(Icon.Gauge, {
      size: 13
    })
  }, {
    k: 'Point cloud',
    v: '4.1M pts',
    s: 'streaming',
    t: 'ok',
    icon: /*#__PURE__*/React.createElement(Icon.Lidar, {
      size: 13
    })
  }, {
    k: 'Audio annotation',
    v: '0',
    s: 'not in mission',
    t: 'ghost',
    icon: /*#__PURE__*/React.createElement(Icon.Sparkle, {
      size: 13
    })
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      display: 'grid',
      gridTemplateColumns: '24px 1fr 100px 110px',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-mist)'
    }
  }, p.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500
    }
  }, p.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--c-mist)'
    }
  }, p.s)), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--t-on-dark-1)'
    }
  }, p.v), /*#__PURE__*/React.createElement(Pill, {
    tone: p.t
  }, p.t === 'ok' ? 'Synced' : p.t === 'signal' ? 'Live' : p.t === 'warn' ? 'Flagged' : 'Inactive'))))), /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon.Alert, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Errors & cautions"), /*#__PURE__*/React.createElement(Pill, {
    tone: "warn"
  }, "3 active")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--c-signal)'
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ErrorRow, {
    t: "14:32:28",
    code: "THRESH-T",
    level: "warn",
    msg: "Server rack SR-01 temp 38.2\xB0C exceeds bound",
    sub: "Auto-flagged \xB7 escalation: ops@meridian"
  }), /*#__PURE__*/React.createElement(ErrorRow, {
    t: "14:31:14",
    code: "COMMS-LTE",
    level: "warn",
    msg: "Signal degraded \xB7 \u221286 dBm",
    sub: "3 packet drops in last 60s \xB7 auto-failover armed"
  }), /*#__PURE__*/React.createElement(ErrorRow, {
    t: "14:28:02",
    code: "JOINT-J07",
    level: "warn",
    msg: "Hip-pitch torque at 94% of limit",
    sub: "Recommend gait calibration after mission"
  }), /*#__PURE__*/React.createElement(ErrorRow, {
    t: "14:14:56",
    code: "POSE-RECOV",
    level: "info",
    msg: "Recovered pose lock after corridor turn",
    sub: "Loop closure \xB7 0.04 m drift",
    ack: "Jamie M."
  }), /*#__PURE__*/React.createElement(ErrorRow, {
    t: "13:58:11",
    code: "DOOR-D301",
    level: "info",
    msg: "Authentication retry \xB7 1/3",
    sub: "Badge handshake \xB7 2.4s",
    ack: "auto"
  })))))));
}
window.RobotStatus = RobotStatus;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/robot-status.jsx", error: String((e && e.message) || e) }); }

// console/sections.jsx
try { (() => {
// SECTIONS — projects break into Sections (formerly Floors). Sections may span floors.
// Shows: section list, temporal map (Map v1..v6), coverage heatmap, recent maps timeline.

const SECTIONS = [{
  id: 'lobby',
  name: 'Lobby & Public',
  floors: [1],
  coverage: 0.96,
  maps: 6,
  lastScan: '2026-04-22 09:14',
  missions: 24,
  status: 'fresh'
}, {
  id: 'office',
  name: 'Office Floors',
  floors: [3, 4, 5, 6, 7],
  coverage: 0.84,
  maps: 14,
  lastScan: '2026-04-21 17:02',
  missions: 86,
  status: 'fresh'
}, {
  id: 'mech',
  name: 'Mech & Server',
  floors: [8, 9],
  coverage: 0.78,
  maps: 9,
  lastScan: '2026-04-19 22:40',
  missions: 42,
  status: 'aging'
}, {
  id: 'roof',
  name: 'Roof & Helipad',
  floors: [12],
  coverage: 0.41,
  maps: 2,
  lastScan: '2026-03-18 11:08',
  missions: 4,
  status: 'stale'
}];
function MapTimelineCard() {
  const versions = [{
    v: 'v6',
    t: 'Apr 22',
    tone: 'signal',
    label: 'current'
  }, {
    v: 'v5',
    t: 'Apr 18',
    tone: 'ghost'
  }, {
    v: 'v4',
    t: 'Apr 15',
    tone: 'ghost'
  }, {
    v: 'v3',
    t: 'Apr 09',
    tone: 'ghost'
  }, {
    v: 'v2',
    t: 'Mar 31',
    tone: 'ghost'
  }, {
    v: 'v1',
    t: 'Mar 14',
    tone: 'violet',
    label: 'baseline'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-section-head",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon.Layers, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Map history"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ghost"
  }, "Office Floors \xB7 F3")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--c-signal)'
    }
  }, "Compare versions \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 0,
      padding: '8px 0'
    }
  }, versions.map((v, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: v.v
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      minWidth: 84
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: v.tone
  }, v.v, v.label ? ' · ' + v.label : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 56,
      background: 'linear-gradient(135deg,#0a1018,#1a2a3f)',
      borderRadius: 4,
      border: v.tone === 'signal' ? '1.5px solid var(--c-signal)' : '1px solid var(--c-slate)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 80 56",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "68",
    height: "44",
    fill: "none",
    stroke: "rgba(255,255,255,0.25)",
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "28",
    x2: "40",
    y2: "28",
    stroke: "rgba(255,255,255,0.2)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "6",
    x2: "40",
    y2: "50",
    stroke: "rgba(255,255,255,0.2)"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 10,
      color: 'var(--c-mist)'
    }
  }, v.t)), i < versions.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      minWidth: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: '100%',
      background: i === 0 ? 'var(--c-signal)' : 'var(--c-iron)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 10,
      background: 'rgba(140,121,240,0.06)',
      border: '1px solid rgba(140,121,240,0.18)',
      borderRadius: 4,
      fontSize: 12,
      color: 'var(--t-on-dark-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-violet)',
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      marginRight: 8
    }
  }, "\u203B DRIFT"), "v6 vs v5 \u2014 12 furniture displacements, 1 new keep-out, 0 wall changes detected."));
}
function ProjectSections() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1440,
      height: 900
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    project: PROJECT,
    tabs: [{
      id: 'fleet',
      label: 'Fleet',
      count: 7
    }, {
      id: 'sections',
      label: 'Sections',
      count: 4
    }, {
      id: 'missions',
      label: 'Missions',
      count: 14
    }, {
      id: 'data',
      label: 'Data'
    }, {
      id: 'settings',
      label: 'Settings'
    }],
    active: "sections"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      height: '100%',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--c-slate)',
      overflow: 'auto',
      background: 'var(--c-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 12px',
      borderBottom: '1px solid var(--c-slate)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Project breakdown"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "Sections"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search\u2026",
    w: 170
  }), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon.Plus, {
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, SECTIONS.map((s, i) => {
    const tone = s.status === 'fresh' ? 'ok' : s.status === 'aging' ? 'warn' : 'alert';
    const active = i === 1;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        padding: '12px 18px',
        cursor: 'pointer',
        background: active ? 'rgba(242,107,26,0.06)' : 'transparent',
        borderLeft: active ? '2px solid var(--c-signal)' : '2px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: active ? 'var(--t-on-dark-1)' : 'var(--t-on-dark-2)'
      }
    }, s.name), /*#__PURE__*/React.createElement(Pill, {
      tone: tone
    }, s.status)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--ff-mono)',
        fontSize: 10,
        color: 'var(--c-mist)',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, "FL ", s.floors.join(',')), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, s.maps, " MAPS"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, s.missions, " MISSIONS")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 4,
        background: 'var(--c-graphite)',
        borderRadius: 2,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${s.coverage * 100}%`,
        height: '100%',
        background: `var(--c-${tone})`
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "oc-num",
      style: {
        fontSize: 10,
        color: 'var(--c-mist)',
        minWidth: 30,
        textAlign: 'right'
      }
    }, Math.round(s.coverage * 100), "%")));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Section \xB7 Office Floors \xB7 F3\u2013F7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--ff-display)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.015em'
    }
  }, "Office Floors"), /*#__PURE__*/React.createElement(Pill, {
    tone: "ok"
  }, "Fresh \xB7 scanned 17h ago"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--c-mist)'
    }
  }, "14 maps \xB7 86 missions \xB7 84% coverage"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [{
      value: 'F3',
      label: 'F3'
    }, {
      value: 'F4',
      label: 'F4'
    }, {
      value: 'F5',
      label: 'F5'
    }, {
      value: 'F6',
      label: 'F6'
    }, {
      value: 'F7',
      label: 'F7'
    }],
    value: "F3",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-sec oc-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon.Edit, {
    size: 12
  }), " Edit map"), /*#__PURE__*/React.createElement("button", {
    className: "oc-btn oc-btn-pri oc-btn-sm"
  }, /*#__PURE__*/React.createElement(Icon.Play, {
    size: 12
  }), " Mission here"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      height: 420,
      padding: 0,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(FloorPlan, {
    walls: "office",
    label: "F3 \xB7 MAP v6 \xB7 COVERAGE HEATMAP",
    pins: [{
      type: 'dock',
      x: 90,
      y: 350
    }, {
      type: 'wp',
      x: 130,
      y: 240,
      label: 'A'
    }, {
      type: 'wp',
      x: 200,
      y: 130,
      label: 'B'
    }, {
      type: 'wp',
      x: 320,
      y: 130,
      label: 'C'
    }, {
      type: 'wp',
      x: 470,
      y: 130,
      label: 'D'
    }, {
      type: 'robot',
      x: 290,
      y: 130,
      heading: 0,
      tone: 'var(--c-signal)'
    }],
    constraints: [{
      type: 'keepout',
      x: 410,
      y: 220,
      w: 80,
      h: 50,
      label: 'CHARGING'
    }, {
      type: 'slow',
      x: 280,
      y: 100,
      w: 200,
      h: 50,
      label: 'PED · 0.5 m/s'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '6px 10px',
      background: 'rgba(0,0,0,0.7)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.Layers, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, "Floor 3"), /*#__PURE__*/React.createElement(Pill, {
    tone: "signal"
  }, "Map v6 \xB7 current")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      padding: '8px 12px',
      background: 'rgba(0,0,0,0.75)',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      fontSize: 9
    }
  }, "Coverage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 8,
      width: 140,
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, [0.05, 0.15, 0.30, 0.55, 0.85].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: `rgba(242,107,26,${c})`
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-fog)'
    }
  }, "0 \u2192 24 visits")))), /*#__PURE__*/React.createElement("div", {
    className: "oc-card",
    style: {
      padding: 14,
      height: 420,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Floors in this section"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, [{
    f: 'F7',
    cov: 0.92,
    fresh: true
  }, {
    f: 'F6',
    cov: 0.88,
    fresh: true
  }, {
    f: 'F5',
    cov: 0.81,
    fresh: true
  }, {
    f: 'F4',
    cov: 0.86,
    fresh: true
  }, {
    f: 'F3',
    cov: 0.77,
    fresh: true,
    active: true
  }].map(f => /*#__PURE__*/React.createElement("div", {
    key: f.f,
    style: {
      padding: '10px 12px',
      borderRadius: 4,
      background: f.active ? 'rgba(242,107,26,0.08)' : 'rgba(255,255,255,0.02)',
      border: f.active ? '1px solid rgba(242,107,26,0.4)' : '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontWeight: 700,
      fontSize: 13,
      color: f.active ? 'var(--c-signal)' : 'var(--t-on-dark-2)',
      minWidth: 26
    }
  }, f.f), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 4,
      background: 'var(--c-graphite)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${f.cov * 100}%`,
      height: '100%',
      background: f.active ? 'var(--c-signal)' : 'var(--c-ok)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-mist)',
      minWidth: 30,
      textAlign: 'right'
    }
  }, Math.round(f.cov * 100), "%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10,
      borderTop: '1px solid var(--c-slate)',
      marginTop: 10,
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, "Section spans floors 3\u20137. Maps are floor-scoped; missions can target one or several."))), /*#__PURE__*/React.createElement(MapTimelineCard, null))));
}
window.ProjectSections = ProjectSections;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/sections.jsx", error: String((e && e.message) || e) }); }

// console/tablet-live.jsx
try { (() => {
// TABLET LIVE — on-site operator tablet (iPad, 1024 × 768, landscape).
// Tradeoffs vs. desktop Robot Live:
//   • Touch-first hit targets: 56px joystick + buttons; FAB-sized E-stop.
//   • Single big video. AI Thinking compresses to a horizontal strip (last 3).
//   • Map slides in from the right (sheet) on demand instead of always-on.
//   • Top bar is taller (52px) and shows a single hero metric (battery + speed).

function TabletStatusGlyph({
  status
}) {
  return /*#__PURE__*/React.createElement(Pill, {
    tone: "signal",
    dot: true,
    pulse: true
  }, "\u25CF Running");
}
function HoldButton({
  icon,
  label,
  tone = 'sec'
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      padding: '12px 14px',
      minWidth: 80,
      minHeight: 72,
      background: tone === 'pri' ? 'var(--c-signal-tint)' : 'var(--c-graphite)',
      border: `1px solid ${tone === 'pri' ? 'var(--c-signal)' : 'var(--c-slate)'}`,
      borderRadius: 8,
      color: tone === 'pri' ? 'var(--c-signal)' : 'var(--t-on-dark-1)',
      cursor: 'pointer'
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.02em'
    }
  }, label));
}
function TabletLive() {
  return /*#__PURE__*/React.createElement("div", {
    className: "oc oc-shell",
    style: {
      width: 1024,
      height: 768,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      padding: '0 16px',
      background: 'var(--c-ink)',
      borderBottom: '1px solid var(--c-slate)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "oc-iconbtn",
    style: {
      width: 36,
      height: 36
    }
  }, /*#__PURE__*/React.createElement(Icon.ArrowRight, {
    size: 16,
    style: {
      transform: 'rotate(180deg)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RobotAvatar, {
    n: 12,
    size: 36,
    status: "signal"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.1
    }
  }, "Falcon 12"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--c-mist)'
    }
  }, "Floor 3 \xB7 WP3-04"))), /*#__PURE__*/React.createElement(TabletStatusGlyph, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.Battery, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "73%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.Speed, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "0.42"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: 'var(--c-mist)'
    }
  }, "m/s")), /*#__PURE__*/React.createElement(ConnBars, {
    level: "medium"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 100,
      height: 36,
      padding: '0 14px',
      background: 'var(--c-alert-tint)',
      border: '1px solid var(--c-alert)',
      color: 'var(--c-alert)',
      borderRadius: 4,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--c-alert)'
    }
  }), "E-STOP")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 52,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#050810'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1024 716",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "corr-t",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a2a3f"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#0a1018"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "1024",
    height: "716",
    fill: "url(#corr-t)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,716 1024,716 720,300 304,300",
    fill: "#15263b"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,0 1024,0 720,260 304,260",
    fill: "#0a1018"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,0 304,260 304,300 0,716",
    fill: "#0e1822"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "1024,0 720,260 720,300 1024,716",
    fill: "#0e1822"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "440",
    y: "270",
    width: "144",
    height: "50",
    fill: "#1f3a5e"
  }), /*#__PURE__*/React.createElement("text", {
    x: "512",
    y: "295",
    textAnchor: "middle",
    fontFamily: "var(--ff-mono)",
    fontSize: "11",
    fill: "rgba(255,255,255,0.6)",
    letterSpacing: "0.1em"
  }, "D-301"), /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(255,255,255,0.18)",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "304",
    y1: "260",
    x2: "0",
    y2: "0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "720",
    y1: "260",
    x2: "1024",
    y2: "0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "304",
    y1: "300",
    x2: "0",
    y2: "716"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "720",
    y1: "300",
    x2: "1024",
    y2: "716"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "220",
    y: "320",
    width: "80",
    height: "200",
    fill: "rgba(25,148,237,0.10)",
    stroke: "var(--c-signal)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "220",
    y: "306",
    width: "100",
    height: "14",
    fill: "var(--c-signal)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "225",
    y: "316",
    fontFamily: "var(--ff-mono)",
    fontSize: "9",
    fontWeight: "700",
    fill: "var(--c-night)"
  }, "PEDESTRIAN \xB7 0.94")), /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(241,168,36,0.6)",
    strokeDasharray: "6 4",
    strokeWidth: "1.5",
    fill: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "380",
    y1: "500",
    x2: "640",
    y2: "500"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "380",
    y1: "600",
    x2: "640",
    y2: "600"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 16,
      padding: '6px 10px',
      background: 'rgba(0,0,0,0.72)',
      borderRadius: 4,
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-alert)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--c-alert)',
      animation: 'oc-pulse 1.6s infinite'
    }
  }), "REC \xB7 14:32:18"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 16,
      padding: '6px 10px',
      background: 'rgba(0,0,0,0.72)',
      borderRadius: 4,
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      color: 'var(--c-fog)'
    }
  }, "FWD MONO \xB7 1080p \xB7 30fps"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      left: 16,
      right: 16,
      display: 'flex',
      gap: 10,
      overflow: 'hidden'
    }
  }, [{
    t: '14:32:14',
    tone: 'violet',
    text: 'Replan: pedestrian +0.3m',
    sub: 'replanning · WP3-04'
  }, {
    t: '14:32:11',
    tone: 'ok',
    text: 'Capture-photo · 3 frames',
    sub: 'PG-17 · conf 0.94'
  }, {
    t: '14:32:08',
    tone: 'signal',
    text: 'Approaching D-301',
    sub: 'badge auth required'
  }].map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      padding: '8px 10px',
      background: i === 0 ? 'rgba(140,121,240,0.18)' : 'rgba(0,0,0,0.65)',
      border: `1px solid ${i === 0 ? 'var(--c-violet)' : 'var(--c-slate)'}`,
      borderRadius: 4,
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: `var(--c-${e.tone})`,
      animation: i === 0 ? 'oc-pulse 1.6s infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 9.5,
      color: 'var(--c-fog)'
    }
  }, e.t), i === 0 && /*#__PURE__*/React.createElement("span", {
    className: "oc-num",
    style: {
      fontSize: 9,
      color: 'var(--c-violet)'
    }
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 500,
      color: 'var(--t-on-dark-1)',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  }, i === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-violet)',
      marginRight: 4
    }
  }, "\u203B"), e.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--c-mist)',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  }, e.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      width: 410,
      padding: '12px 14px',
      background: 'rgba(10,12,16,0.88)',
      border: '1px solid var(--c-slate)',
      borderRadius: 6,
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.Camera, {
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600
    }
  }, "Floor 3 \xB7 Visual Doc"), /*#__PURE__*/React.createElement(Pill, {
    tone: "signal",
    dot: true,
    pulse: true
  }, "4 of 7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginBottom: 8
    }
  }, [{
    l: 'A',
    s: 'done'
  }, {
    l: 'B',
    s: 'done'
  }, {
    l: 'C',
    s: 'done'
  }, {
    l: 'D',
    s: 'live'
  }, {
    l: 'E',
    s: 'next'
  }, {
    l: 'F',
    s: 'next'
  }, {
    l: 'G',
    s: 'next'
  }].map((wp, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: `1.5px solid ${wp.s === 'done' ? 'var(--c-ok)' : wp.s === 'live' ? 'var(--c-signal)' : 'var(--c-iron)'}`,
      background: wp.s === 'done' ? 'var(--c-ok-tint)' : wp.s === 'live' ? 'var(--c-signal-tint)' : 'transparent',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--ff-mono)',
      fontSize: 10,
      fontWeight: 700,
      color: wp.s === 'done' ? 'var(--c-ok)' : wp.s === 'live' ? 'var(--c-signal)' : 'var(--c-iron)',
      boxShadow: wp.s === 'live' ? '0 0 8px var(--c-signal)' : 'none'
    }
  }, wp.s === 'done' ? '✓' : wp.l), i < 6 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: i < 3 ? 'var(--c-ok)' : 'var(--c-iron)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--c-mist)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-fog)'
    }
  }, "WP3-04 \xB7 Boiler Room Entry"), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 8px'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "ETA 14:38:12 \xB7 4 min remaining"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(HoldButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Pause, {
      size: 18
    }),
    label: "HOLD"
  }), /*#__PURE__*/React.createElement(HoldButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Pin, {
      size: 18
    }),
    label: "HOME"
  }), /*#__PURE__*/React.createElement(HoldButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Map, {
      size: 18
    }),
    label: "MAP"
  }), /*#__PURE__*/React.createElement(HoldButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Brain, {
      size: 18,
      style: {
        color: 'var(--c-violet)'
      }
    }),
    label: "AI",
    tone: "pri"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 16,
      transform: 'translateY(-50%)',
      width: 160,
      height: 110,
      background: 'rgba(0,0,0,0.72)',
      border: '1px solid var(--c-slate)',
      borderRadius: 4,
      overflow: 'hidden',
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement(FloorPlan, {
    walls: "office",
    pins: [{
      type: 'wp',
      x: 130,
      y: 240,
      label: 'A'
    }, {
      type: 'wp',
      x: 320,
      y: 130,
      label: 'B'
    }, {
      type: 'wp',
      x: 470,
      y: 130,
      label: 'C'
    }, {
      type: 'robot',
      x: 290,
      y: 130,
      heading: 0,
      tone: 'var(--c-signal)'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 4,
      left: 6,
      fontFamily: 'var(--ff-mono)',
      fontSize: 9,
      color: 'var(--c-fog)',
      letterSpacing: '0.05em'
    }
  }, "F3 \xB7 MAP v6"))));
}
window.TabletLive = TabletLive;
})(); } catch (e) { __ds_ns.__errors.push({ path: "console/tablet-live.jsx", error: String((e && e.message) || e) }); }

// deck/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));
      this._root.append(style, stage, tapzones, overlay);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\s*\d+\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', `${pad2(n)} ${label}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._go(this._index + 1, 'api');
    }
    prev() {
      this._go(this._index - 1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deck/deck-stage.js", error: String((e && e.message) || e) }); }

// theme-toggle.js
try { (() => {
/* Firefight Design System — theme toggle.
   Drops a fixed pill into the bottom-right of any card and persists
   the user's choice across pages via localStorage('fa-theme').

   Usage:
     <script src="theme-toggle.js" defer></script>

   The toggle sets [data-theme="dark"|"light"] on <html>; the CSS
   tokens in colors_and_type.css handle the visual swap.            */
(function () {
  'use strict';

  const KEY = 'fa-theme';
  const root = document.documentElement;

  // Apply persisted choice as early as possible (script is in <head> with defer)
  const saved = function () {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }();
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  } else {
    // Default: dark, regardless of OS preference (this is Firefight's primary mode)
    root.setAttribute('data-theme', 'dark');
  }
  function setTheme(next) {
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {}
    render();
  }

  // Build the pill once DOM is ready
  function mount() {
    if (document.getElementById('fa-theme-toggle')) return;
    const wrap = document.createElement('div');
    wrap.id = 'fa-theme-toggle';
    wrap.innerHTML = `
      <style>
        #fa-theme-toggle {
          position: fixed; right: 20px; bottom: 20px; z-index: 9999;
          font-family: var(--ff-mono, ui-monospace, monospace);
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          background: var(--bg-card, #131313);
          color: var(--tx-3, #a0a0a0);
          border: 1px solid var(--bd-soft, rgba(255,255,255,0.08));
          border-radius: 999px;
          padding: 6px;
          display: inline-flex; gap: 2px; align-items: center;
          box-shadow: var(--shadow-2, 0 6px 18px rgba(0,0,0,0.45));
          user-select: none;
          backdrop-filter: blur(8px);
        }
        #fa-theme-toggle button {
          appearance: none; -webkit-appearance: none;
          background: transparent; border: 0; cursor: pointer;
          font: inherit; color: inherit; letter-spacing: inherit;
          padding: 7px 14px;
          border-radius: 999px;
          display: inline-flex; align-items: center; gap: 8px;
          transition: background 160ms ease, color 160ms ease;
        }
        #fa-theme-toggle button:hover { color: var(--tx-2, #d9d9d9); }
        #fa-theme-toggle button[aria-pressed="true"] {
          background: var(--bg-raised, #1c1c1e);
          color: var(--tx-1, #fff);
        }
        #fa-theme-toggle button svg {
          width: 11px; height: 11px; opacity: 0.85;
          stroke: currentColor; fill: none; stroke-width: 1.5;
          stroke-linecap: round; stroke-linejoin: round;
        }
        #fa-theme-toggle .label-key {
          color: var(--tx-5, #616161);
          padding-left: 10px; padding-right: 4px;
          letter-spacing: 0.16em;
        }
        @media print { #fa-theme-toggle { display: none; } }
      </style>
      <span class="label-key">Theme</span>
      <button data-theme-set="dark" aria-pressed="false" type="button">
        <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M11.5 8.2A4.5 4.5 0 0 1 5.8 2.5 4.6 4.6 0 1 0 11.5 8.2Z"/></svg>
        Dark
      </button>
      <button data-theme-set="light" aria-pressed="false" type="button">
        <svg viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="2.6"/><path d="M7 1.5v1.4M7 11.1v1.4M1.5 7h1.4M11.1 7h1.4M3.1 3.1l1 1M9.9 9.9l1 1M3.1 10.9l1-1M9.9 4.1l1-1"/></svg>
        Light
      </button>
    `;
    document.body.appendChild(wrap);
    wrap.querySelectorAll('button[data-theme-set]').forEach(btn => {
      btn.addEventListener('click', () => setTheme(btn.dataset.themeSet));
    });
    render();
  }
  function render() {
    const wrap = document.getElementById('fa-theme-toggle');
    if (!wrap) return;
    const cur = root.getAttribute('data-theme') || 'dark';
    wrap.querySelectorAll('button[data-theme-set]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.themeSet === cur));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "theme-toggle.js", error: String((e && e.message) || e) }); }

})();
