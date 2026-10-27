// Ngăn "Nguồn tham khảo" và dòng "Cập nhật" dùng chung cho các thẻ. Kiểu dáng: assets/css/shared.css (.srcs, .upd).
//
// Mỗi nguồn: { title, by?, year?, url?, note? }
//   title: tên bài, sách hay trang (bắt buộc)
//   by:    tác giả hoặc đơn vị đăng
//   year:  năm xuất bản (nếu có)
//   url:   đường link (nếu có); mở ở tab mới
//   note:  một câu ngắn nói nguồn này dùng cho phần nào

import { escapeHtml as e } from './utils.js';

/** Dòng "Cập nhật: tháng MM/YYYY". month là "MM/YYYY", ví dụ "10/2026". */
export const updatedHtml = (month) => `<p class="upd">Cập nhật: tháng ${e(month)}</p>`;

function itemHtml(s) {
  const title = s.url
    ? `<a href="${e(s.url)}" target="_blank" rel="noopener">${e(s.title)}</a>`
    : `<cite>${e(s.title)}</cite>`;
  const meta = [s.by, s.year].filter(Boolean).map(e).join(', ');
  return `<li class="srcs__item">${title}${meta ? `<span class="srcs__meta">${meta}</span>` : ''}${
    s.note ? `<span class="srcs__note">${e(s.note)}</span>` : ''
  }</li>`;
}

/**
 * Ngăn "Nguồn tham khảo" thu gọn được, kèm dòng cập nhật ở cuối.
 * @param {{ id?:string, items:Array, groups?:Array<{title:string, items:Array}>, updated:string, intro?:string }} o
 *   Dùng `items` cho một danh sách, hoặc `groups` để chia nhóm.
 */
export function sourcesHtml({ id = 'nguon', items = [], groups = null, updated, intro = '' }) {
  const lists = groups
    ? groups.map((g) => `<h4 class="srcs__group">${e(g.title)}</h4><ol class="srcs__list">${g.items.map(itemHtml).join('')}</ol>`).join('')
    : `<ol class="srcs__list">${items.map(itemHtml).join('')}</ol>`;
  const count = groups ? groups.reduce((n, g) => n + g.items.length, 0) : items.length;
  return `
    <section class="srcs-wrap" id="${e(id)}" aria-labelledby="${e(id)}-t">
      <details class="srcs">
        <summary><span class="srcs__title" id="${e(id)}-t">Nguồn tham khảo</span><span class="srcs__count">${count}</span></summary>
        <div class="srcs__body">
          ${intro ? `<p class="srcs__intro">${e(intro)}</p>` : ''}
          ${lists}
        </div>
      </details>
      ${updated ? updatedHtml(updated) : ''}
    </section>`;
}
