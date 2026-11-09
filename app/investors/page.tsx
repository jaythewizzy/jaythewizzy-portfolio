import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon, MailIcon } from '@/components/icons';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Investors & Strategic Partners',
  description: 'Investor relations and strategic partnership enquiries for WizzyLux Global Concepts and its software, applications, games and media ventures.',
  path: '/investors/',
  image: '/og/investors.jpg',
});

const focusAreas = [
  {
    number: '01',
    title: 'Software, AI & platforms',
    description: 'Production-minded software, digital platforms, AI-enabled workflows and the engineering capabilities that support useful products.',
    examples: 'LUXEN · GrowthOS · The Foundry',
  },
  {
    number: '02',
    title: 'Applications & games',
    description: 'Customer-facing mobile and web applications, alongside interactive products with distinct audiences, roadmaps and release stages.',
    examples: 'LUXEN Apps · Coinwell · LifeLeague',
  },
  {
    number: '03',
    title: 'Music, publishing & original IP',
    description: 'Released music, developing literary work and original intellectual property that can grow through audience, distribution and partnerships.',
    examples: 'Jaythewizzy music · The Second Life of Julian Vale',
  },
  {
    number: '04',
    title: 'Film & television development',
    description: 'A longer-term ambition to develop and produce original screen stories, supported by technology, music, writing and creative production.',
    examples: 'Developing direction · Not presented as a current production slate',
  },
];

const discussionPoints = [
  'Which specific venture or opportunity is being discussed, and what stage has it reached.',
  'The product, audience, current status, roadmap and principal execution risks.',
  'The capital or strategic support being considered, proposed use of funds and measurable milestones.',
  'The relevant ownership, operating entity, governance and proposed structure for that opportunity.',
];

export default function InvestorsPage() {
  return (
    <>
      <PageIntro
        eyebrow="INVESTOR RELATIONS · WIZZYLUX GLOBAL CONCEPTS"
        title={<>Backing ideas.<br /><em>Building lasting ventures.</em></>}
        description="WizzyLux Global Concepts is developing a founder-led portfolio across software, AI, applications, games, music, publishing and future screen production. This page introduces the areas of activity and opens a channel for aligned investor and strategic-partner conversations."
      />

      <section className="section">
        <div className="shell detail-grid">
          <article className="detail-panel">
            <div className="eyebrow">THE INVESTMENT PERSPECTIVE</div>
            <h2>Build useful products.<br /><em>Grow distinct businesses.</em></h2>
            <div className="detail-copy">
              <p>WizzyLux Global Concepts is the parent-company identity behind a growing set of independent products, brands and creative initiatives founded by Stephen Omojola. The long-term direction is to build a connected media and technology ecosystem while allowing each venture to retain its own audience, product identity and operating focus.</p>
              <p>The portfolio is at different stages. Some products are live, some are in testing or development, and some represent longer-term creative ambitions. For that reason, investment conversations are approached venture by venture rather than as a single undifferentiated proposition.</p>
              <p>The aim is to find aligned people and organisations who can contribute more than capital alone: commercial understanding, distribution, industry experience, strategic relationships and patient support for strong execution.</p>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:jaythewizzy@gmail.com?subject=Investor%20and%20Strategic%20Partnership%20Enquiry">Start an investor conversation <MailIcon /></a>
              <Link className="button button-quiet" href="/wizzy-lux-global-concepts">Explore the parent company <ArrowIcon /></Link>
            </div>
          </article>
          <aside className="detail-sidebar">
            <div className="detail-panel">
              <div className="eyebrow">FOUNDER</div>
              <h3>Stephen Omojola</h3>
              <p>Software & AI Engineer · Founder, WizzyLux Global Concepts · JaytheWizzy</p>
              <div className="detail-fact"><small>Core direction</small><strong>Media · Technology · Digital products</strong></div>
              <div className="detail-fact"><small>Enquiries</small><strong>Investment · Strategic partnerships · Distribution</strong></div>
              <Link className="text-link" href="/contact">Contact directly <ArrowIcon /></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div><div className="eyebrow">PORTFOLIO AREAS</div><h2>Where the ecosystem is <em>focused.</em></h2></div>
            <p>These are areas of current work and longer-term development, not claims that every venture is at the same stage.</p>
          </div>
          <div className="company-list">
            {focusAreas.map((area) => (
              <article className="company-item" key={area.number}>
                <div className="eyebrow">{area.number}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <p className="investor-examples">{area.examples}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="text-link" href="/apps">Explore applications <ArrowIcon /></Link>
            <Link className="text-link" href="/projects">Explore software ventures <ArrowIcon /></Link>
            <Link className="text-link" href="/games">Explore games <ArrowIcon /></Link>
            <Link className="text-link" href="/media">Explore music and stories <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid">
          <article className="detail-panel">
            <div className="eyebrow">A THOUGHTFUL PROCESS</div>
            <h2>Specific opportunities.<br /><em>Clear expectations.</em></h2>
            <div className="detail-copy"><p>Any serious discussion should begin with the particular venture and the question it is trying to solve. Depending on the opportunity, an initial conversation may cover:</p></div>
            <ul className="feature-list">{discussionPoints.map((point) => <li key={point}>{point}</li>)}</ul>
            <p className="investor-note">Detailed materials, demonstrations or additional information can be discussed where available and appropriate. No financial projections, valuation or investment terms are published on this page.</p>
          </article>
          <aside className="detail-sidebar">
            <div className="detail-panel">
              <div className="eyebrow">IMPORTANT INFORMATION</div>
              <h3>Exploratory enquiries</h3>
              <p>This page is an introduction to the business and its areas of activity. It is not an offer to sell or a solicitation to buy securities or any other financial instrument. Any potential investment would require separate discussions, appropriate due diligence, definitive documentation and compliance with applicable law. No return or outcome is promised.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell contact-cta">
          <div>
            <div className="eyebrow">INVESTORS & STRATEGIC PARTNERS</div>
            <h2>Interested in a specific <em>venture?</em></h2>
            <p>Introduce yourself, the opportunity you see and the kind of involvement you have in mind. Enquiries are reviewed individually.</p>
          </div>
          <a className="button button-primary" href="mailto:jaythewizzy@gmail.com?subject=Investor%20and%20Strategic%20Partnership%20Enquiry">Email WizzyLux <ArrowIcon /></a>
        </div>
      </section>
    </>
  );
}
