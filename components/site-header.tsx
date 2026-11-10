'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowIcon, DownloadIcon, MenuIcon } from './icons';
import { ThemeToggle } from './theme-toggle';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Technology', href: '/technology' },
  { label: 'Apps', href: '/apps' },
  { label: 'Play', href: '/play' },
  { label: 'Studio', href: '/studio' },
  { label: 'Projects', href: '/projects' },
  { label: 'Investors', href: '/investors' },
  { label: 'Games', href: '/games' },
  { label: 'Media', href: '/media' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsidePointer(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navRef.current?.contains(target) || menuToggleRef.current?.contains(target)) return;
      setMenuOpen(false);
    }

    function handleScroll() {
      setMenuOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    document.addEventListener('pointerdown', handleOutsidePointer);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointer);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="JaytheWizzy home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">JW</span>
          <span className="brand-lockup">
            <span className="brand-name">JAYTHEWIZZY</span>
            <span className="brand-descriptor">CREATIVE STUDIO</span>
          </span>
        </Link>

        <nav ref={navRef} className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mobile-nav-actions">
            <Link className="button button-small button-quiet mobile-cv-link" href="/cv" onClick={() => setMenuOpen(false)}>CV / Résumé</Link>
            <Link className="button button-small button-outline mobile-contact-link" href="/contact" onClick={() => setMenuOpen(false)}>Get in touch <ArrowIcon /></Link>
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
