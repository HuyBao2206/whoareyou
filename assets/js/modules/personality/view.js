// View của thẻ Bản đồ tính cách ("Chòm sao tính cách"): 50 câu IPIP mỗi màn một câu,
// mỗi câu trả lời bay lên thành một ngôi sao; kết quả là chòm sao 5 sao, chạm vào sao để đọc từng chiều.
// Câu trả lời chỉ nằm trong biến `state` (bộ nhớ của tab), không lên URL, không lưu ở đâu khác.

import * as P from './calc.js';
import TRAITS from './traits.js';
import { UPDATED, PRIVACY_LINE, INTRO, START, QUIZ, RESULT, WHAT_IS, METHOD, COMBOS, MYTHS, SOURCES } from './content.js';
import { sourcesHtml } from '../../core/sources.js';
import { saveImage } from '../../core/share-image.js';
import { escapeHtml as e, reducedMotion } from '../../core/utils.js';

const BASE = '/ban-do-tinh-cach';
const ITEMS = P.ITEMS;
const TOTAL = ITEMS.length;

let api = null;
let ctx = null;
const state = { answers: Array(TOTAL).fill(null), idx: 0, mode: 'intro', sel: 'O', showEn: false, scores: null };
let onKey = null;
let advanceTimer = 0;
let pendingIdx = -1; // câu đang chờ chuyển sang câu sau

const ICON_ARROW = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const ICON_BACK = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;
const ICON_LOCK = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`;
const ICON_IMG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>`;

const fmt = (x) => (x == null ? '–' : x.toFixed(1).replace('.', ','));
const motionOk = () => !reducedMotion() && typeof Element !== 'undefined' && 'animate' in Element.prototype;
const list = (items) => `<ul class="pm-list">${items.map((x) => `<li>${e(x)}</li>`).join('')}</ul>`;
const levelText = (lv) => RESULT.levels[lv] || '';

function announce(msg) {
  const live = api?.body.querySelector('#pm-live');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => (live.textContent = msg), 60);
}

/* ---------- Bầu trời phía sau bài làm ---------- */

// Sao nền mờ cố định, cho bầu trời có chiều sâu trước khi có câu trả lời nào.
function dustHtml() {
  let out = '';
  for (let i = 0; i < 70; i++) {
    const p = P.skyDot(500 + i);
    out += `<circle cx="${(p.x * 1000).toFixed(0)}" cy="${(((p.y - 0.04) / 0.6) * 600 * 0.98 + 6).toFixed(0)}" r="${(0.6 + (i % 3) * 0.35).toFixed(2)}"/>`;
  }
  return out;
}

function skyStarAttrs(i) {
  const p = P.skyDot(ITEMS[i].n);
  const v = state.answers[i];
  return { cx: (p.x * 1000).toFixed(1), cy: (p.y * 600).toFixed(1), r: (1.3 + v * 0.55).toFixed(2), o: (0.35 + v * 0.13).toFixed(2) };
}

function skyHtml() {
  const stars = ITEMS.map((_, i) => {
    if (state.answers[i] == null) return '';
    const a = skyStarAttrs(i);
    return `<circle class="pm-sky__star" data-i="${i}" cx="${a.cx}" cy="${a.cy}" r="${a.r}" style="opacity:${a.o}"/>`;
  }).join('');
  return `
    <svg class="pm-sky" id="pm-sky" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g class="pm-sky__dust">${dustHtml()}</g>
      <g class="pm-sky__stars" id="pm-sky-stars">${stars}</g>
    </svg>`;
}

/** Thêm (hoặc cập nhật) sao của câu i. Trả về phần tử sao. */
function putSkyStar(i) {
  const g = api.body.querySelector('#pm-sky-stars');
  if (!g) return null;
  const a = skyStarAttrs(i);
  let c = g.querySelector(`[data-i="${i}"]`);
  if (!c) {
    c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('class', 'pm-sky__star');
    c.dataset.i = String(i);
    g.appendChild(c);
  }
  c.setAttribute('cx', a.cx);
  c.setAttribute('cy', a.cy);
  c.setAttribute('r', a.r);
  c.style.opacity = a.o;
  return c;
}

