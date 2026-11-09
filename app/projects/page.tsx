import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ProjectCard } from '@/components/project-card';
import { ArrowIcon } from '@/components/icons';
import { projects } from '@/data/projects';
import { games } from '@/data/games';
import { apps } from '@/data/apps';

export const metadata: Metadata = {
  title: 'Projects & Ventures',
  description: 'Software products, platforms, independent brands, trading systems and games developed by Stephen Omojola — JaytheWizzy.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="SELECTED PROJECTS & VENTURES" title={<>Independent products.<br /><em>Distinct identities.</em></>} description="A growing collection of products, platforms, brands and systems I build or help shape. Each project has its own purpose, audience, identity and dedicated detail page." />
      <section className="section">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">SOFTWARE, PLATFORMS & BRANDS</div><h2>Work in <em>motion.</em></h2></div><p>Choose a project to see its role, status, technical stack and the work behind it.</p></div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.slug} href={`/projects/${project.slug}`} name={project.name} category={project.category} status={project.status} statusTone={project.statusTone} description={project.summary} stack={project.stack} />)}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">APPLICATIONS & DIGITAL PRODUCTS</div><h2>Apps with their own <em>product pages.</em></h2></div><Link className="text-link" href="/apps">All applications <ArrowIcon /></Link></div>
          <p className="intro-lede" style={{ maxWidth: 760, marginBottom: 24 }}>The Apps catalogue focuses on customer-facing web and mobile applications and where they are available. Project pages cover the broader engineering work, systems and delivery behind each venture.</p>
          <div className="project-grid">
            {apps.map((app) => <ProjectCard key={app.slug} href={`/apps/${app.slug}`} name={app.name} category={app.category} status={app.status} statusTone="live" description={app.summary} stack={app.stack} />)}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">GAMES & INTERACTIVE</div><h2>Built to be <em>played.</em></h2></div><Link className="text-link" href="/games">All games <ArrowIcon /></Link></div>
          <div className="project-grid">
            {games.map((game) => <ProjectCard key={game.slug} href={`/games/${game.slug}`} name={game.name} category={game.category} status={game.status} statusTone={game.statusTone} description={game.summary} stack={game.stack} />)}
          </div>
        </div>
      </section>
      <section className="section"><div className="shell contact-cta"><div><div className="eyebrow">NEXT PROJECT</div><h2>Have something worth <em>building?</em></h2><p>Remote roles, freelance engineering, commissioned builds and technical partnerships are welcome.</p><div className="hero-actions"><Link className="text-link" href="/investors">Investor & strategic opportunities <ArrowIcon /></Link></div></div><Link className="button button-primary" href="/contact">Discuss a project <ArrowIcon /></Link></div></section>
    </>
  );
}
