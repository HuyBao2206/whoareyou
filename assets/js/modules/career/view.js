// View của thẻ Sở thích nghề nghiệp: "Tổ ong".
// Làm bài: 48 hoạt động hiện thành chồng thẻ, vuốt phải là Thích, trái là Không thích, lên là Phân vân;
// có nút và phím mũi tên tương đương. Kết quả: sáu ô lục giác đổ đầy mật theo điểm, ba ô cao nhất ghép thành mã Holland.
// Câu trả lời chỉ nằm trong biến `state`; mã Holland và điểm được giữ trong sessionStorage (core/session.js).

import * as H from './calc.js';
import TYPES from './types.js';
import ITEMS from './items.js';
import PAIRS from './pairs.js';
import {
  UPDATED, PRIVACY_LINE, INTRO, QUIZ, RESULT, tieLine, CONSISTENCY, FLAT_NOTE, LOW_NOTE, TYPES_SEC, HEX_SEC, PAIRS_SEC,
  READ_SEC, SOURCES,
} from './content.js';
import { sourcesHtml } from '../../core/sources.js';
import { saveImage } from '../../core/share-image.js';
import { sessionGet, sessionSet } from '../../core/session.js';
import { escapeHtml as e, G, reducedMotion } from '../../core/utils.js';

const BASE = '/so-thich-nghe-nghiep';
const DECK = H.deckOrder().map((d) => ({ ...d, text: ITEMS[d.type][d.i] }));
const TOTAL = DECK.length;

let api = null;
let ctx = null;
let state = fresh();

function fresh() {
  return { pos: 0, answers: [], scores: null, sel: 'R' };
}

const ICON_LIKE = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const ICON_NO = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>`;
const ICON_UNSURE = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.2 9.2a2.9 2.9 0 1 1 4.1 2.6c-.8.4-1.3 1-1.3 1.9v.6"/><circle cx="12" cy="17.6" r=".6" fill="currentColor"/></svg>`;
const ICON_BACK = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 7L4 12l5 5M4 12h11a5 5 0 0 1 0 10h-2"/></svg>`;
const ICON_IMG = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>`;
const ICON_HEX = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M7 3.5h10l5 8.5-5 8.5H7L2 12z"/></svg>`;

const typeName = (t) => `${TYPES[t].name} ${t}`;

function announce(msg) {
  const live = api?.body.querySelector('#cr-live');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => (live.textContent = msg), 60);
}

/* ---------- Phần mở đầu và chồng thẻ ---------- */

function heroHtml() {
  return `
    <header class="cr-hero">
      <p class="eyebrow">${e(INTRO.eyebrow)}</p>
      <p class="cr-hero__title" aria-hidden="true">${e(INTRO.title)}</p>
      <p class="cr-hero__lead">${e(INTRO.lead)}</p>
    </header>`;
}

function stageHtml() {
  return `
    <section class="cr-stage" id="cr-lam-bai" aria-labelledby="cr-quiz-t">
      ${heroHtml()}
      <div class="cr-quiz__head">
        <h3 class="cr-quiz__title" id="cr-quiz-t">${e(QUIZ.title)}</h3>
        <p class="cr-progress" aria-hidden="true"><span class="cr-progress__n" id="cr-count"></span>
          <span class="cr-progress__bar"><span id="cr-bar"></span></span></p>
      </div>
      <div class="cr-play" id="cr-play"></div>
      <p class="cr-self">${ICON_HEX}<span>${e(INTRO.self)}</span></p>
      <p class="cr-privacy">${e(PRIVACY_LINE)}</p>
    </section>
    <section class="cr-res" id="cr-ket-qua" aria-labelledby="cr-res-t" hidden></section>`;
}

function playHtml() {
  return `
    <div class="cr-deck" id="cr-deck" tabindex="0" role="group" data-noswipe aria-roledescription="chồng thẻ" aria-describedby="cr-hint-keys"></div>
    <div class="cr-ctrl" role="group" aria-label="Chọn câu trả lời">
      <button type="button" class="cr-btn cr-btn--no" data-ans="dislike"><span class="cr-btn__ic">${ICON_NO}</span><span>${e(QUIZ.dislike)}</span><kbd aria-hidden="true">←</kbd></button>
      <button type="button" class="cr-btn cr-btn--unsure" data-ans="unsure"><span class="cr-btn__ic">${ICON_UNSURE}</span><span>${e(QUIZ.unsure)}</span><kbd aria-hidden="true">↑</kbd></button>
      <button type="button" class="cr-btn cr-btn--like" data-ans="like"><span class="cr-btn__ic">${ICON_LIKE}</span><span>${e(QUIZ.like)}</span><kbd aria-hidden="true">→</kbd></button>
    </div>
    <div class="cr-under">
      <button type="button" class="link-btn cr-back" data-act="back">${ICON_BACK}<span>${e(QUIZ.back)}</span></button>
    </div>
    <p class="cr-hint"><span class="cr-hint__touch">${e(QUIZ.hintTouch)}</span> <span class="cr-hint__keys" id="cr-hint-keys">${e(QUIZ.hintKeys)}</span></p>`;
}

