// View của thẻ Cung hoàng đạo & con giáp: hai vòng trời, ô nhập ngày sinh, thẻ đôi kết quả,
// 12 cung, 12 con giáp, ngũ hành, bầu trời thật và nguồn tham khảo.
// Ngày sinh chỉ nằm trong biến `state` (bộ nhớ của tab), không lên URL, không lưu ở đâu khác.

import * as Z from './calc.js';
import { CAN, CHI } from '../../core/lunar.js';
import signs from './signs.js';
import animals from './animals.js';
import {
  UPDATED, PRIVACY_LINE, INTRO, FORM, WHAT_IS, RESULT, cuspNote, beforeTetNote, SIGNS_SEC, ANIMALS_SEC, ELEMENTS_SEC,
  NAP_AM_MEANING, SKY_SEC, skyLine, SOURCES,
} from './content.js';
import { signSvg, SIGN_PATHS } from './glyphs.js';
import { ringsHtml, lockRings } from './rings.js';
import { dateInputHtml, bindDateInput, validateDate } from '../../core/date-input.js';
import { sourcesHtml } from '../../core/sources.js';
import { saveImage } from '../../core/share-image.js';
import { escapeHtml as e, G, reducedMotion } from '../../core/utils.js';

const BASE = '/cung-hoang-dao';
const MIN_YEAR = 1900;

let api = null;
let ctx = null;
let state = { date: null, p: null, sign: 0, animal: 0, elem: 'Mộc' };

const ICON_ARROW = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const ICON_LOCK = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`;
const ICON_IMG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>`;

const dm = ([m, d]) => `${d}/${m}`;
const rangeText = (i) => {
  const r = Z.signRange(i);
  return `${dm(r.from)} đến ${dm(r.to)}`;
};
const list = (items) => `<ul class="zd-list">${items.map((x) => `<li>${e(x)}</li>`).join('')}</ul>`;

function announce(msg) {
  const live = api?.body.querySelector('#zd-live');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => (live.textContent = msg), 60);
}

/* ---------- Khối nội dung một cung, một con giáp ---------- */

function signFacts(i) {
  const s = signs[i];
  return `
    <dl class="zd-facts">
      <div><dt>${RESULT.element}</dt><dd>${e(s.element)}</dd></div>
      <div><dt>${RESULT.modality}</dt><dd>${e(s.modality)}</dd></div>
      <div><dt>${RESULT.ruler}</dt><dd>${e(s.ruler)}</dd></div>
    </dl>`;
}

function signDetail(i) {
  const s = signs[i];
  return `
    <div class="zd-block"><h5 class="zd-h">${RESULT.strengths}</h5>${list(s.strengths)}</div>
    <div class="zd-block"><h5 class="zd-h">${RESULT.watchOut}</h5>${list(s.watchOut)}</div>
    <div class="zd-block"><h5 class="zd-h">${RESULT.work}</h5><p>${e(s.work)}</p></div>
    <div class="zd-block"><h5 class="zd-h">${RESULT.love}</h5><p>${e(s.love)}</p></div>`;
}

function chiNames(group) {
  return group.map((c) => `${CHI[c]} (${animals[c].name})`).join(', ');
}

function animalDetail(c) {
  const a = animals[c];
  return `
    <div class="zd-block"><h5 class="zd-h">${RESULT.strengths}</h5>${list(a.strengths)}</div>
    <div class="zd-block"><h5 class="zd-h">${RESULT.watchOut}</h5>${list(a.watchOut)}</div>
    ${a.culture ? `<div class="zd-block"><h5 class="zd-h">${RESULT.culture}</h5><p>${e(a.culture)}</p></div>` : ''}
    <div class="zd-block"><h5 class="zd-h">${RESULT.tamHop} · ${RESULT.xung}</h5>
      <p>${e(`Nhóm tam hợp: ${chiNames(Z.tamHopOf(c))}. Nhóm tứ hành xung: ${chiNames(Z.xungOf(c))}.`)}</p></div>`;
}

/* ---------- Phần mở đầu và bộ tính ---------- */

function heroHtml() {
  const r = ringsHtml();
  return `
    <header class="zd-hero">
      <p class="eyebrow">${e(INTRO.eyebrow)}</p>
      <p class="zd-hero__title" aria-hidden="true">${e(INTRO.title)}</p>
      <p class="zd-hero__lead">${e(INTRO.lead)}</p>
    </header>

    <section class="zd-stage" id="zd-bo-tinh" aria-labelledby="zd-form-t">
      <div class="zd-skies" id="zd-skies">
        <figure class="zd-sky zd-sky--west">${r.west}<figcaption>${e(INTRO.west)}</figcaption></figure>
        <figure class="zd-sky zd-sky--east">${r.east}<figcaption>${e(INTRO.east)}</figcaption></figure>
      </div>
      <form class="zd-form" id="zd-form" novalidate autocomplete="off">
        <div class="zd-form__head">
          <h3 class="zd-form__title" id="zd-form-t">${e(FORM.title)}</h3>
          <p class="zd-form__sub">${e(FORM.sub)}</p>
        </div>
        ${dateInputHtml({ id: 'zd-dob', legend: 'Ngày sinh (dương lịch)', value: state.date || {} })}
        <button type="submit" class="btn btn--big zd-form__submit">${e(FORM.submit)}${ICON_ARROW}</button>
        <p class="zd-privacy">${ICON_LOCK}<span>${e(PRIVACY_LINE)}</span></p>
      </form>
    </section>
    <section class="zd-res" id="zd-ket-qua" aria-labelledby="zd-res-t" hidden></section>`;
}

