// Router theo hash. Mỗi lần điều hướng trong app được đánh số độ sâu (state.d)
// để khi đóng overlay ta quay đúng về entry trang chủ bằng history.go(-d),
// nhờ vậy nút Back của trình duyệt và điện thoại luôn đóng overlay trước.

const listeners = new Set();
let current = null;

export function parse(hash = location.hash) {
  const raw = hash.replace(/^#/, '');
  // Hash không bắt đầu bằng "/" là anchor trong trang (vd #ve-trang-nay), coi như trang chủ.
  if (!raw.startsWith('/')) {
    return { path: '/', segments: [], params: new URLSearchParams(), anchor: raw || null, raw: '/' };
  }
  const [pathPart, query = ''] = raw.split('?');
  const segments = pathPart.split('/').filter(Boolean).map(decodeURIComponent);
  return {
    path: '/' + segments.join('/'),
    segments,
    params: new URLSearchParams(query),
    anchor: null,
    raw,
  };
}

function depth() {
  const d = history.state && history.state.d;
  return Number.isInteger(d) ? d : 0;
}

function emit() {
  const route = parse();
  const prev = current;
  current = route;
  listeners.forEach((fn) => fn(route, prev));
}

export function onRoute(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function currentRoute() {
  return current || parse();
}

/** Điều hướng tới một route, vd navigate('/than-so-hoc/ket-qua?cd=5'). */
export function navigate(to, { replace = false } = {}) {
  const url = '#' + to;
  if (url === location.hash && !replace) return;
  if (replace) history.replaceState({ d: depth() }, '', url);
  else history.pushState({ d: depth() + 1 }, '', url);
  emit();
}

/** Quay về trang chủ, gỡ hết các entry overlay đã đẩy vào lịch sử. */
export function goHome() {
  const d = depth();
  if (d > 0) {
    history.go(-d);
  } else {
    history.replaceState({ d: 0 }, '', location.pathname + location.search);
    emit();
  }
}

export function startRouter() {
  const start = parse();
  const base = location.pathname + location.search;
  if (start.path !== '/') {
    // Mở link sâu: chèn trang chủ bên dưới để nút Back đóng overlay thay vì thoát web.
    const target = location.hash;
    history.replaceState({ d: 0 }, '', base);
    history.pushState({ d: 1 }, '', base + target);
  } else if (!history.state) {
    history.replaceState({ d: 0 }, '', location.href);
  }

  // Back/Forward bắn cả popstate lẫn hashchange; chỉ phát một lần cho mỗi route.
  const maybeEmit = () => {
    const r = parse();
    if (current && r.raw === current.raw && r.anchor === current.anchor) return;
    emit();
  };
  window.addEventListener('popstate', maybeEmit);
  window.addEventListener('hashchange', maybeEmit);

  // Link nội bộ dạng href="#/..." đi qua navigate để có độ sâu đúng.
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href^="#/"]');
    if (!a || a.target) return;
    e.preventDefault();
    navigate(a.getAttribute('href').slice(1), { replace: a.hasAttribute('data-replace') });
  });

  emit();
}