function doneHtml() {
  return `
    <div class="cr-done">
      <p class="cr-done__k">${e(QUIZ.progress(TOTAL, TOTAL))}</p>
      <p class="cr-done__t">${e(state.answers.length ? QUIZ.done : QUIZ.resume)}</p>
      <div class="cr-done__acts">
        <button type="button" class="btn btn--ghost" data-act="restart">${e(QUIZ.restart)}</button>
      </div>
    </div>`;
}

function cardHtml(k, depth) {
  const c = DECK[k];
  return `
    <article class="cr-card" style="--depth:${depth}" data-k="${k}" ${depth ? 'aria-hidden="true"' : ''}>
      <p class="cr-card__k">Hoạt động ${k + 1}</p>
      <p class="cr-card__text">${e(c.text)}</p>
      <span class="cr-stamp cr-stamp--like" aria-hidden="true">${e(QUIZ.like)}</span>
      <span class="cr-stamp cr-stamp--no" aria-hidden="true">${e(QUIZ.dislike)}</span>
      <span class="cr-stamp cr-stamp--unsure" aria-hidden="true">${e(QUIZ.unsure)}</span>
    </article>`;
}

/** Vẽ lại chồng thẻ theo state.pos: tối đa 3 thẻ, thẻ trên cùng nằm cuối trong DOM. */
function renderDeck() {
  const root = api.body;
  const play = root.querySelector('#cr-play');
  const count = root.querySelector('#cr-count');
  const bar = root.querySelector('#cr-bar');
  const done = state.pos >= TOTAL || !!state.scores;
  count.textContent = QUIZ.progress(Math.min(state.pos + (done ? 0 : 1), TOTAL), TOTAL);
  bar.style.width = `${((done ? TOTAL : state.pos) / TOTAL) * 100}%`;
  if (done) {
    play.innerHTML = doneHtml();
    play.querySelector('[data-act="restart"]').addEventListener('click', restart);
    return;
  }
  if (!play.querySelector('#cr-deck')) {
    play.innerHTML = playHtml();
    bindPlay(play);
  }
  const deck = play.querySelector('#cr-deck');
  const ks = [];
  for (let d = 2; d >= 0; d--) if (state.pos + d < TOTAL) ks.push([state.pos + d, d]);
  deck.innerHTML = ks.map(([k, d]) => cardHtml(k, d)).join('');
  deck.setAttribute('aria-label', `Hoạt động ${state.pos + 1} trên ${TOTAL}: ${DECK[state.pos].text}`);
  play.querySelector('[data-act="back"]').disabled = state.pos === 0;
  const top = deck.lastElementChild;
  top.classList.add('is-top');
  bindDrag(top);
}

/* ---------- Trả lời ---------- */

let busy = false;

function answer(kind) {
  if (busy || state.scores || state.pos >= TOTAL) return;
  const deck = api.body.querySelector('#cr-deck');
  const top = deck?.querySelector('.cr-card.is-top');
  if (!top) return;
  busy = true;
  state.answers[state.pos] = { type: DECK[state.pos].type, answer: kind };
  const next = () => {
    busy = false;
    state.pos++;
    if (state.pos >= TOTAL) finish();
    else {
      renderDeck();
      announce(`Đã chọn ${QUIZ[kind]}. Hoạt động ${state.pos + 1}: ${DECK[state.pos].text}`);
    }
  };
  if (reducedMotion()) {
    next();
    return;
  }
  top.classList.add('is-out', `is-${kind}`);
  top.style.removeProperty('transform');
  let called = false;
  const once = () => {
    if (called) return;
    called = true;
    next();
  };
  top.addEventListener('transitionend', (ev) => ev.propertyName === 'transform' && once());
  setTimeout(once, 420);
}

function back() {
  if (busy || state.pos === 0 || state.scores) return;
  state.pos--;
  state.answers.length = state.pos;
  renderDeck();
  announce(`Quay lại hoạt động ${state.pos + 1}: ${DECK[state.pos].text}`);
}

function finish() {
  state.scores = H.score(state.answers);
  const code = H.hollandCode(state.scores);
  sessionSet('holland', code.code);
  sessionSet('holland.scores', H.encodeScores(state.scores));
  renderDeck();
  announce(`Đã xong cả 48 câu. Mã Holland của bạn là ${code.code.split('').join(' ')}.`);
  renderResult();
}

function restart() {
  state = fresh();
  sessionSet('holland', null);
  sessionSet('holland.scores', null);
  const res = api.body.querySelector('#cr-ket-qua');
  res.hidden = true;
  res.innerHTML = '';
  api.body.querySelector('#cr-play').innerHTML = '';
  renderDeck();
  paintHex();
  paintPairs();
  setToc();
  api.jumpTo('cr-lam-bai');
  setTimeout(() => api.body.querySelector('#cr-deck')?.focus({ preventScroll: true }), 350);
}

