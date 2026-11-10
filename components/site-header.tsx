'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from 'react';
import { ArrowIcon, MenuIcon } from './icons';
import styles from './site-header.module.css';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const pendingNavbarScroll = useRef(false);

  const isActive = useCallback((href: string) => (
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
  ), [pathname]);

  const closeMenus = useCallback(() => {
    setMenuOpen(false);
    navRef.current?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown').forEach((menu) => {
      menu.open = false;
    });
  }, []);

  const scrollToTopImmediately = useCallback(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousBehavior;
  }, []);

  const handleNavbarLinkClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    closeMenus();

    // Leave modified clicks (new tab/window) to the browser.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const destination = new URL(event.currentTarget.href);
    if (destination.origin !== window.location.origin) return;

    const normalizePath = (path: string) => path.length > 1 ? path.replace(/\/+$/, '') : '/';
    const isCurrentLocation =
      normalizePath(destination.pathname) === normalizePath(window.location.pathname) &&
      destination.search === window.location.search &&
      destination.hash === window.location.hash;

    if (isCurrentLocation) {
      pendingNavbarScroll.current = false;
      scrollToTopImmediately();
      return;
    }

    // Next's visibility heuristic can keep a new route at a slightly offset position.
    // We explicitly move to the top after this navbar navigation commits.
    pendingNavbarScroll.current = true;
  }, [closeMenus, scrollToTopImmediately]);

  useEffect(() => {
    closeMenus();
  }, [pathname, closeMenus]);

  useLayoutEffect(() => {
    if (!pendingNavbarScroll.current) return;
    pendingNavbarScroll.current = false;
    scrollToTopImmediately();
  }, [pathname, scrollToTopImmediately]);

  useEffect(() => {
    // A browser Back/Forward action must be restored by Next.js, not overridden
    // by a pending navbar-click scroll request.
    const clearPendingScrollOnHistoryNavigation = () => {
      pendingNavbarScroll.current = false;
    };

    window.addEventListener('popstate', clearPendingScrollOnHistoryNavigation);
    return () => window.removeEventListener('popstate', clearPendingScrollOnHistoryNavigation);
  }, []);

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
      <div className={`shell header-inner ${styles.headerInner}`}>
        <Link className="brand" href="/" scroll={false} aria-label="JaytheWizzy home" onClick={handleNavbarLinkClick}>
          <span className="brand-mark">JW</span>
          <span className="brand-lockup">
            <span className="brand-name">JAYTHEWIZZY</span>
            <span className="brand-descriptor">CREATIVE STUDIO</span>
          </span>
        </Link>

        <nav ref={navRef} className={`main-nav ${styles.mainNav}${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
          <Link href="/" scroll={false} aria-current={isActive('/') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Home</Link>
          <Link href="/technology" scroll={false} aria-current={isActive('/technology') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Technology</Link>

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
              <Link href="/apps" scroll={false} aria-current={isActive('/apps') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Apps</Link>
              <Link href="/games" scroll={false} aria-current={isActive('/games') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Games</Link>
              <Link href="/play" scroll={false} aria-current={isActive('/play') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Developer platforms</Link>
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
              <Link href="/projects" scroll={false} aria-current={isActive('/projects') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Projects</Link>
              <Link href="/studio" scroll={false} aria-current={isActive('/studio') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Studio</Link>
            </div>
          </details>

          <Link href="/media" scroll={false} aria-current={isActive('/media') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Media</Link>
          <Link href="/investors" scroll={false} aria-current={isActive('/investors') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Investors</Link>
          <Link href="/about" scroll={false} aria-current={isActive('/about') ? 'page' : undefined} onClick={handleNavbarLinkClick}>About</Link>
          <Link href="/contact" scroll={false} aria-current={isActive('/contact') ? 'page' : undefined} onClick={handleNavbarLinkClick}>Contact</Link>
          <div className="mobile-nav-actions">
            <Link className="button button-small button-quiet mobile-cv-link" href="/cv" scroll={false} onClick={handleNavbarLinkClick}>CV / Résumé</Link>
            <Link className="button button-small button-outline mobile-contact-link" href="/contact" scroll={false} onClick={handleNavbarLinkClick}>Get in touch <ArrowIcon /></Link>
          </div>
        </nav>

        <div className={`header-tools ${styles.headerTools}`}>
          <ThemeToggle />
          <Link className="button button-small button-outline header-cta" href="/contact" scroll={false} onClick={handleNavbarLinkClick}>Get in touch <ArrowIcon /></Link>
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
