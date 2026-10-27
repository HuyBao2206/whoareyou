// View của thẻ Nghề nghiệp hôm nay & ngày mai: "Bản tin dự báo nghề nghiệp".
// Bảng chỉ số, bốn mục tổng quan có nguồn, bản đồ phân tán 41 nghề (lọc theo lĩnh vực và mã Holland),
// hồ sơ từng nghề, so sánh hai nghề, ngăn nguồn. Mã Holland đọc từ sessionStorage (thẻ Sở thích nghề nghiệp)
// hoặc từ tham số ?ma= trên đường dẫn; nghề đang xem được ghi vào phiên (khoá future.job) cho thẻ Kỹ năng.

import * as F from './calc.js';
import JOBS_RAW from './jobs/index.js';
import {
  UPDATED, INTRO, KPIS, MARKET, GLOBAL, AI, SKILLS, MAP, METHOD, PROFILE, SKY_LABEL, WIND_LABEL, COMPARE, ACTIONS,
  FIELDS, SOURCES, SOURCE_GROUPS, SOURCE_NOTE,
} from './content.js';
import { skyIcon, windGauge, drawSky, ICON_IMG, ICON_X } from './icons.js';
import { sourcesHtml } from '../../core/sources.js';
import { saveImage } from '../../core/share-image.js';
import { sessionGet, sessionSet } from '../../core/session.js';
import { escapeHtml as e, G, reducedMotion } from '../../core/utils.js';

const BASE = '/nghe-nghiep-tuong-lai';
// Chỉ số AI tính từ bảng nhiệm vụ; mức thời tiết tính từ chỉ số nhu cầu.
const JOBS = JOBS_RAW.map((j) => ({ ...j, ai: F.aiIndex(j.tasks), sky: F.skyOf(j.demand) }));
const byId = new Map(JOBS.map((j) => [j.id, j]));
const fmt = (n) => String(n).replace('.', ',');

let api = null;
let ctx = null;
const state = { field: null, holland: null, hollandFrom: null, job: JOBS[0].id, a: JOBS[0].id, b: JOBS[1].id, table: false };

function announce(msg) {
  const live = api?.body.querySelector('#fw-live');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => (live.textContent = msg), 60);
}

/* ---------- Chú thích nguồn ---------- */

const srcRef = (keys) =>
  keys && keys.length
    ? `<span class="fw-src">${keys
        .filter((k) => SOURCES[k])
        .map((k) => `<a href="#fw-src-${e(k)}" data-src="${e(k)}">${e(SOURCES[k].short || SOURCES[k].title)}</a>`)
        .join('<span aria-hidden="true"> · </span>')}</span>`
    : '';

/* ---------- Đầu trang ---------- */

function heroHtml() {
  return `
    <header class="fw-board">
      <div class="fw-board__top">
        <p class="fw-board__eyebrow">${e(INTRO.eyebrow)}</p>
        <p class="fw-board__stamp"><span class="fw-dot" aria-hidden="true"></span>${e(INTRO.asOf)}</p>
      </div>
      <p class="fw-board__title" aria-hidden="true">${e(INTRO.title)}</p>
      <p class="fw-board__lead">${e(INTRO.lead)}</p>
      <ul class="fw-kpis" role="list">
        ${KPIS.map(
          (k) => `
          <li class="fw-kpi">
            <span class="fw-kpi__v">${e(k.value)}</span>
            <span class="fw-kpi__l">${e(k.label)}</span>
            <span class="fw-kpi__n">${e(k.note)}</span>
            ${srcRef(k.src)}
          </li>`
        ).join('')}
      </ul>
    </header>`;
}

/* ---------- Bốn mục tổng quan ---------- */

const secTitle = (no, id, text) => `<h3 class="fw-sec__title" id="${id}"><span class="fw-sec__no">${no}</span>${e(text)}</h3>`;

function overviewSec(no, id, data, extra = '') {
  return `
    <section class="fw-sec" id="${id}" aria-labelledby="${id}-t">
      ${secTitle(no, `${id}-t`, data.title)}
      <p class="fw-sec__lead">${e(data.lead)}</p>
      <div class="fw-prose">
        ${data.paragraphs.map((p) => `<p>${e(p.text)} ${srcRef(p.src)}</p>`).join('')}
      </div>
      ${extra}
      <aside class="fw-take"><p class="fw-take__k">Điểm rút ra</p><p>${e(data.takeaway)}</p></aside>
    </section>`;
}

function rulesHtml() {
  return `
    <div class="fw-rules">
      <h4 class="fw-h">${e(AI.rules.title)}</h4>
      <ol class="fw-rules__list">${AI.rules.items.map((r) => `<li>${e(r)}</li>`).join('')}</ol>
    </div>`;
}

