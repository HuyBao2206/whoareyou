// Hai vòng trời: vòng hoàng đạo (trái) và vòng Can Chi (phải), vẽ bằng SVG.
// lockRings() quay các vòng rồi dừng đúng ô của người dùng ở đỉnh, kèm một nhịp "khoá" nhẹ.
// Có GSAP thì dùng GSAP; không có thì dùng CSS transition; reduced-motion thì đặt thẳng vị trí.

import { SIGN_PATHS, CAN_HAN } from './glyphs.js';
import { SIGNS } from './calc.js';
import { CHI } from '../../core/lunar.js';
import animals from './animals.js';
import { G, reducedMotion } from '../../core/utils.js';

const C = 200; // tâm
const rad = (deg) => ((deg - 90) * Math.PI) / 180; // 0° ở đỉnh, chiều kim đồng hồ
const pt = (r, deg) => [C + r * Math.cos(rad(deg)), C + r * Math.sin(rad(deg))];
const f = (n) => n.toFixed(2);

/** Hình quạt vành khăn từ góc a0 tới a1, bán kính r0..r1. */
function sector(r0, r1, a0, a1) {
  const [x0, y0] = pt(r1, a0);
  const [x1, y1] = pt(r1, a1);
  const [x2, y2] = pt(r0, a1);
  const [x3, y3] = pt(r0, a0);
  return `M${f(x0)} ${f(y0)}A${r1} ${r1} 0 0 1 ${f(x1)} ${f(y1)}L${f(x2)} ${f(y2)}A${r0} ${r0} 0 0 0 ${f(x3)} ${f(y3)}Z`;
}

function dividers(n, r0, r1, cls) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i + 0.5) * (360 / n);
    const [x0, y0] = pt(r0, a);
    const [x1, y1] = pt(r1, a);
    return `<line class="${cls}" x1="${f(x0)}" y1="${f(y0)}" x2="${f(x1)}" y2="${f(y1)}"/>`;
  }).join('');
}

// Những đốm sao cố định (không ngẫu nhiên theo lần mở) để vòng trời luôn giống nhau.
function stars(count, rMax, seed) {
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: count }, () => {
    const r = Math.sqrt(rnd()) * rMax;
    const [x, y] = pt(r, rnd() * 360);
    return `<circle cx="${f(x)}" cy="${f(y)}" r="${f(0.6 + rnd() * 1.3)}"/>`;
  }).join('');
}

function westRing() {
  const glyphs = SIGN_PATHS.map((d, i) => {
    const a = i * 30;
    return `<g transform="rotate(${a} ${C} ${C}) translate(${C - 13} ${C - 186}) scale(1.0833)"><path d="${d}"/></g>`;
  }).join('');
  return `
  <svg class="ring2 ring2--west" viewBox="0 0 400 400" role="img" aria-label="Vòng hoàng đạo với 12 cung">
    <circle class="w-disc" cx="${C}" cy="${C}" r="196"/>
    <g class="w-stars">${stars(46, 128, 7)}</g>
    <g class="w-sun"><circle cx="${C}" cy="${C}" r="15"/>${Array.from({ length: 12 }, (_, i) => {
      const [x0, y0] = pt(21, i * 30);
      const [x1, y1] = pt(i % 2 ? 27 : 31, i * 30);
      return `<line x1="${f(x0)}" y1="${f(y0)}" x2="${f(x1)}" y2="${f(y1)}"/>`;
    }).join('')}</g>
    <g class="ring2__spin" data-ring="sign" data-n="12">
      <circle class="w-band" cx="${C}" cy="${C}" r="173" />
      ${dividers(12, 150, 196, 'w-div')}
      <g class="w-glyphs">${glyphs}</g>
    </g>
    <circle class="w-edge" cx="${C}" cy="${C}" r="150"/>
    <circle class="w-edge" cx="${C}" cy="${C}" r="196"/>
    <path class="ring2__lock" d="${sector(150, 196, -15, 15)}"/>
    <path class="ring2__pin" d="M${C - 9} 0H${C + 9}L${C} 14Z"/>
  </svg>`;
}

