import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ProjectCard } from '@/components/project-card';
import { ArrowIcon } from '@/components/icons';
import { games, getGame } from '@/data/games';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Games & Interactive Projects',
  description: 'Games and interactive systems by JaytheWizzy, including Coinwell, LifeLeague and StreetBite Empire. Explore each game, its status and technology.',
  path: '/games/',
  image: '/og/games.jpg',
});

export default function GamesPage() {
  const featuredGame = getGame('streetbite-empire');
  const otherGames = games.filter((game) => game.slug !== 'streetbite-empire');

  return (
    <>
      <PageIntro eyebrow="JAYTHEWIZZY GAMES" title={<>Game worlds built for<br /><em>play and progression.</em></>} description="A growing portfolio of games shaped around clear goals, satisfying progression and systems players can understand. Each title has its own identity, economy and world." />

      {featuredGame?.featureImage ? (
        <section className="section game-feature-section">
          <div className="shell">
            <div className="game-feature-panel">
              <div className="game-feature-art">
                <img src={featuredGame.featureImage} alt="StreetBite Empire food truck against a glowing city skyline" />
                <span className="game-feature-label">JAYTHEWIZZY GAMES · IN DEVELOPMENT</span>
              </div>
              <div className="game-feature-copy">
                <div className="eyebrow">FEATURED GAME</div>
                <h2>{featuredGame.name}</h2>
                <p className="game-feature-tagline">{featuredGame.tagline}</p>
                <p>{featuredGame.summary}</p>
                <div className="hero-actions">
                  <Link className="button button-primary" href={`/games/${featuredGame.slug}`}>Explore the game <ArrowIcon /></Link>
                  <Link className="button button-outline" href={featuredGame.privacyPath ?? '/games'}>Privacy information</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section"><div className="shell"><div className="section-heading"><div><div className="eyebrow">MORE GAME PROJECTS</div><h2>Each game has its <em>own world.</em></h2></div><p>Explore the premise, systems, current status and technology behind each project.</p></div><div className="project-grid">{otherGames.map((game) => <ProjectCard key={game.slug} href={`/games/${game.slug}`} name={game.name} category={game.category} status={game.status} statusTone={game.statusTone} description={game.summary} stack={game.stack} />)}</div></div></section>

      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="eyebrow">DESIGN PRINCIPLES</div><h2>Readable, fair, <em>lasting.</em></h2></div></div><div className="principle-grid"><article><span>01</span><h3>Readable progression</h3><p>Players should understand what they are working toward and why each milestone matters.</p></article><article><span>02</span><h3>Fair systems</h3><p>Economies, rewards and ad interactions should be consistent, transparent and difficult to exploit.</p></article><article><span>03</span><h3>Long-term depth</h3><p>Collections, mastery and evolving challenges give players reasons to return without making the early game confusing.</p></article></div><div className="hero-actions"><Link className="button button-outline" href="/technology">Explore game engineering <ArrowIcon /></Link></div></div></section>
    </>
  );
}