/* ---------- Bản đồ ---------- */

function visibleJobs() {
  return F.filterJobs(JOBS, { field: state.field, holland: state.holland });
}

function controlsHtml() {
  const chips = [['', MAP.all], ...Object.entries(FIELDS)]
    .map(([k, v]) => `<button type="button" class="fw-chip" data-field="${k}" aria-pressed="${(state.field || '') === k}">${e(v)}</button>`)
    .join('');
  return `
    <div class="fw-ctrl">
      <div class="fw-ctrl__group" role="group" aria-label="${e(MAP.fields)}">
        <span class="fw-ctrl__k">${e(MAP.fields)}</span>
        <div class="fw-chips">${chips}</div>
      </div>
      <div class="fw-ctrl__group">
        <label class="fw-ctrl__k" for="fw-holland">${e(MAP.holland)}</label>
        <div class="fw-hcode">
          <input id="fw-holland" class="fw-hcode__in" type="text" inputmode="text" maxlength="3" autocomplete="off" spellcheck="false"
            placeholder="SAE" value="${e(state.holland || '')}" aria-describedby="fw-holland-hint">
          <button type="button" class="fw-hcode__x" data-act="clear-holland" aria-label="Bỏ lọc mã Holland" ${state.holland ? '' : 'hidden'}>${ICON_X}</button>
        </div>
        <p class="fw-ctrl__hint" id="fw-holland-hint">${e(state.hollandFrom ? MAP.hollandFrom(state.hollandFrom) : MAP.hollandHint)}</p>
      </div>
    </div>`;
}

function mapHtml() {
  return `
    <section class="fw-sec fw-sec--map" id="fw-ban-do" aria-labelledby="fw-ban-do-t">
      ${secTitle('05', 'fw-ban-do-t', MAP.title)}
      <p class="fw-sec__lead">${e(MAP.lead)}</p>
      <div id="fw-ctrl">${controlsHtml()}</div>
      <div class="fw-plot-wrap">
        <div class="fw-plot" id="fw-plot" role="group" aria-label="Bản đồ nghề nghiệp" aria-describedby="fw-plot-desc">
          <div class="fw-plot__area" id="fw-plot-area"></div>
          <span class="fw-axis fw-axis--x"><span>${e(MAP.xLow)}</span><b>${e(MAP.axisX)} →</b><span>${e(MAP.xHigh)}</span></span>
          <span class="fw-axis fw-axis--y"><span>${e(MAP.yLow)}</span><b>${e(MAP.axisY)} →</b><span>${e(MAP.yHigh)}</span></span>
          <div class="fw-tip" id="fw-tip" role="status" hidden></div>
        </div>
      </div>
      <p class="fw-plot__desc" id="fw-plot-desc"></p>
      <p class="fw-fine">${e(MAP.weak)}</p>
      <button type="button" class="link-btn fw-table-toggle" data-act="table" aria-expanded="${state.table}" aria-controls="fw-table">${e(MAP.listToggle)}</button>
      <div id="fw-table" ${state.table ? '' : 'hidden'}></div>
      <details class="fw-method" id="fw-cach-doc">
        <summary>${e(METHOD.title)}</summary>
        <div class="fw-prose">${METHOD.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
      </details>
    </section>`;
}

function renderPlot() {
  const area = api.body.querySelector('#fw-plot-area');
  const shown = new Set(visibleJobs().map((j) => j.id));
  const pos = F.spread(JOBS);
  const quads = Object.entries(MAP.quadrants)
    .map(([k, v]) => `<span class="fw-quad fw-quad--${k}">${e(v)}</span>`)
    .join('');
  const dots = JOBS.map((j) => {
    const p = pos.get(j.id);
    const on = shown.has(j.id);
    return `<button type="button" class="fw-pt${on ? '' : ' is-off'}${j.conf === 'yeu' ? ' is-weak' : ''}${j.id === state.job ? ' is-sel' : ''}"
      data-id="${j.id}" style="left:${(p.x * 100).toFixed(2)}%;top:${(p.y * 100).toFixed(2)}%" ${on ? '' : 'tabindex="-1" aria-hidden="true"'}
      aria-label="${e(`${j.name}. ${SKY_LABEL[j.sky]}, chỉ số nhu cầu ${fmt(j.demand)}. Tác động của AI ${fmt(j.ai)} trên 5.`)}"><span></span></button>`;
  }).join('');
  const labels = shown.size <= 12
    ? JOBS.filter((j) => shown.has(j.id)).map((j) => {
        const p = pos.get(j.id);
        // Nhãn ở nửa phải đặt sang bên trái chấm để không tràn khỏi khung.
        return `<span class="fw-lbl${p.x > 0.55 ? ' is-left' : ''}" style="left:${(p.x * 100).toFixed(2)}%;top:${(p.y * 100).toFixed(2)}%" aria-hidden="true">${e(j.name)}</span>`;
      }).join('')
    : '';
  area.innerHTML = `${quads}<span class="fw-mid fw-mid--x"></span><span class="fw-mid fw-mid--y"></span>${labels}${dots}`;
  renderDesc(shown);
  if (state.table) renderTable();
}