/* ---------- Thẻ đôi kết quả ---------- */

function resultHtml() {
  const { p, date } = state;
  const si = p.sign.index;
  const s = signs[si];
  const a = animals[p.canChi.chi];
  const notes = [];
  if (p.sign.cusp) notes.push(cuspNote(`${date.day}/${date.month}`, Z.SIGNS[si].name, Z.SIGNS[p.sign.cusp.index].name));
  if (p.beforeTet) {
    notes.push(beforeTetNote(date.year, `${p.tet.day}/${p.tet.month}`, p.canChi.name, a.name));
  }
  const lunarText = `Ngày ${p.lunar.day} tháng ${p.lunar.month}${p.lunar.leap ? ' (nhuận)' : ''} năm ${p.canChi.name}`;
  const cusp = p.sign.cusp
    ? `<aside class="zd-cusp" aria-label="Cung bên kia ranh giới">
        <span class="zd-cusp__glyph">${signSvg(p.sign.cusp.index, { size: 34 })}</span>
        <div><p class="zd-cusp__k">Cung bên kia ranh giới</p>
          <h4 class="zd-cusp__name">${e(Z.SIGNS[p.sign.cusp.index].name)} <small>${e(rangeText(p.sign.cusp.index))}</small></h4>
          <p>${e(signs[p.sign.cusp.index].summary)}</p></div>
      </aside>`
    : '';

  return `
    <h3 class="zd-res__title" id="zd-res-t" tabindex="-1">${e(RESULT.title)}</h3>
    ${notes.map((n) => `<p class="zd-note-line">${e(n)}</p>`).join('')}
    <div class="zd-duo">
      <article class="zd-card zd-card--west" aria-labelledby="zd-cw-t">
        <p class="zd-card__side">${e(RESULT.west)}</p>
        <div class="zd-card__mark">${signSvg(si, { size: 88, stroke: 1.1 })}</div>
        <h4 class="zd-card__name" id="zd-cw-t">${e(Z.SIGNS[si].name)}</h4>
        <p class="zd-card__sub">${e(rangeText(si))}</p>
        ${signFacts(si)}
        <ul class="zd-keys" role="list">${s.keywords.map((k) => `<li>${e(k)}</li>`).join('')}</ul>
        <p class="zd-card__summary">${e(s.summary)}</p>
        <div class="zd-card__more" id="zd-cw-more" hidden>${signDetail(si)}</div>
        <blockquote class="zd-card__note"><p>${e(s.note)}</p></blockquote>
        <button type="button" class="zd-toggle" aria-expanded="false" aria-controls="zd-cw-more"><span>${RESULT.more}</span></button>
        <p class="zd-card__fine">${e(RESULT.western)}</p>
      </article>
      <article class="zd-card zd-card--east" aria-labelledby="zd-ce-t">
        <p class="zd-card__side">${e(RESULT.east)}</p>
        <div class="zd-card__mark zd-card__mark--han" lang="zh" aria-hidden="true">${a.han}</div>
        <h4 class="zd-card__name" id="zd-ce-t">${e(p.canChi.name)} <span>· tuổi ${e(a.name)}</span></h4>
        <p class="zd-card__sub">${e(lunarText)}</p>
        <dl class="zd-facts">
          <div><dt>${RESULT.animal}</dt><dd>${e(a.name)} (chi ${e(a.chi)})</dd></div>
          <div><dt>${RESULT.napAm}</dt><dd>${e(p.napAm.name)}</dd></div>
          <div><dt>${RESULT.hanh}</dt><dd>${e(p.napAm.element)}</dd></div>
        </dl>
        <ul class="zd-keys" role="list">${a.keywords.map((k) => `<li>${e(k)}</li>`).join('')}</ul>
        <p class="zd-card__summary">${e(a.summary)}</p>
        <div class="zd-card__more" id="zd-ce-more" hidden>
          <div class="zd-block"><h5 class="zd-h">${RESULT.napAm}</h5><p>${e(`${p.napAm.name} nghĩa là ${NAP_AM_MEANING[p.napAm.index]}, thuộc hành ${p.napAm.element}.`)}</p></div>
          ${animalDetail(p.canChi.chi)}
        </div>
        <blockquote class="zd-card__note"><p>${e(a.note)}</p></blockquote>
        <button type="button" class="zd-toggle" aria-expanded="false" aria-controls="zd-ce-more"><span>${RESULT.more}</span></button>
        <p class="zd-card__fine">${e(RESULT.eastern)}</p>
      </article>
    </div>
    ${cusp}
    <div class="zd-actions">
      <button type="button" class="btn" data-act="save">${ICON_IMG}${e(RESULT.save)}</button>
      <button type="button" class="btn btn--ghost" data-act="again">${e(FORM.again)}</button>
      <p class="zd-actions__note">${e(RESULT.imageNote)}</p>
    </div>`;
}

