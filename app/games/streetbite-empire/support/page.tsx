import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'StreetBite Empire Support',
  description: 'Get help with StreetBite Empire. Contact JaytheWizzy Games for gameplay, purchase and privacy questions.',
  path: '/games/streetbite-empire/support/',
  image: '/og/game-streetbite-empire.jpg',
});

export default function StreetBiteSupportPage() {
  return (
    <>
      <PageIntro eyebrow="JAYTHEWIZZY GAMES · STREETBITE EMPIRE" title={<>Help & <em>support.</em></>} description="Need a hand with your food-truck business? Contact the StreetBite Empire team." breadcrumb="StreetBite Empire" />
      <section className="section game-support-section"><div className="shell support-shell">
        <Link className="game-back-link" href="/games/streetbite-empire/">Back to StreetBite Empire</Link>
        <div className="support-layout">
        <article className="detail-panel support-main-panel"><div className="eyebrow">PLAYER SUPPORT</div><h2>We're here to <em>help.</em></h2><p>For gameplay questions, save issues, advertising problems, purchase restoration or feedback, email the support address below.</p><a className="button button-primary" href="mailto:jaythewizzy@gmail.com?subject=StreetBite%20Empire%20Support">Email JaytheWizzy Games</a><p className="support-email"><a href="mailto:jaythewizzy@gmail.com">jaythewizzy@gmail.com</a></p></article>
        <aside className="detail-sidebar">
          <div className="detail-panel"><h3>What to include</h3><ul className="feature-list"><li>Your device model and operating-system version</li><li>The game version, if available</li><li>What you were doing when the issue happened</li><li>A screenshot or screen recording, if useful</li><li>For a purchase issue, the store order reference (never your card details)</li></ul></div>
          <div className="detail-panel"><h3>Privacy questions</h3><p>For privacy requests, data questions or consent-related help, use the same support email and put “Privacy request” in the subject.</p><Link className="text-link" href="/games/streetbite-empire/privacy/">Read the privacy policy</Link><p><Link className="text-link" href="/games/streetbite-empire/terms/">Read the Terms of Service</Link></p></div>
        </aside>
        </div>
      </div></section>
    </>
  );
}
