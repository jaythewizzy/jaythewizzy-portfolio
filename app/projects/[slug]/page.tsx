import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';
import { getProject, projects } from '@/data/projects';
import { createPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };
  return createPageMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${slug}/`,
    image: `/og/project-${slug}.jpg`,
  });
}
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageIntro eyebrow={project.category.toUpperCase()} title={<>{project.name}<br /><em>Project overview.</em></>} description={project.summary} breadcrumb="Projects" />
      <section className="section">
        <div className="shell detail-grid">
          <article className="detail-panel">
            <div className="project-meta"><span className={`status status-${project.statusTone}`}>{project.status}</span><span>{project.category}</span></div>
            <h2>What it is. <em>What it does.</em></h2>
            <div className="detail-copy">{project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {slug === 'luxen' && (
              <p className="investor-note">
                <strong>Created by JaytheWizzy.</strong>{' '}
                Explore the live product at{' '}
                <a href="https://luxen.watch" target="_blank" rel="noreferrer noopener">luxen.watch</a>.
              </p>
            )}
            <div className="section-subhead"><div className="eyebrow">SELECTED WORK</div><h3>Core capabilities</h3></div>
            <ul className="feature-list">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </article>
          <aside className="detail-sidebar">
            <div className="detail-panel"><div className="eyebrow">PROJECT DETAILS</div><div className="detail-facts"><div className="detail-fact"><small>Status</small><strong>{project.status}</strong></div><div className="detail-fact"><small>Category</small><strong>{project.category}</strong></div>{project.relationship && <div className="detail-fact"><small>Relationship</small><strong>{project.relationship}</strong></div>}</div></div>
            <div className="detail-panel"><div className="eyebrow">TECHNOLOGY</div><div className="stack-row">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>{project.externalUrl && <div className="hero-actions"><a className="button button-primary" href={project.externalUrl} target="_blank" rel="noreferrer noopener">Visit {project.name} <ArrowIcon /></a></div>}</div>
            <div className="detail-panel"><h3>Build something similar?</h3><p>For engineering work, product development or collaboration, get in touch.</p><Link className="text-link" href="/contact">Discuss a project <ArrowIcon /></Link></div>
          </aside>
        </div>
      </section>
      <section className="section section-soft"><div className="shell"><div className="section-heading"><div><div className="eyebrow">KEEP EXPLORING</div><h2>More from the <em>portfolio.</em></h2></div></div><div className="hero-actions"><Link className="button button-outline" href="/projects">All projects <ArrowIcon /></Link><Link className="button button-quiet" href="/technology">Technology profile <ArrowIcon /></Link></div></div></section>
    </>
  );
}
