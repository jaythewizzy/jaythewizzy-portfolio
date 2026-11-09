import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ProjectCard } from '@/components/project-card';
import { ArrowIcon } from '@/components/icons';
import { games } from '@/data/games';

export const metadata: Metadata = {
  title: 'Games & Interactive Projects',
  description: 'Games and interactive systems by JaytheWizzy, including Coinwell and LifeLeague.',
};

export default function GamesPage() {
  return (
    <>
      <PageIntro eyebrow="GAMES & INTERACTIVE" title={<>Game systems built for<br /><em>play and progression.</em></>} description="I work on games where engaging experiences meet well-designed systems: progression, economies, unlocks, simulation and the technical foundations that keep play fair." />
      <section className="section"><div className="shell"><div className="section-heading"><div><div className="eyebrow">CURRENT GAME PROJECTS</div><h2>Each game has its <em>own world.</em></h2></div><p>Open a game to see its premise, systems, status and technology.</p></div><div className="project-grid">{games.map((game) => <ProjectCard key={game.slug} href={`/games/${game.slug}`} name={game.name} category={game.category} status={game.status} statusTone={game.statusTone} description={game.summary} stack={game.stack} />)}</div></div></section>
      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="eyebrow">DESIGN PRINCIPLES</div><h2>Readable, fair, <em>lasting.</em></h2></div></div><div className="principle-grid"><article><span>01</span><h3>Readable progression</h3><p>Players should understand what they are working toward and why each milestone matters.</p></article><article><span>02</span><h3>Fair systems</h3><p>Economies, rewards and ad interactions should be consistent, transparent and difficult to exploit.</p></article><article><span>03</span><h3>Long-term depth</h3><p>Collections, mastery and evolving challenges give players reasons to return without making the early game confusing.</p></article></div><div className="hero-actions"><Link className="button button-outline" href="/technology">Explore game engineering <ArrowIcon /></Link></div></div></section>
    </>
  );
}
