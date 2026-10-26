// Chuyển động của khung trang: hero, vòng số, thẻ, con trỏ, reveal khi cuộn.
// Mọi thứ đều kiểm tra gsap và prefers-reduced-motion trước khi chạy.

import { G, reducedMotion, canHover, nfc, $$ } from './utils.js';

const NS = 'http://www.w3.org/2000/svg';

/** Vẽ vòng số 1–9 hình học phía sau hero. */
export function buildRing(host) {
  if (!host) return;
  const c = 300;
  const parts = [];
  parts.push(`<circle cx="${c}" cy="${c}" r="286" class="ring__line"/>`);
  parts.push(`<circle cx="${c}" cy="${c}" r="236" class="ring__line ring__line--faint"/>`);
  parts.push(`<circle cx="${c}" cy="${c}" r="120" class="ring__line ring__line--faint"/>`);
  let ticks = '';
  for (let i = 0; i < 108; i++) {
    const a = (i / 108) * Math.PI * 2;
    const r1 = i % 12 === 0 ? 270 : 278;
    ticks += `M${(c + r1 * Math.cos(a)).toFixed(1)} ${(c + r1 * Math.sin(a)).toFixed(1)} L${(c + 286 * Math.cos(a)).toFixed(1)} ${(c + 286 * Math.sin(a)).toFixed(1)} `;
  }
  parts.push(`<path d="${ticks}" class="ring__line ring__line--faint"/>`);
  const pt = (n, r) => {
    const a = (n / 9) * Math.PI * 2 - Math.PI / 2;
    return [c + r * Math.cos(a), c + r * Math.sin(a)];
  };
  // Hình sao chín cánh nối các điểm 1 → 4 → 7..., cộng tam giác 3-6-9.
  const seq = [1, 4, 2, 8, 5, 7, 1];
  const d1 = seq.map((n, i) => (i ? 'L' : 'M') + pt(n % 9, 236).map((v) => v.toFixed(1)).join(' ')).join(' ');
  const d2 = [3, 6, 9, 3].map((n, i) => (i ? 'L' : 'M') + pt(n % 9, 236).map((v) => v.toFixed(1)).join(' ')).join(' ');
  parts.push(`<path d="${d1}" class="ring__line ring__star"/>`);
  parts.push(`<path d="${d2}" class="ring__line ring__star"/>`);
  for (let n = 1; n <= 9; n++) {
    const [x, y] = pt(n % 9, 236);
    const [tx, ty] = pt(n % 9, 254);
    parts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" class="ring__dot"/>`);
    parts.push(`<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" class="ring__num" text-anchor="middle" dominant-baseline="central">${n}</text>`);
  }
  host.innerHTML = `<div class="ring__tilt"><svg viewBox="0 0 600 600" class="ring__svg" aria-hidden="true" focusable="false" xmlns="${NS}"><g class="ring__spin">${parts.join('')}</g></svg></div>`;

  const gsap = G();
  if (!gsap || reducedMotion() || !canHover()) return;
  const tilt = host.querySelector('.ring__tilt');
  const rx = gsap.quickTo(tilt, 'rotationX', { duration: 1.2, ease: 'power3.out' });
  const ry = gsap.quickTo(tilt, 'rotationY', { duration: 1.2, ease: 'power3.out' });
  window.addEventListener(
    'pointermove',
    (e) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      rx(py * -14);
      ry(px * 18);
    },
    { passive: true }
  );
}

/**
 * Tiêu đề các phần hiện ra theo từng dòng khi cuộn tới (GSAP SplitText).
 * Tiêu đề hero dùng CSS để chữ hiện ngay ở lần vẽ đầu, không phải chờ JS hay font.
 */
export function splitTitles(root = document) {
  const gsap = G();
  const SplitText = window.SplitText;
  const ST = window.ScrollTrigger;
  if (!gsap || !SplitText || !ST || reducedMotion()) return;
  const run = () => {
    $$('[data-split]', root).forEach((el) => {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = '1';
      // Chuẩn hoá NFC trước khi tách để dấu tiếng Việt không bị tách khỏi chữ.
      el.textContent = nfc(el.textContent);
      const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
      gsap.from(split.lines, {
        yPercent: 110,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });
  };
  // Đợi font tải xong để cắt dòng đúng.
  (document.fonts?.ready || Promise.resolve()).then(run);
}

/** Hiệu ứng spotlight theo con trỏ và tilt rất nhẹ cho thẻ chủ đề. */
export function bindCards(root) {
  const gsap = G();
  const hover = canHover();
  $$('.topic', root).forEach((card) => {
    if (!hover) return;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
    if (!gsap || reducedMotion()) return;
    const rx = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3.out' });
    const ry = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3.out' });
    card.addEventListener('pointermove', (e) => {
      if (card.classList.contains('is-origin')) return;
      const r = card.getBoundingClientRect();
      rx(((e.clientY - r.top) / r.height - 0.5) * -4);
      ry(((e.clientX - r.left) / r.width - 0.5) * 5);
    });
    card.addEventListener('pointerleave', () => {
      rx(0);
      ry(0);
    });
  });
}

/** Các khối có data-reveal hiện dần khi cuộn tới. */
export function scrollReveals(root = document) {
  const gsap = G();
  const ST = window.ScrollTrigger;
  if (!gsap || !ST || reducedMotion()) return;
  const items = $$('[data-reveal]', root).filter((el) => !el.dataset.revealed);
  if (!items.length) return;
  items.forEach((el) => (el.dataset.revealed = '1'));
  gsap.set(items, { opacity: 0, y: 28 });
  ST.batch(items, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, overwrite: true }),
  });
}

/** Con trỏ phụ dạng vòng mảnh, chỉ trên thiết bị có hover thật. Con trỏ gốc vẫn giữ nguyên. */
export function customCursor() {
  const gsap = G();
  if (!gsap || !canHover() || reducedMotion()) return;
  const dot = document.createElement('div');
  dot.className = 'cursor';
  dot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dot);
  const x = gsap.quickTo(dot, 'x', { duration: 0.35, ease: 'power3.out' });
  const y = gsap.quickTo(dot, 'y', { duration: 0.35, ease: 'power3.out' });
  let shown = false;
  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      if (!shown) {
        shown = true;
        gsap.set(dot, { x: e.clientX, y: e.clientY });
        dot.classList.add('is-on');
      }
      x(e.clientX);
      y(e.clientY);
      const t = e.target.closest?.('a, button, summary, label, [data-cursor], input, .topic');
      dot.classList.toggle('is-hover', !!t);
    },
    { passive: true }
  );
  document.addEventListener('pointerleave', () => dot.classList.remove('is-on'));
  document.addEventListener('pointerenter', () => shown && dot.classList.add('is-on'));
}