function bindPlay(play) {
  play.querySelector('.cr-ctrl').addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-ans]');
    if (b) answer(b.dataset.ans);
  });
  play.querySelector('[data-act="back"]').addEventListener('click', back);
}

/** Phím tắt trong khu làm bài: mũi tên để trả lời, Backspace để quay lại. */
function bindKeys(stage) {
  stage.addEventListener('keydown', (ev) => {
    if (ev.altKey || ev.ctrlKey || ev.metaKey || state.scores) return;
    const map = { ArrowRight: 'like', ArrowLeft: 'dislike', ArrowUp: 'unsure' };
    if (map[ev.key]) {
      ev.preventDefault();
      answer(map[ev.key]);
      // Giữ tiêu điểm ở chồng thẻ để bấm phím liên tục.
      if (!ev.target.closest('#cr-deck')) api.body.querySelector('#cr-deck')?.focus({ preventScroll: true });
    } else if (ev.key === 'Backspace') {
      ev.preventDefault();
      back();
    }
  });
}

/** Kéo thẻ bằng chuột hoặc ngón tay. Thả quá ngưỡng thì trả lời, chưa tới thì thẻ bật về chỗ cũ. */
function bindDrag(card) {
  let id = null;
  let x0 = 0;
  let y0 = 0;
  let t0 = 0;
  let dx = 0;
  let dy = 0;
  const TH = 90;
  const set = () => {
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.06}deg)`;
    const up = -dy > Math.abs(dx) ? Math.min(1, -dy / TH) : 0;
    card.style.setProperty('--like', up ? 0 : Math.max(0, Math.min(1, dx / TH)));
    card.style.setProperty('--no', up ? 0 : Math.max(0, Math.min(1, -dx / TH)));
    card.style.setProperty('--unsure', up);
  };
  card.addEventListener('pointerdown', (ev) => {
    if (busy || id !== null || (ev.pointerType === 'mouse' && ev.button !== 0)) return;
    id = ev.pointerId;
    x0 = ev.clientX;
    y0 = ev.clientY;
    t0 = performance.now();
    dx = dy = 0;
    card.setPointerCapture(id);
    card.classList.add('is-drag');
  });
  card.addEventListener('pointermove', (ev) => {
    if (ev.pointerId !== id) return;
    dx = ev.clientX - x0;
    dy = Math.min(ev.clientY - y0, 40);
    set();
  });
  const end = (ev) => {
    if (ev.pointerId !== id) return;
    id = null;
    card.classList.remove('is-drag');
    const dt = Math.max(1, performance.now() - t0);
    const vx = dx / dt;
    const vy = dy / dt;
    let kind = null;
    if (-dy > Math.abs(dx) && (-dy > TH || vy < -0.6)) kind = 'unsure';
    else if (dx > TH || (vx > 0.6 && dx > 30)) kind = 'like';
    else if (dx < -TH || (vx < -0.6 && dx < -30)) kind = 'dislike';
    if (kind) answer(kind);
    else {
      card.style.removeProperty('transform');
      ['--like', '--no', '--unsure'].forEach((p) => card.style.removeProperty(p));
    }
  };
  card.addEventListener('pointerup', end);
  card.addEventListener('pointercancel', end);
}

/* ---------- Tổ ong ---------- */

// Ô lục giác đầu bằng (flat-top): rộng 1, cao √3/2. Sáu ô xếp quanh ô giữa theo thứ tự lục giác Holland,
// R ở trên cùng rồi đi theo chiều kim đồng hồ, nên hai nhóm cạnh nhau trên lục giác cũng là hai ô kề nhau.
const HEX_H = Math.sqrt(3) / 2;
const GAP = 1.07;
const RING = { R: [0, -1], I: [0.75, -0.5], A: [0.75, 0.5], S: [0, 1], E: [-0.75, 0.5], C: [-0.75, -0.5] };
const BOX_W = 1 + 1.5 * GAP;
const BOX_H = HEX_H * (1 + 2 * GAP);

function cellPos(dx, dy) {
  const cx = dx * GAP;
  const cy = dy * HEX_H * GAP;
  const left = ((cx - 0.5 + BOX_W / 2) / BOX_W) * 100;
  const top = ((cy - HEX_H / 2 + BOX_H / 2) / BOX_H) * 100;
  return `left:${left.toFixed(3)}%;top:${top.toFixed(3)}%;width:${(100 / BOX_W).toFixed(3)}%;height:${((HEX_H / BOX_H) * 100).toFixed(3)}%`;
}

const WAVE = `<svg class="comb__wave" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M0 10Q25 2 50 10T100 10T150 10T200 10V20H0Z"/></svg>`;

