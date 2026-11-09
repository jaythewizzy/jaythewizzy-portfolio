import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ProjectCard } from '@/components/project-card';
import { ArrowIcon } from '@/components/icons';
import { apps } from '@/data/apps';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Apps & Digital Products',
  description: 'Mobile and web applications created and shipped by Stephen Omojola — JaytheWizzy. Explore LUXEN and future applications.',
  path: '/apps/',
  image: '/og/apps.jpg',
});

export default function AppsPage() {
  return (
    <>
      <PageIntro
        eyebrow="APPLICATIONS"
        title={<>Apps built to be<br /><em>used every day.</em></>}
        description="A dedicated catalogue for the applications I build and ship across mobile and web. Each app has its own page with its platforms, product focus and engineering details. Games remain in the separate Games catalogue."
      />
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="eyebrow">RELEASED APPLICATIONS</div><h2>Available <em>products.</em></h2></div>
            <p>Browse each application separately. This catalogue is kept distinct from broader platforms, client projects and games.</p>
          </div>
          <div className="project-grid">
            {apps.map((app) => (
              <ProjectCard
                key={app.slug}
                href={`/apps/${app.slug}`}
                name={app.name}
                category={app.category}
                status={app.status}
                statusTone="live"
                description={app.summary}
                stack={app.stack}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell contact-cta">
          <div><div className="eyebrow">HAVE AN APP IDEA?</div><h2>Need an application <em>built?</em></h2><p>I&apos;m available for remote engineering roles, freelance app development and commissioned product builds.</p></div>
          <Link className="button button-primary" href="/contact">Discuss an app <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
