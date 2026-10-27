// View của thẻ Giá trị sống: "Bàn xếp bài".
// Ba mục kiến thức có nguồn; bàn xếp bài ba bước (chia 36 thẻ vào ba chồng bằng kéo có quán tính, nút hoặc phím;
// lọc lấy năm; xếp thứ tự bằng kéo hoặc nút); la bàn giá trị (kim là tổng hướng trên vòng tròn Schwartz); soi một quyết định.
// Trạng thái xếp bài giữ trong sessionStorage của tab (khoá values.state); tên phương án chỉ nằm trong bộ nhớ.

import * as V from './calc.js';
import CARDS from './cards.js';
import VALS, { GROUPS, ORDER } from './values.js';
import {
  UPDATED, INTRO, WHAT, CIRCLE, EFFECT, PILES, TOOL, RESULT, RECONCILE, QUESTIONS, CONCLUSION, HOLLAND_LINK, HOLLAND_NOTE,
  DECIDE, LIMITS, SOURCES, SOURCE_GROUPS, SOURCE_NOTE,
} from './content.js';
import { sourcesHtml } from '../../core/sources.js';
import { saveImage } from '../../core/share-image.js';
import { sessionGet, sessionSet } from '../../core/session.js';
import { escapeHtml as e, G, reducedMotion } from '../../core/utils.js';

const BASE = '/gia-tri-song';
const byId = new Map(CARDS.map((c) => [c.id, c]));
// Thứ tự rút bài: xoay vòng qua mười giá trị để hai thẻ liền nhau không cùng một giá trị.
const DECK = (() => {
  const by = ORDER.map((v) => CARDS.filter((c) => c.value === v).map((c) => c.id));
  const out = [];
  for (let i = 0; out.length < CARDS.length; i++) by.forEach((list) => list[i] && out.push(list[i]));
  return out;
})();
const fmt = (n) => String(Math.round(n * 10) / 10).replace('.', ',');

let api = null;
let ctx = null;
const fresh = () => ({ piles: { hi: [], mid: [], lo: [] }, history: [], chosen: [], ranked: [], step: 1 });
let st = fresh();
const decide = { a: '', b: '', weights: {}, sa: {}, sb: {} };

/* ---------- Trạng thái phiên ---------- */

function load() {
  try {
    const s = JSON.parse(sessionGet('values.state') || 'null');
    if (!s || !s.piles) return;
    const ok = (list) => Array.isArray(list) && list.every((id) => byId.has(id));
    if (!['hi', 'mid', 'lo'].every((k) => ok(s.piles[k])) || !ok(s.chosen || []) || !ok(s.ranked || [])) return;
    st = { ...fresh(), piles: s.piles, chosen: s.chosen || [], ranked: s.ranked || [], step: [1, 2, 3, 4].includes(s.step) ? s.step : 1 };
  } catch {
    /* bỏ qua trạng thái hỏng */
  }
}
const save = () => sessionSet('values.state', JSON.stringify({ piles: st.piles, chosen: st.chosen, ranked: st.ranked, step: st.step }));

const placed = () => new Set([...st.piles.hi, ...st.piles.mid, ...st.piles.lo]);
const remaining = () => {
  const p = placed();
  return DECK.filter((id) => !p.has(id));
};

function announce(msg) {
  const live = api?.body.querySelector('#vs-live');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => (live.textContent = msg), 60);
}

/* ---------- Chú thích nguồn ---------- */

const srcRef = (keys) =>
  keys && keys.length
    ? `<span class="vs-src">${keys
        .filter((k) => SOURCES[k])
        .map((k) => `<a href="#vs-src-${e(k)}" data-src="${e(k)}">${e(SOURCES[k].short || SOURCES[k].title)}</a>`)
        .join('<span aria-hidden="true"> · </span>')}</span>`
    : '';

const secTitle = (no, id, text) => `<h3 class="vs-sec__title" id="${id}"><span class="vs-sec__no">${no}</span>${e(text)}</h3>`;

function knowSec(no, id, data, extra = '') {
  return `
    <section class="vs-sec" id="${id}" aria-labelledby="${id}-t">
      ${secTitle(no, `${id}-t`, data.title)}
      <p class="vs-sec__lead">${e(data.lead)}</p>
      <div class="vs-prose">${data.paragraphs.map((p) => `<p>${e(p.text)} ${srcRef(p.src)}</p>`).join('')}</div>
      ${extra}
      <aside class="vs-take"><p class="vs-take__k">Điểm rút ra</p><p>${e(data.takeaway)}</p></aside>
    </section>`;
}

function heroHtml() {
  const fan = [CARDS[0], CARDS[28], CARDS[18], CARDS[11], CARDS[32]]
    .map((c, i) => `<span class="vs-fan__c" style="--i:${i - 2}"><b>${e(c.name)}</b></span>`)
    .join('');
  return `
    <header class="vs-hero">
      <div class="vs-hero__text">
        <p class="vs-hero__eyebrow">${e(INTRO.eyebrow)}</p>
        <p class="vs-hero__title" aria-hidden="true">${e(INTRO.title)}</p>
        <p class="vs-hero__lead">${e(INTRO.lead)}</p>
      </div>
      <div class="vs-fan" aria-hidden="true">${fan}</div>
    </header>`;
}

/* ---------- Vòng tròn mười giá trị (dùng cho phần kiến thức và la bàn) ---------- */

const GROUP_COLOR = { open: 'var(--vs-open)', enhance: 'var(--vs-enhance)', conserve: 'var(--vs-conserve)', transcend: 'var(--vs-transcend)' };
// Nhãn trên vòng: Truyền thống và Khuôn phép chung một nan.
const SPOKES = ['SD', 'ST', 'HE', 'AC', 'PO', 'SE', 'TR', 'BE', 'UN'];
const spokeName = (v) => (v === 'TR' ? 'Truyền thống, Khuôn phép' : VALS[v].name);
const polar = (deg, r, c = 200) => {
  const a = (deg * Math.PI) / 180;
  return [c + r * Math.sin(a), c - r * Math.cos(a)];
};

function arcPath(from, to, r1, r2) {
  const [x1, y1] = polar(from, r2);
  const [x2, y2] = polar(to, r2);
  const [x3, y3] = polar(to, r1);
  const [x4, y4] = polar(from, r1);
  const large = (to - from + 360) % 360 > 180 ? 1 : 0;
  return `M${x1.toFixed(1)},${y1.toFixed(1)} A${r2},${r2} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)} L${x3.toFixed(1)},${y3.toFixed(1)} A${r1},${r1} 0 ${large} 0 ${x4.toFixed(1)},${y4.toFixed(1)} Z`;
}

