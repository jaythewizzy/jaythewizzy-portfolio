import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';
import { apps, getApp } from '@/data/apps';
import { createPageMetadata } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return { title: 'App not found' };
  return createPageMetadata({
    title: app.name,
    description: app.summary,
    path: `/apps/${slug}/`,
    image: `/og/app-${slug}.jpg`,
  });
}
export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <>
      <PageIntro eyebrow={app.category.toUpperCase()} title={<>{app.name}<br /><em>Application overview.</em></>} description={app.summary} breadcrumb="Apps" />
      <section className="section">
        <div className="shell detail-grid">
          <article className="detail-panel">
            <div className="project-meta"><span className="status status-live">{app.status}</span><span>{app.category}</span></div>
            <h2>The product. <em>The experience.</em></h2>
            <div className="detail-copy">{app.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="section-subhead"><div className="eyebrow">PRODUCT CAPABILITIES</div><h3>What&apos;s included</h3></div>
            <ul className="feature-list">{app.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <div className="hero-actions">
              {app.websiteUrl && <a className="button button-primary" href={app.websiteUrl} target="_blank" rel="noreferrer noopener">Visit {app.name} <ArrowIcon /></a>}
              {app.googlePlayUrl && <a className="button button-quiet" href={app.googlePlayUrl} target="_blank" rel="noreferrer noopener">Get {app.name} on Google Play <ArrowIcon /></a>}
              {app.engineeringCaseStudy && <Link className="button button-quiet" href={app.engineeringCaseStudy}>Engineering case study <ArrowIcon /></Link>}
            </div>
          </article>
          <aside className="detail-sidebar">
            <div className="detail-panel">
              <div className="eyebrow">PLATFORMS</div>
              <div className="detail-facts">
                {app.platforms.map((platform) => <div className="detail-fact" key={platform}><strong>{platform}</strong></div>)}
              </div>
            </div>
            <div className="detail-panel">
              <div className="eyebrow">TECHNOLOGY</div>
              <div className="stack-row">{app.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </div>
            <div className="detail-panel">
              <div className="eyebrow">STATUS</div>
              <div className="detail-facts"><div className="detail-fact"><small>Availability</small><strong>{app.status}</strong></div></div>
              <p>For app development, integrations or product engineering enquiries.</p>
              <Link className="text-link" href="/contact">Get in touch <ArrowIcon /></Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="section section-soft"><div className="shell"><div className="hero-actions"><Link className="text-link" href="/apps">All apps <ArrowIcon /></Link><Link className="text-link" href="/technology">Technology profile <ArrowIcon /></Link></div></div></section>
    </>
  );
}
