import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';
import { MusicPlatformLinks } from '@/components/music-platform-links';
import { getMusicRelease, musicReleases } from '@/data/music';
import { createPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return musicReleases.map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const release = getMusicRelease(slug);
  if (!release) return { title: 'Release not found' };
  return createPageMetadata({
    title: release.title,
    description: release.description,
    path: `/music/${slug}/`,
    image: `/og/music-${slug}.jpg`,
    socialTitle: `${release.title} · JaytheWizzy`,
  });
}
export default async function MusicReleasePage({ params }: Props) {
  const { slug } = await params;
  const release = getMusicRelease(slug);
  if (!release) notFound();

  return (
    <>
      <PageIntro
        eyebrow={`${release.format} · ${release.genre} · RELEASED`}
        title={<>{release.title}<br /><em>JaytheWizzy.</em></>}
        description={release.description}
        breadcrumb="Music"
      />
      <section className="section">
        <div className="shell detail-grid">
          <article className="detail-panel music-detail-panel">
            <div className="eyebrow">{release.format === 'EP' ? 'TRACKLIST' : 'SINGLE'}</div>
            <h2>{release.format === 'EP' ? 'The complete ' : 'The released '}<em>{release.format === 'EP' ? 'collection.' : 'recording.'}</em></h2>
            {release.format === 'EP' && <p>{release.tracks.length} tracks · {release.genre}</p>}
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
            <p className="music-detail-footnote">Released under the JaytheWizzy artist name.</p>
            <Link className="text-link" href="/music">Back to the music catalogue <ArrowIcon /></Link>
          </article>
          <aside className="detail-sidebar">
            <div className="detail-panel">
              <div className="eyebrow">LISTEN</div>
              <p>Choose your preferred platform and explore the JaytheWizzy artist catalogue.</p>
              <MusicPlatformLinks />
            </div>
            <div className="detail-panel">
              <h3>Music for a project?</h3>
              <p>For soundtrack, composition, music direction and collaboration enquiries.</p>
              <Link className="text-link" href="/contact">Get in touch <ArrowIcon /></Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