/** Chấm vừa chọn bay lên thành sao trên bầu trời. Không có chuyển động thì sao hiện luôn. */
function flyToSky(dot, i) {
  const star = putSkyStar(i);
  if (!star || !dot || !motionOk()) return;
  const stage = api.body.querySelector('.pm-stage');
  const sr = stage.getBoundingClientRect();
  const from = dot.querySelector('.pm-dot__core').getBoundingClientRect();
  const to = star.getBoundingClientRect();
  const fly = document.createElement('span');
  fly.className = 'pm-fly';
  fly.setAttribute('aria-hidden', 'true');
  const x0 = from.left + from.width / 2 - sr.left;
  const y0 = from.top + from.height / 2 - sr.top;
  const x1 = to.left + to.width / 2 - sr.left;
  const y1 = to.top + to.height / 2 - sr.top;
  fly.style.left = `${x0}px`;
  fly.style.top = `${y0}px`;
  stage.appendChild(fly);
  const target = star.style.opacity;
  star.style.opacity = '0';
  const mx = (x1 - x0) * 0.35;
  const my = Math.min(y1 - y0, 0) * 0.75 - 30;
  const anim = fly.animate(
    [
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${mx}px), calc(-50% + ${my}px)) scale(0.7)`, opacity: 1, offset: 0.55 },
      { transform: `translate(calc(-50% + ${x1 - x0}px), calc(-50% + ${y1 - y0}px)) scale(0.32)`, opacity: 0.9 },
    ],
    { duration: 720, easing: 'cubic-bezier(0.5, 0, 0.2, 1)' }
  );
  const done = () => {
    fly.remove();
    star.style.opacity = target;
    star.animate?.([{ transform: 'scale(2.4)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'ease-out' });
  };
  anim.onfinish = done;
  anim.oncancel = done;
}

/* ---------- Màn mở đầu ---------- */

function introHtml() {
  const done = P.answeredCount(state.answers);
  const started = done > 0;
  const btns = started
    ? `<button type="button" class="btn btn--big pm-btn-light" data-act="resume">${e(START.resume)} (${done}/${TOTAL})${ICON_ARROW}</button>
       <button type="button" class="btn btn--ghost pm-btn-ghost" data-act="restart">${e(START.restart)}</button>`
    : `<button type="button" class="btn btn--big pm-btn-light" data-act="begin">${e(START.begin)}${ICON_ARROW}</button>`;
  return `
    <div class="pm-intro">
      <h3 class="pm-intro__title" id="pm-stage-t" tabindex="-1">${e(START.title)}</h3>
      <ol class="pm-intro__list">${START.points.map((x) => `<li>${e(x)}</li>`).join('')}</ol>
      <p class="pm-intro__keys">${e(START.keys)}</p>
      <div class="pm-intro__btns">${btns}</div>
      <p class="pm-privacy">${ICON_LOCK}<span>${e(PRIVACY_LINE)}</span></p>
    </div>`;
}

/* ---------- Màn câu hỏi ---------- */

function questionHtml() {
  const i = state.idx;
  const it = ITEMS[i];
  const cur = state.answers[i];
  const done = P.answeredCount(state.answers);
  const complete = P.isComplete(state.answers);
  const dots = P.SCALE.map(
    (v) => `<button type="button" class="pm-dot" data-v="${v}" aria-pressed="${cur === v}" aria-describedby="pm-q-t">
        <span class="pm-dot__core" style="--v:${v}" aria-hidden="true"><span class="pm-dot__num">${v}</span></span>
        <span class="pm-dot__lbl">${e(QUIZ.scale[v - 1])}</span>
      </button>`
  ).join('');
  const last = i === TOTAL - 1;
  return `
    <div class="pm-quiz" data-noswipe>
      <div class="pm-progress">
        <p class="pm-progress__t">${e(QUIZ.progress(i + 1, TOTAL))}</p>
        <div class="pm-progress__bar" role="progressbar" aria-label="Số câu đã trả lời" aria-valuemin="0" aria-valuemax="${TOTAL}" aria-valuenow="${done}" aria-valuetext="${done}/${TOTAL} câu">
          <span style="width:${((done / TOTAL) * 100).toFixed(1)}%"></span>
        </div>
      </div>
      <div class="pm-q">
        <p class="pm-q__stem">${e(QUIZ.stem)}</p>
        <h3 class="pm-q__text" id="pm-q-t" tabindex="-1">${e(it.vi)}</h3>
        <p class="pm-q__en" id="pm-q-en" lang="en" ${state.showEn ? '' : 'hidden'}>${e(it.en)}</p>
        <button type="button" class="pm-q__toggle" data-act="en" aria-expanded="${state.showEn}" aria-controls="pm-q-en">${e(state.showEn ? QUIZ.hideEn : QUIZ.showEn)}</button>
      </div>
      <div class="pm-dots" role="group" aria-label="${e(QUIZ.stem)}">${dots}</div>
      <div class="pm-nav">
        <button type="button" class="btn btn--ghost btn--sm pm-btn-ghost" data-act="back">${ICON_BACK}${e(QUIZ.back)}</button>
        ${complete ? `<button type="button" class="btn btn--sm pm-btn-light" data-act="finish">${e(QUIZ.finish)}${ICON_ARROW}</button>` : ''}
        <button type="button" class="btn btn--ghost btn--sm pm-btn-ghost" data-act="next" ${cur == null || last ? 'hidden' : ''}>${e(QUIZ.next)}${ICON_ARROW}</button>
      </div>
    </div>`;
}

/* ---------- Chòm sao kết quả ---------- */

// Sao ở nửa dưới chòm (Hướng ngoại, Dễ chịu) thì nhãn nằm dưới sao, lệch ra phía ngoài để hai nhãn không chạm nhau.
const labelBelow = (d) => Math.sin(((P.ANGLES[d] - 90) * Math.PI) / 180) > 0;
function labelX(d, x, off) {
  if (!labelBelow(d)) return [x, 'middle'];
  return Math.cos(((P.ANGLES[d] - 90) * Math.PI) / 180) > 0 ? [x - off, 'start'] : [x + off, 'end'];
}
const fitAlign = { start: 'left', end: 'right', middle: 'center' };

function constellationHtml(scores) {
  const L = P.starLayout(scores);
  const f = (n) => n.toFixed(1);
  const ring = (m) => {
    const pts = P.DIM_IDS.map((d) => {
      const one = P.starLayout({ [d]: { mean: m } });
      return `${f(one[d].x)},${f(one[d].y)}`;
    });
    return `<polygon class="pm-con__ring" points="${pts.join(' ')}"/>`;
  };
  const spokes = P.DIM_IDS.map((d) => {
    const o = P.starLayout({ [d]: { mean: 5 } })[d];
    return `<line class="pm-con__spoke" x1="200" y1="200" x2="${f(o.x)}" y2="${f(o.y)}"/>`;
  }).join('');
  const order = P.DIM_IDS.map((d) => L[d]);
  const path = order.map((s, k) => `${k ? 'L' : 'M'}${f(s.x)} ${f(s.y)}`).join(' ') + 'Z';
  const stars = P.DIM_IDS.map((d) => {
    const s = L[d];
    return `<g class="pm-con__star" data-d="${d}">
        <circle class="pm-con__halo" cx="${f(s.x)}" cy="${f(s.y)}" r="${f(s.r * 4.2)}" style="opacity:${(s.glow * 0.9).toFixed(2)}"/>
        <circle class="pm-con__sel" cx="${f(s.x)}" cy="${f(s.y)}" r="${f(s.r + 9)}"/>
        <circle class="pm-con__core" cx="${f(s.x)}" cy="${f(s.y)}" r="${f(s.r)}" style="opacity:${(0.55 + s.glow * 0.45).toFixed(2)}"/>
      </g>`;
  }).join('');
  // Nhãn căn giữa, nằm trên sao ở nửa trên và dưới sao ở nửa dưới, để không tràn ra hai mép khi màn hẹp.
  const labels = P.DIM_IDS.map((d) => {
    const s = L[d];
    const ly = labelBelow(d) ? s.y + s.r + 24 : s.y - s.r - 14;
    const [lx, anchor] = labelX(d, s.x, 12);
    return `<text class="pm-con__lbl" data-d="${d}" x="${f(lx)}" y="${f(ly)}" text-anchor="${anchor}">${e(TRAITS[d].name)} <tspan class="pm-con__num">${fmt(scores[d].mean)}</tspan></text>`;
  }).join('');
  const buttons = P.DIM_IDS.map((d) => {
    const s = L[d];
    const r = scores[d];
    return `<button type="button" role="tab" class="pm-star" id="pm-star-${d}" data-d="${d}" aria-selected="${d === state.sel}" tabindex="${d === state.sel ? 0 : -1}"
        aria-controls="pm-detail" style="left:${((s.x / 400) * 100).toFixed(2)}%;top:${((s.y / 400) * 100).toFixed(2)}%">
        <span class="visually-hidden">${e(`${TRAITS[d].name}: ${fmt(r.mean)} điểm, mức ${levelText(r.level).toLowerCase()}`)}</span></button>`;
  }).join('');
  return `
    <figure class="pm-con" id="pm-con">
      <div class="pm-con__fig" data-sel="${state.sel}">
        <svg class="pm-con__svg" viewBox="-30 0 460 384" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="pm-halo"><stop offset="0" stop-color="#eef3f8" stop-opacity="0.95"/><stop offset="0.35" stop-color="#c3d0dc" stop-opacity="0.35"/><stop offset="1" stop-color="#8fa3b4" stop-opacity="0"/></radialGradient>
          </defs>
          ${ring(1)}${ring(3)}${ring(5)}${spokes}
          <path class="pm-con__line" d="${path}" pathLength="1"/>
          ${stars}${labels}
        </svg>
        <div class="pm-con__hits" role="tablist" aria-label="Năm chiều tính cách">${buttons}</div>
      </div>
      <figcaption class="pm-con__cap">${e(RESULT.lead)}</figcaption>
    </figure>`;
}

function stageHtml() {
  if (state.mode === 'quiz') return questionHtml();
  if (state.mode === 'result') {
    return `<h3 class="pm-stage__title" id="pm-stage-t" tabindex="-1">${e(RESULT.title)}</h3>${constellationHtml(state.scores)}`;
  }
  return introHtml();
}

/* ---------- Phần kết quả chi tiết ---------- */

function scaleBar(d, r) {
  const pos = ((Math.min(5, Math.max(1, r.mean)) - 1) / 4) * 100;
  const [lo, hi] = TRAITS[d].poles;
  return `
    <div class="pm-scale" aria-hidden="true">
      <div class="pm-scale__track"><span class="pm-scale__band"></span><span class="pm-scale__mark" style="left:${pos.toFixed(1)}%"></span></div>
      <div class="pm-scale__ends"><span>${e(lo)}</span><span>${e(hi)}</span></div>
    </div>`;
}

function detailHtml(d) {
  const t = TRAITS[d];
  const r = state.scores[d];
  const lv = t.levels[r.level];
  return `
    <div class="pm-detail__head">
      <div>
        <p class="pm-detail__en" lang="en">${e(t.en)}</p>
        <h4 class="pm-detail__name" id="pm-detail-t">${e(t.name)}</h4>
        <p class="pm-detail__title">${e(lv.title)}</p>
      </div>
      <p class="pm-detail__score"><span class="pm-detail__num">${fmt(r.mean)}</span><span class="pm-detail__of">/5</span>
        <span class="pm-chip pm-chip--${r.level}">${e(levelText(r.level))}</span></p>
    </div>
    ${scaleBar(d, r)}
    <div class="pm-block"><h5 class="pm-h">${e(RESULT.daily)}</h5><p>${e(lv.summary)}</p></div>
    <div class="pm-detail__two">
      <div class="pm-block"><h5 class="pm-h">${e(RESULT.strengths)}</h5>${list(lv.strengths)}</div>
      <div class="pm-block"><h5 class="pm-h">${e(RESULT.watchOut)}</h5>${list(lv.watchOut)}</div>
    </div>
    <div class="pm-block"><h5 class="pm-h">${e(RESULT.tips)}</h5>
      <dl class="pm-tips">
        <div><dt>${e(RESULT.study)}</dt><dd>${e(lv.study)}</dd></div>
        <div><dt>${e(RESULT.work)}</dt><dd>${e(lv.work)}</dd></div>
        <div><dt>${e(RESULT.conflict)}</dt><dd>${e(lv.conflict)}</dd></div>
      </dl>
    </div>
    <blockquote class="pm-note"><p>${e(lv.note)}</p></blockquote>`;
}

function barsHtml() {
  return `<ul class="pm-bars" role="list">${P.DIM_IDS.map((d) => {
    const r = state.scores[d];
    const w = ((r.mean - 1) / 4) * 100;
    return `<li><button type="button" class="pm-bar" data-d="${d}" aria-pressed="${d === state.sel}" aria-controls="pm-detail">
        <span class="pm-bar__name">${e(TRAITS[d].name)} <small lang="en">${e(TRAITS[d].en)}</small></span>
        <span class="pm-bar__track" aria-hidden="true"><span style="width:${w.toFixed(1)}%"></span></span>
        <span class="pm-bar__val">${fmt(r.mean)} <small>${e(levelText(r.level))}</small></span>
      </button></li>`;
  }).join('')}</ul>`;
}

function combosMine() {
  const ids = P.combosOf(state.scores);
  if (!ids.length) return `<p class="pm-combos-none">${e(RESULT.combosNone)}</p>`;
  const rows = ids.map((id) => {
    if (id.startsWith('goc-')) {
      const c = COMBOS.items.find((x) => x.id === 'goc');
      return `<li><strong>${e(c.tag)}.</strong> ${e(c.corners[id])}</li>`;
    }
    const c = COMBOS.items.find((x) => x.id === id);
    return `<li><strong>${e(c.tag)}.</strong> ${e(c.title)}. <a href="#pm-combo-${e(id)}" data-jump-in="pm-combo-${e(id)}">Đọc thêm</a></li>`;
  });
  return `<div class="pm-mine"><p class="pm-mine__k">${e(RESULT.combosYours)}</p><ul>${rows.join('')}</ul></div>`;
}

function resultHtml() {
  return `
    <h3 class="pm-res__title" id="pm-res-t" tabindex="-1">${e(RESULT.detailTitle)}</h3>
    <p class="pm-res__norm">${e(RESULT.norm)}</p>
    ${barsHtml()}
    <section class="pm-detail" id="pm-detail" role="tabpanel" aria-labelledby="pm-star-${state.sel}" tabindex="0">${detailHtml(state.sel)}</section>
    ${combosMine()}
    <div class="pm-actions">
      <button type="button" class="btn" data-act="save">${ICON_IMG}${e(RESULT.save)}</button>
      <button type="button" class="btn btn--ghost" data-act="review">${e(RESULT.review)}</button>
      <button type="button" class="btn btn--ghost" data-act="again">${e(RESULT.again)}</button>
      <p class="pm-actions__note">${e(RESULT.imageNote)}</p>
    </div>`;
}

/* ---------- Các mục kiến thức ---------- */

const secTitle = (no, id, text) => `<h3 class="pm-sec__title" id="${id}"><span class="pm-sec__no">${no}</span>${e(text)}</h3>`;

function whatIsHtml() {
  return `
    <section class="pm-sec" id="pm-nam-chieu" aria-labelledby="pm-h1">
      ${secTitle('01', 'pm-h1', WHAT_IS.title)}
      <div class="pm-cols">
        <div class="pm-prose">${WHAT_IS.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
        <blockquote class="pm-quote"><p>${e(WHAT_IS.quote)}</p></blockquote>
      </div>
      <ol class="pm-dims" role="list">
        ${P.DIM_IDS.map((d) => {
          const t = TRAITS[d];
          return `<li class="pm-dim">
            <p class="pm-dim__en" lang="en">${e(t.en)}${t.ipip !== t.en ? ` · IPIP: ${e(t.ipip)}` : ''}</p>
            <h4 class="pm-dim__name">${e(t.name)}</h4>
            <p class="pm-dim__poles"><span>${e(t.poles[0])}</span><span aria-hidden="true">↔</span><span>${e(t.poles[1])}</span></p>
            <p>${e(t.about)}</p>
          </li>`;
        }).join('')}
      </ol>
    </section>`;
}

function methodHtml() {
  const name = (d) => TRAITS[d].name;
  const rows = ITEMS.map(
    (it) => `<tr><td>${it.n}</td><td>${e(it.vi)}<span lang="en">${e(it.en)}</span></td><td>${e(name(it.d))}</td><td class="pm-key">${it.key > 0 ? '+' : '−'}</td></tr>`
  ).join('');
  return `
    <section class="pm-sec" id="pm-cach-cham" aria-labelledby="pm-h2">
      ${secTitle('02', 'pm-h2', METHOD.title)}
      <div class="pm-prose">${METHOD.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
      <div class="pm-formula" aria-hidden="true">
        <span>Câu thuận: điểm = lựa chọn</span><span>Câu nghịch: điểm = 6 − lựa chọn</span><span>Điểm chiều = trung bình 10 câu</span>
      </div>
      <details class="pm-table-wrap">
        <summary>${e(METHOD.tableTitle)}</summary>
        <p class="pm-fine">${e(METHOD.tableNote)}</p>
        <div class="pm-table-scroll"><table class="pm-table">
          <thead><tr><th scope="col">Câu</th><th scope="col">Nội dung</th><th scope="col">Chiều</th><th scope="col">Khoá</th></tr></thead>
          <tbody>${rows}</tbody>
        </table></div>
      </details>
      <ul class="pm-limits">${METHOD.limits.map((x) => `<li>${e(x)}</li>`).join('')}</ul>
    </section>`;
}

function combosHtml() {
  return `
    <section class="pm-sec" id="pm-to-hop" aria-labelledby="pm-h3">
      ${secTitle('03', 'pm-h3', COMBOS.title)}
      <p class="pm-sec__lead">${e(COMBOS.lead)}</p>
      <div class="pm-combos">
        ${COMBOS.items.map(
          (c) => `<article class="pm-combo" id="pm-combo-${e(c.id)}" tabindex="-1">
            <p class="pm-combo__tag">${e(c.tag)}</p>
            <h4 class="pm-combo__title">${e(c.title)}</h4>
            <p>${e(c.text)}</p>
            <p class="pm-combo__src">${e(c.source)}</p>
          </article>`
        ).join('')}
      </div>
    </section>`;
}

function mythsHtml() {
  return `
    <section class="pm-sec" id="pm-hieu-lam" aria-labelledby="pm-h4">
      ${secTitle('04', 'pm-h4', MYTHS.title)}
      <div class="pm-myths">
        ${MYTHS.items.map(
          (m) => `<article class="pm-myth">
            <h4 class="pm-myth__q"><span class="pm-myth__x" aria-hidden="true">✕</span>${e(m.q)}</h4>
            <p>${e(m.a)}</p>
            <p class="pm-combo__src">${e(m.source)}</p>
          </article>`
        ).join('')}
      </div>
    </section>`;
}

/* ---------- Dựng trang ---------- */

function pageHtml() {
  return `
    <div class="pm">
      <p class="visually-hidden" id="pm-live" aria-live="polite" aria-atomic="true"></p>
      <header class="pm-hero">
        <p class="eyebrow">${e(INTRO.eyebrow)}</p>
        <p class="pm-hero__title" aria-hidden="true">${e(INTRO.title)}</p>
        <p class="pm-hero__lead">${e(INTRO.lead)}</p>
      </header>
      <section class="pm-stage" id="pm-bai" aria-labelledby="pm-stage-t" data-mode="${state.mode}">
        ${skyHtml()}
        <div class="pm-stage__in" id="pm-stage-in">${stageHtml()}</div>
      </section>
      <section class="pm-res" id="pm-ket-qua" aria-labelledby="pm-res-t" ${state.mode === 'result' ? '' : 'hidden'}>${state.mode === 'result' ? resultHtml() : ''}</section>
      ${whatIsHtml()}
      ${methodHtml()}
      ${combosHtml()}
      ${mythsHtml()}
      ${sourcesHtml({ id: 'pm-nguon', groups: SOURCES, updated: UPDATED })}
    </div>`;
}

function setToc() {
  const toc = [{ id: 'pm-bai', label: state.mode === 'result' ? 'Chòm sao' : 'Làm bài' }];
  if (state.mode === 'result') toc.push({ id: 'pm-ket-qua', label: 'Kết quả' });
  toc.push(
    { id: 'pm-nam-chieu', label: 'Năm chiều' },
    { id: 'pm-cach-cham', label: 'Cách chấm' },
    { id: 'pm-to-hop', label: 'Tổ hợp' },
    { id: 'pm-hieu-lam', label: 'Hiểu lầm' },
    { id: 'pm-nguon', label: 'Nguồn' }
  );
  api.setToc(toc);
}

/* ---------- Hành vi ---------- */

function scrollToStage() {
  const st = api.body.querySelector('#pm-bai');
  const sr = api.scroller.getBoundingClientRect();
  const r = st.getBoundingClientRect();
  if (r.top < sr.top || r.top > sr.top + sr.height * 0.4) {
    api.scroller.scrollTo({ top: api.scroller.scrollTop + (r.top - sr.top) - 12, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }
}

/** Vẽ lại phần trong sân khấu theo state.mode. */
function paintStage({ focus = true, dir = 0 } = {}) {
  const root = api.body;
  const stage = root.querySelector('#pm-bai');
  const inner = root.querySelector('#pm-stage-in');
  stage.dataset.mode = state.mode;
  inner.innerHTML = stageHtml();
  if (state.mode === 'result') bindStars(inner);
  if (motionOk()) {
    const el = inner.querySelector('.pm-q') || inner.firstElementChild;
    el?.animate([{ opacity: 0, transform: `translateX(${dir * 24}px)` }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
  }
  if (focus) inner.querySelector('#pm-q-t, #pm-stage-t')?.focus({ preventScroll: true });
}

function goTo(i, dir) {
  clearTimeout(advanceTimer);
  pendingIdx = -1;
  state.idx = Math.max(0, Math.min(TOTAL - 1, i));
  paintStage({ dir });
}

function answer(v) {
  if (state.mode !== 'quiz') return;
  const i = state.idx;
  state.answers[i] = v;
  const dot = api.body.querySelector(`.pm-dot[data-v="${v}"]`);
  api.body.querySelectorAll('.pm-dot').forEach((b) => b.setAttribute('aria-pressed', String(b === dot)));
  flyToSky(dot, i);
  // Đổi ý trong lúc chờ chuyển câu thì chỉ cập nhật câu trả lời, không chờ lại từ đầu.
  if (pendingIdx === i) return;
  pendingIdx = i;
  advanceTimer = setTimeout(() => {
    pendingIdx = -1;
    if (state.mode !== 'quiz' || state.idx !== i) return;
    if (i < TOTAL - 1) goTo(i + 1, 1);
    else if (P.isComplete(state.answers)) finish();
    else goTo(P.firstUnanswered(state.answers), 1);
  }, motionOk() ? 380 : 120);
}

function back() {
  if (state.mode !== 'quiz') return;
  if (state.idx === 0) {
    state.mode = 'intro';
    paintStage();
    return;
  }
  goTo(state.idx - 1, -1);
}

function next() {
  if (state.mode !== 'quiz' || state.answers[state.idx] == null) return;
  if (state.idx < TOTAL - 1) goTo(state.idx + 1, 1);
  else if (P.isComplete(state.answers)) finish();
}

function begin({ restart = false } = {}) {
  if (restart) {
    state.answers = Array(TOTAL).fill(null);
    state.scores = null;
    api.body.querySelector('#pm-sky-stars').innerHTML = '';
  }
  state.mode = 'quiz';
  const k = P.firstUnanswered(state.answers);
  state.idx = k < 0 ? 0 : k;
  paintStage();
  scrollToStage();
}

function finish() {
  clearTimeout(advanceTimer);
  pendingIdx = -1;
  state.scores = P.scoreAll(state.answers);
  state.mode = 'result';
  paintStage({ focus: false });
  drawIn();
  renderResult();
  setToc();
  announce(
    'Đã xong 50 câu. ' + P.DIM_IDS.map((d) => `${TRAITS[d].name} ${fmt(state.scores[d].mean)}, mức ${levelText(state.scores[d].level).toLowerCase()}`).join('; ') + '.'
  );
  api.body.querySelector('#pm-stage-t')?.focus({ preventScroll: true });
  scrollToStage();
}

/** Nét nối và các sao hiện dần khi chòm sao vừa thành hình. */
function drawIn() {
  if (!motionOk()) return;
  const fig = api.body.querySelector('.pm-con__fig');
  const line = fig.querySelector('.pm-con__line');
  line.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 1400, delay: 500, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'backwards' });
  fig.querySelectorAll('.pm-con__star').forEach((s, k) => {
    s.animate([{ opacity: 0, transform: 'scale(0.2)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 700, delay: 120 + k * 140, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' });
  });
  fig.querySelectorAll('.pm-con__lbl').forEach((s, k) => {
    s.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 900 + k * 90, fill: 'backwards' });
  });
}

function selectDim(d, { focus = false } = {}) {
  state.sel = d;
  const root = api.body;
  root.querySelectorAll('.pm-star').forEach((b) => {
    const on = b.dataset.d === d;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
    if (on && focus) b.focus();
  });
  root.querySelector('.pm-con__fig')?.setAttribute('data-sel', d);
  root.querySelectorAll('.pm-bar').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.d === d)));
  const panel = root.querySelector('#pm-detail');
  if (!panel) return;
  panel.innerHTML = detailHtml(d);
  panel.setAttribute('aria-labelledby', `pm-star-${d}`);
  if (motionOk()) panel.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'ease-out' });
}

function bindStars(scope) {
  const wrap = scope.querySelector('.pm-con__hits');
  if (!wrap) return;
  const tabs = [...wrap.querySelectorAll('[role="tab"]')];
  wrap.addEventListener('click', (ev) => {
    const b = ev.target.closest('.pm-star');
    if (!b) return;
    selectDim(b.dataset.d);
    // Trên màn hẹp, phần giải thích nằm dưới chòm sao: cuộn tới cho thấy ngay.
    if (window.matchMedia('(max-width: 859px)').matches) api.jumpTo('pm-detail');
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
    selectDim(tabs[j].dataset.d, { focus: true });
  });
}

function renderResult() {
  const res = api.body.querySelector('#pm-ket-qua');
  res.innerHTML = resultHtml();
  res.hidden = false;
}

function bindStageClicks(root) {
  root.querySelector('#pm-bai').addEventListener('click', (ev) => {
    const dot = ev.target.closest('.pm-dot');
    if (dot) return answer(Number(dot.dataset.v));
    const b = ev.target.closest('[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    if (act === 'begin' || act === 'resume') begin();
    else if (act === 'restart') begin({ restart: true });
    else if (act === 'back') back();
    else if (act === 'next') next();
    else if (act === 'finish') finish();
    else if (act === 'en') {
      state.showEn = !state.showEn;
      const en = root.querySelector('#pm-q-en');
      en.hidden = !state.showEn;
      b.setAttribute('aria-expanded', String(state.showEn));
      b.textContent = state.showEn ? QUIZ.hideEn : QUIZ.showEn;
    }
  });

  // Vuốt ngang trên câu hỏi: sang phải là quay lại, sang trái là câu sau. Nút và phím làm được y như vậy.
  let sx = 0;
  let sy = 0;
  let tracking = false;
  const stage = root.querySelector('#pm-bai');
  stage.addEventListener('touchstart', (ev) => {
    if (state.mode !== 'quiz' || ev.touches.length > 1 || ev.target.closest('button')) return;
    sx = ev.touches[0].clientX;
    sy = ev.touches[0].clientY;
    tracking = true;
  }, { passive: true });
  stage.addEventListener('touchend', (ev) => {
    if (!tracking) return;
    tracking = false;
    const t = ev.changedTouches[0];
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx > 0) back();
    else next();
  });
}

function bindResultClicks(root) {
  root.querySelector('#pm-ket-qua').addEventListener('click', (ev) => {
    const bar = ev.target.closest('.pm-bar');
    if (bar) {
      selectDim(bar.dataset.d);
      return;
    }
    const jump = ev.target.closest('[data-jump-in]');
    if (jump) {
      ev.preventDefault();
      api.jumpTo(jump.dataset.jumpIn);
      return;
    }
    const b = ev.target.closest('[data-act]');
    if (!b) return;
    if (b.dataset.act === 'save') saveCard();
    else if (b.dataset.act === 'review') {
      state.mode = 'quiz';
      state.idx = 0;
      paintStage();
      scrollToStage();
    } else if (b.dataset.act === 'again') {
      begin({ restart: true });
      api.body.querySelector('#pm-ket-qua').hidden = true;
      setToc();
    }
  });
}

function bindKeys() {
  onKey = (ev) => {
    if (!api || state.mode !== 'quiz' || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    if (ev.target.closest?.('input, textarea, select, summary')) return;
    if (/^[1-5]$/.test(ev.key)) {
      ev.preventDefault();
      answer(Number(ev.key));
    } else if (ev.key === 'ArrowLeft') {
      ev.preventDefault();
      back();
    } else if (ev.key === 'ArrowRight') {
      ev.preventDefault();
      next();
    }
  };
  document.addEventListener('keydown', onKey);
}

/* ---------- Xuất ảnh chòm sao ---------- */

async function saveCard() {
  const scores = state.scores;
  if (!scores) return;
  const ok = await saveImage({
    filename: 'hub-chom-sao-tinh-cach.png',
    fonts: ['300 76px Newsreader'],
    draw(c, kit) {
      const { W, H, fonts } = kit;
      const bg = c.createRadialGradient(W / 2, 280, 60, W / 2, 520, 980);
      bg.addColorStop(0, '#30424f');
      bg.addColorStop(0.6, '#1b2631');
      bg.addColorStop(1, '#141c25');
      c.fillStyle = bg;
      c.fillRect(0, 0, W, H);
      // Bụi sao
      for (let i = 0; i < 140; i++) {
        const p = P.skyDot(900 + i);
        c.fillStyle = `rgba(225,232,240,${0.12 + (i % 5) * 0.06})`;
        c.beginPath();
        c.arc(p.x * W, ((p.y - 0.04) / 0.6) * (H - 160), 0.8 + (i % 3) * 0.6, 0, Math.PI * 2);
        c.fill();
      }
      c.textAlign = 'center';
      c.fillStyle = '#a9bccc';
      c.font = `500 22px ${fonts.body}`;
      c.fillText('BẢN ĐỒ TÍNH CÁCH · BIG FIVE', W / 2, 88);
      c.fillStyle = '#eef2f6';
      c.font = `300 76px ${fonts.display}`;
      c.fillText('Chòm sao tính cách', W / 2, 168);

      // Chòm sao: khung 400 × 400 phóng 1,5 lần, tâm ở (540, 500).
      const k = 1.5;
      const ox = W / 2 - 200 * k;
      const oy = 500 - 200 * k;
      const X = (x) => ox + x * k;
      const Y = (y) => oy + y * k;
      const L = P.starLayout(scores);
      c.strokeStyle = 'rgba(201,209,217,0.16)';
      c.lineWidth = 1.5;
      [1, 3, 5].forEach((m) => {
        c.beginPath();
        P.DIM_IDS.forEach((d, i) => {
          const s = P.starLayout({ [d]: { mean: m } })[d];
          if (i) c.lineTo(X(s.x), Y(s.y));
          else c.moveTo(X(s.x), Y(s.y));
        });
        c.closePath();
        c.stroke();
      });
      c.strokeStyle = 'rgba(214,224,233,0.75)';
      c.lineWidth = 2.2;
      c.beginPath();
      P.DIM_IDS.forEach((d, i) => (i ? c.lineTo(X(L[d].x), Y(L[d].y)) : c.moveTo(X(L[d].x), Y(L[d].y))));
      c.closePath();
      c.stroke();
      P.DIM_IDS.forEach((d) => {
        const s = L[d];
        const x = X(s.x);
        const y = Y(s.y);
        const g = c.createRadialGradient(x, y, 0, x, y, s.r * k * 4.6);
        g.addColorStop(0, `rgba(238,243,248,${0.95 * s.glow})`);
        g.addColorStop(0.35, `rgba(195,208,220,${0.4 * s.glow})`);
        g.addColorStop(1, 'rgba(143,163,180,0)');
        c.fillStyle = g;
        c.beginPath();
        c.arc(x, y, s.r * k * 4.6, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = '#f4f7fa';
        c.beginPath();
        c.arc(x, y, s.r * k, 0, Math.PI * 2);
        c.fill();
        const [lx, anchor] = labelX(d, x, 20);
        c.textAlign = fitAlign[anchor];
        c.fillStyle = '#dfe6ec';
        c.font = `400 30px ${fonts.display}`;
        c.fillText(`${TRAITS[d].name} ${fmt(scores[d].mean)}`, lx, labelBelow(d) ? y + s.r * k + 44 : y - s.r * k - 22);
      });

      // Năm dòng điểm
      const top = 860;
      const rowH = 60;
      const x0 = 96;
      const barX = 400;
      const barW = 330;
      P.DIM_IDS.forEach((d, i) => {
        const y = top + i * rowH;
        const r = scores[d];
        c.textAlign = 'left';
        c.fillStyle = '#eef2f6';
        c.font = `400 30px ${fonts.display}`;
        c.fillText(TRAITS[d].name, x0, y + 10);
        c.fillStyle = '#8fa3b4';
        c.font = `400 18px ${fonts.body}`;
        c.fillText(TRAITS[d].en, x0 + 2, y + 36);
        kit.roundRect(barX, y - 6, barW, 10, 5);
        c.fillStyle = 'rgba(201,209,217,0.18)';
        c.fill();
        kit.roundRect(barX, y - 6, Math.max(10, barW * ((r.mean - 1) / 4)), 10, 5);
        c.fillStyle = '#c9d1d9';
        c.fill();
        c.textAlign = 'right';
        c.fillStyle = '#eef2f6';
        c.font = `400 30px ${fonts.display}`;
        c.fillText(fmt(r.mean), W - 230, y + 10);
        c.fillStyle = '#a9bccc';
        c.font = `500 20px ${fonts.body}`;
        c.fillText(levelText(r.level), W - x0, y + 8);
      });
      c.textAlign = 'center';
      c.fillStyle = '#8fa3b4';
      c.font = `400 19px ${fonts.body}`;
      c.fillText('Thang 1–5 theo IPIP Big-Five Factor Markers, bản dịch chưa chuẩn hoá.', W / 2, top + 5 * rowH + 4);
      kit.brand({ ink: '#e6ebf0', muted: '#9aa8b6', line: 'rgba(230,235,240,0.22)' });
    },
  });
  ctx.toast(ok ? RESULT.saved : RESULT.saveFail);
}

/* ---------- Điều phối ---------- */

function renderPage() {
  api.body.innerHTML = pageHtml();
  setToc();
  const root = api.body;
  bindStageClicks(root);
  bindResultClicks(root);
  if (state.mode === 'result') bindStars(root);
}

function render(route) {
  if (route.segments[1]) {
    ctx.navigate(BASE, { replace: true });
    return;
  }
  api.scroller.scrollTop = 0;
  // Mở lại thẻ giữa chừng bài làm: hiện màn mở đầu với nút "Làm tiếp".
  if (state.mode === 'quiz') state.mode = 'intro';
  renderPage();
  api.sheet.focus({ preventScroll: true });
}

export default {
  mount(overlayApi, route, context) {
    api = overlayApi;
    ctx = context;
    if (onKey) document.removeEventListener('keydown', onKey);
    bindKeys();
    render(route);
  },
  update(route) {
    if (!api) return;
    render(route);
  },
  unmount() {
    clearTimeout(advanceTimer);
    pendingIdx = -1;
    if (onKey) document.removeEventListener('keydown', onKey);
    onKey = null;
    api = null;
  },
};