/* ---------- Các mục kiến thức ---------- */

const secTitle = (no, id, text) =>
  `<h3 class="zd-sec__title" id="${id}"><span class="zd-sec__no">${no}</span>${e(text)}</h3>`;

function whatIsHtml() {
  return `
    <section class="zd-sec" id="zd-la-gi" aria-labelledby="zd-h1">
      ${secTitle('01', 'zd-h1', WHAT_IS.title)}
      <div class="zd-cols">
        <div class="zd-prose">${WHAT_IS.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
        <blockquote class="zd-quote"><p>${e(WHAT_IS.quote)}</p></blockquote>
      </div>
    </section>`;
}

function pickerHtml(kind, items, sel, label) {
  return `
    <div class="zd-picker zd-picker--${kind}" role="tablist" aria-label="${e(label)}">
      ${items
        .map(
          (it, i) => `<button type="button" role="tab" class="zd-pick" id="zd-${kind}-tab-${i}" aria-selected="${i === sel}"
            aria-controls="zd-${kind}-panel" tabindex="${i === sel ? 0 : -1}" data-i="${i}">${it}</button>`
        )
        .join('')}
    </div>`;
}

function signPanel(i) {
  const s = signs[i];
  return `
    <div class="zd-panel__head">
      <span class="zd-panel__mark zd-panel__mark--west">${signSvg(i, { size: 52, stroke: 1.2 })}</span>
      <div><h4 class="zd-panel__name">${e(Z.SIGNS[i].name)}</h4><p class="zd-panel__sub">${SIGNS_SEC.range}: ${e(rangeText(i))}</p></div>
    </div>
    ${signFacts(i)}
    <p class="zd-panel__summary">${e(s.summary)}</p>
    <div class="zd-panel__grid">${signDetail(i)}</div>
    <blockquote class="zd-panel__note"><p>${e(s.note)}</p></blockquote>`;
}

function animalPanel(c) {
  const a = animals[c];
  return `
    <div class="zd-panel__head">
      <span class="zd-panel__mark zd-panel__mark--east" lang="zh" aria-hidden="true">${a.han}</span>
      <div><h4 class="zd-panel__name">${e(a.chi)} · ${e(a.name)}</h4>
        <p class="zd-panel__sub">${ANIMALS_SEC.hours}: ${e(a.hours)} · ${ANIMALS_SEC.element}: ${e(a.element)}</p></div>
    </div>
    <p class="zd-panel__summary">${e(a.summary)}</p>
    <div class="zd-panel__grid">${animalDetail(c)}</div>
    <blockquote class="zd-panel__note"><p>${e(a.note)}</p></blockquote>`;
}

function signsHtml() {
  const items = Z.SIGNS.map((s, i) => `${signSvg(i, { size: 26 })}<span>${e(s.name)}</span>`);
  return `
    <section class="zd-sec" id="zd-12-cung" aria-labelledby="zd-h2">
      ${secTitle('02', 'zd-h2', SIGNS_SEC.title)}
      <p class="zd-sec__lead">${e(SIGNS_SEC.lead)}</p>
      ${pickerHtml('sign', items, state.sign, 'Mười hai cung hoàng đạo')}
      <div class="zd-panel zd-panel--west" role="tabpanel" id="zd-sign-panel" aria-labelledby="zd-sign-tab-${state.sign}" tabindex="0">${signPanel(state.sign)}</div>
    </section>`;
}

/** Vòng 12 chi nhỏ: tô tam giác tam hợp và hình vuông tứ hành xung của chi đang chọn. */
function chiWheel(c) {
  const R = 92;
  const P = (i) => {
    const a = ((i * 30 - 90) * Math.PI) / 180;
    return [120 + R * Math.cos(a), 120 + R * Math.sin(a)];
  };
  const poly = (g, cls) => `<polygon class="${cls}" points="${g.map((i) => P(i).map((v) => v.toFixed(1)).join(',')).join(' ')}"/>`;
  const labels = CHI.map((name, i) => {
    const [x, y] = P(i);
    const on = Z.tamHopOf(c).includes(i) ? ' is-hop' : Z.xungOf(c).includes(i) ? ' is-xung' : '';
    return `<g class="cw-node${on}${i === c ? ' is-self' : ''}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="17"/><text x="${x.toFixed(1)}" y="${y.toFixed(1)}">${e(name)}</text></g>`;
  }).join('');
  return `
    <svg class="chi-wheel" viewBox="0 0 240 240" role="img" aria-label="${e(`Tam hợp của chi ${CHI[c]}: ${Z.tamHopOf(c).map((i) => CHI[i]).join(', ')}. Tứ hành xung: ${Z.xungOf(c).map((i) => CHI[i]).join(', ')}.`)}">
      <circle class="cw-ring" cx="120" cy="120" r="${R}"/>
      ${Z.TAM_HOP.map((g) => poly(g, 'cw-tri')).join('')}
      ${poly(Z.tamHopOf(c), 'cw-tri is-on')}
      ${poly(Z.xungOf(c), 'cw-sq is-on')}
      ${labels}
    </svg>`;
}