// Cung màu của bốn nhóm (độ). Tận hưởng ở ranh giới Cởi mở và Nâng cao bản thân.
const ARCS = [
  ['open', -20, 80],
  ['enhance', 80, 180],
  ['conserve', 180, 260],
  ['transcend', 260, 340],
];

function wheelSvg({ weights = null, needle = null, id = 'vs-wheel' } = {}) {
  const max = weights ? Math.max(1, ...Object.values(weights)) : 1;
  const arcs = ARCS.map(([g, a, b]) => `<path class="vs-wh__arc" d="${arcPath(a, b, 132, 150)}" fill="${GROUP_COLOR[g]}"/>`).join('');
  const grpLabels = ARCS.map(([g, a, b]) => {
    const mid = (a + b) / 2;
    const [x, y] = polar(mid, 164);
    return `<text class="vs-wh__g" x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${(mid > 90 && mid < 270 ? mid + 180 : mid).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})">${e(GROUPS[g].short)}</text>`;
  }).join('');
  const spokes = SPOKES.map((v) => {
    const deg = V.ANGLE[v];
    const [x1, y1] = polar(deg, 34);
    const [x2, y2] = polar(deg, 128);
    const [tx, ty] = polar(deg, 114);
    const w = weights ? (v === 'TR' ? (weights.TR || 0) + (weights.CO || 0) : weights[v] || 0) : 0;
    const r = weights && w ? 5 + (w / max) * 11 : 0;
    const [dx, dy] = polar(deg, 76);
    const words = spokeName(v).split(', ');
    const text = words
      .map((t, i) => `<tspan x="${tx.toFixed(1)}" dy="${i === 0 ? (words.length > 1 ? -6 : 0) : 13}">${e(t)}</tspan>`)
      .join('');
    return `<line class="vs-wh__spoke" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>
      ${r ? `<circle class="vs-wh__dot" cx="${dx.toFixed(1)}" cy="${dy.toFixed(1)}" r="${r.toFixed(1)}"/>` : ''}
      <text class="vs-wh__v" x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
  }).join('');
  const axes = `<line class="vs-wh__axis" x1="${polar(30, 150)[0]}" y1="${polar(30, 150)[1]}" x2="${polar(220, 150)[0]}" y2="${polar(220, 150)[1]}"/>
    <line class="vs-wh__axis" x1="${polar(130, 150)[0]}" y1="${polar(130, 150)[1]}" x2="${polar(300, 150)[0]}" y2="${polar(300, 150)[1]}"/>`;
  const nd =
    needle && needle.angle != null
      ? `<g class="vs-needle" id="${id}-needle" style="--deg:${needle.angle}deg">
          <path d="M200,${(200 - 30 - 90 * Math.max(0.35, needle.strength)).toFixed(1)} L207,200 L200,212 L193,200 Z" class="vs-needle__n"/>
        </g>`
      : '';
  return `
    <svg class="vs-wheel" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <circle cx="200" cy="200" r="150" class="vs-wh__face"/>
      ${arcs}${grpLabels}${axes}${spokes}
      ${nd}
      <circle cx="200" cy="200" r="9" class="vs-wh__hub"/>
    </svg>`;
}

function circleExtra() {
  const list = ORDER.map(
    (v) => `<li class="vs-vlist__i" style="--c:${GROUP_COLOR[VALS[v].group]}"><b>${e(VALS[v].name)}</b> <span class="vs-en">${e(VALS[v].en)}</span><span>${e(VALS[v].goal)}</span></li>`
  ).join('');
  return `
    <div class="vs-circle">
      <figure class="vs-circle__fig">
        ${wheelSvg()}
        <figcaption class="vs-fine">Vòng tròn mười giá trị và bốn nhóm bậc cao theo Schwartz (2012). Hai đường mảnh là hai trục đối cực.</figcaption>
      </figure>
      <ul class="vs-vlist" role="list">${list}</ul>
    </div>`;
}

/* ---------- Bàn xếp bài ---------- */

function cardFace(c, cls = '') {
  return `<span class="vs-card__name">${e(c.name)}</span><span class="vs-card__def">${e(c.def)}</span>${cls}`;
}

function stepsHtml() {
  return `<ol class="vs-steps" role="list">${TOOL.steps
    .map((s, i) => `<li class="${st.step === i + 1 ? 'is-on' : st.step > i + 1 ? 'is-done' : ''}" ${st.step === i + 1 ? 'aria-current="step"' : ''}><span>${i + 1}</span>${e(s)}</li>`)
    .join('')}</ol>`;
}

function sortStage() {
  const left = remaining();
  const top = left[0] ? byId.get(left[0]) : null;
  const under = left.slice(1, 3).map((id, i) => `<div class="vs-card vs-card--under" style="--k:${i + 1}" aria-hidden="true"></div>`).reverse().join('');
  const piles = PILES.map((p) => {
    const list = st.piles[p.id];
    const last = list.length ? byId.get(list[list.length - 1]).name : '';
    return `<button type="button" class="vs-pile vs-pile--${p.id}" data-pile="${p.id}" ${top ? '' : 'disabled'} aria-label="${e(`${p.name} (phím ${p.key}), đang có ${list.length} thẻ`)}">
      <span class="vs-pile__n">${e(p.name)}</span>
      <span class="vs-pile__stack" aria-hidden="true">${list.slice(-3).map((_, i) => `<i style="--k:${i}"></i>`).join('')}</span>
      <span class="vs-pile__c">${list.length}</span>
      <span class="vs-pile__last">${e(last)}</span>
    </button>`;
  }).join('');
  return `
    <div class="vs-stage" id="vs-sort" tabindex="-1" aria-describedby="vs-sort-hint">
      <p class="vs-hint" id="vs-sort-hint">${e(TOOL.sortHint)}</p>
      <div class="vs-felt">
        <div class="vs-deck">
          ${under}
          ${
            top
              ? `<div class="vs-card vs-card--top" id="vs-top" data-id="${top.id}" tabindex="0" role="group" aria-roledescription="thẻ" aria-label="${e(`${top.name}: ${top.def}`)}">${cardFace(top)}</div>`
              : `<p class="vs-deck__done">${e(TOOL.sortDone)}</p>`
          }
          <p class="vs-deck__left">${e(TOOL.left(left.length))}</p>
        </div>
        <div class="vs-piles">${piles}</div>
      </div>
      <div class="vs-row">
        <button type="button" class="btn btn--ghost" data-act="undo" ${placed().size ? '' : 'disabled'}>${e(TOOL.undo)}</button>
        <button type="button" class="btn" data-act="to2" ${top ? 'disabled' : ''}>${e(TOOL.next)}</button>
      </div>
      <details class="vs-review">
        <summary>${e(TOOL.review)}</summary>
        ${PILES.map(
          (p) => `<div class="vs-review__p"><h5 class="vs-h">${e(p.name)} · ${st.piles[p.id].length}</h5><ul role="list">${st.piles[p.id]
            .map((id) => {
              const c = byId.get(id);
              const opts = PILES.map((q) => `<option value="${q.id}" ${q.id === p.id ? 'selected' : ''}>${e(q.name)}</option>`).join('');
              return `<li><span>${e(c.name)}</span><label class="visually-hidden" for="vs-mv-${id}">${e(TOOL.moveTo)} (${e(c.name)})</label><select id="vs-mv-${id}" class="vs-select vs-select--sm" data-move="${id}">${opts}</select></li>`;
            })
            .join('')}</ul></div>`
        ).join('')}
      </details>
    </div>`;
}

function filterStage() {
  const hi = st.piles.hi;
  const total = hi.length + st.piles.mid.length;
  if (total < 3) {
    return `<div class="vs-stage" id="vs-filter" tabindex="-1"><p class="vs-empty">${e(TOOL.tooFew)}</p><div class="vs-row"><button type="button" class="btn btn--ghost" data-act="to1">${e(TOOL.back)}</button></div></div>`;
  }
  const need = Math.min(5, total);
  const msg = hi.length > 5 ? TOOL.filterMore(hi.length) : hi.length < 5 ? TOOL.filterLess(hi.length) : TOOL.filterOk;
  const pool = hi.length >= 5 ? hi : [...hi, ...st.piles.mid];
  const locked = hi.length < 5 ? new Set(hi) : new Set();
  const grid = pool
    .map((id) => {
      const c = byId.get(id);
      const on = st.chosen.includes(id);
      return `<li><button type="button" class="vs-pick ${locked.has(id) ? 'is-locked' : ''} ${hi.includes(id) ? '' : 'is-mid'}" data-pick="${id}" aria-pressed="${on}" ${locked.has(id) ? 'aria-disabled="true"' : ''}>${cardFace(c)}</button></li>`;
    })
    .join('');
  return `
    <div class="vs-stage" id="vs-filter" tabindex="-1">
      <p class="vs-hint">${e(msg)}</p>
      <p class="vs-count" id="vs-picked" aria-live="polite">${e(TOOL.picked(st.chosen.length))}</p>
      <ul class="vs-grid" role="list">${grid}</ul>
      <div class="vs-row">
        <button type="button" class="btn btn--ghost" data-act="to1">${e(TOOL.back)}</button>
        <button type="button" class="btn" data-act="to3" ${st.chosen.length === need ? '' : 'disabled'}>${e(TOOL.next)}</button>
      </div>
    </div>`;
}

function rankItem(id, i, n) {
  const c = byId.get(id);
  return `<li class="vs-rank__i" data-id="${id}">
    <span class="vs-rank__grip" aria-hidden="true"></span>
    <span class="vs-rank__no" aria-hidden="true">${i + 1}</span>
    <span class="vs-rank__body"><b>${e(c.name)}</b><span>${e(c.def)}</span></span>
    <span class="vs-rank__btns">
      <button type="button" class="vs-mini" data-up="${id}" ${i === 0 ? 'disabled' : ''} aria-label="${e(`${TOOL.up}: ${c.name}`)}">↑</button>
      <button type="button" class="vs-mini" data-down="${id}" ${i === n - 1 ? 'disabled' : ''} aria-label="${e(`${TOOL.down}: ${c.name}`)}">↓</button>
    </span>
  </li>`;
}

function rankStage() {
  if (!st.ranked.length) st.ranked = [...st.chosen];
  return `
    <div class="vs-stage" id="vs-rank" tabindex="-1">
      <p class="vs-hint">${e(TOOL.rankHint)}</p>
      <ol class="vs-rank" id="vs-rank-list" role="list">${st.ranked.map((id, i) => rankItem(id, i, st.ranked.length)).join('')}</ol>
      <div class="vs-row">
        <button type="button" class="btn btn--ghost" data-act="to2">${e(TOOL.back)}</button>
        <button type="button" class="btn" data-act="to4">${e(TOOL.see)}</button>
      </div>
    </div>`;
}

function stageHtml() {
  if (st.step === 1) return sortStage();
  if (st.step === 2) return filterStage();
  return rankStage();
}

function toolSec() {
  return `
    <section class="vs-sec vs-sec--tool" id="vs-ban" aria-labelledby="vs-ban-t">
      ${secTitle('04', 'vs-ban-t', TOOL.title)}
      <p class="vs-sec__lead">${e(TOOL.lead)}</p>
      <div id="vs-steps">${stepsHtml()}</div>
      <div id="vs-stage">${stageHtml()}</div>
      <p class="vs-row vs-row--end"><button type="button" class="link-btn" data-act="restart">${e(TOOL.restart)}</button></p>
    </section>`;
}

/* ---------- Kết quả ---------- */

function analysis() {
  if (st.step < 4 || !st.ranked.length) return null;
  const valueOf = Object.fromEntries(CARDS.map((c) => [c.id, c.value]));
  const { rest } = V.splitChosen(st.piles.hi, st.ranked);
  const weights = V.valueWeights(st.ranked, valueOf, rest);
  const needle = V.needle(weights);
  const weak = needle.angle == null || needle.strength < V.WEAK_NEEDLE;
  const group = weak ? 'mixed' : V.groupOf(needle.angle);
  const values = [...new Set(st.ranked.map((id) => valueOf[id]))];
  const pairs = V.conflictPairs(values);
  return { weights, needle, weak, group, values, pairs, valueOf };
}

const evBadge = (ev) => `<span class="vs-ev vs-ev--${ev}">${e(RESULT[ev] || RESULT.kn)}</span>`;

function resultHtml() {
  const r = analysis();
  if (!r) return `<p class="vs-empty">${e(RESULT.empty)}</p>`;
  const dir = r.weak ? RESULT.weak : RESULT.pointsTo(GROUPS[r.group].name, VALS[r.needle.nearest].name);
  const wl = ORDER.filter((v) => r.weights[v]).map((v) => `${VALS[v].name} ${fmt(r.weights[v])}`).join(', ');
  const top = st.ranked
    .map((id, i) => {
      const c = byId.get(id);
      const v = VALS[c.value];
      return `<li class="vs-top__i" style="--c:${GROUP_COLOR[v.group]}"><span class="vs-top__r">${i + 1}</span><span><b>${e(c.name)}</b><span class="vs-top__d">${e(c.def)}</span><span class="vs-top__v">${e(RESULT.belongs)} ${e(v.name)} · ${e(GROUPS[v.group].name)}</span></span></li>`;
    })
    .join('');
  const counts = {};
  st.ranked.forEach((id) => (counts[r.valueOf[id]] = (counts[r.valueOf[id]] || 0) + 1));
  const dup = Object.entries(counts).filter(([, n]) => n >= 2).map(([v, n]) => `<p class="vs-fine">${e(RESULT.sameValue(VALS[v].name, n))}</p>`).join('');
  const blocks = r.values
    .map((v) => {
      const x = VALS[v];
      const row = (k, label) => `<div class="vs-eff__r"><dt>${e(label)} ${evBadge(x[k].ev)}</dt><dd>${e(x[k].t)} ${srcRef(x[k].src)}</dd></div>`;
      return `<article class="vs-eff" style="--c:${GROUP_COLOR[x.group]}"><h5 class="vs-eff__n">${e(x.name)} <span class="vs-en">${e(x.en)}</span></h5><p class="vs-eff__g">${e(x.goal)}</p><dl>${row('career', RESULT.career)}${row('money', RESULT.money)}${row('relation', RESULT.relation)}</dl></article>`;
    })
    .join('');
  const axes = [...new Set(r.pairs.map(([a, b]) => V.axisOf(a, b)))];
  const pairs = r.pairs.length
    ? `<ul class="vs-pairs" role="list">${r.pairs.map(([a, b]) => `<li>${e(RESULT.pairLine(VALS[a].name, VALS[b].name))}</li>`).join('')}</ul>
       <p>${e(RESULT.reconcileIntro)} ${srcRef(['schwartz-2012'])}</p>
       ${axes.map((ax) => `<ul class="vs-recon">${RECONCILE[ax].map((t) => `<li>${e(t)}</li>`).join('')}</ul>`).join('')}`
    : `<p>${e(RESULT.noPairs)}</p>`;
  const qs = [...r.values];
  const qList = qs.slice(0, 3).map((v) => QUESTIONS[v]);
  for (const q of DECIDE.questions) if (qList.length < 3) qList.push(q);
  const code = (sessionGet('holland') || '').toUpperCase();
  const holland = /^[RIASEC]{3}$/.test(code)
    ? `<aside class="vs-holland"><p class="vs-h">${e(RESULT.holland(code))}</p><p>${e(HOLLAND_LINK[code[0]])} ${e(HOLLAND_LINK[code[1]])}</p><p class="vs-fine">${e(HOLLAND_NOTE)}</p></aside>`
    : '';
  return `
    <div class="vs-result">
      <figure class="vs-compass" role="img" aria-label="${e(RESULT.chartDesc(dir, wl))}">
        ${wheelSvg({ weights: r.weights, needle: r.weak ? null : r.needle, id: 'vs-cmp' })}
        <figcaption class="vs-compass__cap">${e(dir)}</figcaption>
      </figure>
      <div class="vs-result__side">
        <h4 class="vs-h">${e(RESULT.top5)}</h4>
        <ol class="vs-top" role="list">${top}</ol>
        ${dup}
        <div class="vs-row">
          <button type="button" class="btn" data-act="save">${e(RESULT.save)}</button>
        </div>
      </div>
    </div>
    <div class="vs-effs">${blocks}</div>
    <div class="vs-block">
      <h4 class="vs-h">${e(RESULT.pairs)}</h4>
      ${pairs}
    </div>
    ${holland}
    <div class="vs-block">
      <h4 class="vs-h">${e(RESULT.questions)}</h4>
      <ol class="vs-qs">${qList.map((q) => `<li>${e(q)}</li>`).join('')}</ol>
    </div>
    <aside class="vs-conc"><p class="vs-take__k">${e(RESULT.conclusion)}</p><p>${e(CONCLUSION[r.group])}</p></aside>`;
}

function resultSec() {
  return `
    <section class="vs-sec" id="vs-la-ban" aria-labelledby="vs-la-ban-t">
      ${secTitle('05', 'vs-la-ban-t', RESULT.title)}
      <p class="vs-sec__lead">${e(RESULT.lead)}</p>
      <div id="vs-result">${resultHtml()}</div>
    </section>`;
}

/* ---------- Soi một quyết định ---------- */

function decideBody() {
  if (st.step < 4 || !st.ranked.length) return `<p class="vs-empty">${e(DECIDE.needRank)}</p>`;
  const crit = st.ranked.map((id, i) => ({ id, weight: decide.weights[id] ?? 5 - i }));
  const nameA = decide.a.trim() || DECIDE.nameA;
  const nameB = decide.b.trim() || DECIDE.nameB;
  const seg = (opt, id, val) =>
    `<div class="vs-seg" role="radiogroup" aria-label="${e(DECIDE.scoreLabel(opt === 'a' ? nameA : nameB, byId.get(id).name))}">${[1, 2, 3, 4, 5]
      .map(
        (n) =>
          `<label class="vs-seg__o" title="${e(DECIDE.scale[n])}"><input type="radio" name="vs-${opt}-${id}" value="${n}" data-score="${opt}" data-id="${id}" ${val === n ? 'checked' : ''}><span>${n}</span></label>`
      )
      .join('')}</div>`;
  const rows = crit
    .map(({ id, weight }) => {
      const c = byId.get(id);
      return `<div class="vs-dec__row">
        <div class="vs-dec__crit"><b>${e(c.name)}</b>
          <label class="vs-dec__w">${e(DECIDE.weight)}
            <select class="vs-select vs-select--sm" data-weight="${id}">${[1, 2, 3, 4, 5].map((n) => `<option ${n === weight ? 'selected' : ''}>${n}</option>`).join('')}</select>
          </label>
        </div>
        <div class="vs-dec__opt"><span class="vs-dec__k vs-dec__k--a">${e(nameA)}</span>${seg('a', id, decide.sa[id])}</div>
        <div class="vs-dec__opt"><span class="vs-dec__k vs-dec__k--b">${e(nameB)}</span>${seg('b', id, decide.sb[id])}</div>
      </div>`;
    })
    .join('');
  return `
    <div class="vs-dec__names">
      <label><span>${e(DECIDE.nameA)}</span><input class="vs-input" id="vs-na" type="text" maxlength="60" autocomplete="off" placeholder="${e(DECIDE.placeholderA)}" value="${e(decide.a)}"></label>
      <label><span>${e(DECIDE.nameB)}</span><input class="vs-input" id="vs-nb" type="text" maxlength="60" autocomplete="off" placeholder="${e(DECIDE.placeholderB)}" value="${e(decide.b)}"></label>
    </div>
    <div class="vs-dec">${rows}</div>
    <div id="vs-dec-out">${decideOut()}</div>`;
}

function decideOut() {
  const crit = st.ranked.map((id, i) => ({ id, weight: decide.weights[id] ?? 5 - i }));
  const r = V.compareOptions(crit, decide.sa, decide.sb);
  const nameA = decide.a.trim() || DECIDE.nameA;
  const nameB = decide.b.trim() || DECIDE.nameB;
  const bars = r.rows
    .map((x) => {
      const c = byId.get(x.id);
      const w = (s) => (s ? (s / 5) * 100 : 0);
      return `<div class="vs-bars__r"><span class="vs-bars__n">${e(c.name)} <small>×${x.weight}</small></span>
        <span class="vs-bars__b"><i class="vs-bars__a" style="width:${w(x.a)}%"></i></span>
        <span class="vs-bars__b"><i class="vs-bars__bb" style="width:${w(x.b)}%"></i></span></div>`;
    })
    .join('');
  const desc = r.rows.map((x) => `${byId.get(x.id).name}: ${nameA} ${x.a ?? 'chưa chấm'}, ${nameB} ${x.b ?? 'chưa chấm'}`).join('; ');
  const tr = V.tradeoffs(r);
  const trHtml = tr.length
    ? `<ul class="vs-pairs" role="list">${tr.map((x) => `<li>${e(DECIDE.tradeLine(byId.get(x.id).name, x.diff > 0 ? nameA : nameB, x.diff > 0 ? nameB : nameA))}</li>`).join('')}</ul>`
    : `<p>${e(DECIDE.noTradeoff)}</p>`;
  const any = r.rows.some((x) => x.a != null || x.b != null);
  return `
    <div class="vs-bars" role="img" aria-label="${e(DECIDE.chartDesc(desc))}">
      <p class="vs-bars__legend"><span class="vs-dec__k vs-dec__k--a">${e(nameA)}</span><span class="vs-dec__k vs-dec__k--b">${e(nameB)}</span></p>
      ${bars}
    </div>
    <p class="vs-totals">${e(DECIDE.total(nameA, r.totalA, r.max))} · ${e(DECIDE.total(nameB, r.totalB, r.max))}</p>
    ${any ? `<div class="vs-block"><h4 class="vs-h">${e(DECIDE.tradeoffs)}</h4>${trHtml}</div>` : ''}
    <div class="vs-block"><h4 class="vs-h">${e(DECIDE.questionsTitle)}</h4><ol class="vs-qs">${DECIDE.questions.map((q) => `<li>${e(q)}</li>`).join('')}</ol></div>
    <p class="vs-fine">${e(DECIDE.note)}</p>`;
}

function decideSec() {
  return `
    <section class="vs-sec" id="vs-quyet-dinh" aria-labelledby="vs-quyet-dinh-t">
      ${secTitle('06', 'vs-quyet-dinh-t', DECIDE.title)}
      <p class="vs-sec__lead">${e(DECIDE.lead)}</p>
      <p class="vs-prose">${e(DECIDE.why)} ${srcRef(DECIDE.src)}</p>
      <div id="vs-decide">${decideBody()}</div>
    </section>`;
}

function limitsSec() {
  return `
    <section class="vs-sec" id="vs-gioi-han" aria-labelledby="vs-gioi-han-t">
      ${secTitle('07', 'vs-gioi-han-t', LIMITS.title)}
      <ul class="vs-limits">${LIMITS.items.map((t) => `<li>${e(t)}</li>`).join('')}</ul>
      <p class="vs-fine">${srcRef(['miller-2001', 'bardi-2009'])}</p>
    </section>`;
}

/* ---------- Trang ---------- */

function sourcesGroups() {
  return SOURCE_GROUPS.map(([g, title]) => ({ title, items: Object.values(SOURCES).filter((s) => s.group === g) }));
}

function pageHtml() {
  return `
    <div class="vs">
      <p class="visually-hidden" id="vs-live" aria-live="polite" aria-atomic="true"></p>
      ${heroHtml()}
      ${knowSec('01', 'vs-la-gi', WHAT)}
      ${knowSec('02', 'vs-vong-tron', CIRCLE, circleExtra())}
      ${knowSec('03', 'vs-anh-huong', EFFECT)}
      ${toolSec()}
      ${resultSec()}
      ${decideSec()}
      ${limitsSec()}
      ${sourcesHtml({ id: 'vs-nguon', groups: sourcesGroups(), updated: UPDATED, intro: SOURCE_NOTE })}
      <p class="vs-privacy">${e(INTRO.privacy)}</p>
    </div>`;
}

function setToc() {
  api.setToc([
    { id: 'vs-la-gi', label: 'Giá trị là gì' },
    { id: 'vs-vong-tron', label: 'Vòng tròn' },
    { id: 'vs-anh-huong', label: 'Ảnh hưởng' },
    { id: 'vs-ban', label: 'Bàn xếp bài' },
    { id: 'vs-la-ban', label: 'La bàn' },
    { id: 'vs-quyet-dinh', label: 'Soi quyết định' },
    { id: 'vs-gioi-han', label: 'Giới hạn' },
    { id: 'vs-nguon', label: 'Nguồn' },
  ]);
}

/* ---------- Hành vi: bàn xếp bài ---------- */

function scrollToEl(el) {
  const sr = api.scroller.getBoundingClientRect();
  api.scroller.scrollTo({ top: api.scroller.scrollTop + el.getBoundingClientRect().top - sr.top - 80, behavior: reducedMotion() ? 'auto' : 'smooth' });
}

function renderStage({ focus = true } = {}) {
  const root = api.body;
  root.querySelector('#vs-steps').innerHTML = stepsHtml();
  root.querySelector('#vs-stage').innerHTML = stageHtml();
  if (st.step === 1) bindDrag();
  if (st.step === 3) bindRankDrag();
  if (focus) {
    const target = st.step === 1 ? root.querySelector('#vs-top') || root.querySelector('#vs-sort') : root.querySelector('.vs-stage');
    target?.focus({ preventScroll: true });
  }
}

function renderAfter() {
  const root = api.body;
  root.querySelector('#vs-result').innerHTML = resultHtml();
  root.querySelector('#vs-decide').innerHTML = decideBody();
  swingNeedle();
}

function place(pile) {
  const id = remaining()[0];
  if (!id) return;
  st.piles[pile].push(id);
  st.history.push(id);
  save();
  const left = remaining().length;
  renderStage();
  const p = PILES.find((x) => x.id === pile);
  announce(`${byId.get(id).name}: ${p.name}. ${TOOL.left(left)}.`);
}

function undo() {
  const id = st.history.pop() || [...st.piles.hi, ...st.piles.mid, ...st.piles.lo].pop();
  if (!id) return;
  for (const k of ['hi', 'mid', 'lo']) st.piles[k] = st.piles[k].filter((x) => x !== id);
  st.chosen = st.chosen.filter((x) => x !== id);
  st.ranked = st.ranked.filter((x) => x !== id);
  save();
  renderStage();
  announce(`${TOOL.undo}: ${byId.get(id).name}`);
}

/** Kéo thẻ trên cùng có quán tính: thả ra, thẻ trượt theo đà tới chồng gần điểm rơi nhất, hoặc bật về. */
function bindDrag() {
  const card = api.body.querySelector('#vs-top');
  if (!card) return;
  const deck = api.body.querySelector('.vs-deck');
  let start = null;
  let samples = [];
  const setT = (dx, dy, extra = '') => {
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.max(-14, Math.min(14, dx / 14))}deg)${extra}`;
  };
  card.addEventListener('pointerdown', (ev) => {
    if (ev.button !== 0) return;
    ev.preventDefault();
    start = { x: ev.clientX, y: ev.clientY };
    samples = [{ x: ev.clientX, y: ev.clientY, t: performance.now() }];
    card.setPointerCapture(ev.pointerId);
    card.classList.add('is-drag');
    card.style.transition = 'none';
  });
  card.addEventListener('pointermove', (ev) => {
    if (!start) return;
    samples.push({ x: ev.clientX, y: ev.clientY, t: performance.now() });
    if (samples.length > 6) samples.shift();
    setT(ev.clientX - start.x, ev.clientY - start.y);
    const hit = zoneAt(ev.clientX, ev.clientY);
    api.body.querySelectorAll('.vs-pile').forEach((p) => p.classList.toggle('is-over', p.dataset.pile === hit));
  });
  const end = (ev) => {
    if (!start) return;
    const dx = ev.clientX - start.x;
    const dy = ev.clientY - start.y;
    start = null;
    card.classList.remove('is-drag');
    api.body.querySelectorAll('.vs-pile').forEach((p) => p.classList.remove('is-over'));
    const a = samples[0];
    const b = samples[samples.length - 1];
    const dt = Math.max(16, b.t - a.t);
    const vx = ((b.x - a.x) / dt) * 1000;
    const vy = ((b.y - a.y) / dt) * 1000;
    // Điểm rơi dự kiến: vị trí thả cộng quãng trượt theo đà trong khoảng 0,22 giây.
    const px = ev.clientX + vx * 0.22;
    const py = ev.clientY + vy * 0.22;
    const moved = Math.hypot(px - (ev.clientX - dx), py - (ev.clientY - dy));
    const target = moved > 90 ? zoneAt(px, py, true) : null;
    if (!target) {
      card.style.transition = reducedMotion() ? 'none' : 'transform .45s cubic-bezier(.34,1.56,.64,1)';
      card.style.transform = '';
      return;
    }
    if (reducedMotion()) return place(target);
    const zr = api.body.querySelector(`.vs-pile--${target}`).getBoundingClientRect();
    const cr = deck.querySelector('#vs-top').getBoundingClientRect();
    const tx = dx + (zr.left + zr.width / 2 - (cr.left + cr.width / 2));
    const ty = dy + (zr.top + zr.height / 2 - (cr.top + cr.height / 2));
    card.style.transition = 'transform .32s cubic-bezier(.2,.7,.3,1), opacity .32s';
    setT(tx, ty, ' scale(.42)');
    card.style.opacity = '0.2';
    setTimeout(() => place(target), 300);
  };
  card.addEventListener('pointerup', end);
  card.addEventListener('pointercancel', end);
}

/** Chồng dưới điểm (x, y); với nearest = true, lấy chồng gần nhất nếu điểm rơi đã rời khỏi bộ bài. */
function zoneAt(x, y, nearest = false) {
  const zones = [...api.body.querySelectorAll('.vs-pile')];
  for (const z of zones) {
    const r = z.getBoundingClientRect();
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return z.dataset.pile;
  }
  if (!nearest) return null;
  let best = null;
  let d = Infinity;
  for (const z of zones) {
    const r = z.getBoundingClientRect();
    const dd = Math.hypot(x - (r.left + r.width / 2), y - (r.top + r.height / 2));
    if (dd < d) {
      d = dd;
      best = z.dataset.pile;
    }
  }
  return best;
}

/** Kéo để đổi thứ hạng: thẻ đi theo con trỏ, các thẻ khác dồn chỗ. */
function bindRankDrag() {
  const list = api.body.querySelector('#vs-rank-list');
  if (!list) return;
  let drag = null;
  list.addEventListener('pointerdown', (ev) => {
    const li = ev.target.closest('.vs-rank__i');
    if (!li || ev.target.closest('button') || ev.button !== 0) return;
    ev.preventDefault();
    drag = { li, y: ev.clientY };
    li.setPointerCapture(ev.pointerId);
    li.classList.add('is-drag');
  });
  list.addEventListener('pointermove', (ev) => {
    if (!drag) return;
    const { li } = drag;
    li.style.transform = `translateY(${ev.clientY - drag.y}px)`;
    const items = [...list.children].filter((x) => x !== li);
    const after = items.find((x) => {
      const r = x.getBoundingClientRect();
      return ev.clientY < r.top + r.height / 2;
    });
    const before = li.getBoundingClientRect().top;
    if (after !== li.nextElementSibling || (!after && li !== list.lastElementChild)) {
      list.insertBefore(li, after || null);
      drag.y += li.getBoundingClientRect().top - before;
      li.style.transform = `translateY(${ev.clientY - drag.y}px)`;
    }
  });
  const end = () => {
    if (!drag) return;
    drag.li.classList.remove('is-drag');
    drag.li.style.transform = '';
    drag = null;
    st.ranked = [...list.children].map((x) => x.dataset.id);
    save();
    renderStage({ focus: false });
  };
  list.addEventListener('pointerup', end);
  list.addEventListener('pointercancel', end);
}

function moveRank(id, d) {
  const i = st.ranked.indexOf(id);
  const j = i + d;
  if (i < 0 || j < 0 || j >= st.ranked.length) return;
  [st.ranked[i], st.ranked[j]] = [st.ranked[j], st.ranked[i]];
  save();
  renderStage({ focus: false });
  const btn = api.body.querySelector(`[data-${d < 0 ? 'up' : 'down'}="${CSS.escape(id)}"]:not([disabled])`) || api.body.querySelector(`[data-${d < 0 ? 'down' : 'up'}="${CSS.escape(id)}"]`);
  btn?.focus();
  announce(`${byId.get(id).name}: hạng ${j + 1}`);
}

function goStep(n) {
  if (n === 2) {
    const hi = st.piles.hi;
    // Giữ lựa chọn cũ nếu còn hợp lệ; chồng đầu ≤ 5 thẻ thì chọn sẵn cả chồng.
    st.chosen = st.chosen.filter((id) => hi.includes(id) || (hi.length < 5 && st.piles.mid.includes(id)));
    if (hi.length <= 5) st.chosen = [...hi, ...st.chosen.filter((id) => !hi.includes(id))];
  }
  if (n === 3) st.ranked = st.ranked.filter((id) => st.chosen.includes(id)).concat(st.chosen.filter((id) => !st.ranked.includes(id)));
  st.step = n;
  save();
  if (n === 4) {
    st.step = 4;
    save();
    renderStage({ focus: false });
    renderAfter();
    setTimeout(() => api.jumpTo('vs-la-ban'), 60);
    return;
  }
  renderStage();
  scrollToEl(api.body.querySelector('#vs-ban'));
}

function togglePick(id) {
  const hi = st.piles.hi;
  if (hi.length < 5 && hi.includes(id)) return;
  const need = Math.min(5, hi.length + st.piles.mid.length);
  if (st.chosen.includes(id)) st.chosen = st.chosen.filter((x) => x !== id);
  else if (st.chosen.length < need) st.chosen.push(id);
  else return announce(TOOL.picked(st.chosen.length));
  save();
  const btn = api.body.querySelector(`[data-pick="${CSS.escape(id)}"]`);
  btn.setAttribute('aria-pressed', String(st.chosen.includes(id)));
  api.body.querySelector('#vs-picked').textContent = TOOL.picked(st.chosen.length);
  api.body.querySelector('[data-act="to3"]').disabled = st.chosen.length !== need;
}

function swingNeedle() {
  const n = api.body.querySelector('#vs-cmp-needle');
  if (!n || reducedMotion()) return;
  const deg = parseFloat(n.style.getPropertyValue('--deg'));
  const gsap = G();
  if (gsap) {
    n.classList.add('is-gsap');
    gsap.fromTo(n, { rotation: deg - 140, svgOrigin: '200 200' }, { rotation: deg, svgOrigin: '200 200', duration: 2.2, ease: 'elastic.out(1, 0.35)' });
  } else {
    n.classList.add('is-swing');
  }
}

function bind(root) {
  root.addEventListener('click', (ev) => {
    const t = ev.target;
    const pile = t.closest('[data-pile]');
    if (pile) return place(pile.dataset.pile);
    const pick = t.closest('[data-pick]');
    if (pick) return togglePick(pick.dataset.pick);
    const up = t.closest('[data-up]');
    if (up) return moveRank(up.dataset.up, -1);
    const down = t.closest('[data-down]');
    if (down) return moveRank(down.dataset.down, 1);
    const act = t.closest('[data-act]')?.dataset.act;
    if (act === 'undo') return undo();
    if (act === 'to1') return goStep(1);
    if (act === 'to2') return goStep(2);
    if (act === 'to3') return goStep(3);
    if (act === 'to4') return goStep(4);
    if (act === 'save') return saveResult();
    if (act === 'restart') {
      st = fresh();
      save();
      renderStage();
      renderAfter();
      scrollToEl(root.querySelector('#vs-ban'));
      return ctx.toast(TOOL.restartDone);
    }
    const a = t.closest('a[data-src]');
    if (!a) return;
    ev.preventDefault();
    const det = root.querySelector('#vs-nguon details');
    if (det) det.open = true;
    const li = root.querySelector(`#vs-src-${CSS.escape(a.dataset.src)}`);
    if (li) {
      li.classList.add('is-flash');
      setTimeout(() => li.classList.remove('is-flash'), 1600);
      scrollToEl(li);
    }
  });

  // Phím tắt khi tiêu điểm ở bước chia thẻ.
  root.querySelector('#vs-stage').addEventListener('keydown', (ev) => {
    if (st.step !== 1 || ev.target.matches('select, input, summary') || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const map = { 1: 'hi', 2: 'mid', 3: 'lo', ArrowLeft: 'hi', ArrowDown: 'mid', ArrowRight: 'lo' };
    const pile = map[ev.key];
    if (pile && remaining().length) {
      ev.preventDefault();
      place(pile);
    }
  });

  root.querySelector('#vs-stage').addEventListener('change', (ev) => {
    const mv = ev.target.closest('[data-move]');
    if (!mv) return;
    const id = mv.dataset.move;
    for (const k of ['hi', 'mid', 'lo']) st.piles[k] = st.piles[k].filter((x) => x !== id);
    st.piles[mv.value].push(id);
    save();
    renderStage({ focus: false });
    const det = root.querySelector('.vs-review');
    if (det) det.open = true;
    root.querySelector(`#vs-mv-${CSS.escape(id)}`)?.focus();
  });

  const dec = root.querySelector('#vs-decide');
  dec.addEventListener('change', (ev) => {
    const s = ev.target.closest('[data-score]');
    const w = ev.target.closest('[data-weight]');
    if (s) (s.dataset.score === 'a' ? decide.sa : decide.sb)[s.dataset.id] = Number(s.value);
    else if (w) decide.weights[w.dataset.weight] = Number(w.value);
    else return;
    dec.querySelector('#vs-dec-out').innerHTML = decideOut();
  });
  dec.addEventListener('input', (ev) => {
    if (ev.target.id !== 'vs-na' && ev.target.id !== 'vs-nb') return;
    decide[ev.target.id === 'vs-na' ? 'a' : 'b'] = ev.target.value;
    const nameA = decide.a.trim() || DECIDE.nameA;
    const nameB = decide.b.trim() || DECIDE.nameB;
    dec.querySelectorAll('.vs-dec .vs-dec__k--a').forEach((x) => (x.textContent = nameA));
    dec.querySelectorAll('.vs-dec .vs-dec__k--b').forEach((x) => (x.textContent = nameB));
    dec.querySelector('#vs-dec-out').innerHTML = decideOut();
  });
}

/** Gắn id cho từng mục trong ngăn nguồn để chú thích trỏ tới được. */
function tagSources(root) {
  const keys = SOURCE_GROUPS.flatMap(([g]) => Object.entries(SOURCES).filter(([, s]) => s.group === g).map(([k]) => k));
  root.querySelectorAll('#vs-nguon .srcs__item').forEach((li, i) => {
    if (keys[i]) li.id = `vs-src-${keys[i]}`;
  });
}

/* ---------- Xuất ảnh ---------- */

async function saveResult() {
  const r = analysis();
  if (!r) return;
  const ok = await saveImage({
    filename: 'hub-la-ban-gia-tri.png',
    fonts: ['400 60px Newsreader', '600 26px "Be Vietnam Pro"'],
    draw(c, kit) {
      const { W, H, fonts } = kit;
      const pad = 72;
      c.fillStyle = '#F1E7D3';
      c.fillRect(0, 0, W, H);
      c.fillStyle = '#9C3D24';
      c.font = `600 22px ${fonts.body}`;
      c.textAlign = 'left';
      c.fillText('LA BÀN GIÁ TRỊ', pad, 96);
      c.fillStyle = '#2A1C14';
      c.font = `400 58px ${fonts.display}`;
      c.fillText('Giá trị sống', pad, 166);
      // La bàn
      const cx = 300;
      const cy = 440;
      const R = 200;
      const col = { open: '#C9853A', enhance: '#9C3D24', conserve: '#5B6B3A', transcend: '#3D6D7A' };
      ARCS.forEach(([g, a, b]) => {
        c.strokeStyle = col[g];
        c.lineWidth = 22;
        c.beginPath();
        c.arc(cx, cy, R - 11, ((a - 90) * Math.PI) / 180, ((b - 90) * Math.PI) / 180);
        c.stroke();
      });
      c.fillStyle = '#FBF6EC';
      c.beginPath();
      c.arc(cx, cy, R - 24, 0, Math.PI * 2);
      c.fill();
      const max = Math.max(1, ...Object.values(r.weights));
      c.textAlign = 'center';
      SPOKES.forEach((v) => {
        const a = ((V.ANGLE[v] - 90) * Math.PI) / 180;
        c.strokeStyle = 'rgba(42,28,20,.18)';
        c.lineWidth = 1.5;
        c.beginPath();
        c.moveTo(cx + 30 * Math.cos(a), cy + 30 * Math.sin(a));
        c.lineTo(cx + (R - 26) * Math.cos(a), cy + (R - 26) * Math.sin(a));
        c.stroke();
        const w = v === 'TR' ? (r.weights.TR || 0) + (r.weights.CO || 0) : r.weights[v] || 0;
        if (w) {
          c.fillStyle = 'rgba(156,61,36,.55)';
          c.beginPath();
          c.arc(cx + 92 * Math.cos(a), cy + 92 * Math.sin(a), 6 + (w / max) * 12, 0, Math.PI * 2);
          c.fill();
        }
        c.fillStyle = '#2A1C14';
        c.font = `500 15px ${fonts.body}`;
        const name = v === 'TR' ? 'Truyền thống, Khuôn phép' : VALS[v].name;
        name.split(', ').forEach((t, i, arr) => c.fillText(t, cx + 140 * Math.cos(a), cy + 140 * Math.sin(a) + 5 + (i - (arr.length - 1) / 2) * 17));
      });
      if (!r.weak) {
        const a = ((r.needle.angle - 90) * Math.PI) / 180;
        const L = 40 + 110 * Math.max(0.35, r.needle.strength);
        c.fillStyle = '#9C3D24';
        c.beginPath();
        c.moveTo(cx + L * Math.cos(a), cy + L * Math.sin(a));
        c.lineTo(cx + 9 * Math.cos(a + Math.PI / 2), cy + 9 * Math.sin(a + Math.PI / 2));
        c.lineTo(cx + 14 * Math.cos(a + Math.PI), cy + 14 * Math.sin(a + Math.PI));
        c.lineTo(cx + 9 * Math.cos(a - Math.PI / 2), cy + 9 * Math.sin(a - Math.PI / 2));
        c.closePath();
        c.fill();
      }
      c.fillStyle = '#2A1C14';
      c.beginPath();
      c.arc(cx, cy, 10, 0, Math.PI * 2);
      c.fill();
      // Năm thẻ
      c.textAlign = 'left';
      let y = 300;
      const x0 = 580;
      c.fillStyle = '#9C3D24';
      c.font = `600 18px ${fonts.body}`;
      c.fillText(RESULT.top5.toUpperCase(), x0, y - 40);
      st.ranked.forEach((id, i) => {
        const card = byId.get(id);
        c.fillStyle = '#9C3D24';
        kit.roundRect(x0, y - 30, 428, 66, 12);
        c.fill();
        c.fillStyle = '#FBEFE2';
        c.font = `400 28px ${fonts.display}`;
        c.fillText(`${i + 1}  ${card.name}`, x0 + 20, y + 4);
        c.font = `500 15px ${fonts.body}`;
        c.fillStyle = 'rgba(251,239,226,.8)';
        c.fillText(VALS[card.value].name, x0 + 20, y + 26);
        y += 80;
      });
      // Hướng kim và lời kết
      y = 720;
      c.fillStyle = '#2A1C14';
      c.font = `600 22px ${fonts.body}`;
      kit.wrap(r.weak ? RESULT.weak : RESULT.pointsTo(GROUPS[r.group].name, VALS[r.needle.nearest].name), pad, y, W - pad * 2, 32, { maxLines: 2 });
      y += 100;
      c.font = `italic 300 29px ${fonts.display}`;
      const yEnd = kit.wrap(CONCLUSION[r.group], pad + 28, y, W - pad * 2 - 28, 40, { maxLines: 6 });
      c.strokeStyle = '#9C3D24';
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(pad, y - 30);
      c.lineTo(pad, yEnd - 20);
      c.stroke();
      c.fillStyle = '#625D57';
      c.font = `400 18px ${fonts.body}`;
      c.fillText('Bộ thẻ tự soạn theo lý thuyết của Schwartz, chưa chuẩn hoá; kết quả để tự soi, không phải điểm số.', pad, H - 150);
      kit.brand();
    },
  });
  ctx.toast(ok ? RESULT.saved : RESULT.saveFail);
}

/* ---------- Điều phối ---------- */

function render(route) {
  if (route.segments[1]) {
    ctx.navigate(BASE, { replace: true });
    return;
  }
  load();
  setToc();
  api.scroller.scrollTop = 0;
  api.body.innerHTML = pageHtml();
  const root = api.body;
  tagSources(root);
  bind(root);
  if (st.step === 1) bindDrag();
  if (st.step === 3) bindRankDrag();
  api.sheet.focus({ preventScroll: true });
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(root.querySelectorAll('.vs-fan__c'), { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.07, delay: 0.3 });
  }
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
