// Theme sáng/tối. Mặc định theo hệ thống; khi người dùng bấm nút thì nhớ lựa chọn
// trong localStorage (chỉ lưu đúng một giá trị "light" hoặc "dark").

const KEY = 'hub-theme';
const COLORS = { light: '#F5F1EA', dark: '#0F1220' };
const mq = window.matchMedia('(prefers-color-scheme: dark)');

function stored() {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

export function activeTheme() {
  return stored() || (mq.matches ? 'dark' : 'light');
}

function apply(theme, btn) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', COLORS[theme]));
  if (btn) {
    const toDark = theme === 'light';
    btn.setAttribute('aria-label', toDark ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng');
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

export function initTheme(btn) {
  apply(activeTheme(), btn);
  mq.addEventListener('change', () => {
    if (!stored()) apply(activeTheme(), btn);
  });
  btn?.addEventListener('click', () => {
    const next = activeTheme() === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* bỏ qua nếu trình duyệt chặn storage */
    }
    document.documentElement.classList.add('theme-switching');
    apply(next, btn);
    setTimeout(() => document.documentElement.classList.remove('theme-switching'), 450);
  });
}
