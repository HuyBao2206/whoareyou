import { config, SOON_NOTE } from './config.js';
import { startRouter, onRoute, navigate, goHome } from './core/router.js';
import { openOverlay, closeOverlay, isOpen } from './core/overlay.js';
import { initTheme } from './core/theme.js';
import { toast } from './core/toast.js';
import { glyph } from './core/glyphs.js';
import { buildRing, heroIntro, bindCards, scrollReveals, customCursor } from './core/motion.js';
import { escapeHtml, nfc, G } from './core/utils.js';

const gsap = G();
if (gsap) {
  const plugins = ['ScrollTrigger', 'Flip', 'SplitText'].map((n) => window[n]).filter(Boolean);
  gsap.registerPlugin(...plugins);
  document.documentElement.classList.add('has-gsap');
}

/* ---------- Nội dung lấy từ config ---------- */

function fillSite() {
  const { nameVi, nameEn } = config.site;
  const title = document.querySelector('.hero__title');
  if (title) {
    // Ngắt dòng sau dấu "&" để tiêu đề cân đối.
    const parts = nfc(nameVi).split(/(?<=&)\s+/);
    title.innerHTML = parts.map((p) => `<span class="line">${escapeHtml(p)}</span>`).join(' ');
  }
  document.querySelectorAll('[data-site="nameEn"]').forEach((el) => (el.textContent = nameEn));
  document.querySelectorAll('[data-site="nameVi"]').forEach((el) => (el.textContent = nfc(nameVi)));
  document.querySelectorAll('[data-link]').forEach((a) => {
    const key = a.dataset.link;
    const v = config.links[key];
    if (!v) return;
    a.href = key === 'email' ? `mailto:${v}` : v;
  });
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

function buildTopics() {
  const list = document.getElementById('topic-list');
  if (!list) return;
  list.innerHTML = config.topics
    .map((t, i) => {
      const active = t.status === 'active';
      return `
      <li class="topics__item${t.size === 'wide' ? ' topics__item--wide' : ''}" data-reveal>
        <a class="topic${active ? ' topic--active' : ''}" href="#/${t.slug}" data-topic="${t.id}">
          <span class="topic__spot" aria-hidden="true"></span>
          <span class="topic__top">
            <span class="topic__index" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
            <span class="topic__status ${active ? 'is-live' : ''}">${active ? 'Đang mở' : 'Sắp ra mắt'}</span>
          </span>
          <span class="topic__glyph">${glyph(t.glyph)}</span>
          <span class="topic__text">
            <span class="topic__en" lang="en">${escapeHtml(t.nameEn)}</span>
            <span class="topic__name">${escapeHtml(t.nameVi)}</span>
            <span class="topic__desc">${escapeHtml(t.desc)}</span>
          </span>
          <span class="topic__cta" aria-hidden="true">${active ? 'Mở thẻ' : 'Xem trước'}<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
      </li>`;
    })
    .join('');
  bindCards(list);
}

/* ---------- Điều phối route ↔ overlay ---------- */

let active = null; // { topic, module }
let token = 0;

const ctx = { navigate, goHome, toast, config };

function soonBody(topic) {
  return `
    <div class="soon">
      <span class="soon__glyph">${glyph(topic.glyph)}</span>
      <p class="soon__label">Sắp ra mắt</p>
      ${topic.soon.map((p) => `<p class="soon__text">${escapeHtml(p)}</p>`).join('')}
      <p class="soon__note">${escapeHtml(SOON_NOTE)}</p>
      <button type="button" class="btn btn--ghost" data-close-soon>Quay lại các chủ đề</button>
    </div>`;
}

async function handleRoute(route) {
  const my = ++token;

  if (route.path === '/') {
    if (isOpen()) await closeOverlay();
    active?.module?.unmount?.();
    active = null;
    return;
  }

  const [slug] = route.segments;
  const topic = config.topics.find((t) => t.slug === slug);
  if (!topic) {
    if (isOpen()) await closeOverlay();
    navigate('/', { replace: true });
    toast('Không tìm thấy trang bạn cần, mình đưa bạn về trang chủ nhé.');
    return;
  }

  if (active && active.topic === topic && isOpen()) {
    active.module?.update?.(route);
    return;
  }

  if (isOpen()) {
    active?.module?.unmount?.();
    await closeOverlay();
    if (my !== token) return;
  }

  const origin = document.querySelector(`[data-topic="${topic.id}"]`);

  if (topic.status !== 'active') {
    const api = openOverlay({ origin, title: topic.nameVi, kicker: topic.nameEn, size: 'small', onRequestClose: goHome });
    api.body.innerHTML = soonBody(topic);
    api.body.querySelector('[data-close-soon]').addEventListener('click', goHome);
    active = { topic, module: null };
    return;
  }

  const api = openOverlay({ origin, title: topic.nameVi, kicker: topic.nameEn, size: 'full', onRequestClose: goHome });
  api.body.innerHTML = `<p class="ov__loading" role="status">Đang mở thẻ…</p>`;
  active = { topic, module: null };
  try {
    const mod = (await topic.load()).default;
    if (my !== token || !isOpen()) return;
    active.module = mod;
    mod.mount(api, route, ctx);
  } catch (err) {
    console.error(err);
    if (my !== token) return;
    api.body.innerHTML = `<p class="ov__loading" role="alert">Chưa tải được nội dung. Bạn kiểm tra kết nối mạng rồi thử mở lại nhé.</p>`;
  }
}

/* ---------- Khởi động ---------- */

fillSite();
initTheme(document.getElementById('theme-toggle'));
buildRing(document.querySelector('.ring'));
buildTopics();
heroIntro();
scrollReveals();
customCursor();
onRoute(handleRoute);
startRouter();
