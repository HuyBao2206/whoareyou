// Trang kết quả 5 thẻ thông điệp và trang Tra cứu.
// Trang kết quả chỉ đọc các con số trên URL, không cần (và không có) tên hay ngày sinh.

import { MESSAGES, PERSONAL_MONTH, ORIGINS } from './messages.js';
import { INDEX_META, INDEX_ORDER } from './content.js';
import { VALID, display, personalMonths } from './calc.js';
import { numColor, countUp } from './anim.js';
import { escapeHtml as e, G, reducedMotion } from '../../core/utils.js';

const ICON_ARROW = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const ICON_LINK = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>`;

const validFor = (k) => (k === 'lifePath' ? VALID.lifePath.all : k === 'personalYear' ? VALID.personalYear : VALID.name);

/** Đọc các con số hợp lệ từ URL. Giá trị lạ bị bỏ qua. */
export function parseParams(params) {
  const out = {};
  for (const k of INDEX_ORDER) {
    const raw = params.get(INDEX_META[k].key);
    if (!raw || !/^\d{1,2}$/.test(raw)) continue;
    const n = Number(raw);
    if (validFor(k).includes(n)) out[k] = n;
  }
  return out;
}

function list(items, ordered = false) {
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag} class="msg__list">${items.map((x) => `<li>${e(x)}</li>`).join('')}</${tag}>`;
}

/** 12 tháng cá nhân của một năm cá nhân. */
function monthsHtml(py) {
  const rows = personalMonths(py)
    .map(({ month, value }) => {
      const pm = PERSONAL_MONTH[value];
      if (!pm) return '';
      return `<li><span>Tháng ${month}</span><p><b>${e(pm.title)}</b> <i aria-label="tháng cá nhân ${value}">· ${value}</i><br>${e(pm.text)}</p></li>`;
    })
    .join('');
  return rows ? `<ol class="msg__quarters msg__months" role="list">${rows}</ol>` : '';
}

/** Đoạn “Vì sao số này mang ý nghĩa đó”. */
function originHtml(n) {
  const o = ORIGINS[n];
  return o ? `<div class="msg__block"><h5 class="msg__h">Gốc gác của số ${e(display(n))}</h5><p>${e(o)}</p></div>` : '';
}

function moreHtml(k, m, n) {
  if (k === 'personalYear') {
    const months = monthsHtml(n);
    return `
      <div class="msg__block"><h5 class="msg__h">Nên làm nhiều hơn</h5>${list(m.doMore)}</div>
      <div class="msg__block"><h5 class="msg__h">Nên bớt lại</h5>${list(m.doLess)}</div>
      ${
        months
          ? `<div class="msg__block"><h5 class="msg__h">Từng tháng trong năm</h5>
               <p class="msg__fine">Tháng cá nhân bằng năm cá nhân cộng số của tháng dương lịch, rồi rút gọn về một chữ số.</p>
               ${months}
             </div>`
          : ''
      }
      ${originHtml(n)}`;
  }
  const fields = m.fields
    ? `<div class="msg__block"><h5 class="msg__h">Lĩnh vực có thể hợp</h5>
         <ul class="msg__fields" role="list">${m.fields.map((f) => `<li class="chip">${e(f)}</li>`).join('')}</ul>
         <p class="msg__fine">Chỉ là gợi ý để tham khảo. Mang số nào thì cũng giỏi được bất kỳ nghề gì, miễn là đủ thích và chịu luyện.</p>
       </div>`
    : '';
  return `
    <div class="msg__block"><h5 class="msg__h">Điểm mạnh</h5>${list(m.strengths)}</div>
    <div class="msg__block"><h5 class="msg__h">Điều cần để ý</h5>${list(m.watchOut)}</div>
    <div class="msg__block"><h5 class="msg__h">Gợi ý làm được ngay</h5>${list(m.advice)}</div>
    ${fields}
    ${originHtml(n)}`;
}

