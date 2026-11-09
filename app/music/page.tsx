import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';
import { MusicPlatformLinks } from '@/components/music-platform-links';
import { musicDistributionNote, musicEps, musicSingles } from '@/data/music';

export const metadata: Metadata = {
  title: 'Music by JaytheWizzy',
  description:
    'Explore The Life We Made, Beyond the Horizon and JaytheWizzy’s released Pop/Soul singles across Afrobeats, Pop/Soul and cinematic orchestral music.',
  alternates: { canonical: '/music/' },
};

export default function MusicPage() {
  return (
    <>
      <PageIntro
        eyebrow="JAYTHEWIZZY · MUSIC CATALOGUE"
        title={<>One artist.<br /><em>Multiple musical worlds.</em></>}
        description="Warm Pop/Soul, feel-good Afrobeats and uplifting cinematic / fantasy orchestral music — released under the single artist name JaytheWizzy."
      />

      <section className="section music-catalogue-section">
        <div className="shell">
          <div className="music-listen-panel">
            <div className="music-listen-copy">
              <div className="eyebrow">LISTEN TO JAYTHEWIZZY</div>
              <h2>The catalogue is <em>out now.</em></h2>
              <p>{musicDistributionNote}</p>
            </div>
            <MusicPlatformLinks />
          </div>

          <div className="music-release-snapshot" aria-label="Release catalogue summary">
            <div><strong>4</strong><span>Pop / Soul singles</span></div>
            <div><strong>2</strong><span>Released EPs</span></div>
            <div><strong>9</strong><span>Tracks across the EPs</span></div>
            <div><strong>LIVE</strong><span>Current catalogue</span></div>
          </div>

          <div className="section-heading music-section-heading">
            <div>
              <div className="eyebrow">RELEASED EPs</div>
              <h2>Full-length <em>collections.</em></h2>
            </div>
            <p>Two distinct musical directions, both released under JaytheWizzy.</p>
          </div>

          <div className="music-ep-grid">
            {musicEps.map((release) => (
              <article className="detail-panel music-release-card" key={release.slug}>
                <div className="project-meta">
                  <span className="status status-live">RELEASED</span>
                  <span>{release.genre}</span>
                  <span>{release.tracks.length} tracks</span>
                </div>
                <h2><Link href={`/music/${release.slug}`}>{release.title}</Link></h2>
                <p>{release.description}</p>
                <div className="release-tracks" aria-label={`${release.title} tracklist`}>
                  {release.tracks.map((track, index) => (
                    <div className="release-track music-track-row" key={track.title}>
                      <span className="music-track-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="music-track-title">{track.title}</span>
                      <span className="music-track-type">{track.performance}</span>
                      <span className="music-track-note">{track.note}</span>
                    </div>
                  ))}
                </div>
                <div className="hero-actions">
                  <Link className="button button-outline" href={`/music/${release.slug}`}>Explore EP <ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-heading music-section-heading music-singles-heading">
            <div>
              <div className="eyebrow">POP / SOUL</div>
              <h2>Standalone <em>singles.</em></h2>
            </div>
            <p>Four released singles, each with its own sound and character.</p>
          </div>

          <div className="music-single-list">
            {musicSingles.map((release, index) => {
              const track = release.tracks[0];
              return (
                <Link className="music-single-row" href={`/music/${release.slug}`} key={release.slug}>
                  <span className="music-single-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="music-single-main">
                    <strong>{release.title}</strong>
                    <small>{release.genre} · {track.performance}</small>
                  </span>
                  <span className="music-single-note">{track.note}</span>
                  <ArrowIcon />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="contact-cta">
            <div>
              <div className="eyebrow">MUSIC & SOUND ENQUIRIES</div>
              <h2>Music for a project? <em>Let&apos;s talk.</em></h2>
              <p>For original composition, soundtrack work, music direction and creative collaborations.</p>
            </div>
            <Link className="button button-primary" href="/contact">Contact me <ArrowIcon /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
