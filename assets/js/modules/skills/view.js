// View của thẻ Kỹ năng nên đầu tư: "Cây kỹ năng".
// Hai mục kiến thức có nguồn, công cụ ba bước (mục tiêu → tự chấm 15 kỹ năng → ba kỹ năng ưu tiên) vẽ thành cây
// năm nhánh, bảng nhiệm vụ 30/90 ngày, cách tính, hồ sơ từng kỹ năng, ngăn nguồn.
// Mục tiêu mặc định lấy từ nghề đang xem ở thẻ Nghề nghiệp (khoá phiên future.job). Mức tự chấm và ô đánh dấu
// chỉ giữ trong sessionStorage của tab (khoá skills.goal, skills.levels, skills.done).

import * as K from './calc.js';
import SKILLS, { BRANCHES } from './data.js';
import {
  UPDATED, INTRO, WHY, LEARN, TOOL, BOARD, PROFILE, METHOD, PROFILES, JOB_OVERRIDES, LINKS, SOURCES, SOURCE_GROUPS, SOURCE_NOTE,
} from './content.js';
import JOBS from '../future/jobs/index.js';
import { sourcesHtml } from '../../core/sources.js';
import { saveImage } from '../../core/share-image.js';
import { sessionGet, sessionSet } from '../../core/session.js';
import { escapeHtml as e, G, reducedMotion } from '../../core/utils.js';

const BASE = '/ky-nang-nen-dau-tu';
const byId = new Map(SKILLS.map((s) => [s.id, s]));
const branchName = Object.fromEntries(BRANCHES.map((b) => [b.id, b.name]));
const fmt = (n) => String(Math.round(n * 100) / 100).replace('.', ',');

let api = null;
let ctx = null;
const state = { goal: 'chung', goalJob: null, levels: {}, done: {}, skill: SKILLS[0].id };

/* ---------- Trạng thái phiên ---------- */

function readJson(key) {
  try {
    const v = JSON.parse(sessionGet(key) || 'null');
    return v && typeof v === 'object' ? v : null;
  } catch {
    return null;
  }
}

function loadState() {
  const levels = readJson('skills.levels') || {};
  state.levels = Object.fromEntries(Object.entries(levels).filter(([k, v]) => byId.has(k) && K.LEVELS.includes(v)));
  const done = readJson('skills.done') || {};
  state.done = Object.fromEntries(Object.entries(done).filter(([k, v]) => byId.has(k) && Array.isArray(v)));
  const job = JOBS.find((j) => j.id === sessionGet('future.job'));
  state.goalJob = job || null;
  const goal = sessionGet('skills.goal');
  if (goal && (PROFILES[goal] || (job && goal === `nghe:${job.id}`))) state.goal = goal;
  else if (job && PROFILES[job.field]) state.goal = `nghe:${job.id}`;
}

const saveLevels = () => sessionSet('skills.levels', JSON.stringify(state.levels));
const saveDone = () => sessionSet('skills.done', JSON.stringify(state.done));

// Mục tiêu là một lĩnh vực ("cntt") hoặc nghề vừa xem ở thẻ Nghề nghiệp ("nghe:ke-toan": lĩnh vực của nghề + điều chỉnh riêng).
const isJobGoal = () => state.goalJob && state.goal === `nghe:${state.goalJob.id}`;
const goalName = () => (isJobGoal() ? state.goalJob.name : PROFILES[state.goal].name);
function targets() {
  const field = isJobGoal() ? state.goalJob.field : state.goal;
  const base = Object.fromEntries(SKILLS.map((s, i) => [s.id, PROFILES[field].levels[i]]));
  return isJobGoal() ? { ...base, ...(JOB_OVERRIDES[state.goalJob.id] || {}) } : base;
}
// Chưa chấm kỹ năng nào thì chưa gợi ý: tránh xếp hạng chỉ dựa vào thứ tự danh sách.
const topList = () => (Object.keys(state.levels).length ? K.topPriorities(SKILLS, targets(), state.levels) : []);

function announce(msg) {
  const live = api?.body.querySelector('#sk-live');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => (live.textContent = msg), 60);
}

/* ---------- Chú thích nguồn ---------- */

const srcRef = (keys) =>
  keys && keys.length
    ? `<span class="sk-src">${keys
        .filter((k) => SOURCES[k])
        .map((k) => `<a href="#sk-src-${e(k)}" data-src="${e(k)}">${e(SOURCES[k].short || SOURCES[k].title)}</a>`)
        .join('<span aria-hidden="true"> · </span>')}</span>`
    : '';

const secTitle = (no, id, text) => `<h3 class="sk-sec__title" id="${id}"><span class="sk-sec__no">${no}</span>${e(text)}</h3>`;

/* ---------- Đầu trang và hai mục kiến thức ---------- */

