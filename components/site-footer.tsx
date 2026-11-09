import Link from 'next/link';
import { ArrowIcon } from './icons';
import { SocialLinks } from './social-links';
import { site } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="JaytheWizzy home">
            <span className="brand-mark">JW</span>
            <span className="brand-lockup">
              <span className="brand-name">JAYTHEWIZZY</span>
              <span className="brand-descriptor">CREATIVE STUDIO</span>
            </span>
          </Link>
          <p>Software, technology and original work — built with a long view.</p>
          <Link className="footer-contact" href="/contact">Start a conversation <ArrowIcon /></Link>
        </div>
        <div className="footer-links">
          <div><span>ENGINEERING</span><Link href="/technology">Technology & AI</Link><Link href="/apps">Apps</Link><Link href="/projects">Selected projects</Link><Link href="/cv">CV / Résumé</Link></div>
          <div><span>CREATIVE WORK</span><Link href="/games">Games</Link><Link href="/media">Music, books & screen</Link><Link href="/studio">Studio</Link></div>
          <div><span>THE ECOSYSTEM</span><Link href="/wizzy-lux-global-concepts">WizzyLux Global Concepts</Link><Link href="/about">About Stephen</Link><Link href="/contact">Contact</Link></div>
        </div>
        <div className="footer-social"><SocialLinks compact /></div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name} · {site.brand}</span>
          <span>Independent by nature. Global by ambition.</span>
          <a href={site.url}>{site.url.replace('https://', '')}</a>
        </div>
      </div>
    </footer>
  );
}