/** HTML cho một thẻ thông điệp. n = null nghĩa là chỉ số chưa tính. */
export function cardHtml(k, n, i, { expanded = false, prefix = 'msg' } = {}) {
  const meta = INDEX_META[k];
  const id = `${prefix}-${meta.key}`;
  const head = `
    <header class="msg__head">
      <p class="msg__index"><span aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${e(meta.name)}</p>
      <p class="msg__what">${e(meta.what)}</p>
    </header>`;

  if (n == null) {
    const what = meta.calc === 'date' ? 'ngày sinh' : 'họ tên';
    return `
      <article class="msg msg--empty" id="${id}" style="--o:${i}" aria-labelledby="${id}-t">
        ${head}
        <p class="msg__num" aria-hidden="true"><span class="msg__digit">?</span></p>
        <h4 class="msg__title" id="${id}-t">Chưa tính</h4>
        <p class="msg__summary">Chỉ số này chưa được tính. Nhập ${what} là có ngay.</p>
        <button type="button" class="btn btn--ghost" data-go-calc="${meta.calc}">Quay lại tính</button>
      </article>`;
  }

  const m = MESSAGES[k][n];
  const disp = display(n);
  const [main, sub] = disp.split('/');
  return `
    <article class="msg${expanded ? ' is-open' : ''}" id="${id}" style="--c:${numColor(n)};--o:${i}" aria-labelledby="${id}-t">
      ${head}
      <div class="msg__hero">
        <p class="msg__num"><span class="visually-hidden">${e(meta.name)}: số ${e(disp)}. </span><span class="msg__digit" aria-hidden="true" data-to="${main}">${main}</span>${
          sub ? `<small aria-hidden="true">/${sub}</small>` : ''
        }</p>
        <h4 class="msg__title" id="${id}-t">${e(m.title)}</h4>
      </div>
      <ul class="msg__keys" role="list" aria-label="Từ khoá">${m.keywords.map((w) => `<li class="chip">${e(w)}</li>`).join('')}</ul>
      <p class="msg__summary">${e(m.summary)}</p>
      ${m.note ? `<blockquote class="msg__note"><p>${e(m.note)}</p></blockquote>` : ''}
      <div class="msg__more" id="${id}-more"${expanded ? '' : ' hidden'}>${moreHtml(k, m, n)}</div>
      ${
        expanded
          ? ''
          : `<button type="button" class="msg__toggle" aria-expanded="false" aria-controls="${id}-more"><span>Đọc đầy đủ</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>`
      }
    </article>`;
}

/** Mở/thu thẻ: phần nội dung lộ ra bằng clip-path, các thẻ xung quanh dịch chỗ bằng Flip. */
function bindToggles(root) {
  root.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.msg__toggle');
    if (!btn) return;
    const card = btn.closest('.msg');
    const more = card.querySelector('.msg__more');
    const open = btn.getAttribute('aria-expanded') !== 'true';
    const gsap = G();
    const Flip = window.Flip;
    const animate = gsap && Flip && !reducedMotion();
    const others = [...root.querySelectorAll('.msg, .rs-actions')].filter((c) => c !== card);
    const st = animate ? Flip.getState(others) : null;

    more.hidden = !open;
    card.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('span').textContent = open ? 'Thu gọn' : 'Đọc đầy đủ';

    if (st) Flip.from(st, { duration: 0.6, ease: 'power3.inOut' });
    if (open && animate) {
      gsap.fromTo(
        more,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: -6 },
        { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'clipPath,transform,opacity' }
      );
    }
    if (!open) {
      const sc = card.closest('.ov__scroll');
      const r = card.getBoundingClientRect();
      const sr = sc?.getBoundingClientRect();
      if (sc && r.top < sr.top) sc.scrollTo({ top: sc.scrollTop + r.top - sr.top - 16, behavior: reducedMotion() ? 'auto' : 'smooth' });
    }
  });
}

function dealIn(cards) {
  const gsap = G();
  if (!gsap) return;
  if (reducedMotion()) {
    gsap.fromTo(cards, { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.05 });
    return;
  }
  const rot = [-5, 4, -3, 5, -4];
  gsap.from(cards, {
    y: 110,
    x: (i) => (i % 2 ? 30 : -30),
    rotation: (i) => rot[i % rot.length],
    scale: 0.94,
    opacity: 0,
    duration: 1,
    ease: 'expo.out',
    stagger: 0.14,
    delay: 0.15,
    clearProps: 'transform',
  });
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    ta.remove();
    return ok;
  }
}