function heroHtml() {
  const counts = BRANCHES.map((b) => `<li><b>${SKILLS.filter((s) => s.branch === b.id).length}</b> ${e(b.name)}</li>`).join('');
  return `
    <header class="sk-hero">
      <p class="sk-hero__eyebrow">${e(INTRO.eyebrow)}</p>
      <p class="sk-hero__title" aria-hidden="true">${e(INTRO.title)}</p>
      <p class="sk-hero__lead">${e(INTRO.lead)}</p>
      <ul class="sk-hero__branches" role="list">${counts}</ul>
    </header>`;
}

function whyHtml() {
  return `
    <section class="sk-sec" id="sk-vi-sao" aria-labelledby="sk-vi-sao-t">
      ${secTitle('01', 'sk-vi-sao-t', WHY.title)}
      <p class="sk-sec__lead">${e(WHY.lead)}</p>
      <div class="sk-prose">${WHY.paragraphs.map((p) => `<p>${e(p.text)} ${srcRef(p.src)}</p>`).join('')}</div>
      <div class="sk-limits">
        <h4 class="sk-h">Giới hạn của bằng chứng</h4>
        <ul>${WHY.limits.map((l) => `<li>${e(l)}</li>`).join('')}</ul>
      </div>
      <aside class="sk-take"><p class="sk-take__k">Điểm rút ra</p><p>${e(WHY.takeaway)}</p></aside>
    </section>`;
}

const VERDICT = (v) => (/cao|khá/i.test(v) ? 'good' : /trung bình|tuỳ/i.test(v) ? 'mid' : 'low');

function learnHtml() {
  return `
    <section class="sk-sec" id="sk-cach-hoc" aria-labelledby="sk-cach-hoc-t">
      ${secTitle('02', 'sk-cach-hoc-t', LEARN.title)}
      <p class="sk-sec__lead">${e(LEARN.lead)}</p>
      <ul class="sk-methods" role="list">
        ${LEARN.methods
          .map(
            (m) => `
          <li class="sk-method sk-method--${VERDICT(m.verdict)}">
            <p class="sk-method__v">${e(m.verdict)}</p>
            <h4 class="sk-method__n">${e(m.name)}</h4>
            <p>${e(m.text)}</p>
            ${srcRef(m.src)}
          </li>`
          )
          .join('')}
      </ul>
      <div class="sk-limits">
        <h4 class="sk-h">${e(LEARN.practice.title)}</h4>
        <p>${e(LEARN.practice.text)} ${srcRef(LEARN.practice.src)}</p>
      </div>
      <aside class="sk-take"><p class="sk-take__k">Điểm rút ra</p><p>${e(LEARN.takeaway)}</p></aside>
    </section>`;
}

/* ---------- Cây ---------- */

// Toạ độ cây trong khung 600 × 440. Năm nhánh toả từ đỉnh thân, lá đặt dọc nhánh, so le hai bên.
const TREE = (() => {
  const base = { x: 300, y: 300 };
  const angles = [162, 124, 90, 56, 18];
  const len = [250, 235, 240, 235, 250];
  return BRANCHES.map((b, i) => {
    const a = (angles[i] * Math.PI) / 180;
    const end = { x: base.x + len[i] * Math.cos(a), y: base.y - len[i] * Math.sin(a) * 1.05 };
    const ctrl = { x: base.x + len[i] * 0.45 * Math.cos(a), y: base.y - len[i] * 0.75 * Math.sin(a) - 20 };
    const skills = SKILLS.filter((s) => s.branch === b.id);
    const n = skills.length;
    const leaves = skills.map((s, k) => {
      const t = n === 1 ? 0.9 : 0.42 + (k * 0.52) / (n - 1);
      const q = (u) => (1 - t) ** 2 * base[u] + 2 * (1 - t) * t * ctrl[u] + t * t * end[u];
      const side = k % 2 ? 1 : -1;
      const off = n === 1 ? 0 : 20;
      return { id: s.id, x: q('x') + side * off * Math.sin(a), y: q('y') + side * off * Math.cos(a) };
    });
    return { ...b, base, ctrl, end, leaves };
  });
})();

function leafState(id, top) {
  const rank = top.findIndex((x) => x.id === id);
  if (rank >= 0) return { cls: 'bloom', rank: rank + 1 };
  const t = targets()[id];
  const c = state.levels[id];
  if (c == null) return { cls: 'bud' };
  return { cls: c >= t ? 'lit' : 'grow' };
}

