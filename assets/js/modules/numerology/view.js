// View của thẻ Thần số học: giới thiệu, hai bộ tính, rồi chuyển sang trang kết quả / tra cứu.
// Dữ liệu người dùng nhập chỉ nằm trong biến `state` (bộ nhớ của tab), không lưu ở đâu khác.

import { config } from '../../config.js';
import * as C from './calc.js';
import {
  INTRO, WHAT_IS, INDEX_META, INDEX_ORDER, DATE_METHOD, WHY_DIFFERENT, NAME_METHOD, CALCULATORS, PRIVACY_LINE, EASTER_EGG,
} from './content.js';
import { stepsHtml, animateSteps, popNumber, numColor } from './anim.js';
import { renderResults, renderLookup } from './results.js';
import { escapeHtml as e, G, reducedMotion } from '../../core/utils.js';

const BASE = '/than-so-hoc';
const METHOD = config.numerology.lifePathMethod === 'western' ? 'western' : 'vn';
const MIN_YEAR = config.numerology.minYear || 1900;
const thisYear = () => new Date().getFullYear();

const blankState = () => ({
  form: { day: '', month: '', year: '', target: String(thisYear()) },
  name: '',
  lp: null,
  py: null,
  names: null,
});

let state = blankState();
let yMode = config.numerology.yMode === 'foreign' ? 'foreign' : 'vowel';
let api = null;
let ctx = null;
let pendingJump = null;

/* ---------- Tiện ích nhỏ ---------- */