export function renderResults(body, params, h) {
  const nums = parseParams(params);
  const count = Object.keys(nums).length;
  h.setToc([
    { id: 'rs-top', label: 'Tóm tắt' },
    { id: 'rs-cards', label: 'Thông điệp' },
    { id: 'rs-next', label: 'Làm gì tiếp' },
  ]);

  // Chuỗi query chuẩn hoá: chỉ các con số hợp lệ, theo thứ tự cố định.
  const q = new URLSearchParams();
  INDEX_ORDER.forEach((k) => nums[k] != null && q.set(INDEX_META[k].key, nums[k]));
  const shareUrl = `${location.origin}${location.pathname}#${h.base}/ket-qua${q.toString() ? '?' + q : ''}`;

  const summary = INDEX_ORDER.map((k) => {
    const n = nums[k];
    const meta = INDEX_META[k];
    return `
      <li>
        <button type="button" class="rs-sum" data-jump-card="msg-${meta.key}" style="--c:${numColor(n)}">
          <span class="rs-sum__n">${n != null ? e(display(n)) : '–'}</span>
          <span class="rs-sum__l">${e(meta.short)}</span>
        </button>
      </li>`;
  }).join('');

  const cards = INDEX_ORDER.map((k, i) => cardHtml(k, nums[k] ?? null, i));
  const colA = [0, 2, 4].map((i) => cards[i]).join('');
  const colB = [1, 3].map((i) => cards[i]).join('');

  body.innerHTML = `
    <div class="rs">
      <header class="rs-head" id="rs-top">
        <p class="eyebrow">Kết quả · Thần số học</p>
        <h3 class="rs-title">Thông điệp từ những con số của bạn</h3>
        <p class="rs-lead">${
          count
            ? 'Mỗi thẻ có một đoạn đọc nhanh. Thấy đoạn nào giống mình thì bấm “Đọc đầy đủ” để xem điểm mạnh, điều cần để ý và vài gợi ý làm được ngay.'
            : 'Liên kết này chưa có con số nào. Quay lại bộ tính để nhập ngày sinh hoặc họ tên nhé.'
        }</p>
        <ol class="rs-summary" role="list" aria-label="Năm con số của bạn">${summary}</ol>
      </header>

      <div class="rs-grid" id="rs-cards">
        <div class="rs-col">${colA}</div>
        <div class="rs-col rs-col--b">${colB}</div>
      </div>

      <section class="rs-actions" id="rs-next" aria-labelledby="rs-next-t">
        <h3 class="rs-actions__title" id="rs-next-t">Làm gì tiếp</h3>
        <div class="rs-actions__row">
          <button type="button" class="btn btn--ghost" data-act="recalc">Tính lại</button>
          <button type="button" class="btn btn--ghost" data-act="reset">Tính cho người khác</button>
          <button type="button" class="btn" data-act="copy"${count ? '' : ' disabled'}>${ICON_LINK}Sao chép liên kết kết quả</button>
        </div>
        <p class="rs-actions__note">Liên kết chỉ chứa các con số, không có tên hay ngày sinh của bạn.</p>
        <a class="rs-lookup" href="#${h.base}/tra-cuu">
          <span><span class="rs-lookup__k">Tra cứu</span>Đọc thông điệp của bất kỳ chỉ số và con số nào, chẳng hạn để đọc giúp người thân.</span>
          ${ICON_ARROW}
        </a>
      </section>
    </div>`;

  bindToggles(body);
  body.querySelectorAll('[data-jump-card]').forEach((b) => b.addEventListener('click', () => h.jumpTo(b.dataset.jumpCard)));
  body.querySelectorAll('[data-go-calc]').forEach((b) => b.addEventListener('click', () => h.goCalc(b.dataset.goCalc)));
  body.querySelector('[data-act="recalc"]').addEventListener('click', () => h.recalc());
  body.querySelector('[data-act="reset"]').addEventListener('click', () => h.resetAll());
  body.querySelector('[data-act="copy"]').addEventListener('click', async () => {
    const ok = await copyText(shareUrl);
    h.toast(ok ? 'Đã sao chép liên kết. Link chỉ có các con số, không có tên hay ngày sinh.' : 'Chưa sao chép được. Thử chép tay đường link trên thanh địa chỉ nhé.');
  });

  const cardEls = [...body.querySelectorAll('.rs-grid .msg')].sort((a, b) => a.style.getPropertyValue('--o') - b.style.getPropertyValue('--o'));
  dealIn(cardEls);
  cardEls.forEach((c, i) => {
    const d = c.querySelector('.msg__digit[data-to]');
    if (d) countUp(d, Number(d.dataset.to), { delay: 0.45 + i * 0.14 });
  });
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(body.querySelectorAll('.rs-sum'), { y: 14, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06, delay: 0.1 });
  }
}

/* ---------- Tra cứu ---------- */

let lookup = { k: 'lifePath', n: null };

const lookupNums = (k) => validFor(k);