function renderDesc(shown) {
  const list = JOBS.filter((j) => shown.has(j.id));
  const c = F.quadrantCounts(list);
  const parts = Object.entries(c).filter(([, n]) => n).map(([k, n]) => `${n} nghề ở ô “${MAP.quadrants[k][0].toLowerCase()}${MAP.quadrants[k].slice(1)}”`);
  const desc = list.length
    ? `Đang hiện ${list.length} trên ${JOBS.length} nghề: ${parts.join('; ')}.`
    : MAP.hollandNone;
  api.body.querySelector('#fw-plot-desc').textContent = desc;
}

function renderTable() {
  const host = api.body.querySelector('#fw-table');
  const list = visibleJobs();
  host.innerHTML = `
    <div class="fw-tbl-scroll"><table class="fw-tbl">
      <caption class="visually-hidden">${e(MAP.listTitle)}</caption>
      <thead><tr><th scope="col">Nghề</th><th scope="col">Lĩnh vực</th><th scope="col">Nhu cầu</th><th scope="col">Tác động AI</th><th scope="col">Holland</th></tr></thead>
      <tbody>${list
        .map(
          (j) => `<tr><th scope="row"><button type="button" class="fw-tbl__job" data-id="${j.id}">${e(j.name)}</button></th>
          <td>${e(FIELDS[j.field])}</td>
          <td><span class="fw-tbl__sky">${skyIcon(j.sky, 18, j.demand)}${fmt(j.demand)}</span></td>
          <td><span class="fw-tbl__sky">${windGauge(F.windOf(j.ai), { size: 'sm' })}${fmt(j.ai)}</span></td>
          <td>${e(j.holland)}</td></tr>`
        )
        .join('')}</tbody>
    </table></div>`;
}

/* Tooltip khi rê, chạm hoặc focus vào chấm */
function showTip(btn) {
  const j = byId.get(btn.dataset.id);
  const tip = api.body.querySelector('#fw-tip');
  tip.innerHTML = `
    <p class="fw-tip__name">${e(j.name)}</p>
    <p class="fw-tip__row">${skyIcon(j.sky, 20, j.demand)}<span>${e(SKY_LABEL[j.sky])} · ${fmt(j.demand)}</span></p>
    <p class="fw-tip__row">${windGauge(F.windOf(j.ai), { size: 'sm' })}<span>${e(WIND_LABEL[F.windOf(j.ai)])} · ${fmt(j.ai)}</span></p>
    <p class="fw-tip__sum">${e(j.summary.split('. ')[0])}.</p>
    <p class="fw-tip__go">Bấm để mở hồ sơ</p>`;
  tip.hidden = false;
  const plot = api.body.querySelector('#fw-plot');
  const pr = plot.getBoundingClientRect();
  const br = btn.getBoundingClientRect();
  const x = br.left + br.width / 2 - pr.left;
  const y = br.top - pr.top;
  tip.style.left = `${Math.max(8, Math.min(pr.width - tip.offsetWidth - 8, x - tip.offsetWidth / 2))}px`;
  tip.style.top = `${y - tip.offsetHeight - 12 < 0 ? y + br.height + 12 : y - tip.offsetHeight - 12}px`;
}
function hideTip() {
  const tip = api.body.querySelector('#fw-tip');
  if (tip) tip.hidden = true;
}

/* ---------- Hồ sơ nghề ---------- */

const jobOptions = (sel) =>
  Object.entries(FIELDS)
    .map(
      ([k, v]) => `<optgroup label="${e(v)}">${JOBS.filter((j) => j.field === k)
        .map((j) => `<option value="${j.id}" ${j.id === sel ? 'selected' : ''}>${e(j.name)}</option>`)
        .join('')}</optgroup>`
    )
    .join('');