function animalsHtml() {
  const items = animals.map((a) => `<span class="zd-pick__han" lang="zh" aria-hidden="true">${a.han}</span><span>${e(a.name)}</span>`);
  return `
    <section class="zd-sec" id="zd-12-con-giap" aria-labelledby="zd-h3">
      ${secTitle('03', 'zd-h3', ANIMALS_SEC.title)}
      <p class="zd-sec__lead">${e(ANIMALS_SEC.lead)}</p>
      ${pickerHtml('animal', items, state.animal, 'Mười hai con giáp')}
      <div class="zd-panel zd-panel--east" role="tabpanel" id="zd-animal-panel" aria-labelledby="zd-animal-tab-${state.animal}" tabindex="0">${animalPanel(state.animal)}</div>
      <div class="zd-groups">
        <div class="zd-groups__text">
          <h4 class="zd-groups__title">${e(ANIMALS_SEC.groupsTitle)}</h4>
          ${ANIMALS_SEC.groups.map((p) => `<p>${e(p)}</p>`).join('')}
        </div>
        <figure class="zd-groups__fig">
          <div id="zd-chi-wheel">${chiWheel(state.animal)}</div>
          <figcaption><span class="lg lg--hop">${ANIMALS_SEC.tamHopLabel}</span><span class="lg lg--xung">${ANIMALS_SEC.xungLabel}</span></figcaption>
        </figure>
      </div>
    </section>`;
}

/* ---------- Ngũ hành ---------- */

// Vị trí 5 hành trên vòng tròn theo thứ tự tương sinh, Hỏa ở đỉnh.
const EL_POS = { Hỏa: 0, Thổ: 72, Kim: 144, Thủy: 216, Mộc: 288 };
const elPt = (el, r = 110) => {
  const a = ((EL_POS[el] - 90) * Math.PI) / 180;
  return [160 + r * Math.cos(a), 160 + r * Math.sin(a)];
};

function wuxingSvg() {
  const f = (n) => n.toFixed(1);
  const arcs = Z.SINH_ORDER.map((from) => {
    const to = Z.sinhOf(from);
    // Cung tròn từ hành này sang hành sau, chừa khoảng trống quanh nút.
    const a0 = EL_POS[from] + 14;
    let a1 = EL_POS[to] - 14;
    if (a1 < a0) a1 += 360;
    const p = (a) => {
      const r = ((a - 90) * Math.PI) / 180;
      return [160 + 110 * Math.cos(r), 160 + 110 * Math.sin(r)];
    };
    const [x0, y0] = p(a0);
    const [x1, y1] = p(a1);
    return `<path class="wx-sinh" data-from="${from}" data-to="${to}" d="M${f(x0)} ${f(y0)}A110 110 0 0 1 ${f(x1)} ${f(y1)}" marker-end="url(#wx-arrow-s)"/>`;
  }).join('');
  const chords = Z.SINH_ORDER.map((from) => {
    const to = Z.khacOf(from);
    const [x0, y0] = elPt(from);
    const [x1, y1] = elPt(to);
    const dx = x1 - x0;
    const dy = y1 - y0;
    const L = Math.hypot(dx, dy);
    const k0 = 30 / L;
    const k1 = (L - 32) / L;
    return `<line class="wx-khac" data-from="${from}" data-to="${to}" x1="${f(x0 + dx * k0)}" y1="${f(y0 + dy * k0)}" x2="${f(x0 + dx * k1)}" y2="${f(y0 + dy * k1)}" marker-end="url(#wx-arrow-k)"/>`;
  }).join('');
  return `
    <svg class="wx-svg" viewBox="0 0 320 320" aria-hidden="true">
      <defs>
        <marker id="wx-arrow-s" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L8 5 1 9" fill="none" stroke="context-stroke" stroke-width="1.6"/></marker>
        <marker id="wx-arrow-k" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L8 5 1 9" fill="none" stroke="context-stroke" stroke-width="1.6"/></marker>
      </defs>
      <circle class="wx-guide" cx="160" cy="160" r="110"/>
      ${chords}${arcs}
    </svg>`;
}

function wuxingText(el) {
  const s = Z.sinhOf(el);
  const k = Z.khacOf(el);
  const by = Z.sinhByOf(el);
  const kb = Z.khacByOf(el);
  return `
    <h4 class="wx-info__title"><span class="wx-dot" data-el="${el}"></span>Hành ${e(el)}</h4>
    <p><strong>${e(el)} sinh ${e(s)}:</strong> ${e(ELEMENTS_SEC.sinh[el])}.</p>
    <p><strong>${e(el)} khắc ${e(k)}:</strong> ${e(ELEMENTS_SEC.khac[el])}.</p>
    <p class="wx-info__in">Ngược lại, ${e(el)} được ${e(by)} sinh ra và bị ${e(kb)} khắc.</p>`;
}

