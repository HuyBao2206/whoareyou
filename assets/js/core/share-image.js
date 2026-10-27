// Bộ xuất ảnh kết quả dùng chung: vẽ thẳng lên <canvas> rồi tải về thành PNG.
// Không chụp DOM, nên ảnh chỉ chứa đúng những gì thẻ vẽ: không tên, không ngày sinh, không đường link cá nhân.
// Mọi ảnh đều có chân trang mang dấu HUB (tên web, địa chỉ web, chữ ký "— HUB").
//
// Cách dùng:
//   await saveImage({
//     filename: 'hub-cung-hoang-dao.png',
//     width: 1080, height: 1350,
//     fonts: ['400 40px Newsreader'],          // font cần chờ tải trước khi vẽ
//     draw(ctx, kit) { ... kit.wrap(...); kit.brand({ ink, muted }); },
//   });

import { config } from '../config.js';

const DISPLAY = "Newsreader, 'Noto Serif', Georgia, serif";
const BODY = "'Be Vietnam Pro', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";
const HAND = "'Dancing Script', 'Segoe Script', cursive";

export const FONTS = Object.freeze({ display: DISPLAY, body: BODY, hand: HAND });

/** Chờ font tải xong (tối đa ~1,5 giây) để chữ trên ảnh dùng đúng font của web. */
async function waitFonts(list) {
  if (!document.fonts) return;
  const all = [`400 32px ${DISPLAY}`, `italic 300 32px ${DISPLAY}`, `500 24px ${BODY}`, `500 40px ${HAND}`, ...list];
  const timeout = new Promise((r) => setTimeout(r, 1500));
  await Promise.race([Promise.all(all.map((f) => document.fonts.load(f, 'Aă— HUB').catch(() => null))), timeout]);
}

/**
 * Viết đoạn chữ xuống dòng theo chiều rộng tối đa. Trả về toạ độ y sau dòng cuối.
 * @param {CanvasRenderingContext2D} ctx  đã đặt font, màu, textAlign trước khi gọi
 */
export function wrapText(ctx, text, x, y, maxWidth, lineHeight, { maxLines = Infinity } = {}) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else line = test;
  }
  if (line) lines.push(line);
  const shown = lines.slice(0, maxLines);
  if (lines.length > maxLines) shown[shown.length - 1] = shown[shown.length - 1].replace(/\s*\S*$/, '…');
  shown.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return y + shown.length * lineHeight;
}

/** Đường bo góc (chưa tô hay vẽ viền). */
export function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Chân trang mang dấu HUB, vẽ ở mép dưới ảnh. */
export function drawBrand(ctx, { W, H, ink = '#141A2E', muted = '#625D57', line = 'rgba(20,26,46,0.18)', pad = 72 }) {
  const y = H - 118;
  ctx.save();
  ctx.strokeStyle = line;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(pad, y);
  ctx.lineTo(W - pad, y);
  ctx.stroke();
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillStyle = ink;
  ctx.font = `400 30px ${DISPLAY}`;
  ctx.fillText(config.site.nameVi, pad, y + 52);
  ctx.fillStyle = muted;
  ctx.font = `400 22px ${BODY}`;
  ctx.fillText(config.site.url.replace(/^https?:\/\//, '').replace(/\/$/, ''), pad, y + 88);
  ctx.textAlign = 'right';
  ctx.fillStyle = ink;
  ctx.font = `500 48px ${HAND}`;
  ctx.fillText('— HUB', W - pad, y + 72);
  ctx.restore();
}

/**
 * Vẽ và tải ảnh PNG về máy. Trả về true nếu tạo được ảnh.
 * @param {{ filename:string, width?:number, height?:number, fonts?:string[], draw:(ctx, kit)=>void }} o
 */
export async function saveImage({ filename, width = 1080, height = 1350, fonts = [], draw }) {
  await waitFonts(fonts);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return false;
  const kit = {
    W: width,
    H: height,
    fonts: FONTS,
    wrap: (text, x, y, maxW, lh, o) => wrapText(ctx, text, x, y, maxW, lh, o),
    roundRect: (x, y, w, h, r) => roundRect(ctx, x, y, w, h, r),
    brand: (o = {}) => drawBrand(ctx, { W: width, H: height, ...o }),
  };
  draw(ctx, kit);
  const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'));
  if (!blob) return false;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  return true;
}