function treeHtml() {
  const top = topList();
  const paths = TREE.map(
    (b) => `<path class="sk-tree__br" d="M${b.base.x},${b.base.y} Q${b.ctrl.x.toFixed(1)},${b.ctrl.y.toFixed(1)} ${b.end.x.toFixed(1)},${b.end.y.toFixed(1)}"/>`
  ).join('');
  // Nhãn nhánh: hai nhánh ngang đặt dưới đầu nhánh, sát mép; ba nhánh trên đặt phía trên đầu nhánh.
  const labels = TREE.map((b, i) => {
    const side = i === 0 || i === TREE.length - 1;
    const x = side ? (i === 0 ? 8 : 592) : b.end.x;
    const y = side ? b.end.y + 44 : b.end.y - (i === 2 ? 30 : 34);
    const anchor = side ? (i === 0 ? 'start' : 'end') : 'middle';
    return `<text class="sk-tree__lb" x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}">${e(b.name)}</text>`;
  }).join('');
  const leaves = TREE.flatMap((b) =>
    b.leaves.map((l) => {
      const st = leafState(l.id, top);
      const s = byId.get(l.id);
      const cur = state.levels[l.id];
      const label = `${s.name}. Mức cần ${targets()[l.id]}, ${cur ? `mức của bạn ${cur}` : TOOL.noneYet.toLowerCase()}${st.rank ? `. Ưu tiên ${st.rank}` : ''}`;
      return `<button type="button" class="sk-leaf sk-leaf--${st.cls}" data-leaf="${l.id}" style="left:${((l.x / 600) * 100).toFixed(2)}%;top:${((l.y / 440) * 100).toFixed(2)}%" aria-label="${e(label)}" title="${e(s.name)}"><span class="sk-leaf__shape" aria-hidden="true"></span>${st.rank ? `<span class="sk-leaf__rank" aria-hidden="true">${st.rank}</span>` : ''}</button>`;
    })
  ).join('');
  const lit = SKILLS.filter((s) => (state.levels[s.id] ?? 1) >= targets()[s.id]).length;
  return `
    <div class="sk-tree" role="group" aria-label="Cây kỹ năng" aria-describedby="sk-tree-desc">
      <svg class="sk-tree__svg" viewBox="0 0 600 440" aria-hidden="true" focusable="false">
        <path class="sk-tree__ground" d="M120,430 Q300,404 480,430"/>
        <path class="sk-tree__trunk" d="M286,432 C292,380 290,340 300,300 C310,340 308,380 314,432 Z"/>
        ${paths}
        ${labels}
      </svg>
      ${leaves}
    </div>
    <ul class="sk-legend" role="list">
      <li><span class="sk-leaf__shape sk-legend__i sk-legend__i--bud"></span>Chưa chấm</li>
      <li><span class="sk-leaf__shape sk-legend__i sk-legend__i--grow"></span>Dưới mức cần</li>
      <li><span class="sk-leaf__shape sk-legend__i sk-legend__i--lit"></span>Đã đạt</li>
      <li><span class="sk-leaf__shape sk-legend__i sk-legend__i--bloom"></span>Ưu tiên</li>
    </ul>
    <p class="sk-tree__desc" id="sk-tree-desc">${e(TOOL.treeDesc(lit, SKILLS.length, top.map((x) => byId.get(x.id).name)))}</p>`;
}

/* ---------- Công cụ ---------- */

function goalHtml() {
  const job = state.goalJob ? [[`nghe:${state.goalJob.id}`, TOOL.jobOption(state.goalJob.name)]] : [];
  const opts = [...job, ...Object.entries(PROFILES).map(([k, p]) => [k, p.name])]
    .map(([k, name]) => `<option value="${e(k)}" ${k === state.goal ? 'selected' : ''}>${e(name)}</option>`)
    .join('');
  const hint = isJobGoal() ? TOOL.goalFromJob(state.goalJob.name) : TOOL.goalHint;
  return `
    <div class="sk-goal">
      <label class="sk-step" for="sk-goal"><span class="sk-step__no">1</span>${e(TOOL.goalLabel)}</label>
      <select id="sk-goal" class="sk-select" aria-describedby="sk-goal-hint">${opts}</select>
      <p class="sk-hint" id="sk-goal-hint">${e(hint)}</p>
    </div>`;
}

function rateRow(s) {
  const t = targets()[s.id];
  const cur = state.levels[s.id];
  const notches = K.LEVELS.map(
    (l) => `
      <label class="sk-notch ${l === t ? 'is-target' : ''}">
        <input type="radio" name="sk-r-${s.id}" value="${l}" ${cur === l ? 'checked' : ''}>
        <span class="sk-notch__n">${l}</span>
        <span class="visually-hidden">${e(TOOL.levelNames[l - 1])}: ${e(s.levels[l - 1])}${l === t ? `. ${e(TOOL.target)}` : ''}</span>
      </label>`
  ).join('');
  const shown = cur || t;
  return `
    <fieldset class="sk-rate ${cur && cur >= t ? 'is-ok' : ''}" data-skill="${s.id}" id="sk-rate-${s.id}">
      <legend class="sk-rate__name">${e(s.name)}</legend>
      <p class="sk-rate__meta"><span>${e(TOOL.target)}: <b>${t}</b></span><span>${e(TOOL.current)}: <b>${cur || '–'}</b></span></p>
      <div class="sk-notches">${notches}</div>
      <p class="sk-rate__desc"><b>${cur ? `Mức ${cur}` : `Mức cần ${t}`} · ${e(TOOL.levelNames[shown - 1])}.</b> ${e(s.levels[shown - 1])}</p>
    </fieldset>`;
}

