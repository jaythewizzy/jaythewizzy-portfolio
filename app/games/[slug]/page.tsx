import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';
import { games, getGame } from '@/data/games';
import { createPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: 'Game not found' };
  return createPageMetadata({
    title: game.name,
    description: game.summary,
    path: `/games/${slug}/`,
    image: `/og/game-${slug}.jpg`,
  });
}
export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  return (
    <>
      <PageIntro eyebrow={game.category.toUpperCase()} title={<>{game.name}<br /><em>Game overview.</em></>} description={game.summary} breadcrumb="Games" />
      {game.featureImage ? <section className="section game-detail-art-section"><div className="shell"><img className="game-detail-art" src={game.featureImage} alt={`${game.name} promotional artwork`} /><div className="game-detail-links">{game.privacyPath ? <Link className="text-link" href={game.privacyPath}>Privacy policy <ArrowIcon /></Link> : null}{game.supportPath ? <Link className="text-link" href={game.supportPath}>Help & support <ArrowIcon /></Link> : null}{game.termsPath ? <Link className="text-link" href={game.termsPath}>Terms of Service <ArrowIcon /></Link> : null}</div></div></section> : null}
      <section className="section"><div className="shell detail-grid">
        <article className="detail-panel"><div className="project-meta"><span className={`status status-${game.statusTone}`}>{game.status}</span><span>{game.category}</span></div><h2>The game. <em>The systems.</em></h2><div className="detail-copy">{game.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="section-subhead"><div className="eyebrow">GAME SYSTEMS</div><h3>What&apos;s inside</h3></div><ul className="feature-list">{game.highlights.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <aside className="detail-sidebar"><div className="detail-panel"><div className="eyebrow">GAME DETAILS</div><div className="detail-facts"><div className="detail-fact"><small>Status</small><strong>{game.status}</strong></div><div className="detail-fact"><small>Publisher</small><strong>{game.publisher ?? 'Independent project'}</strong></div><div className="detail-fact"><small>Platform / stack</small><strong>{game.stack.join(' · ')}</strong></div></div></div><div className="detail-panel"><div className="eyebrow">TECHNOLOGY</div><div className="stack-row">{game.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div><div className="detail-panel"><h3>Game development enquiries</h3><p>For game partnerships, testing enquiries or interactive product work.</p><Link className="text-link" href="/contact">Get in touch <ArrowIcon /></Link></div></aside>
      </div></section>
      <section className="section section-soft"><div className="shell"><Link className="text-link" href="/games">Back to all games <ArrowIcon /></Link></div></section>
    </>
  );
}