/** Khối "Mệnh của bạn" trong mục ngũ hành (rỗng khi chưa nhập ngày sinh). */
function mineHtml() {
  const p = state.p;
  if (!p) return '';
  return `<div class="zd-mine"><p class="zd-mine__k">${ELEMENTS_SEC.yours}</p>
    <p class="zd-mine__name">${e(p.napAm.name)}</p>
    <p>${e(`Năm ${p.canChi.name} mang nạp âm ${p.napAm.name}, nghĩa là ${NAP_AM_MEANING[p.napAm.index]}, thuộc hành ${p.napAm.element}. Can ${CAN[p.canChi.can]} và chi ${CHI[p.canChi.chi]} đứng riêng thì có hành khác; hành nạp âm là hành chung của cả cặp năm.`)}</p></div>`;
}

function elementsHtml() {
  const p = state.p;
  const rows = Z.NAP_AM.map(([name, el], i) => {
    const y0 = CAN[(i * 2) % 10] + ' ' + CHI[(i * 2) % 12];
    const y1 = CAN[(i * 2 + 1) % 10] + ' ' + CHI[(i * 2 + 1) % 12];
    const on = p && p.napAm.index === i ? ' class="is-mine"' : '';
    return `<tr${on}><td>${e(y0)}, ${e(y1)}</td><td><strong>${e(name)}</strong><span>${e(NAP_AM_MEANING[i])}</span></td><td><span class="wx-dot" data-el="${el}"></span>${e(el)}</td></tr>`;
  }).join('');
  return `
    <section class="zd-sec" id="zd-ngu-hanh" aria-labelledby="zd-h4">
      ${secTitle('04', 'zd-h4', ELEMENTS_SEC.title)}
      <p class="zd-sec__lead">${e(ELEMENTS_SEC.lead)}</p>
      <div class="wx">
        <div class="wx-fig">
          ${wuxingSvg()}
          ${Z.SINH_ORDER.map((el) => {
            const [x, y] = elPt(el);
            return `<button type="button" class="wx-node" data-el="${el}" aria-pressed="${el === state.elem}" style="left:${((x / 320) * 100).toFixed(2)}%;top:${((y / 320) * 100).toFixed(2)}%">${e(el)}</button>`;
          }).join('')}
        </div>
        <div class="wx-info" id="wx-info" aria-live="polite">${wuxingText(state.elem)}</div>
      </div>
      <p class="wx-hint"><span class="wx-hint__s">${e(ELEMENTS_SEC.hint.split('. ')[0])}.</span> <span class="wx-hint__k">${e(ELEMENTS_SEC.hint.split('. ')[1])}</span></p>
      <h4 class="zd-sub" id="zd-nap-am">${e(ELEMENTS_SEC.napAmTitle)}</h4>
      <div id="zd-mine">${mineHtml()}</div>
      <div class="zd-prose">${ELEMENTS_SEC.napAm.map((x) => `<p>${e(x)}</p>`).join('')}</div>
      <details class="zd-table-wrap">
        <summary>${e(ELEMENTS_SEC.tableTitle)}</summary>
        <div class="zd-table-scroll"><table class="zd-table">
          <thead><tr><th scope="col">Năm</th><th scope="col">Nạp âm</th><th scope="col">Hành</th></tr></thead>
          <tbody>${rows}</tbody>
        </table></div>
      </details>
    </section>`;
}

/* ---------- Bầu trời thật ---------- */

/** Dải hoàng đạo: hàng trên là 12 cung chia đều, hàng dưới là các chòm sao thật, quanh vị trí Mặt Trời. */
function bandHtml(sky, label) {
  const W = 110; // độ rộng cửa sổ, tính bằng độ
  const center = sky.lonJ2000;
  const start = center - W / 2;
  const pct = (x) => (((x - start) / W) * 100).toFixed(3);
  const seg = (from, to, name, cls) => {
    const out = [];
    for (const k of [-360, 0, 360]) {
      const a = Math.max(from + k, start);
      const b = Math.min(to + k, start + W);
      if (b > a) out.push(`<span class="${cls}" style="left:${pct(a)}%;width:${(((b - a) / W) * 100).toFixed(3)}%"><i>${e(name)}</i></span>`);
    }
    return out.join('');
  };
  // Cung chiêm tinh: ranh giới mỗi 30° theo điểm xuân phân của ngày đó, đổi về hệ J2000 cho cùng hệ với chòm sao.
  const shift = sky.lon - sky.lonJ2000;
  const signsRow = Z.SIGNS.map((s, i) => seg(i * 30 - shift, i * 30 + 30 - shift, s.name, 'band__seg band__seg--sign')).join('');
  const C = Z.CONSTELLATIONS;
  const starsRow = C.map((c, i) => {
    const to = i + 1 < C.length ? C[i + 1].from : C[0].from + 360;
    return seg(c.from, to, c.name.replace(' (Bọ Cạp)', ''), `band__seg band__seg--star${c.id === 'Oph' ? ' is-oph' : ''}`);
  }).join('');
  return `
    <div class="band" role="img" aria-label="${e(`Dải hoàng đạo quanh vị trí Mặt Trời: cung ${Z.SIGNS[Math.floor(((sky.lon % 360) + 360) % 360 / 30)].name}, chòm sao ${sky.constellation.name}.`)}">
      <p class="band__label">${e(SKY_SEC.bandSigns)}</p>
      <div class="band__row">${signsRow}</div>
      <div class="band__row band__row--stars">${starsRow}</div>
      <p class="band__label">${e(SKY_SEC.bandStars)}</p>
      <span class="band__sun" style="left:50%"><b>${e(label)}</b></span>
    </div>`;
}