function rateHtml() {
  const n = Object.keys(state.levels).length;
  return `
    <div class="sk-rates">
      <p class="sk-step"><span class="sk-step__no">2</span>${e(TOOL.step2)}</p>
      <p class="sk-hint">${e(TOOL.rateHint)}</p>
      <p class="sk-count" id="sk-count">${e(TOOL.rated(n))}</p>
      ${BRANCHES.map(
        (b) => `
        <div class="sk-branch">
          <h4 class="sk-branch__t">${e(b.name)}</h4>
          ${SKILLS.filter((s) => s.branch === b.id).map(rateRow).join('')}
        </div>`
      ).join('')}
    </div>`;
}

function topHtml() {
  const top = topList();
  let body;
  if (!Object.keys(state.levels).length) body = '';
  else if (!top.length) body = `<p class="sk-empty">${e(TOOL.allDone)}</p>`;
  else
    body = `<ol class="sk-top" role="list">${top
      .map((x, i) => {
        const s = byId.get(x.id);
        return `
        <li class="sk-top__card">
          <span class="sk-top__rank" aria-hidden="true">${i + 1}</span>
          <div class="sk-top__body">
            <p class="sk-top__br">${e(branchName[s.branch])} · ${e(PROFILE.costTier[s.cost])}</p>
            <h4 class="sk-top__name">${e(s.name)}</h4>
            <p class="sk-top__gap">Mức ${x.current} → ${x.target}</p>
            <p class="sk-top__f"><span>${e(TOOL.score)} ${fmt(x.score)}</span>: ${e(TOOL.formulaLine(x.gap, fmt(x.weight), fmt(x.ev), fmt(x.cost), fmt(x.score)))}</p>
            <p class="sk-top__note">${e(s.note)}</p>
            <button type="button" class="link-btn" data-open="${s.id}">${e(TOOL.openSkill)}</button>
          </div>
        </li>`;
      })
      .join('')}</ol>`;
  const unrated = !Object.keys(state.levels).length ? `<p class="sk-hint">${e(TOOL.topEmpty)}</p>` : '';
  return `<p class="sk-step"><span class="sk-step__no">3</span>${e(TOOL.step3)}</p>${unrated}${body}`;
}

function toolHtml() {
  const t = ctx.config.topics.find((x) => x.id === 'future-of-work');
  const futureLink = t && t.status === 'active' ? `<a class="btn btn--ghost" href="#/${e(t.slug)}">${e(LINKS.toFuture)}</a>` : '';
  return `
    <section class="sk-sec sk-sec--tool" id="sk-cong-cu" aria-labelledby="sk-cong-cu-t">
      ${secTitle('03', 'sk-cong-cu-t', TOOL.title)}
      <p class="sk-sec__lead">${e(TOOL.lead)}</p>
      <div class="sk-tool">
        <div class="sk-tool__left">
          ${goalHtml()}
          <div id="sk-tree">${treeHtml()}</div>
          <div id="sk-top">${topHtml()}</div>
          <div class="sk-actions">
            <button type="button" class="btn" data-act="save">${e(TOOL.save)}</button>
            <button type="button" class="btn btn--ghost" data-act="reset">${e(TOOL.reset)}</button>
            ${futureLink}
          </div>
          <p class="sk-fine">${e(TOOL.sessionNote)}</p>
        </div>
        <div class="sk-tool__right" id="sk-rates">${rateHtml()}</div>
      </div>
    </section>`;
}

/* ---------- Bảng nhiệm vụ ---------- */

function boardHtml() {
  const top = topList();
  if (!top.length) return `<p class="sk-empty">${e(BOARD.empty)}</p>`;
  const hours = top.reduce((n, x) => n + byId.get(x.id).hours, 0);
  return `<p class="sk-hours">${e(BOARD.hours(hours))}${hours > 8 ? ` ${e(BOARD.heavy)}` : ''}</p><div class="sk-board">${top
    .map((x, i) => {
      const s = byId.get(x.id);
      const done = new Set(state.done[s.id] || []);
      const total = s.plan30.length + s.plan90.length;
      const p = K.progress([...done].filter((k) => /^(30|90)-\d+$/.test(k)).length, total);
      const list = (plan, key, title) => `
        <h5 class="sk-col__h">${e(title)}</h5>
        <ul class="sk-tasks" role="list">${plan
          .map(([task, out], k) => {
            const id = `${key}-${k}`;
            return `<li><label class="sk-task"><input type="checkbox" data-task="${s.id}" value="${id}" ${done.has(id) ? 'checked' : ''}><span><span class="sk-task__t">${e(task)}</span><span class="sk-task__o">${e(BOARD.output)}: ${e(out)}</span></span></label></li>`;
          })
          .join('')}</ul>`;
      return `
        <article class="sk-col" aria-labelledby="sk-col-${s.id}">
          <header class="sk-col__head">
            <span class="sk-col__rank" aria-hidden="true">${i + 1}</span>
            <h4 class="sk-col__name" id="sk-col-${s.id}">${e(s.name)}</h4>
          </header>
          <div class="sk-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p}" aria-label="${e(BOARD.progress(p))}"><span style="width:${p}%"></span></div>
          <p class="sk-bar__l">${e(BOARD.progress(p))}</p>
          ${list(s.plan30, '30', BOARD.d30)}
          ${list(s.plan90, '90', BOARD.d90)}
        </article>`;
    })
    .join('')}</div>`;
}

