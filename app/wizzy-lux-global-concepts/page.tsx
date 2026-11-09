import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'WizzyLux Global Concepts',
  description: 'The parent company and wider ecosystem behind independent software, games, brands, music and creative ventures founded by Stephen Omojola.',
};

const ventures = [
  ['LUXEN', 'Movie and television discovery across web and mobile.', '/projects/luxen', 'Live product'],
  ['GrowthOS', 'Digital services, wallet, marketplace and operating platform.', '/projects/growthos', 'Live platform'],
  ['The Foundry', 'Multidisciplinary digital studio for product, UI/UX, AI and interactive work.', '/projects/the-foundry', 'In development'],
  ['Wizzylux', 'Clothing and lifestyle brand with its own storefront and identity.', '/projects/wizzylux', 'Live brand'],
  ['Coinwell', 'Casual progression game published by GrowthOS.', '/games/coinwell', 'Closed testing'],
  ['LifeLeague', 'Multi-generation life simulation with a server-side game economy.', '/games/lifeleague', 'Release candidate'],
];

export default function CompanyPage() {
  return (
    <>
      <PageIntro eyebrow="PARENT COMPANY & ECOSYSTEM" title={<>WizzyLux Global<br /><em>Concepts.</em></>} description="The company founded by Stephen Omojola to build and manage independent products, platforms, brands and creative ventures — with a long-term ambition across media and technology." />
      <section className="section"><div className="shell">
        <div className="detail-grid">
          <article className="detail-panel"><div className="eyebrow">THE BIGGER PICTURE</div><h2>Independent identities.<br /><em>Connected by ownership.</em></h2><div className="detail-copy"><p>WizzyLux Global Concepts is the parent-company identity behind a growing portfolio of software products, games, digital services, a clothing brand, music production and distribution, and developing media projects.</p><p>Each venture keeps its own name, audience and product identity. The company provides the wider structure through which those ideas are built, supported and grown.</p><p>Technology is a core capability of the group. Media and entertainment are a growing ambition — including original music, publishing, games and, over time, film and television production.</p></div></article>
          <aside className="detail-sidebar"><div className="detail-panel"><div className="brand-company-mark">WL</div><h3>WizzyLux Global Concepts</h3><p>Founded by Stephen Omojola · JaytheWizzy</p><div className="detail-fact"><small>Focus</small><strong>Media · Technology · Digital products</strong></div><Link className="text-link" href="/contact">Business enquiries <ArrowIcon /></Link></div></aside>
        </div>
      </div></section>
      <section className="section section-soft"><div className="shell">
        <div className="section-heading"><div><div className="eyebrow">THE PORTFOLIO</div><h2>Ventures across the <em>ecosystem.</em></h2></div><p>Each item is independently clickable, with its own project page and current status.</p></div>
        <div className="company-list">{ventures.map(([name, description, href, status]) => <Link className="company-item company-item-link" key={name} href={href}><div className="project-meta"><span className="status status-development">{status}</span></div><h3>{name}</h3><p>{description}</p><span className="text-link">Open venture <ArrowIcon /></span></Link>)}</div>
        <div className="hero-actions"><Link className="button button-outline" href="/projects">All project details <ArrowIcon /></Link><Link className="button button-quiet" href="/contact">Partnership enquiries <ArrowIcon /></Link><Link className="text-link" href="/investors">Investor relations <ArrowIcon /></Link></div>
      </div></section>
    </>
  );
}