function skyHtml() {
  const p = state.p;
  let body;
  if (p) {
    body = `<p class="zd-sky-line">${e(skyLine({ sky: p.sky, signName: Z.SIGNS[p.sign.index].name }))}</p>${bandHtml(p.sky, SKY_SEC.sun)}`;
  } else {
    const t = new Date();
    const today = Z.realSky({ day: t.getDate(), month: t.getMonth() + 1, year: t.getFullYear() });
    body = `<p class="zd-sky-line zd-sky-line--empty">${e(SKY_SEC.empty)}</p>${bandHtml(today, 'Mặt Trời hôm nay')}`;
  }
  return `
    <section class="zd-sec" id="zd-bau-troi-that" aria-labelledby="zd-h5">
      ${secTitle('05', 'zd-h5', SKY_SEC.title)}
      <p class="zd-sec__lead">${e(SKY_SEC.lead)}</p>
      <div id="zd-sky-body">${body}</div>
      <p class="zd-fine">${e(SKY_SEC.method)}</p>
      <div class="zd-prose zd-prose--sky">${SKY_SEC.paragraphs.map((x) => `<p>${e(x)}</p>`).join('')}</div>
    </section>`;
}

/* ---------- Dựng trang ---------- */

function pageHtml() {
  return `
    <div class="zd">
      <p class="visually-hidden" id="zd-live" aria-live="polite" aria-atomic="true"></p>
      ${heroHtml()}
      ${whatIsHtml()}
      ${signsHtml()}
      ${animalsHtml()}
      ${elementsHtml()}
      ${skyHtml()}
      ${sourcesHtml({ id: 'zd-nguon', groups: SOURCES, updated: UPDATED })}
    </div>`;
}

function setToc() {
  const toc = [{ id: 'zd-bo-tinh', label: 'Bộ tính' }];
  if (state.p) toc.push({ id: 'zd-ket-qua', label: 'Kết quả' });
  toc.push(
    { id: 'zd-12-cung', label: '12 cung' },
    { id: 'zd-12-con-giap', label: '12 con giáp' },
    { id: 'zd-ngu-hanh', label: 'Ngũ hành' },
    { id: 'zd-bau-troi-that', label: 'Bầu trời thật' },
    { id: 'zd-nguon', label: 'Nguồn' }
  );
  api.setToc(toc);
}

/* ---------- Hành vi ---------- */

/** Danh sách tab chọn được bằng chuột và phím mũi tên. onPick(i) vẽ lại panel. */
function bindPicker(root, kind, onPick) {
  const wrap = root.querySelector(`.zd-picker--${kind}`);
  const tabs = [...wrap.querySelectorAll('[role="tab"]')];
  const select = (i, focus) => {
    tabs.forEach((t, j) => {
      t.setAttribute('aria-selected', String(j === i));
      t.tabIndex = j === i ? 0 : -1;
    });
    if (focus) tabs[i].focus();
    onPick(i);
  };
  wrap.addEventListener('click', (ev) => {
    const b = ev.target.closest('[role="tab"]');
    if (b) select(Number(b.dataset.i), false);
  });
  wrap.addEventListener('keydown', (ev) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let j = null;
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') j = (i + 1) % tabs.length;
    if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') j = (i - 1 + tabs.length) % tabs.length;
    if (ev.key === 'Home') j = 0;
    if (ev.key === 'End') j = tabs.length - 1;
    if (j == null) return;
    ev.preventDefault();
    select(j, true);
  });
  return select;
}

function showPanel(panel, html, labelledby) {
  panel.innerHTML = html;
  panel.setAttribute('aria-labelledby', labelledby);
  const gsap = G();
  if (gsap && !reducedMotion()) gsap.fromTo(panel, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
}

let pickSign = null;
let pickAnimal = null;

function bindSections(root) {
  pickSign = bindPicker(root, 'sign', (i) => {
    state.sign = i;
    showPanel(root.querySelector('#zd-sign-panel'), signPanel(i), `zd-sign-tab-${i}`);
  });
  pickAnimal = bindPicker(root, 'animal', (i) => {
    state.animal = i;
    showPanel(root.querySelector('#zd-animal-panel'), animalPanel(i), `zd-animal-tab-${i}`);
    root.querySelector('#zd-chi-wheel').innerHTML = chiWheel(i);
  });
  bindWuxing(root);
}

function bindWuxing(root) {
  const fig = root.querySelector('.wx-fig');
  const paint = (el) => {
    state.elem = el;
    fig.querySelectorAll('.wx-node').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.el === el)));
    fig.querySelectorAll('.wx-sinh, .wx-khac').forEach((ln) => {
      ln.classList.toggle('is-out', ln.dataset.from === el);
      ln.classList.toggle('is-in', ln.dataset.to === el);
    });
    fig.dataset.sel = el;
    root.querySelector('#wx-info').innerHTML = wuxingText(el);
  };
  fig.addEventListener('click', (ev) => {
    const b = ev.target.closest('.wx-node');
    if (b) paint(b.dataset.el);
  });
  paint(state.elem);
}

