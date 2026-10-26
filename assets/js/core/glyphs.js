// Glyph nét mảnh cho từng thẻ chủ đề. Mỗi glyph là SVG dùng currentColor,
// các nhóm có class riêng để CSS chuyển động khi hover.

const svg = (body, cls = '') =>
  `<svg class="glyph ${cls}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

function ninePoints(r = 22) {
  const pts = [];
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 - Math.PI / 2;
    pts.push([32 + r * Math.cos(a), 32 + r * Math.sin(a)]);
  }
  return pts;
}

const f = (n) => n.toFixed(2);

const glyphs = {
  numerology() {
    const p = ninePoints();
    const star = p.map((_, i) => p[(i * 4) % 9]);
    const d = 'M' + star.map(([x, y]) => `${f(x)} ${f(y)}`).join(' L') + ' Z';
    const dots = p.map(([x, y]) => `<circle cx="${f(x)}" cy="${f(y)}" r="1.6" fill="currentColor" stroke="none"/>`).join('');
    return svg(`<circle cx="32" cy="32" r="27" opacity=".45"/><g class="g-spin"><path d="${d}" pathLength="1" class="g-draw"/>${dots}</g>`, 'glyph--numerology');
  },
  zodiac() {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const x1 = 32 + 22 * Math.cos(a), y1 = 32 + 22 * Math.sin(a);
      const x2 = 32 + 27 * Math.cos(a), y2 = 32 + 27 * Math.sin(a);
      ticks += `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}"/>`;
    }
    return svg(`<circle cx="32" cy="32" r="27"/><circle cx="32" cy="32" r="22" opacity=".5"/><g class="g-spin">${ticks}</g><g class="g-pulse"><circle cx="32" cy="32" r="9"/><path d="M32 19 v4 M32 41 v4 M19 32 h4 M41 32 h4" opacity=".7"/></g>`, 'glyph--zodiac');
  },
  personality() {
    return svg(`<g class="g-orbit"><circle class="g-a" cx="25" cy="27" r="13"/><circle class="g-b" cx="39" cy="27" r="13"/><circle class="g-c" cx="32" cy="39" r="13"/></g><circle cx="32" cy="31" r="1.6" fill="currentColor" stroke="none"/>`, 'glyph--personality');
  },
  career() {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
      pts.push([32 + 24 * Math.cos(a), 32 + 24 * Math.sin(a)]);
    }
    const hex = 'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join(' L') + ' Z';
    const spokes = pts.map(([x, y]) => `M32 32 L${f(x)} ${f(y)}`).join(' ');
    const dots = pts.map(([x, y]) => `<circle cx="${f(x)}" cy="${f(y)}" r="1.6" fill="currentColor" stroke="none"/>`).join('');
    return svg(`<path d="${hex}"/><path d="${spokes}" opacity=".4"/><path class="g-draw" pathLength="1" d="M32 14 L47 27 L42 44 L24 44 L20 30 Z"/>${dots}`, 'glyph--career');
  },
  future() {
    return svg(`<line x1="8" y1="42" x2="56" y2="42"/><line x1="14" y1="48" x2="50" y2="48" opacity=".5"/><line x1="22" y1="54" x2="42" y2="54" opacity=".3"/><g class="g-rise"><path d="M18 42 A14 14 0 0 1 46 42"/><path d="M32 18 v5 M17 25 l3.5 3.5 M47 25 l-3.5 3.5 M10 36 h4 M50 36 h4" opacity=".7"/></g>`, 'glyph--future');
  },
  skills() {
    return svg(`<line x1="8" y1="52" x2="56" y2="52"/><g class="g-bars"><rect x="12" y="40" width="7" height="12" rx="1"/><rect x="24" y="32" width="7" height="20" rx="1"/><rect x="36" y="24" width="7" height="28" rx="1"/><rect x="48" y="14" width="7" height="38" rx="1"/></g><path class="g-draw" pathLength="1" d="M10 36 L28 26 L38 18 L54 8" opacity=".6"/>`, 'glyph--skills');
  },
  values() {
    return svg(`<circle cx="32" cy="32" r="26" opacity=".45"/><g class="g-spin-q"><path d="M32 8 L38 32 L32 56 L26 32 Z"/><path d="M8 32 L32 27 L56 32 L32 37 Z" opacity=".55"/></g><circle cx="32" cy="32" r="2.2"/>`, 'glyph--values');
  },
};

export function glyph(name) {
  return (glyphs[name] || glyphs.numerology)();
}