function boardSec() {
  return `
    <section class="sk-sec" id="sk-nhiem-vu" aria-labelledby="sk-nhiem-vu-t">
      ${secTitle('04', 'sk-nhiem-vu-t', BOARD.title)}
      <p class="sk-sec__lead">${e(BOARD.lead)}</p>
      <div id="sk-board">${boardHtml()}</div>
    </section>`;
}

/* ---------- Cách tính ---------- */

function methodSec() {
  return `
    <section class="sk-sec" id="sk-cach-tinh" aria-labelledby="sk-cach-tinh-t">
      ${secTitle('05', 'sk-cach-tinh-t', METHOD.title)}
      <p class="sk-sec__lead">${e(METHOD.lead)}</p>
      <p class="sk-formula">${e(METHOD.formula)}</p>
      <dl class="sk-dl">${METHOD.rows.map(([k, v]) => `<div><dt>${e(k)}</dt><dd>${e(v)}</dd></div>`).join('')}</dl>
      <div class="sk-limits">
        <h4 class="sk-h">Giới hạn</h4>
        <ul>${METHOD.limits.map((l) => `<li>${e(l)}</li>`).join('')}</ul>
      </div>
    </section>`;
}

/* ---------- Hồ sơ kỹ năng ---------- */

function profileHtml() {
  const s = byId.get(state.skill);
  const t = targets()[s.id];
  const cur = state.levels[s.id];
  const plan = (rows) => `<ul class="sk-plan">${rows.map(([a, b]) => `<li><span>${e(a)}</span><span class="sk-plan__o">${e(BOARD.output)}: ${e(b)}</span></li>`).join('')}</ul>`;
  const res = s.resources.length
    ? `<ul class="sk-res">${s.resources
        .map((r) => `<li><a href="${e(r.url)}" target="_blank" rel="noopener">${e(r.name)}</a><span>${e(r.by)} · ${e(r.lang)}</span></li>`)
        .join('')}</ul><p class="sk-fine">${e(PROFILE.resourceNote)}</p>`
    : `<p>${e(PROFILE.noResources)}</p>`;
  return `
    <article class="sk-prof" aria-labelledby="sk-prof-name">
      <header class="sk-prof__head">
        <p class="sk-prof__br">${e(branchName[s.branch])}</p>
        <h4 class="sk-prof__name" id="sk-prof-name">${e(s.name)}</h4>
        <p class="sk-prof__def">${e(s.def)}</p>
      </header>
      <div class="sk-prof__grid">
        <div class="sk-prof__block">
          <h5 class="sk-h">${e(PROFILE.parts)}</h5>
          <ul class="sk-parts">${s.parts.map((p) => `<li>${e(p)}</li>`).join('')}</ul>
        </div>
        <div class="sk-prof__block">
          <h5 class="sk-h">${e(PROFILE.why)}</h5>
          <p>${e(s.why)} ${srcRef(s.src)}</p>
        </div>
      </div>
      <h5 class="sk-h">${e(PROFILE.levels)}</h5>
      <ol class="sk-ladder" role="list">${s.levels
        .map(
          (l, i) => `<li class="${i + 1 === t ? 'is-target' : ''} ${i + 1 === cur ? 'is-cur' : ''}"><span class="sk-ladder__n">${i + 1}</span><span><b>${e(TOOL.levelNames[i])}.</b> ${e(l)}${
            i + 1 === t ? ` <em class="sk-tag">${e(TOOL.target)}</em>` : ''
          }${i + 1 === cur ? ` <em class="sk-tag sk-tag--cur">${e(TOOL.current)}</em>` : ''}</span></li>`
        )
        .join('')}</ol>
      <div class="sk-prof__grid">
        <div class="sk-prof__block"><h5 class="sk-h">${e(PROFILE.plan30)}</h5>${plan(s.plan30)}</div>
        <div class="sk-prof__block"><h5 class="sk-h">${e(PROFILE.plan90)}</h5>${plan(s.plan90)}</div>
        <div class="sk-prof__block"><h5 class="sk-h">${e(PROFILE.prove)}</h5><ul class="sk-parts">${s.prove.map((p) => `<li>${e(p)}</li>`).join('')}</ul></div>
        <div class="sk-prof__block"><h5 class="sk-h">${e(PROFILE.mistakes)}</h5><ul class="sk-parts">${s.mistakes.map((p) => `<li>${e(p)}</li>`).join('')}</ul></div>
        <div class="sk-prof__block"><h5 class="sk-h">${e(PROFILE.cost)}</h5><p><b>${e(PROFILE.costTier[s.cost])}.</b> ${e(s.costText)}</p></div>
        <div class="sk-prof__block"><h5 class="sk-h">${e(PROFILE.resources)}</h5>${res}</div>
      </div>
      <aside class="sk-take"><p class="sk-take__k">${e(PROFILE.note)}</p><p>${e(s.note)}</p></aside>
    </article>`;
}