function forecastHtml(j) {
  const w = F.windOf(j.ai);
  return `
    <div class="fw-fc">
      <div class="fw-fc__cell">
        <span class="fw-fc__k">${e(PROFILE.demand)}</span>
        <span class="fw-fc__v">${skyIcon(j.sky, 40, j.demand)}<b>${fmt(j.demand)}</b><small>/5</small></span>
        <span class="fw-fc__l">${e(SKY_LABEL[j.sky])}</span>
      </div>
      <div class="fw-fc__cell">
        <span class="fw-fc__k">${e(PROFILE.ai)}</span>
        <span class="fw-fc__v">${windGauge(w)}<b>${fmt(j.ai)}</b><small>/5</small></span>
        <span class="fw-fc__l">${e(WIND_LABEL[w])}</span>
      </div>
      <span class="fw-conf fw-conf--${j.conf}">${e(PROFILE.conf[j.conf])}</span>
    </div>`;
}

function fitNote(j) {
  if (!state.holland) return '';
  const s = F.hollandFit(j.holland, state.holland);
  if (s >= F.FIT_MIN) return `<p class="fw-fitnote">Mã ${e(j.holland)} của nghề khớp với mã ${e(state.holland)} đang lọc.</p>`;
  return '';
}

function profileHtml(j) {
  const mix = F.taskMix(j);
  return `
    <article class="fw-prof" aria-labelledby="fw-prof-t">
      <header class="fw-prof__head">
        <p class="fw-prof__field">${e(FIELDS[j.field])}</p>
        <h4 class="fw-prof__name" id="fw-prof-t" tabindex="-1">${e(j.name)}</h4>
        ${forecastHtml(j)}
      </header>
      <div class="fw-prof__body">
        <div class="fw-blk fw-blk--wide"><h5 class="fw-h">${e(PROFILE.nature)}</h5><p>${e(j.summary)}</p></div>
        <div class="fw-blk fw-blk--wide">
          <h5 class="fw-h">${e(PROFILE.tasks)}</h5>
          <ul class="fw-tasks" role="list">${j.tasks
            .map(([t, l]) => `<li class="fw-task fw-task--${l}"><span>${e(t)}</span><i>${e(PROFILE.taskLevel[l])}</i></li>`)
            .join('')}</ul>
          <p class="fw-mix">Cao ${mix.cao} · vừa ${mix.vua} · thấp ${mix.thap} → chỉ số ${fmt(j.ai)}/5</p>
          <p>${e(j.aiText)}</p>
        </div>
        <div class="fw-blk"><h5 class="fw-h">${e(PROFILE.demandWhy)}</h5><p>${e(j.demandWhy)}</p></div>
        <div class="fw-blk"><h5 class="fw-h">${e(PROFILE.entry)}</h5><p>${e(j.entry)}</p></div>
        <div class="fw-blk"><h5 class="fw-h">${e(PROFILE.income)}</h5><p>${e(j.income || PROFILE.noIncome)}</p></div>
        <div class="fw-blk"><h5 class="fw-h">${e(PROFILE.risks)}</h5><ul class="fw-list">${j.risks.map((r) => `<li>${e(r)}</li>`).join('')}</ul></div>
        <div class="fw-blk"><h5 class="fw-h">${e(PROFILE.fit)}</h5><p class="fw-codeline">${e(PROFILE.hollandGuess)} <span class="fw-code">${e(j.holland)}</span></p><p>${e(j.fit)}</p>${fitNote(j)}</div>
        <div class="fw-blk"><h5 class="fw-h">${e(PROFILE.test)}</h5><ul class="fw-list">${j.test.map((r) => `<li>${e(r)}</li>`).join('')}</ul></div>
        <blockquote class="fw-conc"><p class="fw-conc__k">${e(PROFILE.conclusion)}</p><p>${e(j.note)}</p></blockquote>
        <p class="fw-prof__src"><span>${e(PROFILE.sources)}:</span> ${j.src.length ? srcRef(j.src) : e(PROFILE.noSource)}</p>
      </div>
      <div class="fw-actions">
        <button type="button" class="btn" data-act="save">${ICON_IMG}${e(ACTIONS.save)}</button>
        <button type="button" class="btn btn--ghost" data-act="compare">${e(PROFILE.compareWith)}</button>
        ${skillsLink(j)}
        <p class="fw-actions__note">${e(ACTIONS.imageNote)}</p>
      </div>
    </article>`;
}

function skillsLink(j) {
  const t = ctx.config.topics.find((x) => x.id === 'skills');
  return t && t.status === 'active' ? `<a class="btn btn--ghost" href="#/${e(t.slug)}?nghe=${e(j.id)}" data-act="skills">${e(ACTIONS.toSkills)}</a>` : '';
}

