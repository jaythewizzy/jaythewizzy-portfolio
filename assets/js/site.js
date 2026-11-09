(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  let saved = null;
  try { saved = localStorage.getItem('jay-theme'); } catch (_) {}
  const preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const initial = saved === 'light' || saved === 'dark' ? saved : preferred;
  root.dataset.theme = initial;
  const updateTheme = (theme) => {
    if (!themeButton) return;
    const light = theme === 'light';
    themeButton.setAttribute('aria-pressed', String(light));
    themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    themeButton.setAttribute('title', light ? 'Switch to dark theme' : 'Switch to light theme');
  };
  updateTheme(initial);
  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    updateTheme(next);
    try { localStorage.setItem('jay-theme', next); } catch (_) {}
  });
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    nav?.classList.toggle('is-open', !open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('details.nav-dropdown').forEach(details => {
    document.addEventListener('click', (event) => { if (!details.contains(event.target)) details.removeAttribute('open'); });
  });
})();