export function renderLookup(body, params, h) {
  h.setToc([]);
  const keyToIndex = Object.fromEntries(INDEX_ORDER.map((k) => [INDEX_META[k].key, k]));
  const fromUrl = keyToIndex[params.get('cs')];
  if (fromUrl) lookup.k = fromUrl;
  const so = Number(params.get('so'));
  if (fromUrl && lookupNums(lookup.k).includes(so)) lookup.n = so;
  if (!lookupNums(lookup.k).includes(lookup.n)) lookup.n = lookupNums(lookup.k)[0];

  body.innerHTML = `
    <div class="lk">
      <header class="rs-head">
        <p class="eyebrow">Tra cứu · Thần số học</p>
        <h3 class="rs-title">Tra cứu thông điệp</h3>
        <p class="rs-lead">Phần này dành cho ai đã biết số của mình từ trước, hoặc muốn đọc giúp người thân. Chọn chỉ số, rồi chọn con số để đọc thông điệp đầy đủ.</p>
      </header>
      <div class="lk-tabs" role="tablist" aria-label="Chỉ số">
        ${INDEX_ORDER.map(
          (k) => `<button type="button" role="tab" class="lk-tab" id="lk-tab-${k}" data-k="${k}" aria-controls="lk-panel"
            aria-selected="${k === lookup.k}" tabindex="${k === lookup.k ? 0 : -1}">${e(INDEX_META[k].name)}</button>`
        ).join('')}
      </div>
      <div class="lk-panel" id="lk-panel" role="tabpanel" aria-labelledby="lk-tab-${lookup.k}"></div>
      <p class="lk-back"><a class="link-btn" href="#${h.base}">← Về phần giới thiệu và bộ tính</a></p>
    </div>`;

  const panel = body.querySelector('#lk-panel');
  const tabs = [...body.querySelectorAll('.lk-tab')];

  const drawCard = (animate) => {
    const host = panel.querySelector('#lk-card');
    host.innerHTML = cardHtml(lookup.k, lookup.n, INDEX_ORDER.indexOf(lookup.k), { expanded: true, prefix: 'lk' });
    const gsap = G();
    if (animate && gsap && !reducedMotion()) {
      gsap.from(host.firstElementChild, { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' });
    }
    const d = host.querySelector('.msg__digit[data-to]');
    if (d && animate) countUp(d, Number(d.dataset.to), { duration: 0.7 });
  };

  const drawPanel = (animate) => {
    const k = lookup.k;
    const nums = lookupNums(k);
    const note =
      k === 'lifePath'
        ? '<p class="lk-note">Số 1 chỉ có khi tính theo cách phương Tây, còn số 10 chỉ có khi tính theo cách phổ biến ở Việt Nam.</p>'
        : '';
    panel.setAttribute('aria-labelledby', `lk-tab-${k}`);
    panel.innerHTML = `
      <p class="lk-what">${e(INDEX_META[k].text)}</p>
      <div class="lk-nums" role="radiogroup" aria-label="Chọn con số">
        ${nums
          .map(
            (n) => `<button type="button" role="radio" class="lk-num" data-n="${n}" style="--c:${numColor(n)}"
              aria-checked="${n === lookup.n}" tabindex="${n === lookup.n ? 0 : -1}">${e(display(n))}</button>`
          )
          .join('')}
      </div>
      ${note}
      <div id="lk-card" class="lk-card"></div>`;
    drawCard(animate);
  };

  const selectTab = (k, focus) => {
    lookup.k = k;
    if (!lookupNums(k).includes(lookup.n)) lookup.n = lookupNums(k)[0];
    tabs.forEach((t) => {
      const on = t.dataset.k === k;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    drawPanel(true);
  };

  body.querySelector('.lk-tabs').addEventListener('click', (ev) => {
    const t = ev.target.closest('.lk-tab');
    if (t) selectTab(t.dataset.k, false);
  });
  body.querySelector('.lk-tabs').addEventListener('keydown', (ev) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let j = null;
    if (ev.key === 'ArrowRight') j = (i + 1) % tabs.length;
    if (ev.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
    if (ev.key === 'Home') j = 0;
    if (ev.key === 'End') j = tabs.length - 1;
    if (j == null) return;
    ev.preventDefault();
    selectTab(tabs[j].dataset.k, true);
  });

  const selectNum = (n, focus) => {
    lookup.n = n;
    panel.querySelectorAll('.lk-num').forEach((b) => {
      const on = Number(b.dataset.n) === n;
      b.setAttribute('aria-checked', String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    drawCard(true);
  };

  panel.addEventListener('click', (ev) => {
    const b = ev.target.closest('.lk-num');
    if (b) selectNum(Number(b.dataset.n), false);
  });
  panel.addEventListener('keydown', (ev) => {
    const btns = [...panel.querySelectorAll('.lk-num')];
    const i = btns.indexOf(document.activeElement);
    if (i < 0) return;
    let j = null;
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') j = (i + 1) % btns.length;
    if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') j = (i - 1 + btns.length) % btns.length;
    if (j == null) return;
    ev.preventDefault();
    selectNum(Number(btns[j].dataset.n), true);
  });

  drawPanel(false);
  const gsap = G();
  if (gsap && !reducedMotion()) gsap.from(body.querySelector('.lk'), { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out' });
}