function combHtml(scores, code) {
  const top3 = code.code.split('');
  const cells = H.TYPES.map((t, i) => {
    const rank = top3.indexOf(t);
    const n = scores[t];
    const txt = (cls) => `<span class="comb__txt${cls}"><b>${t}</b><span>${e(TYPES[t].name)}</span><small>${e(RESULT.scoreUnit(n, H.MAX_SCORE))}</small></span>`;
    return `
      <button type="button" class="comb__cell${rank >= 0 ? ' is-top' : ''}" style="${cellPos(...RING[t])};--f:${H.fill(n).toFixed(3)};--d:${(i * 0.12).toFixed(2)}s"
        data-type="${t}" aria-label="${e(`${typeName(t)}: ${n} trên ${H.MAX_SCORE} điểm${rank >= 0 ? `, đứng thứ ${rank + 1}` : ''}. Đọc về nhóm này`)}">
        <span class="comb__hex">
          <span class="comb__honey">${WAVE}</span>
          ${txt('')}${txt(' comb__txt--ink')}
          ${rank >= 0 ? `<i class="comb__rank" aria-hidden="true">${rank + 1}</i>` : ''}
        </span>
      </button>`;
  }).join('');
  const label = `Tổ ong sáu nhóm. ${H.TYPES.map((t) => `${TYPES[t].name} ${scores[t]}`).join(', ')} trên ${H.MAX_SCORE}. Mã Holland ${code.code}.`;
  return `
    <div class="comb is-pre" role="group" aria-label="${e(label)}">
      ${cells}
      <div class="comb__core" style="${cellPos(0, 0)}">
        <span class="comb__hex"><span class="comb__code">${top3.map((l, i) => `<b style="--i:${i}">${l}</b>`).join('')}</span><small>${e(RESULT.codeLabel)}</small></span>
      </div>
    </div>`;
}

/* ---------- Kết quả ---------- */

function codeBlock(code) {
  const c = H.consistency(code.code);
  const tie = code.codes.length > 1 ? `<p class="cr-tie">${e(tieLine(code, (l) => TYPES[l].name))}</p>` : '';
  return `
    <div class="cr-code">
      <p class="cr-code__k">${e(RESULT.codeLabel)}</p>
      <p class="cr-code__v" aria-label="${e(code.code.split('').join(' '))}">${code.code.split('').map((l) => `<span>${l}</span>`).join('')}</p>
      <p class="cr-code__names">${code.code.split('').map((l) => e(TYPES[l].name)).join(' · ')}</p>
      ${tie}
      <div class="cr-cons">
        <p class="cr-cons__k">${e(RESULT.consistencyTitle)}: <strong>${e(CONSISTENCY[c].label)}</strong></p>
        <p>${e(CONSISTENCY[c].text)}</p>
      </div>
    </div>`;
}

function scoresHtml(scores, code) {
  const top3 = code.code.split('');
  return `
    <div class="cr-scores">
      <h4 class="cr-h">${e(RESULT.scoresTitle)}</h4>
      <ol class="cr-scores__list" role="list">
        ${H.ranked(scores).map((t) => `
          <li class="${top3.includes(t) ? 'is-top' : ''}">
            <span class="cr-scores__l">${t}</span>
            <span class="cr-scores__n">${e(TYPES[t].name)}</span>
            <span class="cr-scores__bar" aria-hidden="true"><span style="width:${(H.fill(scores[t]) * 100).toFixed(1)}%"></span></span>
            <span class="cr-scores__v">${e(RESULT.scoreUnit(scores[t], H.MAX_SCORE))}</span>
          </li>`).join('')}
      </ol>
      <p class="cr-fine">${e(READ_SEC.scoring)}</p>
    </div>`;
}

function topCardHtml(t, i) {
  const T = TYPES[t];
  return `
    <article class="cr-top" aria-labelledby="cr-top-${t}">
      <div class="cr-top__head">
        <span class="cr-top__hex" aria-hidden="true">${t}</span>
        <div><p class="cr-top__k">Thứ ${i + 1} · ${e(T.en)}</p><h5 class="cr-top__name" id="cr-top-${t}">${e(T.name)}</h5></div>
      </div>
      <p class="cr-top__summary">${e(T.summary)}</p>
      <p class="cr-top__jobs"><span>${e(RESULT.jobsLabel)}:</span> ${e(T.jobs.slice(0, 4).map((j, k) => (k ? j[0].toLowerCase() + j.slice(1) : j)).join(', '))}.</p>
      <blockquote class="cr-top__note"><p>${e(T.note)}</p></blockquote>
    </article>`;
}

/** Các cặp hai chữ đầu xuất hiện trong mọi mã có thể (không trùng). */
function myPairs(code) {
  return [...new Set(code.codes.map((c) => H.pairKey(c[0], c[1])))];
}

