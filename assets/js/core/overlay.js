// Overlay dùng chung cho mọi thẻ chủ đề.
// Mở: tấm thẻ phóng to thành sheet bằng GSAP Flip. Đóng: thu về đúng tấm thẻ.
// Đóng được bằng Esc, nút X, vuốt xuống (mobile) và nút Back (router lo).

import { G, reducedMotion, isMobileSheet, focusables, h, escapeHtml } from './utils.js';

let ov = null;

const CLOSE_ICON = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`;

export const isOpen = () => !!ov;
export const current = () => ov;

function lockScroll() {
  const sbw = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--sbw', sbw + 'px');
  document.documentElement.classList.add('is-locked');
}
function unlockScroll() {
  document.documentElement.classList.remove('is-locked');
  document.documentElement.style.removeProperty('--sbw');
}

function tocHtml(toc) {
  if (!toc || !toc.length) return '';
  return toc
    .map((t) => `<button type="button" class="ov__toc-link" data-jump="${escapeHtml(t.id)}">${escapeHtml(t.label)}</button>`)
    .join('');
}

/**
 * Mở overlay.
 * @param {object} o
 * @param {HTMLElement} o.origin   tấm thẻ được bấm (để Flip phóng ra và thu về)
 * @param {string} o.title         tên thẻ
 * @param {string} o.kicker        dòng nhỏ phía trên tên (tên tiếng Anh)
 * @param {'full'|'small'} o.size
 * @param {Array<{id,label}>} o.toc
 * @param {Function} o.onRequestClose  gọi khi người dùng muốn đóng (router sẽ xử lý)
 */
export function openOverlay({ origin, title, kicker = '', size = 'full', toc = [], onRequestClose }) {
  if (ov) destroy();
  const page = document.getElementById('page');
  const root = h(`
    <div class="ov ov--${size}">
      <div class="ov__backdrop"></div>
      <div class="ov__sheet" role="dialog" aria-modal="true" aria-labelledby="ov-title" tabindex="-1">
        <div class="ov__grab" aria-hidden="true"><span></span></div>
        <div class="ov__bar">
          <div class="ov__heading">
            <p class="ov__kicker">${escapeHtml(kicker)}</p>
            <h2 class="ov__title" id="ov-title">${escapeHtml(title)}</h2>
          </div>
          <nav class="ov__toc" aria-label="Đi nhanh tới">${tocHtml(toc)}</nav>
          <button type="button" class="ov__close" aria-label="Đóng">${CLOSE_ICON}</button>
        </div>
        <div class="ov__scroll"><div class="ov__body"></div></div>
      </div>
    </div>`);

  const sheet = root.querySelector('.ov__sheet');
  const scroller = root.querySelector('.ov__scroll');
  const body = root.querySelector('.ov__body');
  const backdrop = root.querySelector('.ov__backdrop');
  const bar = root.querySelector('.ov__bar');

  ov = { root, sheet, scroller, body, backdrop, bar, origin, page, onRequestClose, closing: false, swiped: false };

  const requestClose = () => (onRequestClose ? onRequestClose() : closeOverlay());
  ov.requestClose = requestClose;

  root.querySelector('.ov__close').addEventListener('click', requestClose);
  backdrop.addEventListener('click', requestClose);
  bar.querySelector('.ov__toc').addEventListener('click', (e) => {
    const b = e.target.closest('[data-jump]');
    if (b) jumpTo(b.dataset.jump);
  });

  document.getElementById('overlay-root').appendChild(root);
  fitToc();
  if ('ResizeObserver' in window) {
    ov.ro = new ResizeObserver(() => fitToc());
    ov.ro.observe(sheet);
  }
  page.inert = true;
  lockScroll();
  bindKeys();
  bindSwipe();

  animateIn();
  sheet.focus({ preventScroll: true });

  return { body, scroller, sheet, setToc, setTitle, jumpTo };
}

export function setToc(toc) {
  if (!ov) return;
  ov.bar.querySelector('.ov__toc').innerHTML = tocHtml(toc);
  fitToc();
}

// Trên màn hình rộng, tên thẻ và mục lục nằm chung một hàng. Khi mục lục dài không vừa
// (vd thẻ Cung hoàng đạo có 7 mục), thanh tiêu đề xuống hai hàng để thấy đủ mà không cần kéo ngang.
const wide = window.matchMedia('(min-width: 720px)');
function fitToc() {
  if (!ov) return;
  const { bar } = ov;
  const toc = bar.querySelector('.ov__toc');
  bar.classList.remove('is-stacked');
  if (wide.matches && toc.scrollWidth > toc.clientWidth + 1) bar.classList.add('is-stacked');
}

export function setTitle(title, kicker) {
  if (!ov) return;
  ov.bar.querySelector('.ov__title').textContent = title;
  if (kicker != null) ov.bar.querySelector('.ov__kicker').textContent = kicker;
}

/** Cuộn mượt trong overlay tới phần tử có id. */
export function jumpTo(id) {
  if (!ov) return;
  const el = ov.body.querySelector('#' + CSS.escape(id));
  if (!el) return;
  const top = el.getBoundingClientRect().top - ov.scroller.getBoundingClientRect().top + ov.scroller.scrollTop - 12;
  ov.scroller.scrollTo({ top, behavior: reducedMotion() ? 'auto' : 'smooth' });
  const focusTarget = el.matches('h2, h3, section') ? el : el.querySelector('h2, h3');
  if (focusTarget) {
    if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
    focusTarget.focus({ preventScroll: true });
  }
}

function pageOrigin() {
  const y = window.scrollY + window.innerHeight / 2;
  return `50% ${y}px`;
}

function animateIn() {
  const { root, sheet, backdrop, origin, page } = ov;
  const gsap = G();
  const Flip = window.Flip;
  const content = [ov.bar, ov.scroller];

  if (!gsap || reducedMotion()) {
    root.classList.add('is-in');
    return;
  }

  root.classList.add('is-in', 'is-animating');
  const tl = gsap.timeline({ onComplete: () => ov && root.classList.remove('is-animating') });
  ov.tl = tl;
  gsap.set(page, { transformOrigin: pageOrigin() });
  tl.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0);
  tl.to(page, { scale: 0.965, opacity: 0.55, duration: 0.7, ease: 'expo.out' }, 0);

  if (Flip && origin && origin.isConnected) {
    gsap.set(origin, { rotationX: 0, rotationY: 0 });
    Flip.fit(sheet, origin, { scale: true });
    origin.classList.add('is-origin');
    gsap.set(content, { opacity: 0 });
    tl.to(sheet, { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: 0.8, ease: 'expo.inOut' }, 0);
    tl.to(content, { opacity: 1, duration: 0.35, ease: 'power1.out', stagger: 0.06 }, 0.5);
  } else {
    tl.fromTo(sheet, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, 0);
  }
}

/** Đóng overlay. Trả về Promise khi đã gỡ xong. */
export function closeOverlay() {
  if (!ov || ov.closing) return Promise.resolve();
  ov.closing = true;
  const { root, sheet, backdrop, origin, page } = ov;
  const gsap = G();
  const Flip = window.Flip;

  if (ov.swiped || !gsap || reducedMotion()) {
    root.classList.remove('is-in');
    root.classList.add('is-out');
    if (gsap && ov.swiped) gsap.to(page, { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out', clearProps: 'all' });
    return new Promise((res) => setTimeout(() => { destroy(); res(); }, ov.swiped ? 200 : 260));
  }

  ov.tl?.kill();
  return new Promise((res) => {
    const tl = gsap.timeline({ onComplete: () => { destroy(); res(); } });
    tl.to([ov.bar, ov.scroller], { opacity: 0, duration: 0.2, ease: 'power1.in' }, 0);
    tl.to(backdrop, { opacity: 0, duration: 0.55, ease: 'power2.inOut' }, 0.1);
    tl.to(page, { scale: 1, opacity: 1, duration: 0.6, ease: 'expo.inOut', clearProps: 'transform,opacity,transformOrigin' }, 0.05);
    if (Flip && origin && origin.isConnected && origin.getClientRects().length) {
      tl.add(Flip.fit(sheet, origin, { scale: true, duration: 0.65, ease: 'expo.inOut' }), 0.1);
    } else {
      tl.to(sheet, { y: 40, opacity: 0, duration: 0.35, ease: 'power2.in' }, 0.05);
    }
  });
}

function destroy() {
  if (!ov) return;
  const { root, origin, page } = ov;
  document.removeEventListener('keydown', ov.onKey);
  ov.ro?.disconnect();
  root.remove();
  page.inert = false;
  const gsap = G();
  if (gsap) gsap.set(page, { clearProps: 'transform,opacity,transformOrigin' });
  unlockScroll();
  if (origin && origin.isConnected) {
    origin.classList.remove('is-origin');
    origin.focus({ preventScroll: true });
  }
  ov = null;
}

function bindKeys() {
  ov.onKey = (e) => {
    if (!ov) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      ov.requestClose();
    } else if (e.key === 'Tab') {
      const list = focusables(ov.sheet);
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === ov.sheet)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  document.addEventListener('keydown', ov.onKey);
}

// Vuốt xuống để đóng trên mobile. Chỉ kích hoạt khi nội dung đang ở đầu trang.
function bindSwipe() {
  const { sheet, scroller, backdrop } = ov;
  let startY = 0;
  let startT = 0;
  let dy = 0;
  let tracking = false;
  let dragging = false;

  const setY = (y) => {
    const gsap = G();
    if (gsap) gsap.set(sheet, { y });
    else sheet.style.transform = `translate3d(0, ${y}px, 0)`;
  };

  sheet.addEventListener(
    'touchstart',
    (e) => {
      if (!isMobileSheet() || ov.closing || e.touches.length > 1) return;
      if (e.target.closest('input, textarea, select, [data-noswipe]')) return;
      if (scroller.contains(e.target) && scroller.scrollTop > 0) return;
      startY = e.touches[0].clientY;
      startT = performance.now();
      dy = 0;
      tracking = true;
      dragging = false;
    },
    { passive: true }
  );

  sheet.addEventListener(
    'touchmove',
    (e) => {
      if (!tracking) return;
      dy = e.touches[0].clientY - startY;
      if (!dragging && (dy <= 0 || scroller.scrollTop > 0)) {
        tracking = false;
        return;
      }
      dragging = true;
      e.preventDefault();
      const y = Math.max(0, dy);
      setY(y);
      backdrop.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.8)));
    },
    { passive: false }
  );

  const end = () => {
    if (!tracking) return;
    tracking = false;
    if (!dragging) return;
    dragging = false;
    const v = dy / Math.max(1, performance.now() - startT);
    const gsap = G();
    if (dy > 140 || v > 0.55) {
      ov.swiped = true;
      const done = () => ov && ov.requestClose();
      if (gsap) gsap.to(sheet, { y: window.innerHeight, duration: 0.3, ease: 'power2.in', onComplete: done });
      else {
        setY(window.innerHeight);
        done();
      }
    } else {
      backdrop.style.opacity = '';
      if (gsap) gsap.to(sheet, { y: 0, duration: 0.4, ease: 'power3.out' });
      else setY(0);
    }
  };
  sheet.addEventListener('touchend', end);
  sheet.addEventListener('touchcancel', end);
}