const ICON_ARROW = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const ICON_LOCK = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`;

function resultQuery() {
  const p = new URLSearchParams();
  if (state.lp) p.set('cd', state.lp.value);
  if (state.py) p.set('nn', state.py.value);
  if (state.names) {
    if (state.names.expression.value) p.set('sm', state.names.expression.value);
    if (state.names.soul.value) p.set('lh', state.names.soul.value);
    if (state.names.personality.value) p.set('nc', state.names.personality.value);
  }
  return p.toString();
}

function announce(msg) {
  const live = api?.body.querySelector('#nm-live');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => (live.textContent = msg), 60);
}

const isEasterEgg = (normalized) => normalized === 'HUB' || normalized === 'BAO HUY';

/* ---------- Phần giới thiệu ---------- */

function alphabetTable() {
  const cols = [[], [], [], [], [], [], [], [], []];
  Object.entries(C.LETTER_VALUES).forEach(([ch, v]) => cols[v - 1].push(ch));
  cols.forEach((c) => c.sort());
  const rows = [0, 1, 2]
    .map(
      (r) =>
        `<tr>${cols
          .map((c) => {
            const ch = c[r];
            if (!ch) return '<td></td>';
            const cls = ch === 'Y' && yMode === 'foreign' ? 'is-ypos' : C.isVowel(ch, { yMode }) ? 'is-vowel' : 'is-cons';
            return `<td><span class="alpha__ch ${cls}" data-ch="${ch}">${ch}</span></td>`;
          })
          .join('')}</tr>`
    )
    .join('');
  return `
    <div class="alpha-wrap">
      <table class="alpha">
        <caption class="visually-hidden">Bảng chữ cái Pythagoras: mỗi cột là một con số, các chữ trong cột mang giá trị đó.</caption>
        <thead><tr>${cols.map((_, i) => `<th scope="col" style="--c:${numColor(i + 1)}">${i + 1}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <p class="legend" aria-hidden="true"><span class="legend__v">${e(NAME_METHOD.legendVowel)}</span><span class="legend__c">${e(NAME_METHOD.legendConsonant)}</span>${
      yMode === 'foreign' ? `<span class="legend__y">${e(NAME_METHOD.legendY)}</span>` : ''
    }</p>`;
}

function lettersHtml(name, prev = '') {
  const letters = C.nameLetters(name, { yMode });
  if (!letters.length) return '';
  // Các chữ mới gõ thêm (khác với lần trước) sẽ có hiệu ứng bật lên.
  let firstNew = 0;
  while (firstNew < prev.length && prev[firstNew] === letters[firstNew]?.ch) firstNew++;
  const words = [];
  let cur = [];
  letters.forEach((l, i) => {
    if (l.space) {
      if (cur.length) words.push(cur);
      cur = [];
      return;
    }
    cur.push(
      `<span class="lt ${l.vowel ? 'lt--v' : 'lt--c'}${i >= firstNew ? ' is-new' : ''}"><b>${l.ch}</b><i>${l.value}</i></span>`
    );
  });
  if (cur.length) words.push(cur);
  return words.map((w) => `<span class="lt-word">${w.join('')}</span>`).join('');
}

function nameExampleHtml() {
  const r = C.nameNumbers(NAME_METHOD.exampleName, { yMode });
  const row = (key, res) => `
    <div class="ex-row">
      <p class="ex-row__label">${e(INDEX_META[key].name)}</p>
      ${stepsHtml(res.steps, { labels: true })}
    </div>`;
  return `
    <div class="letters letters--static" aria-hidden="true">${lettersHtml(r.name)}</div>
    ${row('expression', r.expression)}
    ${r.soul.value ? row('soul', r.soul) : ''}
    ${r.personality.value ? row('personality', r.personality) : ''}`;
}

function introHtml() {
  const lpEx = C.lifePath(DATE_METHOD.example, { method: METHOD });
  const pyEx = C.personalYear(DATE_METHOD.example, DATE_METHOD.personalYearExampleYear);
  const strip = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `<li style="--c:${numColor(n)}">${n}</li>`).join('');
  const f = state.form;
  const dateFields = [
    ['day', 'dob-d', CALCULATORS.date.day, 'dd', 2],
    ['month', 'dob-m', CALCULATORS.date.month, 'mm', 2],
    ['year', 'dob-y', CALCULATORS.date.year, 'yyyy', 4],
  ];

  return `
  <div class="nm">
    <p class="visually-hidden" id="nm-live" aria-live="polite" aria-atomic="true"></p>

    <header class="nm-hero">
      <p class="eyebrow">${e(INTRO.eyebrow)}</p>
      <p class="nm-hero__title" aria-hidden="true">${e(INTRO.title)}</p>
      <p class="nm-hero__lead">${e(INTRO.lead)}</p>
      <div class="nm-hero__actions">
        <button type="button" class="btn btn--big" data-jump-to="bo-tinh">Tính ngay${ICON_ARROW}</button>
        <a class="btn btn--ghost btn--big" href="#${BASE}/tra-cuu">Tra cứu thông điệp</a>
      </div>
      <ol class="nm-strip" aria-hidden="true">${strip}</ol>
    </header>

    <section class="nm-sec" id="tsh-la-gi" aria-labelledby="h-tsh">
      <h3 class="nm-sec__title" id="h-tsh"><span class="nm-sec__no">01</span>${e(WHAT_IS.title)}</h3>
      <div class="nm-cols">
        <div class="nm-prose">${WHAT_IS.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
        <blockquote class="nm-quote"><p>${e(WHAT_IS.quote)}</p></blockquote>
      </div>
    </section>

    <section class="nm-sec" id="nam-chi-so" aria-labelledby="h-5">
      <h3 class="nm-sec__title" id="h-5"><span class="nm-sec__no">02</span>Năm chỉ số trong trang</h3>
      <ol class="nm-indices" role="list">
        ${INDEX_ORDER.map(
          (k, i) => `
          <li class="nm-indices__item">
            <span class="nm-indices__no" aria-hidden="true">${['i', 'ii', 'iii', 'iv', 'v'][i]}</span>
            <h4 class="nm-indices__name">${e(INDEX_META[k].name)}</h4>
            <p class="nm-indices__src">${e(INDEX_META[k].source)}</p>
            <p class="nm-indices__text">${e(INDEX_META[k].text)}</p>
          </li>`
        ).join('')}
      </ol>
    </section>

    <section class="nm-sec" id="cach-tinh" aria-labelledby="h-ct">
      <h3 class="nm-sec__title" id="h-ct"><span class="nm-sec__no">03</span>Cách tính</h3>

      <div class="nm-method">
        <h4 class="nm-method__title">${e(DATE_METHOD.title)}</h4>
        <div class="nm-method__grid">
          <div>
            <p class="nm-label">${e(DATE_METHOD.lifePathTitle)}</p>
            <p>${e(DATE_METHOD.lifePathIntro)}</p>
            <p>${e(DATE_METHOD.rule[METHOD])}</p>
          </div>
          <figure class="nm-example" data-steps-demo style="--c:${numColor(lpEx.value)}">
            <figcaption>${e(DATE_METHOD.exampleLabel)}</figcaption>
            <p class="nm-example__date" aria-hidden="true">22 <span>/</span> 06 <span>/</span> 2002</p>
            ${stepsHtml(lpEx.steps)}
            <p class="nm-example__res">Số chủ đạo <strong style="color:${numColor(lpEx.value)}">${e(lpEx.display)}</strong></p>
          </figure>
          <div>
            <p class="nm-label">${e(DATE_METHOD.personalYearTitle)}</p>
            <p>${e(DATE_METHOD.personalYearIntro)}</p>
          </div>
          <figure class="nm-example" data-steps-demo style="--c:${numColor(pyEx.value)}">
            <figcaption>${e(DATE_METHOD.personalYearExampleLabel)}</figcaption>
            <p class="nm-example__date" aria-hidden="true">22 <span>/</span> 06 <span>+</span> 2026</p>
            ${stepsHtml(pyEx.steps)}
            <p class="nm-example__res">Năm cá nhân <strong style="color:${numColor(pyEx.value)}">${e(pyEx.display)}</strong></p>
          </figure>
        </div>
        <details class="nm-details">
          <summary><span class="nm-details__i" aria-hidden="true">ⓘ</span>${e(WHY_DIFFERENT.summary)}</summary>
          <div class="nm-details__body">${WHY_DIFFERENT.paragraphs.map((p) => `<p>${e(p)}</p>`).join('')}</div>
        </details>
      </div>

      <div class="nm-method">
        <h4 class="nm-method__title">${e(NAME_METHOD.title)}</h4>
        <p class="nm-method__intro">${e(NAME_METHOD.intro)}</p>
        <div id="alpha-host">${alphabetTable()}</div>
        <div class="nm-method__grid">
          <div>
            <p>${e(NAME_METHOD.vowels)}</p>
            <p>${e(NAME_METHOD.yNote)}</p>
            <ul class="nm-formulas" role="list">
              ${NAME_METHOD.formulas.map((x) => `<li><strong>${e(INDEX_META[x.index].name)}</strong>: ${e(x.text)}</li>`).join('')}
            </ul>
            <p>${e(NAME_METHOD.reduce)}</p>
          </div>
          <figure class="nm-example">
            <figcaption>${e(NAME_METHOD.exampleLabel)}</figcaption>
            <div id="name-example">${nameExampleHtml()}</div>
          </figure>
        </div>
      </div>
    </section>

    <section class="nm-sec" id="bo-tinh" aria-labelledby="h-bt">
      <h3 class="nm-sec__title" id="h-bt"><span class="nm-sec__no">04</span>${e(CALCULATORS.title)}</h3>
      <p class="nm-sec__lead">${e(CALCULATORS.lead)}</p>

      <div class="calcs">
        <form class="calc" id="calc-date" novalidate autocomplete="off">
          <header class="calc__head">
            <p class="calc__kicker">Bộ tính 1</p>
            <h4 class="calc__title">${e(CALCULATORS.date.title)}</h4>
            <p class="calc__sub">${e(CALCULATORS.date.sub)}</p>
          </header>
          <fieldset class="dob">
            <legend class="field__label">${e(CALCULATORS.date.legend)}</legend>
            <div class="dob__row">
              ${dateFields
                .map(
                  ([k, id, label, ph, max], i) => `
                ${i ? '<span class="dob__sep" aria-hidden="true">/</span>' : ''}
                <div class="dob__cell dob__cell--${k}">
                  <label class="dob__lbl" for="${id}">${e(label)}</label>
                  <input class="field__input dob__input" id="${id}" name="${k}" type="text" inputmode="numeric" pattern="[0-9]*"
                    maxlength="${max}" placeholder="${ph}" autocomplete="off" value="${e(f[k])}" aria-describedby="dob-err">
                </div>`
                )
                .join('')}
            </div>
            <div class="field__error" id="dob-err"></div>
          </fieldset>
          <div class="field">
            <label class="field__label" for="target-year">${e(CALCULATORS.date.target)}</label>
            <div class="target">
              <input class="field__input target__input" id="target-year" name="target" type="text" inputmode="numeric" pattern="[0-9]*"
                maxlength="4" autocomplete="off" value="${e(f.target)}" aria-describedby="target-hint target-err">
              <button type="button" class="pill" data-year="0">${e(CALCULATORS.date.thisYear)}</button>
              <button type="button" class="pill" data-year="1">${e(CALCULATORS.date.nextYear)}</button>
            </div>
            <p class="field__hint" id="target-hint">${e(CALCULATORS.date.targetHint)}</p>
            <div class="field__error" id="target-err"></div>
          </div>
          <button type="submit" class="btn btn--big calc__submit">${e(CALCULATORS.date.submit)}</button>
          <p class="privacy">${ICON_LOCK}<span>${e(PRIVACY_LINE)}</span></p>
          <div class="calc__out" id="date-out"></div>
        </form>

        <form class="calc" id="calc-name" novalidate autocomplete="off">
          <header class="calc__head">
            <p class="calc__kicker">Bộ tính 2</p>
            <h4 class="calc__title">${e(CALCULATORS.name.title)}</h4>
            <p class="calc__sub">${e(CALCULATORS.name.sub)}</p>
          </header>
          <div class="field">
            <label class="field__label" for="full-name">${e(CALCULATORS.name.label)}</label>
            <input class="field__input" id="full-name" name="fullname" type="text" maxlength="80" autocomplete="off" autocapitalize="words"
              spellcheck="false" placeholder="${e(CALCULATORS.name.placeholder)}" value="${e(state.name)}" aria-describedby="name-hint name-err">
            <p class="field__hint" id="name-hint">${e(CALCULATORS.name.hint)}</p>
            <div class="field__error" id="name-err"></div>
          </div>
          <div class="field y-option">
            <label class="switch">
              <input type="checkbox" id="y-foreign" aria-describedby="y-foreign-hint" ${yMode === 'foreign' ? 'checked' : ''}>
              <span class="switch__track" aria-hidden="true"><span></span></span>
              <span>${e(NAME_METHOD.yOption.label)}</span>
            </label>
            <p class="field__hint" id="y-foreign-hint">${e(NAME_METHOD.yOption.hint)}</p>
          </div>
          <div class="name-preview">
            <p class="name-preview__label">${e(CALCULATORS.name.previewLabel)}: <strong id="name-norm" class="name-preview__text">${e(C.normalizeName(state.name)) || '…'}</strong></p>
            <div class="letters" id="name-letters" aria-hidden="true">${lettersHtml(state.name)}</div>
            <p class="legend" aria-hidden="true"><span class="legend__v">${e(NAME_METHOD.legendVowel)}</span><span class="legend__c">${e(NAME_METHOD.legendConsonant)}</span></p>
          </div>
          <button type="submit" class="btn btn--big calc__submit">${e(CALCULATORS.name.submit)}</button>
          <p class="privacy">${ICON_LOCK}<span>${e(PRIVACY_LINE)}</span></p>
          <div class="calc__out" id="name-out"></div>
        </form>
      </div>
    </section>
  </div>`;
}