function resultHtml() {
  const scores = state.scores;
  const code = H.hollandCode(scores);
  const diff = H.differentiation(scores);
  const total = H.TYPES.reduce((a, t) => a + scores[t], 0);
  const notes = [];
  if (total <= 12) notes.push(LOW_NOTE);
  else if (diff.flat) notes.push(FLAT_NOTE);
  const fw = ctx.config.topics.find((t) => t.id === 'future-of-work');
  const jobsLink =
    fw && fw.status === 'active'
      ? `<a class="btn btn--ghost" href="#/${e(fw.slug)}?ma=${e(code.code)}" data-act="jobs">${e(RESULT.jobs)}</a>`
      : '';
  const pairs = myPairs(code).slice(0, 3);
  return `
    <h3 class="cr-res__title" id="cr-res-t" tabindex="-1">${e(RESULT.title)}</h3>
    <div class="cr-res__top">
      <figure class="cr-comb-wrap">${combHtml(scores, code)}</figure>
      ${codeBlock(code)}
    </div>
    ${notes.map((n) => `<p class="cr-note-line">${e(n)}</p>`).join('')}
    ${scoresHtml(scores, code)}
    <h4 class="cr-sub">${e(RESULT.topTitle)}</h4>
    <div class="cr-tops">${code.code.split('').map(topCardHtml).join('')}</div>
    <h4 class="cr-sub">${e(RESULT.pairTitle)}</h4>
    <div class="cr-mypairs">${pairs.map((k) => pairCard(k, true)).join('')}</div>
    <div class="cr-actions">
      <button type="button" class="btn" data-act="save">${ICON_IMG}${e(RESULT.save)}</button>
      <button type="button" class="btn btn--ghost" data-act="again">${e(RESULT.again)}</button>
      ${jobsLink}
      <p class="cr-actions__note">${e(RESULT.imageNote)}</p>
    </div>
    <p class="cr-fine">${e(RESULT.fine)}</p>`;
}

function renderResult({ scroll = true } = {}) {
  const root = api.body;
  const res = root.querySelector('#cr-ket-qua');
  res.innerHTML = resultHtml();
  res.hidden = false;
  res.querySelector('[data-act="save"]').addEventListener('click', saveComb);
  res.querySelector('[data-act="again"]').addEventListener('click', restart);
  res.querySelector('.comb').addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-type]');
    if (!b) return;
    pickType?.(H.TYPES.indexOf(b.dataset.type), false);
    api.jumpTo('cr-sau-nhom');
  });
  const code = H.hollandCode(state.scores);
  pickType?.(H.TYPES.indexOf(code.code[0]), false);
  paintHex();
  paintPairs();
  setToc();

  // Đổ mật: bỏ lớp is-pre ở khung hình kế tiếp để ô chuyển từ rỗng sang đầy.
  const comb = res.querySelector('.comb');
  if (reducedMotion()) comb.classList.remove('is-pre');
  else requestAnimationFrame(() => requestAnimationFrame(() => comb.classList.remove('is-pre')));
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(res.querySelectorAll('.cr-code, .cr-scores, .cr-top'), { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.3 });
  }
  if (scroll) {
    const sr = api.scroller.getBoundingClientRect();
    const r = res.getBoundingClientRect();
    api.scroller.scrollTo({ top: api.scroller.scrollTop + (r.top - sr.top) - 16, behavior: reducedMotion() ? 'auto' : 'smooth' });
    res.querySelector('#cr-res-t').focus({ preventScroll: true });
  }
}

/* ---------- Các mục kiến thức ---------- */

const secTitle = (no, id, text) => `<h3 class="cr-sec__title" id="${id}"><span class="cr-sec__no">${no}</span>${e(text)}</h3>`;

function typePanel(t) {
  const T = TYPES[t];
  return `
    <div class="cr-panel__head">
      <span class="cr-panel__hex" aria-hidden="true">${t}</span>
      <div><h4 class="cr-panel__name">${e(T.name)} <span lang="en">${e(T.en)}</span></h4><p class="cr-panel__sub">${e(T.short)}</p></div>
    </div>
    <p class="cr-panel__about">${e(T.about)}</p>
    <div class="cr-panel__grid">
      <div class="cr-block"><h5 class="cr-h">${e(TYPES_SEC.likes)}</h5><ul class="cr-list">${T.likes.map((x) => `<li>${e(x)}</li>`).join('')}</ul></div>
      <div class="cr-block"><h5 class="cr-h">${e(TYPES_SEC.jobs)}</h5><ul class="cr-chips" role="list">${T.jobs.map((x) => `<li>${e(x)}</li>`).join('')}</ul></div>
      <div class="cr-block"><h5 class="cr-h">${e(TYPES_SEC.envFit)}</h5><p>${e(T.envFit)}</p></div>
      <div class="cr-block"><h5 class="cr-h">${e(TYPES_SEC.envStifle)}</h5><p>${e(T.envStifle)}</p></div>
    </div>`;
}

function typesHtml() {
  const sel = H.TYPES.indexOf(state.sel);
  return `
    <section class="cr-sec" id="cr-sau-nhom" aria-labelledby="cr-h1">
      ${secTitle('01', 'cr-h1', TYPES_SEC.title)}
      <p class="cr-sec__lead">${e(TYPES_SEC.lead)}</p>
      <div class="cr-picker" role="tablist" aria-label="Sáu nhóm sở thích">
        ${H.TYPES.map((t, i) => `<button type="button" role="tab" class="cr-pick" id="cr-type-tab-${i}" aria-selected="${i === sel}"
            aria-controls="cr-type-panel" tabindex="${i === sel ? 0 : -1}" data-i="${i}"><b>${t}</b><span>${e(TYPES[t].name)}</span></button>`).join('')}
      </div>
      <div class="cr-panel" role="tabpanel" id="cr-type-panel" aria-labelledby="cr-type-tab-${sel}" tabindex="0">${typePanel(state.sel)}</div>
    </section>`;
}

