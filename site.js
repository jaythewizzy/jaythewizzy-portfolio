(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-main-nav]');

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('jay-theme'); } catch (_) {}
  const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  root.dataset.theme = initialTheme;
  updateThemeButton(initialTheme);

  function updateThemeButton(theme) {
    if (!themeButton) return;
    const isLight = theme === 'light';
    themeButton.setAttribute('aria-pressed', String(isLight));
    themeButton.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
    themeButton.setAttribute('title', `Switch to ${isLight ? 'dark' : 'light'} theme`);
  }

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    updateThemeButton(next);
    try { localStorage.setItem('jay-theme', next); } catch (_) {}
  });

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
