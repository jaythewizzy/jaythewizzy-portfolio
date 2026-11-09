import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon, DownloadIcon } from '@/components/icons';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'CV & Résumé',
  description: 'Download the CV of Stephen Omojola — Software and AI Engineer.',
  alternates: { canonical: '/cv/' },
};

export default function CvPage() {
  return (
    <>
      <PageIntro eyebrow="CV / RÉSUMÉ" title={<>Software & AI Engineer.<br /><em>Experience and skills.</em></>} description="A concise overview of my engineering experience, selected projects, technical stack, education and certification. The PDF is available to download — no embedded preview." />
      <section className="section"><div className="shell detail-grid">
        <article className="detail-panel"><div className="eyebrow">STEPHEN OMOJOLA · JAYTHEWIZZY</div><h2>Software and AI <em>Engineer.</em></h2><p className="detail-copy">Full-stack web and iOS/Android development, production systems, architecture, databases, APIs, payments, deployment, store releases and AI/automation applications.</p><div className="cv-actions"><a className="button button-primary" href={site.cvPath} download>Download CV (PDF) <DownloadIcon /></a><a className="button button-quiet" href={site.cvPath} target="_blank" rel="noreferrer noopener">Open PDF in new tab <ArrowIcon /></a></div><p className="muted-note">The PDF is the original CV supplied for this portfolio. It opens or downloads directly; there is no embedded document preview.</p></article>
        <aside className="detail-sidebar"><div className="detail-panel"><div className="eyebrow">QUICK PROFILE</div><div className="detail-facts"><div className="detail-fact"><small>Professional focus</small><strong>Software & AI Engineering</strong></div><div className="detail-fact"><small>Experience</small><strong>Freelance engineering · 2019 to present</strong></div><div className="detail-fact"><small>Availability</small><strong>Remote roles · Freelance · Contract work</strong></div><div className="detail-fact"><small>Email</small><strong>{site.email}</strong></div></div></div><div className="detail-panel"><h3>Would you like to work together?</h3><p>For employment, freelance development or technical partnerships.</p><Link className="text-link" href="/contact">Contact Stephen <ArrowIcon /></Link></div></aside>
      </div></section>
    </>
  );
}