/** Toạ độ đỉnh của nhóm t trên hình lục giác (khung 320 × 340, R ở trên cùng). */
const HX = { x: 160, y: 170, r: 104 };
function hexPt(t, r = HX.r) {
  const a = ((H.TYPES.indexOf(t) * 60 - 90) * Math.PI) / 180;
  return [HX.x + r * Math.cos(a), HX.y + r * Math.sin(a)];
}
const f1 = (n) => n.toFixed(1);

/** Hình lục giác Holland với hai trục của Prediger. Ba chữ trong mã của người dùng được tô đậm. */
function hexSvg() {
  const outline = H.TYPES.map((t, i) => (i ? 'L' : 'M') + hexPt(t).map(f1).join(' ')).join('') + 'Z';
  const diag = ['RS', 'IE', 'AC']
    .map(([a, b]) => `<line class="hx-diag" x1="${f1(hexPt(a)[0])}" y1="${f1(hexPt(a)[1])}" x2="${f1(hexPt(b)[0])}" y2="${f1(hexPt(b)[1])}"/>`)
    .join('');
  const nodes = H.TYPES.map((t) => {
    const [x, y] = hexPt(t);
    // Tên đặt ngay trên hoặc ngay dưới vòng tròn để không đè lên cạnh lục giác.
    const [lx, ly] = [x, y < HX.y ? y - 29 : y + 30];
    return `<g class="hx-node" data-t="${t}"><circle cx="${f1(x)}" cy="${f1(y)}" r="17"/><text x="${f1(x)}" y="${f1(y)}" class="hx-l">${t}</text>
      <text x="${f1(lx)}" y="${f1(ly)}" class="hx-name">${e(TYPES[t].name)}</text></g>`;
  }).join('');
  const ax = HEX_SEC.axes;
  return `
    <svg class="hx-svg" viewBox="0 0 320 340" role="img" aria-label="${e(`Lục giác Holland: ${H.TYPES.map((t) => TYPES[t].name).join(', ')}, theo chiều kim đồng hồ. Trục dọc: đồ vật ở trên, con người ở dưới. Trục ngang: dữ kiện bên trái, ý tưởng bên phải.`)}">
      <line class="hx-axis" x1="160" y1="20" x2="160" y2="320"/><line class="hx-axis" x1="6" y1="170" x2="314" y2="170"/>
      <text class="hx-ax" x="160" y="10">${e(ax.things)}</text><text class="hx-ax" x="160" y="334">${e(ax.people)}</text>
      <text class="hx-ax hx-ax--l" x="4" y="160">${e(ax.data)}</text><text class="hx-ax hx-ax--r" x="316" y="160">${e(ax.ideas)}</text>
      <path class="hx-edge" d="${outline}"/>
      ${diag}
      <path class="hx-mine" id="hx-mine" d=""/>
      ${nodes}
    </svg>`;
}

function paintHex() {
  const svg = api.body.querySelector('.hx-svg');
  if (!svg) return;
  const path = svg.querySelector('#hx-mine');
  svg.querySelectorAll('.hx-node').forEach((n) => n.classList.remove('is-mine'));
  if (!state.scores) {
    path.setAttribute('d', '');
    return;
  }
  const code = H.hollandCode(state.scores).code;
  path.setAttribute('d', code.split('').map((t, i) => (i ? 'L' : 'M') + hexPt(t).map(f1).join(' ')).join(''));
  code.split('').forEach((t) => svg.querySelector(`.hx-node[data-t="${t}"]`)?.classList.add('is-mine'));
}

function hexHtml() {
  return `
    <section class="cr-sec" id="cr-luc-giac" aria-labelledby="cr-h2">
      ${secTitle('02', 'cr-h2', HEX_SEC.title)}
      <div class="cr-cols">
        <div class="cr-prose">${HEX_SEC.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
        <figure class="cr-hexfig">${hexSvg()}<figcaption>${e(HEX_SEC.figCaption)}</figcaption></figure>
      </div>
    </section>`;
}

function pairCard(k, mine = false) {
  const [a, b] = k.split('');
  return `
    <article class="cr-pair${mine ? ' is-mine' : ''}" data-pair="${k}">
      <p class="cr-pair__l"><b>${a}</b><b>${b}</b>${mine ? '' : `<span class="cr-pair__mine">${e(PAIRS_SEC.mine)}</span>`}</p>
      <h5 class="cr-pair__n">${e(TYPES[a].name)} và ${e(TYPES[b].name)}</h5>
      <p>${e(PAIRS[k].summary)}</p>
    </article>`;
}