function profileSec() {
  const opts = BRANCHES.map(
    (b) => `<optgroup label="${e(b.name)}">${SKILLS.filter((s) => s.branch === b.id)
      .map((s) => `<option value="${s.id}" ${s.id === state.skill ? 'selected' : ''}>${e(s.name)}</option>`)
      .join('')}</optgroup>`
  ).join('');
  return `
    <section class="sk-sec" id="sk-ho-so" aria-labelledby="sk-ho-so-t">
      ${secTitle('06', 'sk-ho-so-t', PROFILE.title)}
      <p class="sk-sec__lead">${e(PROFILE.lead)}</p>
      <label class="sk-pick"><span>${e(PROFILE.pick)}</span><select id="sk-skill" class="sk-select">${opts}</select></label>
      <div id="sk-prof">${profileHtml()}</div>
    </section>`;
}

/* ---------- Trang ---------- */

function sourcesGroups() {
  return SOURCE_GROUPS.map(([g, title]) => ({ title, items: Object.values(SOURCES).filter((s) => s.group === g) }));
}

function pageHtml() {
  return `
    <div class="sk">
      <p class="visually-hidden" id="sk-live" aria-live="polite" aria-atomic="true"></p>
      ${heroHtml()}
      ${whyHtml()}
      ${learnHtml()}
      ${toolHtml()}
      ${boardSec()}
      ${methodSec()}
      ${profileSec()}
      ${sourcesHtml({ id: 'sk-nguon', groups: sourcesGroups(), updated: UPDATED, intro: SOURCE_NOTE })}
      <p class="sk-privacy">${e(INTRO.privacy)}</p>
    </div>`;
}

function setToc() {
  api.setToc([
    { id: 'sk-vi-sao', label: 'Vì sao' },
    { id: 'sk-cach-hoc', label: 'Cách học' },
    { id: 'sk-cong-cu', label: 'Cây kỹ năng' },
    { id: 'sk-nhiem-vu', label: 'Nhiệm vụ' },
    { id: 'sk-cach-tinh', label: 'Cách tính' },
    { id: 'sk-ho-so', label: 'Hồ sơ kỹ năng' },
    { id: 'sk-nguon', label: 'Nguồn' },
  ]);
}

/* ---------- Hành vi ---------- */

function refresh({ rates = false } = {}) {
  const root = api.body;
  root.querySelector('#sk-tree').innerHTML = treeHtml();
  root.querySelector('#sk-top').innerHTML = topHtml();
  root.querySelector('#sk-board').innerHTML = boardHtml();
  root.querySelector('#sk-prof').innerHTML = profileHtml();
  if (rates) root.querySelector('#sk-rates').innerHTML = rateHtml();
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.fromTo(root.querySelectorAll('.sk-leaf--bloom .sk-leaf__shape'), { scale: 0.4 }, { scale: 1, duration: 0.5, ease: 'back.out(2.2)', stagger: 0.06 });
  }
}

function updateRow(id) {
  const row = api.body.querySelector(`#sk-rate-${CSS.escape(id)}`);
  if (!row) return;
  const tmp = document.createElement('div');
  tmp.innerHTML = rateRow(byId.get(id));
  const fresh = tmp.firstElementChild;
  // Giữ nguyên các nút chọn để không mất tiêu điểm bàn phím; chỉ thay phần chữ.
  row.className = fresh.className;
  row.querySelector('.sk-rate__meta').innerHTML = fresh.querySelector('.sk-rate__meta').innerHTML;
  row.querySelector('.sk-rate__desc').innerHTML = fresh.querySelector('.sk-rate__desc').innerHTML;
  api.body.querySelector('#sk-count').textContent = TOOL.rated(Object.keys(state.levels).length);
}

function scrollToEl(el) {
  const sr = api.scroller.getBoundingClientRect();
  api.scroller.scrollTo({ top: api.scroller.scrollTop + el.getBoundingClientRect().top - sr.top - 80, behavior: reducedMotion() ? 'auto' : 'smooth' });
}

function openSkill(id) {
  state.skill = id;
  const root = api.body;
  root.querySelector('#sk-skill').value = id;
  root.querySelector('#sk-prof').innerHTML = profileHtml();
  scrollToEl(root.querySelector('#sk-ho-so'));
}

