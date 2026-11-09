'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './icons';

type Theme = 'dark' | 'light';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const activeTheme: Theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    setTheme(activeTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('jw-theme', nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      aria-pressed={theme === 'light'}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          <span className="theme-moon"><MoonIcon /></span>
          <span className="theme-sun"><SunIcon /></span>
        </span>
      </span>
    </button>
  );
}
