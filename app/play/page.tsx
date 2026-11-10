import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon, SocialIcon } from '@/components/icons';
import { site } from '@/data/site';
import { createPageMetadata } from '@/lib/seo';
import styles from './developer-platforms.module.css';

export const metadata = createPageMetadata({
  title: 'Developer Platforms',
  description: 'Find JaytheWizzy’s official developer profiles and explore apps and games published through JaytheWizzy on Google Play and future Apple App Store releases.',
  path: '/play/',
  image: '/og/apps.jpg',
});

function AppStoreMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={styles.appStoreMark}>
      <path d="M17.2 8.2 35.8 40M30.8 8.2 12.2 40M10.1 32.4h27.8" />
    </svg>
  );
}

export default function DeveloperPlatformsPage() {
  return (
    <>
      <PageIntro
        eyebrow="DEVELOPER PLATFORMS"
        title={<>Find JaytheWizzy on<br /><em>your preferred platform.</em></>}
        description="Official developer destinations for apps and games published through JaytheWizzy. Choose your platform to explore releases and updates."
      />
      <section className="section">
        <div className="shell">
          <div className={styles.grid}>
            <a className={`${styles.card} ${styles.available}`} href={site.developerProfiles.googlePlay} target="_blank" rel="noreferrer noopener">
              <span className={styles.iconWrap}><SocialIcon name="google-play" /></span>
              <span className={styles.kicker}>ANDROID · OFFICIAL DEVELOPER PROFILE</span>
              <h2>Google Play</h2>
              <p>Explore apps and games published through JaytheWizzy on Android.</p>
              <span className={styles.action}>View Google Play developer profile <ArrowIcon /></span>
            </a>
            <article className={`${styles.card} ${styles.comingSoon}`} aria-label="Apple App Store developer profile coming soon">
              <span className={styles.iconWrap}><AppStoreMark /></span>
              <span className={styles.kicker}>IOS & IPADOS · DEVELOPER PROFILE</span>
              <h2>Apple App Store</h2>
              <p>The public App Store developer destination will be added here when it is ready.</p>
              <span className={styles.status}>Coming soon</span>
            </article>
          </div>
          <div className={styles.featured}>
            <div>
              <div className={styles.kicker}>FEATURED APPLICATION</div>
              <h2>LUXEN</h2>
              <p>Explore the LUXEN app page for platform details, product information and its Google Play listing.</p>
            </div>
            <Link className="button button-primary" href="/apps/luxen/">Explore LUXEN <ArrowIcon /></Link>
          </div>
          <div className={styles.catalogueLinks} aria-label="Explore app and game catalogues">
            <Link className="button button-quiet" href="/apps/">See all apps <ArrowIcon /></Link>
            <Link className="button button-quiet" href="/games/">See all games <ArrowIcon /></Link>
          </div>
          <p className={styles.publisherNote}>This page covers developer destinations associated with JaytheWizzy. Games published under other developer accounts remain linked to their respective publisher pages.</p>
        </div>
      </section>
    </>
  );
}
