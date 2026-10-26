export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
export const isMobileSheet = () => window.matchMedia('(max-width: 719px)').matches;

/** Trả về gsap nếu đã nạp được từ CDN; trang vẫn chạy khi thiếu nó. */
export const G = () => window.gsap || null;

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Tạo element từ chuỗi HTML (một node gốc). */
export function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export const nfc = (s) => String(s).normalize('NFC');

export const FOCUSABLE =
  'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

export function focusables(root) {
  return $$(FOCUSABLE, root).filter((el) => !el.closest('[inert]') && el.offsetParent !== null);
}

export const wait = (ms) => new Promise((r) => setTimeout(r, ms));