function eastRing() {
  const chi = animals
    .map((a, i) => `<text class="e-chi" lang="zh" transform="rotate(${i * 30} ${C} ${C})" x="${C}" y="${C - 171}">${a.han}</text>`)
    .join('');
  const can = CAN_HAN.map((h, i) => `<text class="e-can" lang="zh" transform="rotate(${i * 36} ${C} ${C})" x="${C}" y="${C - 116}">${h}</text>`).join('');
  return `
  <svg class="ring2 ring2--east" viewBox="0 0 400 400" role="img" aria-label="Vòng Can Chi với 12 địa chi và 10 thiên can">
    <circle class="e-disc" cx="${C}" cy="${C}" r="196"/>
    <g class="ring2__spin" data-ring="chi" data-n="12">
      <path class="e-band" d="${sector(146, 196, 0, 359.99)}"/>
      ${dividers(12, 146, 196, 'e-div')}
      ${chi}
    </g>
    <g class="ring2__spin" data-ring="can" data-n="10">
      ${dividers(10, 92, 140, 'e-div2')}
      ${can}
    </g>
    <circle class="e-edge" cx="${C}" cy="${C}" r="146"/>
    <circle class="e-edge e-edge--thin" cx="${C}" cy="${C}" r="140"/>
    <circle class="e-edge e-edge--thin" cx="${C}" cy="${C}" r="92"/>
    <g class="e-core">
      <circle cx="${C}" cy="${C}" r="62"/>
      <circle class="e-core__ring" cx="${C}" cy="${C}" r="50"/>
      <rect class="e-seal" x="${C - 17}" y="${C - 17}" width="34" height="34" rx="3"/>
      <text class="e-seal__t" x="${C}" y="${C + 1}" lang="zh">年</text>
    </g>
    <path class="ring2__lock" d="${sector(146, 196, -15, 15)}"/>
    <path class="ring2__lock ring2__lock--can" d="${sector(92, 140, -18, 18)}"/>
    <path class="ring2__pin" d="M${C - 9} 0H${C + 9}L${C} 14Z"/>
  </svg>`;
}

export const ringsHtml = () => ({ west: westRing(), east: eastRing() });

/* ---------- Quay và khoá ---------- */

const angleOf = (g) => Number(g.dataset.angle || 0);

function setAngle(g, a) {
  g.dataset.angle = String(a);
  g.style.transform = `rotate(${a}deg)`;
}

/**
 * Quay một vòng tới ô index (đưa ô đó lên đỉnh), quay thêm `turns` vòng cho có đà.
 * dir = -1: ngược chiều kim đồng hồ, 1: thuận chiều.
 */
function targetAngle(g, index, turns, dir) {
  const n = Number(g.dataset.n);
  const base = -index * (360 / n); // góc để ô index nằm ở đỉnh
  const cur = angleOf(g);
  if (dir < 0) {
    let t = base;
    while (t > cur - 360 * turns) t -= 360;
    return t;
  }
  let t = base;
  while (t < cur + 360 * turns) t += 360;
  return t;
}

/**
 * Quay các vòng và khoá vào ô của người dùng.
 * @param {HTMLElement} root  phần tử chứa hai SVG
 * @param {{ sign:number, chi:number, can:number }} idx
 * @returns {Promise<void>} xong khi các vòng đã dừng
 */
export function lockRings(root, idx) {
  const groups = [...root.querySelectorAll('.ring2__spin')];
  const locks = [...root.querySelectorAll('.ring2__lock')];
  const gsap = G();
  const still = reducedMotion();
  root.querySelectorAll('.ring2').forEach((s) => s.classList.remove('is-locked'));
  locks.forEach((l) => l.classList.remove('is-on'));

  const plan = groups.map((g, i) => {
    const which = g.dataset.ring;
    const dir = which === 'sign' ? -1 : which === 'chi' ? 1 : -1;
    const turns = which === 'can' ? 2 : 1;
    return { g, to: targetAngle(g, idx[which], still ? 0 : turns, dir), delay: i * 0.12 };
  });

  // GSAP chỉ tính góc; việc xoay luôn đặt qua style.transform (tâm xoay khai báo trong zodiac.css).
  const tweenTo = (g, to, vars) => {
    const o = { a: angleOf(g) };
    g.dataset.angle = String(to);
    return gsap.to(o, { a: to, ...vars, onUpdate: () => (g.style.transform = `rotate(${o.a}deg)`) });
  };

  const finish = () => {
    root.querySelectorAll('.ring2').forEach((s) => s.classList.add('is-locked'));
    locks.forEach((l) => l.classList.add('is-on'));
    if (gsap && !still) {
      // Nhịp "khoá": các vòng nảy nhẹ như chốt cài vào khớp.
      plan.forEach(({ g, to }) => {
        setAngle(g, to + 2.4);
        tweenTo(g, to, { duration: 0.5, ease: 'elastic.out(1.3, 0.35)' });
      });
      gsap.fromTo(locks, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });
    }
  };

  if (still) {
    plan.forEach(({ g, to }) => setAngle(g, to));
    finish();
    return Promise.resolve();
  }

  if (gsap) {
    root.classList.add('is-js-spin');
    return new Promise((resolve) => {
      const tl = gsap.timeline({ onComplete: () => (finish(), resolve()) });
      plan.forEach(({ g, to, delay }) => tl.add(tweenTo(g, to, { duration: 2.1, ease: 'power3.inOut' }), delay));
    });
  }

  // Không có GSAP: dùng CSS transition (khai báo trong zodiac.css).
  return new Promise((resolve) => {
    plan.forEach(({ g, to, delay }) => {
      g.style.transitionDelay = `${delay}s`;
      setAngle(g, to);
    });
    setTimeout(() => (finish(), resolve()), 2300);
  });
}

export { SIGNS, CHI };