function pairsHtml() {
  const all = H.allPairs();
  return `
    <section class="cr-sec" id="cr-to-hop" aria-labelledby="cr-h3">
      ${secTitle('03', 'cr-h3', PAIRS_SEC.title)}
      <p class="cr-sec__lead">${e(PAIRS_SEC.lead)}</p>
      ${[1, 2, 3].map((d) => `
        <h4 class="cr-pairs__g">${e(PAIRS_SEC.groups[d])}</h4>
        <div class="cr-pairs">${all.filter((k) => H.distance(k[0], k[1]) === d).map((k) => pairCard(k)).join('')}</div>`).join('')}
    </section>`;
}

function paintPairs() {
  const mine = state.scores ? myPairs(H.hollandCode(state.scores)) : [];
  api.body.querySelectorAll('#cr-to-hop .cr-pair').forEach((el) => el.classList.toggle('is-mine', mine.includes(el.dataset.pair)));
}

function readHtml() {
  return `
    <section class="cr-sec" id="cr-doc-dung" aria-labelledby="cr-h4">
      ${secTitle('04', 'cr-h4', READ_SEC.title)}
      <div class="cr-cols">
        <div class="cr-prose">${READ_SEC.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
        <blockquote class="cr-quote"><p>${e(READ_SEC.quote)}</p></blockquote>
      </div>
      <p class="cr-fine">${e(READ_SEC.scoring)}</p>
    </section>`;
}

/* ---------- Dựng trang ---------- */

function pageHtml() {
  return `
    <div class="cr">
      <p class="visually-hidden" id="cr-live" aria-live="polite" aria-atomic="true"></p>
      ${stageHtml()}
      ${typesHtml()}
      ${hexHtml()}
      ${pairsHtml()}
      ${readHtml()}
      ${sourcesHtml({ id: 'cr-nguon', groups: SOURCES, updated: UPDATED })}
    </div>`;
}

function setToc() {
  const toc = [{ id: 'cr-lam-bai', label: 'Làm bài' }];
  if (state.scores) toc.push({ id: 'cr-ket-qua', label: 'Kết quả' });
  toc.push(
    { id: 'cr-sau-nhom', label: 'Sáu nhóm' },
    { id: 'cr-luc-giac', label: 'Lục giác' },
    { id: 'cr-to-hop', label: 'Các cặp' },
    { id: 'cr-doc-dung', label: 'Đọc đúng' },
    { id: 'cr-nguon', label: 'Nguồn' }
  );
  api.setToc(toc);
}

let pickType = null;

