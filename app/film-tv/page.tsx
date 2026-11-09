import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Film & Television Development',
  description: 'The developing film and television direction within JaytheWizzy’s wider media and technology vision.',
};

export default function FilmTvPage() {
  return (
    <>
      <PageIntro eyebrow="FILM & TELEVISION · DEVELOPING" title={<>Original stories.<br /><em>Built for the screen.</em></>} description="Film and television production are a developing long-term direction within the wider JaytheWizzy and WizzyLux Global Concepts ecosystem." />
      <section className="section"><div className="shell detail-grid">
        <article className="detail-panel"><div className="eyebrow">THE SCREEN DIRECTION</div><h2>From original ideas to <em>screen stories.</em></h2><div className="detail-copy"><p>The long-term ambition is to develop and produce original film and television work. Story development, writing, music and technology are connected parts of that foundation.</p><p>This page is a home for the direction as it develops. It does not present an unreleased film slate as completed productions. Individual titles, development milestones and production information will be added when there is work ready to share.</p><p>The intention is to build carefully: create strong original material, develop the right collaborators and take selected projects from concept and script toward production.</p></div></article>
        <aside className="detail-sidebar"><div className="detail-panel"><div className="eyebrow">CONNECTED CREATIVE WORK</div><div className="detail-facts"><div className="detail-fact"><small>Writing</small><strong>Original stories and IP</strong></div><div className="detail-fact"><small>Music</small><strong>Original score and sound</strong></div><div className="detail-fact"><small>Technology</small><strong>Digital production workflows</strong></div></div><div className="hero-actions"><Link className="text-link" href="/books">Explore original fiction <ArrowIcon /></Link><Link className="text-link" href="/music">Explore music <ArrowIcon /></Link></div></div><div className="detail-panel"><h3>Film & media enquiries</h3><p>For writing, production, soundtrack, co-development and creative partnerships.</p><Link className="text-link" href="/contact">Start a conversation <ArrowIcon /></Link></div></aside>
      </div></section>
    </>
  );
}