function bindToggles(scope) {
  scope.querySelectorAll('.zd-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const more = scope.querySelector('#' + btn.getAttribute('aria-controls'));
      const open = btn.getAttribute('aria-expanded') !== 'true';
      more.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('span').textContent = open ? RESULT.less : RESULT.more;
      const gsap = G();
      if (open && gsap && !reducedMotion()) gsap.fromTo(more, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
    });
  });
}

function renderResult({ scroll = true } = {}) {
  const root = api.body;
  const res = root.querySelector('#zd-ket-qua');
  res.innerHTML = resultHtml();
  res.hidden = false;
  bindToggles(res);
  res.querySelector('[data-act="save"]').addEventListener('click', saveCard);
  res.querySelector('[data-act="again"]').addEventListener('click', () => {
    api.jumpTo('zd-bo-tinh');
    setTimeout(() => root.querySelector('#zd-dob-day')?.focus({ preventScroll: true }), 400);
  });
  // Các mục bên dưới đổi theo kết quả: chọn sẵn cung, con giáp, hành của người dùng.
  const p = state.p;
  pickSign?.(p.sign.index, false);
  pickAnimal?.(p.canChi.chi, false);
  root.querySelector('.wx-node[data-el="' + p.napAm.element + '"]')?.click();
  root.querySelector('#zd-mine').innerHTML = mineHtml();
  root.querySelector('#zd-sky-body').innerHTML = `<p class="zd-sky-line">${e(skyLine({ sky: p.sky, signName: Z.SIGNS[p.sign.index].name }))}</p>${bandHtml(p.sky, SKY_SEC.sun)}`;
  root.querySelectorAll('.zd-table tr').forEach((tr, i) => tr.classList.toggle('is-mine', i - 1 === p.napAm.index));
  setToc();

  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(res.querySelectorAll('.zd-card'), { opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', stagger: 0.12 });
  }
  if (scroll) {
    const sr = api.scroller.getBoundingClientRect();
    const r = res.getBoundingClientRect();
    api.scroller.scrollTo({ top: api.scroller.scrollTop + (r.top - sr.top) - 16, behavior: reducedMotion() ? 'auto' : 'smooth' });
    res.querySelector('#zd-res-t').focus({ preventScroll: true });
  }
}

function bindForm(root) {
  const form = root.querySelector('#zd-form');
  const di = bindDateInput(form, { next: form.querySelector('.zd-form__submit') });
  let busy = false;
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (busy) return;
    const v = validateDate(di.value(), { minYear: MIN_YEAR });
    if (!v.ok) {
      di.showErrors(v.errors);
      return;
    }
    di.showErrors({});
    busy = true;
    state.date = v.date;
    state.p = Z.profile(v.date);
    const p = state.p;
    announce(
      `Cung ${Z.SIGNS[p.sign.index].name}. Năm âm lịch ${p.canChi.name}, tuổi ${animals[p.canChi.chi].name}, mệnh ${p.napAm.name}.`
    );
    await lockRings(root.querySelector('#zd-skies'), { sign: p.sign.index, chi: p.canChi.chi, can: p.canChi.can });
    busy = false;
    renderResult();
  });
}

/* ---------- Xuất ảnh thẻ đôi ---------- */