function bindPicker(root) {
  const wrap = root.querySelector('.cr-picker');
  const tabs = [...wrap.querySelectorAll('[role="tab"]')];
  const panel = root.querySelector('#cr-type-panel');
  const select = (i, focus) => {
    tabs.forEach((t, j) => {
      t.setAttribute('aria-selected', String(j === i));
      t.tabIndex = j === i ? 0 : -1;
    });
    if (focus) tabs[i].focus();
    state.sel = H.TYPES[i];
    panel.innerHTML = typePanel(state.sel);
    panel.setAttribute('aria-labelledby', `cr-type-tab-${i}`);
    const gsap = G();
    if (gsap && !reducedMotion()) gsap.fromTo(panel, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
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

/* ---------- Xuất ảnh tổ ong ---------- */

async function saveComb() {
  const scores = state.scores;
  if (!scores) return;
  const code = H.hollandCode(scores);
  const top3 = code.code.split('');
  const ok = await saveImage({
    filename: `hub-to-ong-${code.code.toLowerCase()}.png`,
    fonts: ['300 150px Newsreader', '600 30px "Be Vietnam Pro"'],
    draw(c, kit) {
      const { W, fonts } = kit;
      c.fillStyle = '#F5F1EA';
      c.fillRect(0, 0, W, kit.H);
      c.textAlign = 'center';
      c.fillStyle = '#8A5A12';
      c.font = `500 22px ${fonts.body}`;
      c.fillText('TỔ ONG · SỞ THÍCH NGHỀ NGHIỆP HOLLAND', W / 2, 92);

      // Tổ ong: ô rộng 250px, tâm tổ ở (W/2, 470).
      const w = 250;
      const hh = w * HEX_H;
      const cx0 = W / 2;
      const cy0 = 500;
      const hexPath = (cx, cy, s) => {
        const p = new Path2D();
        for (let k = 0; k < 6; k++) {
          const a = (k * 60 * Math.PI) / 180;
          const x = cx + (s / 2) * Math.cos(a);
          const y = cy + (s / 2) * Math.sin(a);
          k ? p.lineTo(x, y) : p.moveTo(x, y);
        }
        p.closePath();
        return p;
      };
      const drawCell = (cx, cy, t) => {
        const isTop = top3.includes(t);
        c.save();
        if (isTop) {
          c.shadowColor = 'rgba(242,176,52,0.75)';
          c.shadowBlur = 36;
        }
        c.fillStyle = isTop ? '#F4C24F' : '#3A3530';
        c.fill(hexPath(cx, cy, w));
        c.restore();
        const inner = hexPath(cx, cy, w - 14);
        c.save();
        c.clip(inner);
        c.fillStyle = '#211E1B';
        c.fillRect(cx - w, cy - w, w * 2, w * 2);
        // Mật dâng theo điểm, mép trên lượn sóng.
        const level = cy + hh / 2 - H.fill(scores[t]) * hh;
        const grad = c.createLinearGradient(0, level, 0, cy + hh / 2);
        grad.addColorStop(0, '#F2B941');
        grad.addColorStop(1, '#C97D14');
        c.fillStyle = grad;
        c.beginPath();
        c.moveTo(cx - w / 2, level);
        for (let x = 0; x <= w; x += 4) c.lineTo(cx - w / 2 + x, level + Math.sin((x / w) * Math.PI * 4) * 5);
        c.lineTo(cx + w / 2, cy + hh);
        c.lineTo(cx - w / 2, cy + hh);
        c.closePath();
        c.fill();
        c.restore();
        // Chữ: màu kem trên phần than, màu than trên phần mật.
        const label = (color) => {
          c.fillStyle = color;
          c.font = `400 72px ${fonts.display}`;
          c.fillText(t, cx, cy + 6);
          c.font = `500 22px ${fonts.body}`;
          c.fillText(TYPES[t].name, cx, cy + 42);
          c.font = `500 20px ${fonts.body}`;
          c.fillText(`${scores[t]}/${H.MAX_SCORE}`, cx, cy + 72);
        };
        c.save();
        c.clip(inner);
        c.save();
        c.beginPath();
        c.rect(cx - w, cy - w, w * 2, level - (cy - w));
        c.clip();
        label('#F6EAD0');
        c.restore();
        c.beginPath();
        c.rect(cx - w, level, w * 2, w * 2);
        c.clip();
        label('#221C14');
        c.restore();
      };
      H.TYPES.forEach((t) => {
        const [dx, dy] = RING[t];
        drawCell(cx0 + dx * w * GAP, cy0 + dy * hh * GAP, t);
      });
      // Ô giữa: mã Holland.
      c.save();
      c.shadowColor = 'rgba(242,176,52,0.6)';
      c.shadowBlur = 30;
      c.fillStyle = '#F4C24F';
      c.fill(hexPath(cx0, cy0, w));
      c.restore();
      c.fillStyle = '#171513';
      c.fill(hexPath(cx0, cy0, w - 14));
      c.fillStyle = '#F4C24F';
      c.font = `400 84px ${fonts.display}`;
      c.fillText(code.code.split('').join(' '), cx0, cy0 + 18);
      c.fillStyle = 'rgba(246,234,208,0.75)';
      c.font = `500 18px ${fonts.body}`;
      c.fillText(RESULT.codeLabel.toUpperCase(), cx0, cy0 + 58);

      // Dưới tổ: tên ba nhóm và tính nhất quán.
      let y = cy0 + hh * GAP * 1.5 + 90;
      c.fillStyle = '#1F1C19';
      c.font = `400 40px ${fonts.display}`;
      c.fillText(top3.map((l) => TYPES[l].name).join(' · '), W / 2, y);
      y += 46;
      const cons = CONSISTENCY[H.consistency(code.code)];
      c.fillStyle = '#625D57';
      c.font = `400 24px ${fonts.body}`;
      c.fillText(`${RESULT.consistencyTitle}: ${cons.label.toLowerCase()}${code.codes.length > 1 ? ` · có thể là ${code.codes.slice(0, 3).join(', ')}` : ''}`, W / 2, y);
      y += 40;
      c.font = `italic 300 26px ${fonts.display}`;
      c.fillStyle = '#3A3F52';
      kit.wrap(TYPES[top3[0]].note, W / 2, y + 10, W - 220, 36, { maxLines: 3 });
      c.fillStyle = '#625D57';
      c.font = `400 19px ${fonts.body}`;
      c.fillText('Bộ hoạt động tự soạn, chưa chuẩn hoá. Sở thích không phải năng lực.', W / 2, kit.H - 150);
      kit.brand();
    },
  });
  ctx.toast(ok ? RESULT.saved : RESULT.saveFail);
}

/* ---------- Điều phối ---------- */

function restoreFromSession() {
  if (state.scores || state.pos) return;
  const s = H.decodeScores(sessionGet('holland.scores'));
  if (s) state.scores = s;
}

function renderPage() {
  restoreFromSession();
  setToc();
  api.body.innerHTML = pageHtml();
  const root = api.body;
  pickType = bindPicker(root);
  bindKeys(root.querySelector('#cr-lam-bai'));
  renderDeck();
  if (state.scores) renderResult({ scroll: false });
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(root.querySelectorAll('.cr-card'), { opacity: 0, y: 40, rotation: (i) => (i - 1) * 3, duration: 0.8, ease: 'expo.out', stagger: 0.08, delay: 0.35, clearProps: 'transform,opacity' });
  }
}

function render(route) {
  if (route.segments[1]) {
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
    busy = false;
    render(route);
  },
  update(route) {
    if (!api) return;
    render(route);
  },
  unmount() {
    busy = false;
  },
};