function profileSec() {
  return `
    <section class="fw-sec" id="fw-ho-so" aria-labelledby="fw-ho-so-t">
      ${secTitle('06', 'fw-ho-so-t', PROFILE.title)}
      <div class="fw-pick">
        <label for="fw-job" class="fw-ctrl__k">${e(PROFILE.pick)}</label>
        <select id="fw-job" class="fw-select">${jobOptions(state.job)}</select>
      </div>
      <div id="fw-prof">${profileHtml(byId.get(state.job))}</div>
    </section>`;
}

/* ---------- So sánh ---------- */

function compareTable() {
  const A = byId.get(state.a);
  const B = byId.get(state.b);
  const R = COMPARE.rows;
  const mix = (j) => {
    const m = F.taskMix(j);
    return `${m.cao} / ${m.vua} / ${m.thap}`;
  };
  const row = (k, a, b, raw = false) =>
    `<tr><th scope="row">${e(k)}</th><td>${raw ? a : e(a)}</td><td>${raw ? b : e(b)}</td></tr>`;
  return `
    <div class="fw-tbl-scroll"><table class="fw-cmp">
      <thead><tr><th scope="col"><span class="visually-hidden">Tiêu chí</span></th><th scope="col">${e(A.name)}</th><th scope="col">${e(B.name)}</th></tr></thead>
      <tbody>
        ${row(R.sky, `<span class="fw-tbl__sky">${skyIcon(A.sky, 22, A.demand)}${fmt(A.demand)}/5 · ${e(SKY_LABEL[A.sky])}</span>`, `<span class="fw-tbl__sky">${skyIcon(B.sky, 22, B.demand)}${fmt(B.demand)}/5 · ${e(SKY_LABEL[B.sky])}</span>`, true)}
        ${row(R.ai, `<span class="fw-tbl__sky">${windGauge(F.windOf(A.ai), { size: 'sm' })}${fmt(A.ai)}/5</span>`, `<span class="fw-tbl__sky">${windGauge(F.windOf(B.ai), { size: 'sm' })}${fmt(B.ai)}/5</span>`, true)}
        ${row(R.mix, mix(A), mix(B))}
        ${row(R.entry, A.entry, B.entry)}
        ${row(R.income, A.income || PROFILE.noIncome, B.income || PROFILE.noIncome)}
        ${row(R.risks, `<ul class="fw-list">${A.risks.map((r) => `<li>${e(r)}</li>`).join('')}</ul>`, `<ul class="fw-list">${B.risks.map((r) => `<li>${e(r)}</li>`).join('')}</ul>`, true)}
        ${row(R.holland, A.holland, B.holland)}
        ${row(R.conf, PROFILE.conf[A.conf], PROFILE.conf[B.conf])}
      </tbody>
    </table></div>`;
}

function compareSec() {
  return `
    <section class="fw-sec" id="fw-so-sanh" aria-labelledby="fw-so-sanh-t">
      ${secTitle('07', 'fw-so-sanh-t', COMPARE.title)}
      <p class="fw-sec__lead">${e(COMPARE.lead)}</p>
      <div class="fw-cmp-pick">
        <div class="fw-pick"><label for="fw-cmp-a" class="fw-ctrl__k">${e(COMPARE.a)}</label><select id="fw-cmp-a" class="fw-select">${jobOptions(state.a)}</select></div>
        <div class="fw-pick"><label for="fw-cmp-b" class="fw-ctrl__k">${e(COMPARE.b)}</label><select id="fw-cmp-b" class="fw-select">${jobOptions(state.b)}</select></div>
      </div>
      <div id="fw-cmp" aria-live="polite">${compareTable()}</div>
    </section>`;
}

/* ---------- Dựng trang ---------- */

function sourcesGroups() {
  return SOURCE_GROUPS.map(([g, title]) => ({
    title,
    items: Object.entries(SOURCES)
      .filter(([, s]) => s.group === g)
      .map(([, s]) => ({ title: s.title, by: s.by, year: s.year, url: s.url, note: s.note })),
  }));
}

function pageHtml() {
  return `
    <div class="fw">
      <p class="visually-hidden" id="fw-live" aria-live="polite" aria-atomic="true"></p>
      ${heroHtml()}
      ${overviewSec('01', 'fw-thi-truong', MARKET)}
      ${overviewSec('02', 'fw-the-gioi', GLOBAL)}
      ${overviewSec('03', 'fw-ai', AI, rulesHtml())}
      ${overviewSec('04', 'fw-ky-nang', SKILLS)}
      ${mapHtml()}
      ${profileSec()}
      ${compareSec()}
      ${sourcesHtml({ id: 'fw-nguon', groups: sourcesGroups(), updated: UPDATED, intro: SOURCE_NOTE })}
      <p class="fw-privacy">${e(INTRO.privacy)}</p>
    </div>`;
}