function bind(root) {
  root.querySelector('#sk-goal').addEventListener('change', (ev) => {
    state.goal = ev.target.value;
    sessionSet('skills.goal', state.goal);
    root.querySelector('#sk-goal-hint').textContent = isJobGoal() ? TOOL.goalFromJob(state.goalJob.name) : TOOL.goalHint;
    refresh({ rates: true });
    announce(root.querySelector('#sk-tree-desc').textContent);
  });

  root.querySelector('#sk-rates').addEventListener('change', (ev) => {
    const r = ev.target.closest('input[type="radio"]');
    if (!r) return;
    const id = r.closest('[data-skill]').dataset.skill;
    state.levels[id] = Number(r.value);
    saveLevels();
    updateRow(id);
    refresh();
    announce(root.querySelector('#sk-tree-desc').textContent);
  });

  root.querySelector('#sk-tree').addEventListener('click', (ev) => {
    const b = ev.target.closest('[data-leaf]');
    if (!b) return;
    const row = root.querySelector(`#sk-rate-${CSS.escape(b.dataset.leaf)}`);
    scrollToEl(row);
    const first = row.querySelector('input:checked') || row.querySelector('input');
    setTimeout(() => first.focus({ preventScroll: true }), reducedMotion() ? 0 : 400);
  });

  root.querySelector('#sk-board').addEventListener('change', (ev) => {
    const c = ev.target.closest('input[data-task]');
    if (!c) return;
    const id = c.dataset.task;
    const set = new Set(state.done[id] || []);
    if (c.checked) set.add(c.value);
    else set.delete(c.value);
    state.done[id] = [...set];
    saveDone();
    const col = c.closest('.sk-col');
    const s = byId.get(id);
    const p = K.progress(set.size, s.plan30.length + s.plan90.length);
    const bar = col.querySelector('.sk-bar');
    bar.setAttribute('aria-valuenow', p);
    bar.setAttribute('aria-label', BOARD.progress(p));
    bar.firstElementChild.style.width = `${p}%`;
    col.querySelector('.sk-bar__l').textContent = BOARD.progress(p);
  });

  root.querySelector('#sk-skill').addEventListener('change', (ev) => {
    state.skill = ev.target.value;
    root.querySelector('#sk-prof').innerHTML = profileHtml();
  });

  root.addEventListener('click', (ev) => {
    const open = ev.target.closest('[data-open]');
    if (open) {
      openSkill(open.dataset.open);
      return;
    }
    const act = ev.target.closest('[data-act]')?.dataset.act;
    if (act === 'save') saveResult();
    if (act === 'reset') {
      state.levels = {};
      state.done = {};
      saveLevels();
      saveDone();
      refresh({ rates: true });
      ctx.toast(TOOL.resetDone);
    }
    // Chú thích nguồn: mở ngăn nguồn rồi cuộn tới.
    const a = ev.target.closest('a[data-src]');
    if (!a) return;
    ev.preventDefault();
    const det = root.querySelector('#sk-nguon details');
    if (det) det.open = true;
    const li = root.querySelector(`#sk-src-${CSS.escape(a.dataset.src)}`);
    if (li) {
      li.classList.add('is-flash');
      setTimeout(() => li.classList.remove('is-flash'), 1600);
      scrollToEl(li);
    }
  });
}

/** Gắn id cho từng mục trong ngăn nguồn để chú thích trỏ tới được. */
function tagSources(root) {
  const keys = SOURCE_GROUPS.flatMap(([g]) => Object.entries(SOURCES).filter(([, s]) => s.group === g).map(([k]) => k));
  root.querySelectorAll('#sk-nguon .srcs__item').forEach((li, i) => {
    if (keys[i]) li.id = `sk-src-${keys[i]}`;
  });
}

/* ---------- Xuất ảnh ---------- */