/* ---------- Kết quả trong từng bộ tính ---------- */

function resItem(label, res, { labels = false, note = '' } = {}) {
  if (!res || !res.value) {
    return `<div class="res__item res__item--empty"><p class="res__label">${e(label)}</p><p class="res__note">${e(note)}</p></div>`;
  }
  const [main, sub] = res.display.split('/');
  return `
    <div class="res__item" style="--c:${numColor(res.value)}">
      <p class="res__label">${e(label)}</p>
      <p class="res__num"><span>${main}</span>${sub ? `<small>/${sub}</small>` : ''}</p>
      ${stepsHtml(res.steps, { labels })}
    </div>`;
}

function ctaHtml(missing) {
  const q = resultQuery();
  if (!q) return '';
  const hint = missing ? `<p class="res__hint">${e(missing)}</p>` : '';
  return `
    <div class="res__cta">
      ${hint}
      <a class="btn btn--gold btn--big res__go" href="#${BASE}/ket-qua?${q}">${e(CALCULATORS.cta)}${ICON_ARROW}</a>
      <p class="res__ctanote">${e(CALCULATORS.ctaNote)}</p>
    </div>`;
}

function renderDateOut(animate) {
  const out = api.body.querySelector('#date-out');
  if (!out) return;
  if (!state.lp) {
    out.innerHTML = '';
    return;
  }
  out.innerHTML = `
    <div class="res">
      ${resItem(INDEX_META.lifePath.name, state.lp)}
      ${resItem(`${INDEX_META.personalYear.name} ${state.py.year}`, state.py)}
    </div>
    ${ctaHtml(state.names ? '' : 'Tính thêm theo họ tên để có đủ năm con số.')}`;
  if (animate) animateOut(out);
}