function setToc() {
  api.setToc([
    { id: 'fw-thi-truong', label: 'Thị trường' },
    { id: 'fw-the-gioi', label: 'Thế giới' },
    { id: 'fw-ai', label: 'AI' },
    { id: 'fw-ky-nang', label: 'Kỹ năng' },
    { id: 'fw-ban-do', label: 'Bản đồ' },
    { id: 'fw-ho-so', label: 'Hồ sơ nghề' },
    { id: 'fw-so-sanh', label: 'So sánh' },
    { id: 'fw-nguon', label: 'Nguồn' },
  ]);
}

/* ---------- Hành vi ---------- */

function openJob(id, { scroll = true } = {}) {
  if (!byId.has(id)) return;
  state.job = id;
  sessionSet('future.job', id);
  const root = api.body;
  root.querySelector('#fw-job').value = id;
  root.querySelector('#fw-prof').innerHTML = profileHtml(byId.get(id));
  root.querySelectorAll('.fw-pt').forEach((b) => b.classList.toggle('is-sel', b.dataset.id === id));
  bindProfile();
  const gsap = G();
  if (gsap && !reducedMotion()) gsap.fromTo('#fw-prof', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
  if (scroll) {
    api.jumpTo('fw-ho-so');
    setTimeout(() => root.querySelector('#fw-prof-t')?.focus({ preventScroll: true }), 300);
  }
  announce(`Hồ sơ nghề ${byId.get(id).name}.`);
}

function bindProfile() {
  const root = api.body.querySelector('#fw-prof');
  root.querySelector('[data-act="save"]').addEventListener('click', saveProfile);
  root.querySelector('[data-act="compare"]').addEventListener('click', () => {
    state.a = state.job;
    if (state.b === state.a) state.b = JOBS.find((j) => j.id !== state.a).id;
    api.body.querySelector('#fw-cmp-a').value = state.a;
    api.body.querySelector('#fw-cmp-b').value = state.b;
    api.body.querySelector('#fw-cmp').innerHTML = compareTable();
    api.jumpTo('fw-so-sanh');
    setTimeout(() => api.body.querySelector('#fw-cmp-b')?.focus({ preventScroll: true }), 300);
  });
}

function setHolland(code, from = null) {
  const c = (code || '').toUpperCase().replace(/[^RIASEC]/g, '');
  const uniq = [...new Set(c)].join('').slice(0, 3);
  state.holland = F.validHolland(uniq) ? uniq : null;
  state.hollandFrom = state.holland && from ? from : null;
  const root = api.body;
  root.querySelector('.fw-hcode__x').hidden = !state.holland;
  root.querySelector('#fw-holland-hint').textContent = state.hollandFrom ? MAP.hollandFrom(state.hollandFrom) : MAP.hollandHint;
  renderPlot();
}

function bindMap(root) {
  const ctrl = root.querySelector('#fw-ctrl');
  ctrl.addEventListener('click', (ev) => {
    const chip = ev.target.closest('[data-field]');
    if (chip) {
      state.field = chip.dataset.field || null;
      ctrl.querySelectorAll('[data-field]').forEach((b) => b.setAttribute('aria-pressed', String((state.field || '') === b.dataset.field)));
      renderPlot();
      announce(api.body.querySelector('#fw-plot-desc').textContent);
    }
    if (ev.target.closest('[data-act="clear-holland"]')) {
      const input = ctrl.querySelector('#fw-holland');
      input.value = '';
      setHolland('');
      input.focus();
      announce(api.body.querySelector('#fw-plot-desc').textContent);
    }
  });
  const input = ctrl.querySelector('#fw-holland');
  input.addEventListener('input', () => {
    input.value = input.value.toUpperCase().replace(/[^RIASEC]/g, '');
    setHolland(input.value);
  });
  input.addEventListener('change', () => announce(api.body.querySelector('#fw-plot-desc').textContent));

  const plot = root.querySelector('#fw-plot');
  plot.addEventListener('pointerover', (ev) => {
    const b = ev.target.closest('.fw-pt:not(.is-off)');
    if (b && ev.pointerType === 'mouse') showTip(b);
  });
  plot.addEventListener('pointerout', (ev) => {
    if (ev.target.closest('.fw-pt') && ev.pointerType === 'mouse') hideTip();
  });
  plot.addEventListener('focusin', (ev) => {
    const b = ev.target.closest('.fw-pt');
    if (b) showTip(b);
  });
  plot.addEventListener('focusout', hideTip);
  // Trên màn hình cảm ứng: chạm lần đầu hiện tóm tắt, chạm lần hai mở hồ sơ.
  let armed = null;
  plot.addEventListener('click', (ev) => {
    const b = ev.target.closest('.fw-pt:not(.is-off)');
    if (!b) {
      hideTip();
      armed = null;
      return;
    }
    const touch = window.matchMedia('(hover: none)').matches;
    if (touch && armed !== b.dataset.id) {
      armed = b.dataset.id;
      showTip(b);
      return;
    }
    armed = null;
    hideTip();
    openJob(b.dataset.id);
  });

  root.querySelector('[data-act="table"]').addEventListener('click', (ev) => {
    state.table = !state.table;
    ev.currentTarget.setAttribute('aria-expanded', String(state.table));
    const t = root.querySelector('#fw-table');
    t.hidden = !state.table;
    if (state.table) renderTable();
  });
  root.querySelector('#fw-table').addEventListener('click', (ev) => {
    const b = ev.target.closest('.fw-tbl__job');
    if (b) openJob(b.dataset.id);
  });
}

function bindPage(root) {
  bindMap(root);
  root.querySelector('#fw-job').addEventListener('change', (ev) => openJob(ev.target.value, { scroll: false }));
  bindProfile();
  const upd = () => {
    state.a = root.querySelector('#fw-cmp-a').value;
    state.b = root.querySelector('#fw-cmp-b').value;
    root.querySelector('#fw-cmp').innerHTML = compareTable();
  };
  root.querySelector('#fw-cmp-a').addEventListener('change', upd);
  root.querySelector('#fw-cmp-b').addEventListener('change', upd);
  // Chú thích nguồn: mở ngăn nguồn rồi cuộn tới.
  root.addEventListener('click', (ev) => {
    const a = ev.target.closest('a[data-src]');
    if (!a) return;
    ev.preventDefault();
    const det = root.querySelector('#fw-nguon details');
    if (det) det.open = true;
    const li = root.querySelector(`#fw-src-${CSS.escape(a.dataset.src)}`);
    if (li) {
      li.classList.add('is-flash');
      setTimeout(() => li.classList.remove('is-flash'), 1600);
      const sr = api.scroller.getBoundingClientRect();
      api.scroller.scrollTo({ top: api.scroller.scrollTop + li.getBoundingClientRect().top - sr.top - 80, behavior: reducedMotion() ? 'auto' : 'smooth' });
    }
  });
}

/** Gắn id cho từng mục trong ngăn nguồn để chú thích trỏ tới được. */
function tagSources(root) {
  const keys = SOURCE_GROUPS.flatMap(([g]) => Object.entries(SOURCES).filter(([, s]) => s.group === g).map(([k]) => k));
  root.querySelectorAll('#fw-nguon .srcs__item').forEach((li, i) => {
    if (keys[i]) li.id = `fw-src-${keys[i]}`;
  });
}

/* ---------- Xuất ảnh hồ sơ ---------- */

async function saveProfile() {
  const j = byId.get(state.job);
  const ok = await saveImage({
    filename: `hub-du-bao-nghe-${j.id}.png`,
    fonts: ['400 64px Newsreader', '600 26px "Be Vietnam Pro"'],
    draw(c, kit) {
      const { W, H, fonts } = kit;
      const pad = 72;
      c.fillStyle = '#F5F1EA';
      c.fillRect(0, 0, W, H);
      // Khối tiêu đề nền xanh ngọc, lưới kỹ thuật.
      c.fillStyle = '#0E3B3A';
      c.fillRect(0, 0, W, 470);
      c.strokeStyle = 'rgba(130,214,200,0.12)';
      c.lineWidth = 1;
      for (let x = 0; x <= W; x += 40) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, 470); c.stroke(); }
      for (let y = 0; y <= 470; y += 40) { c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); }
      c.fillStyle = '#F08A3C';
      c.font = `600 22px ${fonts.body}`;
      c.textAlign = 'left';
      c.fillText('BẢN TIN DỰ BÁO NGHỀ NGHIỆP · ' + INTRO.asOf.replace('Số liệu cập nhật đến ', '').toUpperCase(), pad, 92);
      c.fillStyle = '#9FD9CF';
      c.font = `500 24px ${fonts.body}`;
      c.fillText(FIELDS[j.field], pad, 150);
      c.fillStyle = '#F4F1EA';
      c.font = `400 64px ${fonts.display}`;
      const yName = kit.wrap(j.name, pad, 222, W - pad * 2, 72, { maxLines: 2 });
      // Hai ô dự báo
      const boxY = Math.max(yName + 10, 300);
      const cell = (x, k, val, label, draw) => {
        c.strokeStyle = 'rgba(159,217,207,0.35)';
        c.lineWidth = 1.5;
        kit.roundRect(x, boxY, 440, 130, 16);
        c.stroke();
        c.fillStyle = '#9FD9CF';
        c.font = `600 18px ${fonts.body}`;
        c.fillText(k.toUpperCase(), x + 24, boxY + 36);
        draw(x + 24, boxY + 52);
        c.fillStyle = '#F4F1EA';
        c.font = `400 52px ${fonts.display}`;
        c.fillText(val, x + 100, boxY + 98);
        c.fillStyle = 'rgba(244,241,234,0.75)';
        c.font = `400 20px ${fonts.body}`;
        c.fillText(label, x + 200, boxY + 96);
      };
      cell(pad, PROFILE.demand, fmt(j.demand), SKY_LABEL[j.sky].split(':')[0], (x, y) => drawSky(c, j.sky, x, y, 60, '#F08A3C'));
      const w = F.windOf(j.ai);
      cell(pad + 464, PROFILE.ai, fmt(j.ai), WIND_LABEL[w], (x, y) => {
        for (let i = 1; i <= 5; i++) {
          c.fillStyle = i <= w ? '#F08A3C' : 'rgba(159,217,207,0.25)';
          const h = 14 + i * 8;
          c.fillRect(x + (i - 1) * 12, y + 56 - h, 8, h);
        }
      });
      // Nhiệm vụ
      let y = 540;
      c.fillStyle = '#0E5C57';
      c.font = `600 20px ${fonts.body}`;
      c.fillText(PROFILE.tasks.toUpperCase(), pad, y);
      y += 22;
      const col = { cao: '#C2410C', vua: '#B7791F', thap: '#0E7C72' };
      j.tasks.slice(0, 6).forEach(([t, l]) => {
        y += 44;
        c.fillStyle = col[l];
        kit.roundRect(pad, y - 26, 12, 32, 4);
        c.fill();
        c.fillStyle = '#141A2E';
        c.font = `400 25px ${fonts.body}`;
        kit.wrap(t, pad + 28, y, W - pad * 2 - 260, 30, { maxLines: 1 });
        c.fillStyle = col[l];
        c.font = `600 20px ${fonts.body}`;
        c.textAlign = 'right';
        c.fillText(PROFILE.taskLevel[l], W - pad, y);
        c.textAlign = 'left';
      });
      // Kết luận
      y += 70;
      c.strokeStyle = '#F08A3C';
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(pad, y - 30);
      c.lineTo(pad, y + 120);
      c.stroke();
      c.fillStyle = '#141A2E';
      c.font = `italic 300 30px ${fonts.display}`;
      kit.wrap(j.note, pad + 28, y, W - pad * 2 - 28, 40, { maxLines: 4 });
      c.fillStyle = '#625D57';
      c.font = `400 19px ${fonts.body}`;
      c.fillText('Chỉ số tổng hợp từ nguồn ghi trên web; không phải dự báo cho từng cá nhân.', pad, H - 150);
      kit.brand();
    },
  });
  ctx.toast(ok ? ACTIONS.saved : ACTIONS.saveFail);
}

