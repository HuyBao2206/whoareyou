// Biểu tượng "thời tiết" cho bản tin nghề nghiệp. Mức nào cũng lấy từ phân tích (calc.js); biểu tượng chỉ để dễ đọc.

const svg = (body, size, cls = '') =>
  `<svg class="fw-ic ${cls}" viewBox="0 0 48 48" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

const SUN = '<circle cx="24" cy="24" r="8"/><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11.3 11.3l3.5 3.5M33.2 33.2l3.5 3.5M11.3 36.7l3.5-3.5M33.2 14.8l3.5-3.5"/>';
const CLOUD = '<path d="M14 34h21a7 7 0 0 0 0-14 10 10 0 0 0-19-2.5A7.5 7.5 0 0 0 14 34z"/>';
const SUN_CLOUD = '<circle cx="17" cy="16" r="6"/><path d="M17 4v3M5 16h3M8.5 7.5l2 2M25.5 7.5l-2 2"/><path d="M16 38h19a6.5 6.5 0 0 0 0-13 9 9 0 0 0-17.4-2A7 7 0 0 0 16 38z"/>';
const RAIN = '<path d="M14 28h21a7 7 0 0 0 0-14 10 10 0 0 0-19-2.5A7.5 7.5 0 0 0 14 28z"/><path d="M17 33l-2 6M25 33l-2 6M33 33l-2 6"/>';

/** Biểu tượng theo mức thời tiết: 'nang' | 'may' | 'mua'. Mây có nắng khi nhu cầu đúng 3,5. */
export function skyIcon(sky, size = 28, demand = null) {
  if (sky === 'nang') return svg(SUN, size, 'fw-ic--sun');
  if (sky === 'mua') return svg(RAIN, size, 'fw-ic--rain');
  if (demand != null && demand >= 3.5) return svg(SUN_CLOUD, size, 'fw-ic--cloud');
  return svg(CLOUD, size, 'fw-ic--cloud');
}

/** Thước gió: 5 vạch, sáng theo cấp 1–5. */
export function windGauge(level, { size = 'md' } = {}) {
  const bars = [1, 2, 3, 4, 5]
    .map((i) => `<i class="${i <= level ? 'is-on' : ''}" style="--h:${30 + i * 14}%"></i>`)
    .join('');
  return `<span class="fw-wind fw-wind--${size}" aria-hidden="true">${bars}</span>`;
}

export const ICON_WIND = svg('<path d="M6 18h22a5 5 0 1 0-5-5M6 26h30a5 5 0 1 1-5 5M6 34h14"/>', 20);
export const ICON_IMG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>`;
export const ICON_X = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`;

/** Vẽ biểu tượng thời tiết lên canvas (ảnh xuất). */
export function drawSky(ctx, sky, x, y, s, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s / 48, s / 48);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const paths = sky === 'nang'
    ? ['M24 6v5M24 37v5M6 24h5M37 24h5M11.3 11.3l3.5 3.5M33.2 33.2l3.5 3.5M11.3 36.7l3.5-3.5M33.2 14.8l3.5-3.5']
    : sky === 'mua'
      ? ['M14 28h21a7 7 0 0 0 0-14 10 10 0 0 0-19-2.5A7.5 7.5 0 0 0 14 28z', 'M17 33l-2 6M25 33l-2 6M33 33l-2 6']
      : ['M14 34h21a7 7 0 0 0 0-14 10 10 0 0 0-19-2.5A7.5 7.5 0 0 0 14 34z'];
  if (sky === 'nang') {
    ctx.beginPath();
    ctx.arc(24, 24, 8, 0, Math.PI * 2);
    ctx.stroke();
  }
  paths.forEach((d) => ctx.stroke(new Path2D(d)));
  ctx.restore();
}
