import Link from 'next/link';
import { ArrowIcon, DownloadIcon } from '@/components/icons';
import { ProjectCard } from '@/components/project-card';
import { SocialLinks } from '@/components/social-links';
import { projects } from '@/data/projects';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Stephen Omojola | Software & AI Engineer',
  description: 'Stephen Omojola, known as JaytheWizzy — Software & AI Engineer and founder of WizzyLux Global Concepts. Building software, AI-powered products, mobile applications, games and original media.',
  path: '/',
  image: '/og/home.jpg',
  socialTitle: 'Stephen Omojola | Software & AI Engineer — JaytheWizzy',
});

export default function HomePage() {
  const featured = ['luxen', 'growthos', 'eurusd-trading-system']
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <>
      <section className="home-hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-roles"><span>SOFTWARE &amp; AI ENGINEER</span><i aria-hidden="true">•</i><span>CREATIVE BUILDER</span><i aria-hidden="true">•</i><span>FOUNDER</span></div>
            <h1>Software & AI <em>Engineer.</em><br />Building what&apos;s next.</h1>
            <p className="hero-lede">I&apos;m Stephen Omojola, known as JaytheWizzy. I design and ship production-ready software, mobile applications and AI-powered systems — from architecture and data to payments, deployment and release.</p>
            <p className="hero-support">Through WizzyLux Global Concepts, I&apos;m building an independent media and technology ecosystem across software, games, music, books and future screen production. I also work with clients and teams on remote roles, freelance engineering and selected collaborations.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/technology">Explore engineering work <ArrowIcon /></Link>
              <Link className="button button-quiet" href="/contact">Hire me / Work together <ArrowIcon /></Link>
              <Link className="button button-quiet" href="/cv">Download CV <DownloadIcon /></Link>
            </div>
            <SocialLinks />
          </div>
          <div className="hero-art" aria-label="JaytheWizzy creative studio monogram">
            <div className="art-orbit orbit-a" />
            <div className="art-orbit orbit-b" />
            <div className="art-monogram">JW</div>
            <div className="art-caption"><span>WIZZY LUX GLOBAL CONCEPTS</span><b>MEDIA · TECHNOLOGY · OWNERSHIP</b></div>
            <div className="art-chip chip-one"><span className="chip-dot" /> SOFTWARE & AI</div>
            <div className="art-chip chip-two"><span className="chip-dot" /> DIGITAL PRODUCTS</div>
            <div className="art-chip chip-three"><span className="chip-dot" /> GAMES & MEDIA</div>
          </div>
        </div>
        <div className="shell discipline-strip">
          <Link href="/technology"><span className="discipline-icon">01</span><span><b>Software & AI</b><small>Engineering end to end</small></span><ArrowIcon /></Link>
          <Link href="/apps"><span className="discipline-icon">02</span><span><b>Apps</b><small>Android · iOS · web</small></span><ArrowIcon /></Link>
          <Link href="/games"><span className="discipline-icon">03</span><span><b>Games</b><small>Systems · progression · play</small></span><ArrowIcon /></Link>
          <Link href="/media"><span className="discipline-icon">04</span><span><b>Music & Stories</b><small>Sound · books · screen</small></span><ArrowIcon /></Link>
        </div>
      </section>

      <section className="section section-ecosystem">
        <div className="shell">
          <div className="section-heading">
            <div><div className="eyebrow">ENGINEERING IN PRACTICE</div><h2>Products built from the <em>inside out.</em></h2></div>
            <p>Architecture, interface, databases, APIs, payments, deployment and the details that make a product dependable after launch.</p>
          </div>
          <div className="project-grid">
            {featured.map((project) => (
              <ProjectCard key={project.slug} href={`/projects/${project.slug}`} name={project.name} category={project.category} status={project.status} statusTone={project.statusTone} description={project.summary} stack={project.stack} />
            ))}
          </div>
          <div className="section-action"><Link className="text-link" href="/projects">Explore all projects <ArrowIcon /></Link></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">THE WIDER ECOSYSTEM</div><h2>One founder. <em>Many disciplines.</em></h2></div><p>Independent identities, each with its own audience and purpose — connected by a long-term vision.</p></div>
          <div className="discipline-grid">
            <Link className="discipline-card" href="/games"><span className="line-icon">G</span><h3>Games & Interactive</h3><p>Coinwell, LifeLeague and future game worlds shaped around systems and player experience.</p><span className="card-arrow">Explore games <ArrowIcon /></span></Link>
            <Link className="discipline-card" href="/music"><span className="line-icon">M</span><h3>Music & Sound</h3><p>Released Pop/Soul singles, the Afrobeats EP <em>The Life We Made</em>, and the cinematic orchestral EP <em>Beyond the Horizon</em>.</p><span className="card-arrow">Listen to music <ArrowIcon /></span></Link>
            <Link className="discipline-card" href="/books"><span className="line-icon">B</span><h3>Books & Stories</h3><p><em>The Second Life of Julian Vale</em>, an ongoing multi-book saga. Book One: <em>Play the Game</em>.</p><span className="card-arrow">Explore the story <ArrowIcon /></span></Link>
            <Link className="discipline-card" href="/film-tv"><span className="line-icon">F</span><h3>Film & Television</h3><p>A developing direction for original screen stories, supported by writing, music and production craft.</p><span className="card-arrow">Explore media <ArrowIcon /></span></Link>
            <Link className="discipline-card" href="/studio"><span className="line-icon">S</span><h3>Creative Studio</h3><p>Product thinking, creative direction and practical execution for selected client work.</p><span className="card-arrow">Explore the studio <ArrowIcon /></span></Link>
            <Link className="discipline-card" href="/apps"><span className="line-icon">A</span><h3>Apps & Digital Products</h3><p>Web and mobile applications, including LUXEN across Android, iOS and web.</p><span className="card-arrow">Explore apps <ArrowIcon /></span></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="brand-company-panel">
            <div>
              <div className="eyebrow">THE PARENT COMPANY</div>
              <h2>WizzyLux Global Concepts</h2>
              <p>The wider company behind the independent products, ventures and creative work. Its ecosystem spans software platforms, games, digital services, a clothing brand, music production and distribution, and developing media projects.</p>
              <div className="hero-actions"><Link className="button button-outline" href="/wizzy-lux-global-concepts">Explore the company <ArrowIcon /></Link><Link className="text-link" href="/projects">View its ventures <ArrowIcon /></Link><Link className="text-link" href="/investors">Investor relations <ArrowIcon /></Link></div>
            </div>
            <div className="brand-company-mark">WL</div>
          </div>
        </div>
      </section>

      <section className="vision-band">
        <div className="shell vision-inner">
          <div><div className="eyebrow">OPEN TO THE RIGHT OPPORTUNITIES</div><h2>Build with me.<br /><em>Or hire me to build for you.</em></h2></div>
          <div><p>I&apos;m open to remote Software & AI Engineering roles, freelance product development, commissioned builds and thoughtful technical or creative partnerships. Building independent ventures and delivering excellent work for clients belong in the same story.</p><div className="hero-actions"><Link className="button button-primary" href="/contact">Discuss an opportunity <ArrowIcon /></Link><Link className="button button-outline" href="/cv">View CV <DownloadIcon /></Link></div></div>
        </div>
      </section>
    </>
  );
}