function renderNameOut(animate) {
  const out = api.body.querySelector('#name-out');
  if (!out) return;
  const n = state.names;
  if (!n) {
    out.innerHTML = '';
    return;
  }
  const egg = isEasterEgg(n.name) ? `<p class="egg">${e(EASTER_EGG)}</p>` : '';
  out.innerHTML = `
    ${egg}
    <div class="res res--3">
      ${resItem(INDEX_META.expression.name, n.expression, { labels: true })}
      ${resItem(INDEX_META.soul.name, n.soul, { labels: true, note: CALCULATORS.name.noSoul })}
      ${resItem(INDEX_META.personality.name, n.personality, { labels: true, note: CALCULATORS.name.noPersonality })}
    </div>
    ${ctaHtml(state.lp ? '' : 'Tính thêm theo ngày sinh để có đủ năm con số.')}`;
  if (animate) animateOut(out);
}

function animateOut(out) {
  const gsap = G();
  // Đồng bộ nút CTA ở bộ tính còn lại để link luôn có đủ các con số mới nhất.
  syncCtas();
  if (!gsap) return;
  const items = [...out.querySelectorAll('.res__item')];
  const cta = out.querySelector('.res__cta');
  const egg = out.querySelector('.egg');
  if (reducedMotion()) {
    gsap.fromTo(out, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    return;
  }
  gsap.from(items, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', stagger: 0.12 });
  items.forEach((it, i) => {
    popNumber(it.querySelector('.res__num'), 0.25 + i * 0.12);
    animateSteps(it, { delay: 0.35 + i * 0.25 });
  });
  if (egg) gsap.from(egg, { opacity: 0, y: -8, duration: 0.6, delay: 0.2 });
  if (cta) gsap.from(cta, { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out', delay: 0.9 + items.length * 0.2 });
  // Đưa phần kết quả vào tầm nhìn nếu nó đang nằm dưới mép màn hình.
  const sr = api.scroller.getBoundingClientRect();
  const r = out.getBoundingClientRect();
  if (r.top > sr.bottom - 160) {
    api.scroller.scrollTo({ top: api.scroller.scrollTop + (r.top - sr.top) - 120, behavior: 'smooth' });
  }
}

function syncCtas() {
  const q = resultQuery();
  api.body.querySelectorAll('.res__go').forEach((a) => a.setAttribute('href', `#${BASE}/ket-qua?${q}`));
  api.body.querySelectorAll('.res__hint').forEach((p) => {
    if (state.lp && state.names) p.remove();
  });
}

/* ---------- Gắn hành vi cho form ---------- */

function setError(el, msg) {
  if (!el) return;
  el.textContent = msg || '';
  el.classList.toggle('is-on', !!msg);
}

function bindDateForm(form) {
  const inputs = ['day', 'month', 'year'].map((k) => form.elements[k]);
  const target = form.elements.target;
  const err = form.querySelector('#dob-err');
  const terr = form.querySelector('#target-err');

  const clearInvalid = (inp) => {
    inp.removeAttribute('aria-invalid');
    if (!form.querySelector('.dob [aria-invalid="true"]')) setError(err, '');
  };

  inputs.forEach((inp, i) => {
    inp.addEventListener('input', () => {
      const v = inp.value;
      // Gõ dấu phân cách (/ . -) thì nhảy sang ô kế tiếp.
      const jump = /[\/.\-\s]$/.test(v) && v.replace(/\D/g, '').length > 0;
      inp.value = v.replace(/\D/g, '').slice(0, inp.maxLength);
      state.form[inp.name] = inp.value;
      clearInvalid(inp);
      if ((inp.value.length >= inp.maxLength || jump) && inputs[i + 1]) {
        inputs[i + 1].focus();
        inputs[i + 1].select();
      }
    });
    inp.addEventListener('keydown', (ev) => {
      if (ev.key === 'Backspace' && !inp.value && inputs[i - 1]) {
        ev.preventDefault();
        inputs[i - 1].focus();
      }
      if (ev.key === 'ArrowLeft' && inp.selectionStart === 0 && inputs[i - 1]) inputs[i - 1].focus();
      if (ev.key === 'ArrowRight' && inp.selectionStart === inp.value.length && inputs[i + 1]) inputs[i + 1].focus();
    });
    inp.addEventListener('paste', (ev) => {
      const text = (ev.clipboardData || window.clipboardData)?.getData('text') || '';
      const m = text.trim().match(/^(\d{1,2})\D+(\d{1,2})\D+(\d{4})$/) || text.trim().match(/^(\d{2})(\d{2})(\d{4})$/);
      if (!m) return;
      ev.preventDefault();
      [m[1], m[2], m[3]].forEach((v, j) => {
        inputs[j].value = v;
        state.form[inputs[j].name] = v;
        inputs[j].removeAttribute('aria-invalid');
      });
      setError(err, '');
      target.focus();
    });
  });

  target.addEventListener('input', () => {
    target.value = target.value.replace(/\D/g, '').slice(0, 4);
    state.form.target = target.value;
    target.removeAttribute('aria-invalid');
    setError(terr, '');
  });
  form.querySelectorAll('[data-year]').forEach((b) =>
    b.addEventListener('click', () => {
      target.value = String(thisYear() + Number(b.dataset.year));
      state.form.target = target.value;
      target.removeAttribute('aria-invalid');
      setError(terr, '');
    })
  );

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const v = C.validateBirthDate(state.form, { minYear: MIN_YEAR });
    const t = C.validateTargetYear(state.form.target, { min: MIN_YEAR, max: thisYear() + 100 });
    inputs.forEach((inp) =>
      v.errors?.[inp.name] ? inp.setAttribute('aria-invalid', 'true') : inp.removeAttribute('aria-invalid')
    );
    setError(err, v.ok ? '' : Object.values(v.errors).join(' '));
    if (t.ok) {
      target.removeAttribute('aria-invalid');
      setError(terr, '');
    } else {
      target.setAttribute('aria-invalid', 'true');
      setError(terr, t.error);
    }
    if (!v.ok) {
      inputs.find((inp) => v.errors[inp.name])?.focus();
      return;
    }
    if (!t.ok) {
      target.focus();
      return;
    }
    state.lp = C.lifePath(v.date, { method: METHOD });
    state.py = C.personalYear(v.date, t.year);
    renderDateOut(true);
    announce(
      `Số chủ đạo của bạn là ${state.lp.display.replace('/', ' trên ')}. Năm cá nhân của bạn trong năm ${t.year} là ${state.py.value}.`
    );
  });
}

function bindNameForm(form) {
  const input = form.elements.fullname;
  const norm = form.querySelector('#name-norm');
  const letters = form.querySelector('#name-letters');
  const err = form.querySelector('#name-err');
  let prev = C.normalizeName(state.name, { trim: false });

  const refresh = () => {
    const live = C.normalizeName(input.value, { trim: false });
    norm.textContent = live.trim() || '…';
    letters.innerHTML = lettersHtml(input.value, prev);
    prev = live;
  };

  input.addEventListener('input', () => {
    state.name = input.value;
    input.removeAttribute('aria-invalid');
    setError(err, '');
    refresh();
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const normalized = C.normalizeName(input.value);
    if (!input.value.trim() || !normalized) {
      input.setAttribute('aria-invalid', 'true');
      setError(err, input.value.trim() ? CALCULATORS.name.noLetters : CALCULATORS.name.empty);
      input.focus();
      return;
    }
    state.names = C.nameNumbers(input.value, { yMode });
    renderNameOut(true);
    const n = state.names;
    const say = (label, r) => (r.value ? `${label} ${r.display.replace('/', ' trên ')}` : null);
    announce(
      [say('Số sứ mệnh', n.expression), say('Số linh hồn', n.soul), say('Số nhân cách', n.personality)].filter(Boolean).join(', ') +
        '.' +
        (isEasterEgg(n.name) ? ' ' + EASTER_EGG : '')
    );
  });
}

function bindYOption(root) {
  const cb = root.querySelector('#y-foreign');
  cb?.addEventListener('change', () => {
    yMode = cb.checked ? 'foreign' : 'vowel';
    root.querySelector('#alpha-host').innerHTML = alphabetTable();
    root.querySelector('#name-example').innerHTML = nameExampleHtml();
    const input = root.querySelector('#full-name');
    root.querySelector('#name-letters').innerHTML = lettersHtml(input.value);
    if (state.names) {
      state.names = C.nameNumbers(state.names.name, { yMode });
      renderNameOut(false);
      syncCtas();
    }
    ctx.toast(yMode === 'foreign' ? NAME_METHOD.yOption.toastOn : NAME_METHOD.yOption.toastOff);
  });
}

function renderIntro() {
  api.setToc([
    { id: 'tsh-la-gi', label: 'Là gì' },
    { id: 'nam-chi-so', label: '5 chỉ số' },
    { id: 'cach-tinh', label: 'Cách tính' },
    { id: 'bo-tinh', label: 'Bộ tính' },
  ]);
  api.body.innerHTML = introHtml();
  const root = api.body;
  root.querySelectorAll('[data-jump-to]').forEach((b) => b.addEventListener('click', () => api.jumpTo(b.dataset.jumpTo)));
  bindDateForm(root.querySelector('#calc-date'));
  bindNameForm(root.querySelector('#calc-name'));
  bindYOption(root);
  renderDateOut(false);
  renderNameOut(false);
  animateDemos(root);
  introMotion(root);

  if (pendingJump) {
    const id = pendingJump;
    pendingJump = null;
    requestAnimationFrame(() => {
      api.jumpTo(id);
      const first = root.querySelector(`#${id} input`);
      if (first) setTimeout(() => first.focus({ preventScroll: true }), 450);
    });
  }
}

/** Ví dụ phép tính trong phần "Cách tính" chạy khi cuộn tới. */
function animateDemos(root) {
  if (!G() || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        animateSteps(en.target);
      });
    },
    { root: api.scroller, threshold: 0.5 }
  );
  root.querySelectorAll('[data-steps-demo]').forEach((f) => io.observe(f));
}

