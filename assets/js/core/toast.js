// Toast nhỏ ở cuối màn hình. Vùng #toast có role="status" nên trình đọc màn hình cũng đọc được.

let region;
let timer;

export function toast(message, ms = 3400) {
  region ||= document.getElementById('toast');
  if (!region) return;
  clearTimeout(timer);
  region.textContent = message;
  region.classList.add('is-on');
  timer = setTimeout(() => region.classList.remove('is-on'), ms);
}
