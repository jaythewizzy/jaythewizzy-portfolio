import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Media, Music, Books & Film',
  description: 'Released music, original fiction and developing film and television projects within the JaytheWizzy creative ecosystem.',
};

export default function MediaPage() {
  return (
    <>
      <PageIntro eyebrow="MEDIA & STORYTELLING" title={<>Stories deserve more<br /><em>than one form.</em></>} description="Music is already released. Writing continues. Film and television are a longer-term production direction. These creative disciplines sit alongside the technology and games — not in place of them." />
      <section className="section"><div className="shell media-stack">
        <article className="media-row"><div className="media-symbol">M</div><div><div className="eyebrow">MUSIC · RELEASED</div><h2>Original music. <em>Emotion in every note.</em></h2><p>Music under JaytheWizzy spans warm Pop/Soul singles, the feel-good Afrobeats EP <em>The Life We Made</em>, and the cinematic / fantasy orchestral EP <em>Beyond the Horizon</em>. The catalogue is released across streaming services and social music platforms, including TikTok.</p><div className="hero-actions"><Link className="button button-outline" href="/music">Music & streaming <ArrowIcon /></Link><a className="text-link" href="https://open.spotify.com/artist/5AciBMXf9Yz0kDpZiFZGdW?si=XdsNWXp3Rx-AatXjy6xZbA" target="_blank" rel="noreferrer noopener">Find on Spotify <ArrowIcon /></a></div></div></article>
        <article className="media-row"><div className="media-symbol">B</div><div><div className="eyebrow">BOOKS · ORIGINAL FICTION</div><h2>Worlds to get <em>lost in.</em></h2><p><em>The Second Life of Julian Vale</em> is a continuing multi-book saga. Book One: <em>Play the Game</em>. The project is being developed as long-form fiction with room to grow into other formats over time.</p><Link className="button button-outline" href="/books">Books & stories <ArrowIcon /></Link></div></article>
        <article className="media-row"><div className="media-symbol">F</div><div><div className="eyebrow">FILM & TELEVISION · DEVELOPING</div><h2>Stories for the <em>screen.</em></h2><p>Film and television production are a developing long-term direction: building original stories and the creative foundation to take selected ideas from script to screen. No unreleased slate is presented as completed work.</p><Link className="button button-outline" href="/film-tv">Film & TV direction <ArrowIcon /></Link></div></article>
      </div></section>
    </>
  );
}