function introMotion(root) {
  const gsap = G();
  if (!gsap || reducedMotion()) return;
  gsap.from(root.querySelectorAll('.nm-strip li'), { yPercent: 60, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.05, delay: 0.55 });
}

/* ---------- Điều phối ---------- */

const helpers = {
  base: BASE,
  method: METHOD,
  navigate: (to, opts) => ctx.navigate(to, opts),
  toast: (m) => ctx.toast(m),
  jumpTo: (id) => api.jumpTo(id),
  setToc: (t) => api.setToc(t),
  scroller: () => api.scroller,
  goCalc(kind) {
    pendingJump = kind === 'name' ? 'calc-name' : 'calc-date';
    ctx.navigate(BASE);
  },
  recalc() {
    pendingJump = 'bo-tinh';
    ctx.navigate(BASE);
  },
  resetAll() {
    state = blankState();
    pendingJump = 'bo-tinh';
    ctx.navigate(BASE);
    ctx.toast('Đã xoá các con số cũ. Giờ nhập thông tin của người khác được rồi.');
  },
};

function render(route) {
  const sub = route.segments[1] || '';
  api.scroller.scrollTop = 0;
  if (sub === 'ket-qua') {
    renderResults(api.body, route.params, helpers);
  } else if (sub === 'tra-cuu') {
    renderLookup(api.body, route.params, helpers);
  } else if (sub === '') {
    renderIntro();
  } else {
    ctx.navigate(BASE, { replace: true });
    return;
  }
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
  unmount() {
    pendingJump = null;
  },
};
