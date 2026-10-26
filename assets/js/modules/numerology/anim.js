// Hiển thị và chuyển động cho phép tính rút gọn: chữ số hiện từng bước,
// tổng của bước trước tách ra thành các chữ số trượt xuống bước sau rồi gộp lại.

import { G, reducedMotion, escapeHtml } from '../../core/utils.js';
import { stepsToString } from './calc.js';

export const numColor = (v) => (v ? `var(--n${v})` : 'var(--muted)');

/** HTML cho phép tính. labels = true thì ghi chữ cái nhỏ phía trên số (dùng cho họ tên). */
export function stepsHtml(steps, { labels = false } = {}) {
  if (!steps || !steps.length) return '';
  const rows = steps
    .map((s, i) => {
      const terms = s.terms
        .map(
          (t, j) =>
            `${j ? '<span class="steps__op">+</span>' : ''}<span class="steps__t${labels && t.label ? ' has-label' : ''}">${
              labels && t.label ? `<small>${escapeHtml(t.label)}</small>` : ''
            }${t.v}</span>`
        )
        .join('');
      return `${i ? '<span class="steps__arrow">→</span>' : ''}<span class="steps__row">${terms}<span class="steps__eq">=</span><span class="steps__tot">${s.total}</span></span>`;
    })
    .join('');
  return `<p class="visually-hidden">Phép tính: ${escapeHtml(stepsToString(steps))}</p><div class="steps" aria-hidden="true">${rows}</div>`;
}

/** Chạy chuyển động cho một khối .steps. Trả về timeline (hoặc null). */
export function animateSteps(root, { delay = 0 } = {}) {
  const gsap = G();
  const el = root.querySelector('.steps');
  if (!el || !gsap) return null;
  if (reducedMotion()) {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, delay });
    return null;
  }
  const tl = gsap.timeline({ delay });
  const rows = [...el.querySelectorAll('.steps__row')];
  const arrows = [...el.querySelectorAll('.steps__arrow')];
  rows.forEach((row, i) => {
    const terms = [...row.querySelectorAll('.steps__t')];
    const ops = [...row.querySelectorAll('.steps__op')];
    const eq = row.querySelector('.steps__eq');
    const tot = row.querySelector('.steps__tot');
    const at = i === 0 ? 0 : '>-0.05';
    if (i === 0) {
      tl.from(terms, { y: 16, opacity: 0, duration: 0.45, ease: 'power3.out', stagger: Math.min(0.05, 0.6 / terms.length) }, at);
      tl.from(ops, { opacity: 0, duration: 0.3, stagger: Math.min(0.04, 0.5 / Math.max(1, ops.length)) }, '<0.05');
    } else {
      // Các chữ số của tổng trước trượt từ vị trí tổng đó xuống bước này.
      const prev = rows[i - 1].querySelector('.steps__tot');
      const pr = prev.getBoundingClientRect();
      tl.from(arrows[i - 1], { opacity: 0, x: -8, duration: 0.3, ease: 'power2.out' }, at);
      terms.forEach((t, k) => {
        const r = t.getBoundingClientRect();
        const dx = pr.left + (pr.width / terms.length) * k - r.left;
        const dy = pr.top - r.top;
        tl.from(t, { x: dx, y: dy, opacity: 0.2, duration: 0.6, ease: 'expo.inOut' }, k === 0 ? '<0.1' : '<0.04');
      });
      tl.from(ops, { opacity: 0, duration: 0.25 }, '>-0.2');
    }
    tl.from(eq, { opacity: 0, duration: 0.25 }, '>-0.05');
    tl.from(tot, { opacity: 0, scale: 0.5, duration: 0.5, ease: 'back.out(2.2)' }, '<0.05');
  });
  return tl;
}

/** Số lớn đếm lên tới giá trị cuối. */
export function countUp(el, to, { delay = 0, duration = 1.1, suffix = '' } = {}) {
  const gsap = G();
  if (!el) return;
  if (!gsap || reducedMotion() || !Number.isFinite(to)) {
    el.textContent = String(to) + suffix;
    return;
  }
  const o = { n: 0 };
  el.textContent = '0';
  gsap.to(o, {
    n: to,
    delay,
    duration,
    ease: 'power2.out',
    onUpdate: () => (el.textContent = String(Math.round(o.n))),
    onComplete: () => (el.textContent = String(to) + suffix),
  });
}

/** Con số kết quả hiện ra: phóng nhẹ và đổi màu. */
export function popNumber(el, delay = 0) {
  const gsap = G();
  if (!gsap || !el) return;
  if (reducedMotion()) {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, delay });
    return;
  }
  gsap.from(el, { scale: 0.6, opacity: 0, y: 10, duration: 0.8, ease: 'back.out(1.8)', delay });
}
