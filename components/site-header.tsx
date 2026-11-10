'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowIcon, DownloadIcon, MenuIcon } from './icons';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const isActive = useCallback((href: string) => (
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
  ), [pathname]);

  const closeMenus = useCallback(() => {
    setMenuOpen(false);
    navRef.current?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown').forEach((menu) => {
      menu.open = false;
    });
  }, []);

  useEffect(() => {
    closeMenus();
  }, [pathname, closeMenus]);

  useEffect(() => {
    function handleOutsidePointer(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navRef.current?.contains(target) || menuToggleRef.current?.contains(target)) return;
      closeMenus();
    }

    function handleScroll() {
      closeMenus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenus();
        menuToggleRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointer);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointer);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen, closeMenus]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="JaytheWizzy home" onClick={closeMenus}>
          <span className="brand-mark">JW</span>
          <span className="brand-lockup">
            <span className="brand-name">JAYTHEWIZZY</span>
            <span className="brand-descriptor">CREATIVE STUDIO</span>
          </span>
        </Link>

        <nav ref={navRef} className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
          <Link href="/" aria-current={isActive('/') ? 'page' : undefined} onClick={closeMenus}>Home</Link>
          <Link href="/technology" aria-current={isActive('/technology') ? 'page' : undefined} onClick={closeMenus}>Technology</Link>

          <details
            className={`nav-dropdown${(['/apps', '/games', '/play'].some(isActive) ? ' has-current' : '')}`}
            onFocusCapture={(event) => {
              const focusedMenu = event.currentTarget;
              navRef.current?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown').forEach((menu) => {
                if (menu !== focusedMenu) menu.open = false;
              });
            }}
            onToggle={(event) => {
              const activeMenu = event.currentTarget;
              if (!activeMenu.open) return;
              navRef.current?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown').forEach((menu) => {
                if (menu !== activeMenu) menu.open = false;
              });
            }}
          >
            <summary className="nav-dropdown-trigger">Play <span className="nav-chevron" aria-hidden="true" /></summary>
            <div className="nav-dropdown-menu" aria-label="Play destinations">
              <Link href="/apps" aria-current={isActive('/apps') ? 'page' : undefined} onClick={closeMenus}>Apps</Link>
              <Link href="/games" aria-current={isActive('/games') ? 'page' : undefined} onClick={closeMenus}>Games</Link>
              <Link href="/play" aria-current={isActive('/play') ? 'page' : undefined} onClick={closeMenus}>Developer platforms</Link>
            </div>
          </details>

          <details
            className={`nav-dropdown${(['/projects', '/studio'].some(isActive) ? ' has-current' : '')}`}
            onFocusCapture={(event) => {
              const focusedMenu = event.currentTarget;
              navRef.current?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown').forEach((menu) => {
                if (menu !== focusedMenu) menu.open = false;
              });
            }}
            onToggle={(event) => {
              const activeMenu = event.currentTarget;
              if (!activeMenu.open) return;
              navRef.current?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown').forEach((menu) => {
                if (menu !== activeMenu) menu.open = false;
              });
            }}
          >
            <summary className="nav-dropdown-trigger">Work <span className="nav-chevron" aria-hidden="true" /></summary>
            <div className="nav-dropdown-menu" aria-label="Work destinations">
              <Link href="/projects" aria-current={isActive('/projects') ? 'page' : undefined} onClick={closeMenus}>Projects</Link>
              <Link href="/studio" aria-current={isActive('/studio') ? 'page' : undefined} onClick={closeMenus}>Studio</Link>
            </div>
          </details>

          <Link href="/media" aria-current={isActive('/media') ? 'page' : undefined} onClick={closeMenus}>Media</Link>
          <Link href="/investors" aria-current={isActive('/investors') ? 'page' : undefined} onClick={closeMenus}>Investors</Link>
          <Link href="/about" aria-current={isActive('/about') ? 'page' : undefined} onClick={closeMenus}>About</Link>
          <Link href="/contact" aria-current={isActive('/contact') ? 'page' : undefined} onClick={closeMenus}>Contact</Link>
          <div className="mobile-nav-actions">
            <Link className="button button-small button-quiet mobile-cv-link" href="/cv" onClick={closeMenus}>CV / Résumé</Link>
            <Link className="button button-small button-outline mobile-contact-link" href="/contact" onClick={closeMenus}>Get in touch <ArrowIcon /></Link>
          </div>
        </nav>

        <div className="header-tools">
          <Link className="header-cv" href="/cv" aria-label="View CV">CV <DownloadIcon /></Link>
          <ThemeToggle />
          <Link className="button button-small button-outline header-cta" href="/contact">Get in touch <ArrowIcon /></Link>
          <button
            ref={menuToggleRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