/* ---------- Điều phối ---------- */

function applyRoute(route) {
  const ma = (route.params.get('ma') || '').toUpperCase();
  const job = route.params.get('nghe');
  if (F.validHolland(ma)) {
    state.holland = ma;
    state.hollandFrom = ma;
  } else if (!state.holland) {
    const fromSession = (sessionGet('holland') || '').toUpperCase();
    if (F.validHolland(fromSession)) {
      state.holland = fromSession;
      state.hollandFrom = fromSession;
    }
  }
  if (job && byId.has(job)) {
    state.job = job;
    sessionSet('future.job', job);
  }
  return { jump: F.validHolland(ma) ? 'fw-ban-do' : job && byId.has(job) ? 'fw-ho-so' : null };
}

function render(route) {
  if (route.segments[1]) {
    ctx.navigate(BASE, { replace: true });
    return;
  }
  const { jump } = applyRoute(route);
  setToc();
  api.scroller.scrollTop = 0;
  api.body.innerHTML = pageHtml();
  const root = api.body;
  tagSources(root);
  renderPlot();
  bindPage(root);
  api.sheet.focus({ preventScroll: true });
  if (jump) setTimeout(() => api.jumpTo(jump), 450);
  const gsap = G();
  if (gsap && !reducedMotion()) {
    gsap.from(root.querySelectorAll('.fw-kpi'), { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out', stagger: 0.06, delay: 0.35 });
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