async function saveResult() {
  const top = topList();
  const ok = await saveImage({
    filename: 'hub-cay-ky-nang.png',
    fonts: ['400 60px Newsreader', '600 26px "Be Vietnam Pro"'],
    draw(c, kit) {
      const { W, H, fonts } = kit;
      const pad = 72;
      c.fillStyle = '#F4F0E6';
      c.fillRect(0, 0, W, H);
      c.fillStyle = '#23402C';
      c.fillRect(0, 0, W, 350);
      c.fillStyle = '#D08A4E';
      c.font = `600 22px ${fonts.body}`;
      c.textAlign = 'left';
      c.fillText('CÂY KỸ NĂNG', pad, 96);
      c.fillStyle = '#F4F0E6';
      c.font = `400 60px ${fonts.display}`;
      c.fillText('Kỹ năng nên đầu tư', pad, 172);
      c.fillStyle = 'rgba(244,240,230,0.8)';
      c.font = `400 24px ${fonts.body}`;
      kit.wrap(`Mục tiêu: ${goalName()}`, pad, 226, W - pad * 2, 32, { maxLines: 2 });
      // Năm nhánh: số kỹ năng đã đạt mức cần.
      let x = pad;
      BRANCHES.forEach((b) => {
        const list = SKILLS.filter((s) => s.branch === b.id);
        const ok2 = list.filter((s) => (state.levels[s.id] ?? 1) >= targets()[s.id]).length;
        list.forEach((s, k) => {
          const isTop = top.some((t) => t.id === s.id);
          const reached = (state.levels[s.id] ?? 1) >= targets()[s.id];
          c.fillStyle = isTop ? '#D08A4E' : reached ? '#8DBF8B' : 'rgba(244,240,230,0.22)';
          c.beginPath();
          c.ellipse(x + 12 + k * 26, 288, 9, 13, 0.5, 0, Math.PI * 2);
          c.fill();
        });
        c.fillStyle = 'rgba(244,240,230,0.7)';
        c.font = `500 15px ${fonts.body}`;
        c.fillText(`${ok2}/${list.length}`, x + list.length * 26 + 6, 294);
        c.font = `500 14px ${fonts.body}`;
        const short = { nguoi: 'Với người khác' }[b.id] || b.name;
        c.fillText(short, x + 2, 320);
        x += Math.max(list.length * 26 + 56, c.measureText(short).width + 28);
      });
      // Ba kỹ năng ưu tiên
      let y = 410;
      c.fillStyle = '#7A4A22';
      c.font = `600 20px ${fonts.body}`;
      c.fillText(TOOL.step3.toUpperCase(), pad, y);
      if (!top.length) {
        c.fillStyle = '#1B2A20';
        c.font = `400 26px ${fonts.body}`;
        kit.wrap(TOOL.allDone, pad, y + 56, W - pad * 2, 36, { maxLines: 4 });
      }
      top.forEach((tp, i) => {
        const s = byId.get(tp.id);
        y += 40;
        c.fillStyle = '#B5652A';
        c.beginPath();
        c.arc(pad + 26, y + 30, 26, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = '#FFF8EE';
        c.font = `400 30px ${fonts.display}`;
        c.textAlign = 'center';
        c.fillText(String(i + 1), pad + 26, y + 41);
        c.textAlign = 'left';
        c.fillStyle = '#1B2A20';
        c.font = `400 36px ${fonts.display}`;
        kit.wrap(s.name, pad + 76, y + 28, W - pad * 2 - 76, 40, { maxLines: 1 });
        c.fillStyle = '#4C5A4F';
        c.font = `400 21px ${fonts.body}`;
        c.fillText(`Mức ${tp.current} → ${tp.target} · ${branchName[s.branch]} · điểm ưu tiên ${fmt(tp.score)}`, pad + 76, y + 66);
        y += 96;
      });
      if (top.length) {
        const s = byId.get(top[0].id);
        y += 40;
        c.fillStyle = '#1B2A20';
        c.font = `italic 300 29px ${fonts.display}`;
        const yEnd = kit.wrap(s.note, pad + 28, y, W - pad * 2 - 28, 40, { maxLines: 5 });
        c.strokeStyle = '#B5652A';
        c.lineWidth = 3;
        c.beginPath();
        c.moveTo(pad, y - 30);
        c.lineTo(pad, Math.max(yEnd - 20, y + 20));
        c.stroke();
      }
      c.fillStyle = '#625D57';
      c.font = `400 19px ${fonts.body}`;
      c.fillText('Mức tự chấm, chưa chuẩn hoá; công thức ưu tiên là quy tắc minh bạch, không phải đánh giá chuyên môn.', pad, H - 150);
      kit.brand();
    },
  });
  ctx.toast(ok ? TOOL.saved : TOOL.saveFail);
}

/* ---------- Điều phối ---------- */

function render(route) {
  if (route.segments[1]) {
    ctx.navigate(BASE, { replace: true });
    return;
  }
  // Đi từ hồ sơ nghề ở thẻ Nghề nghiệp (?nghe=<id>): lấy nghề đó làm mục tiêu.
  const nghe = route.params.get('nghe');
  if (nghe && JOBS.some((j) => j.id === nghe)) {
    sessionSet('future.job', nghe);
    sessionSet('skills.goal', `nghe:${nghe}`);
  }
  loadState();
  const top = topList();
  if (top.length && !route.params.get('ky-nang')) state.skill = top[0].id;
  const want = route.params.get('ky-nang');
  if (want && byId.has(want)) state.skill = want;
  setToc();
  api.scroller.scrollTop = 0;
  api.body.innerHTML = pageHtml();
  const root = api.body;
  tagSources(root);
  bind(root);
  api.sheet.focus({ preventScroll: true });
  if (want && byId.has(want)) setTimeout(() => api.jumpTo('sk-ho-so'), 450);
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(root.querySelectorAll('.sk-leaf__shape'), { opacity: 0, scale: 0.3, duration: 0.5, ease: 'back.out(1.8)', stagger: 0.03, delay: 0.3 });
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
