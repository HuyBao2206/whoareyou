// Ô nhập ngày sinh dùng chung cho các thẻ: ba ô ngày / tháng / năm.
// Gõ đủ số thì tự nhảy sang ô sau; gõ / . - thì nhảy luôn; Backspace ở ô trống thì lùi về ô trước;
// dán "22/06/2002" hay "22062002" vào ô nào cũng được. Kiểu dáng nằm trong assets/css/shared.css (.di).
// Dữ liệu chỉ nằm trong DOM của ô nhập, không lưu ở đâu khác.

import { escapeHtml as e } from './utils.js';

const pad = (v) => String(v ?? '');

export const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
export const daysInMonth = (m, y) => [31, isLeapYear(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1] || 0;

/**
 * Kiểm tra ngày sinh người dùng nhập. Hàm thuần.
 * @returns {{ ok:true, date:{day,month,year}, errors:{} } | { ok:false, errors:{day?,month?,year?} }}
 */
export function validateDate(input, { minYear = 1900, today = new Date() } = {}) {
  const errors = {};
  const raw = { day: pad(input.day).trim(), month: pad(input.month).trim(), year: pad(input.year).trim() };
  const d = Number(raw.day);
  const m = Number(raw.month);
  const y = Number(raw.year);
  const maxYear = today.getFullYear();

  if (!raw.day) errors.day = 'Bạn chưa nhập ngày sinh.';
  else if (!/^\d{1,2}$/.test(raw.day) || d < 1 || d > 31) errors.day = 'Ngày sinh nằm trong khoảng từ 1 đến 31.';

  if (!raw.month) errors.month = 'Bạn chưa nhập tháng sinh.';
  else if (!/^\d{1,2}$/.test(raw.month) || m < 1 || m > 12) errors.month = 'Tháng sinh nằm trong khoảng từ 1 đến 12.';

  if (!raw.year) errors.year = 'Bạn chưa nhập năm sinh.';
  else if (!/^\d{4}$/.test(raw.year) || y < minYear || y > maxYear) errors.year = `Năm sinh cần nằm trong khoảng từ ${minYear} đến ${maxYear}.`;

  if (!Object.keys(errors).length) {
    if (d > daysInMonth(m, y)) {
      errors.day =
        m === 2 && d === 29
          ? `Năm ${y} không phải năm nhuận nên tháng 2 chỉ có 28 ngày.`
          : `Tháng ${m} năm ${y} chỉ có ${daysInMonth(m, y)} ngày.`;
    } else if (new Date(y, m - 1, d) > new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
      errors.day = 'Ngày này chưa tới. Bạn kiểm tra lại giúp mình nhé.';
    }
  }
  const ok = !Object.keys(errors).length;
  return ok ? { ok, errors, date: { day: d, month: m, year: y } } : { ok, errors };
}

/**
 * HTML cho bộ ba ô ngày / tháng / năm.
 * @param {{ id:string, legend?:string, value?:{day,month,year} }} o  id dùng làm tiền tố cho các ô
 */
export function dateInputHtml({ id, legend = 'Ngày sinh', value = {} }) {
  const cells = [
    ['day', 'Ngày', 'dd', 2],
    ['month', 'Tháng', 'mm', 2],
    ['year', 'Năm', 'yyyy', 4],
  ];
  return `
    <fieldset class="di" data-di="${e(id)}">
      <legend class="di__legend">${e(legend)}</legend>
      <div class="di__row">
        ${cells
          .map(
            ([k, label, ph, max], i) => `
          ${i ? '<span class="di__sep" aria-hidden="true">/</span>' : ''}
          <div class="di__cell di__cell--${k}">
            <label class="di__lbl" for="${e(id)}-${k}">${label}</label>
            <input class="di__input" id="${e(id)}-${k}" name="${k}" type="text" inputmode="numeric" pattern="[0-9]*"
              maxlength="${max}" placeholder="${ph}" autocomplete="off" value="${e(pad(value[k]))}" aria-describedby="${e(id)}-err">
          </div>`
          )
          .join('')}
      </div>
      <div class="di__error" id="${e(id)}-err" aria-live="polite"></div>
    </fieldset>`;
}

/**
 * Gắn hành vi cho bộ ô đã vẽ bằng dateInputHtml.
 * @param {HTMLElement} root  phần tử chứa fieldset
 * @param {{ onInput?: Function, next?: HTMLElement }} o  next: ô được focus sau khi dán đủ ngày
 * @returns {{ value():{day,month,year}, showErrors(errors), clear(), focus() }}
 */
export function bindDateInput(root, { onInput, next } = {}) {
  const fs = root.matches?.('.di') ? root : root.querySelector('.di');
  const inputs = ['day', 'month', 'year'].map((k) => fs.querySelector(`[name="${k}"]`));
  const err = fs.querySelector('.di__error');

  const clearInvalid = (inp) => {
    inp.removeAttribute('aria-invalid');
    if (!fs.querySelector('[aria-invalid="true"]')) err.textContent = '';
  };

  inputs.forEach((inp, i) => {
    inp.addEventListener('input', () => {
      const v = inp.value;
      const jump = /[/.\-\s]$/.test(v) && v.replace(/\D/g, '').length > 0;
      inp.value = v.replace(/\D/g, '').slice(0, inp.maxLength);
      clearInvalid(inp);
      if ((inp.value.length >= inp.maxLength || jump) && inputs[i + 1]) {
        inputs[i + 1].focus();
        inputs[i + 1].select();
      }
      onInput?.();
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
        inputs[j].removeAttribute('aria-invalid');
      });
      err.textContent = '';
      (next || inputs[2]).focus();
      onInput?.();
    });
  });

  return {
    value: () => ({ day: inputs[0].value, month: inputs[1].value, year: inputs[2].value }),
    showErrors(errors = {}) {
      inputs.forEach((inp) => (errors[inp.name] ? inp.setAttribute('aria-invalid', 'true') : inp.removeAttribute('aria-invalid')));
      err.textContent = Object.values(errors).join(' ');
      inputs.find((inp) => errors[inp.name])?.focus();
    },
    clear() {
      inputs.forEach((inp) => {
        inp.value = '';
        inp.removeAttribute('aria-invalid');
      });
      err.textContent = '';
    },
    focus: () => inputs[0].focus(),
  };
}