async function saveCard() {
  const p = state.p;
  if (!p) return;
  const si = p.sign.index;
  const s = signs[si];
  const a = animals[p.canChi.chi];
  const ok = await saveImage({
    filename: 'hub-hai-bau-troi.png',
    fonts: ["400 120px 'Noto Serif TC'", '300 72px Newsreader'],
    draw(c, kit) {
      const { W, H, fonts } = kit;
      // Nền giấy
      c.fillStyle = '#F5F1EA';
      c.fillRect(0, 0, W, H);
      c.fillStyle = '#85601F';
      c.font = `500 22px ${fonts.body}`;
      c.textAlign = 'center';
      c.fillText('Hai bầu trời · Thẻ đôi Đông Tây'.toUpperCase(), W / 2, 92);

      const top = 130;
      const ph = 880;
      const pw = 452;
      const gap = 32;
      const x0 = (W - pw * 2 - gap) / 2;

      const panel = (x, bg, edge) => {
        kit.roundRect(x, top, pw, ph, 28);
        c.fillStyle = bg;
        c.fill();
        c.strokeStyle = edge;
        c.lineWidth = 2;
        kit.roundRect(x + 14, top + 14, pw - 28, ph - 28, 18);
        c.stroke();
      };
      const lines = (x, y, rows, color, sub) => {
        rows.forEach(([k, v], i) => {
          c.fillStyle = sub;
          c.font = `500 18px ${fonts.body}`;
          c.fillText(k.toUpperCase(), x, y + i * 64);
          c.fillStyle = color;
          c.font = `400 27px ${fonts.display}`;
          c.fillText(v, x, y + i * 64 + 32);
        });
      };
      // Từ khoá xuống dòng theo cả cụm, không ngắt giữa một từ khoá.
      const keys = (words, x, y, maxW) => {
        c.font = `italic 300 25px ${fonts.display}`;
        let line = '';
        let yy = y;
        words.forEach((w) => {
          const test = line ? `${line} · ${w}` : w;
          if (c.measureText(test).width > maxW && line) {
            c.fillText(line, x, yy);
            yy += 34;
            line = w;
          } else line = test;
        });
        c.fillText(line, x, yy);
        return yy;
      };
      const note = (text, x, y, maxW, edge) => {
        c.strokeStyle = edge;
        c.lineWidth = 1.5;
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x + 60, y);
        c.stroke();
        c.fillStyle = 'rgba(243,233,214,0.88)';
        c.font = `italic 300 23px ${fonts.display}`;
        kit.wrap(text, x, y + 44, maxW, 32, { maxLines: 6 });
      };

      // Phương Tây
      const wx = x0;
      panel(wx, '#141C38', 'rgba(210,165,90,0.55)');
      c.textAlign = 'center';
      c.fillStyle = '#D2A55A';
      c.font = `500 20px ${fonts.body}`;
      c.fillText(RESULT.west.toUpperCase(), wx + pw / 2, top + 72);
      c.save();
      c.translate(wx + pw / 2 - 72, top + 110);
      c.scale(6, 6);
      c.strokeStyle = '#E3BF7A';
      c.lineWidth = 1.1;
      c.lineCap = 'round';
      c.lineJoin = 'round';
      c.stroke(new Path2D(SIGN_PATHS[si]));
      c.restore();
      c.fillStyle = '#F3E9D6';
      c.font = `400 64px ${fonts.display}`;
      c.fillText(Z.SIGNS[si].name, wx + pw / 2, top + 345);
      c.fillStyle = 'rgba(243,233,214,0.7)';
      c.font = `400 22px ${fonts.body}`;
      c.fillText(rangeText(si), wx + pw / 2, top + 385);
      c.textAlign = 'left';
      lines(wx + 56, top + 440, [[RESULT.element, s.element], [RESULT.modality, s.modality], [RESULT.ruler, s.ruler.replace(/ \(cổ điển\).*$/, '')]], '#F3E9D6', '#D2A55A');
      c.fillStyle = '#E3BF7A';
      const wy = keys(s.keywords, wx + 56, top + 652, pw - 112);
      note(s.note, wx + 56, wy + 40, pw - 112, 'rgba(210,165,90,0.7)');

      // Phương Đông
      const ex = x0 + pw + gap;
      panel(ex, '#1A1110', 'rgba(184,50,42,0.75)');
      c.textAlign = 'center';
      c.fillStyle = '#D9574A';
      c.font = `500 20px ${fonts.body}`;
      c.fillText(RESULT.east.toUpperCase(), ex + pw / 2, top + 72);
      c.fillStyle = '#E3BF7A';
      c.font = `400 150px 'Noto Serif TC', 'Noto Serif SC', 'IPAGothic', serif`;
      c.fillText(a.han, ex + pw / 2, top + 260);
      c.fillStyle = '#F3E9D6';
      c.font = `400 60px ${fonts.display}`;
      c.fillText(p.canChi.name, ex + pw / 2, top + 345);
      c.fillStyle = 'rgba(243,233,214,0.7)';
      c.font = `400 22px ${fonts.body}`;
      c.fillText(`Tuổi ${a.name}`, ex + pw / 2, top + 385);
      c.textAlign = 'left';
      lines(ex + 56, top + 440, [[RESULT.animal, `${a.name} (chi ${a.chi})`], [RESULT.napAm, p.napAm.name], [RESULT.hanh, p.napAm.element]], '#F3E9D6', '#D9574A');
      c.fillStyle = '#E3BF7A';
      const ey = keys(a.keywords, ex + 56, top + 652, pw - 112);
      note(a.note, ex + 56, ey + 40, pw - 112, 'rgba(217,87,74,0.8)');

      c.fillStyle = '#625D57';
      c.textAlign = 'center';
      c.font = `400 20px ${fonts.body}`;
      c.fillText('Chiêm tinh và con giáp là quan niệm văn hoá, để tham khảo.', W / 2, top + ph + 52);
      kit.brand();
    },
  });
  ctx.toast(ok ? RESULT.saved : RESULT.saveFail);
}

/* ---------- Điều phối ---------- */

function renderPage() {
  setToc();
  api.body.innerHTML = pageHtml();
  const root = api.body;
  bindForm(root);
  bindSections(root);
  if (state.p) {
    // Mở lại thẻ trong cùng phiên: đặt vòng đúng chỗ ngay, không quay lại từ đầu.
    lockRings(root.querySelector('#zd-skies'), { sign: state.p.sign.index, chi: state.p.canChi.chi, can: state.p.canChi.can });
    renderResult({ scroll: false });
  }
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(root.querySelectorAll('.zd-sky'), { opacity: 0, scale: 0.92, duration: 1, ease: 'expo.out', stagger: 0.12, delay: 0.35 });
  }
}

function render(route) {
  const sub = route.segments[1] || '';
  if (sub) {
    ctx.navigate(BASE, { replace: true });
    return;
  }
  api.scroller.scrollTop = 0;
  renderPage();
  api.sheet.focus({ preventScroll: true });
}

export default {
  mount(overlayApi, route, context) {
    api = overlayApi;
    ctx = context;
    render(route);
  },
  update(route) {
    if (!api) return;
    render(route);
  },
  unmount() {},
};

