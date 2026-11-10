import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon, DownloadIcon } from '@/components/icons';
import { createPageMetadata } from '@/lib/seo';
import styles from './technology.module.css';

export const metadata = createPageMetadata({
  title: 'Software & AI Engineering',
  description: 'Full-stack web and mobile development, backend systems, AI integrations, payments, cloud infrastructure and production delivery by Stephen Omojola.',
  path: '/technology/',
  image: '/og/technology.jpg',
});

const skills = [
  { title: 'Web engineering', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue', 'Angular'] },
  { title: 'Mobile engineering', items: ['Expo', 'React Native', 'Flutter', 'Swift', 'iOS & Android', 'EAS Build'] },
  { title: 'Backend & data', items: ['Node.js', 'Python', 'Django', 'Java', 'C++', 'Supabase', 'PostgreSQL', 'Prisma', 'MySQL', 'MongoDB'] },
  { title: 'AI & automation', items: ['AI applications', 'LLM integrations', 'AI agents', 'Workflow automation'] },
  { title: 'Payments & monetisation', items: ['Paystack', 'Stripe', 'RevenueCat', 'AdMob', 'Webhooks'] },
  { title: 'Infrastructure & delivery', items: ['Vercel', 'AWS', 'Azure', 'Netlify', 'Heroku', 'Git', 'Resend'] },
  { title: 'Games, media & content', items: ['Roblox games', 'Game economies', 'Music production', 'Music distribution', 'Technical SEO', 'Search Console'] },
  { title: 'Data & trading systems', items: ['Python research tooling', 'pandas', 'NumPy', 'MetaTrader 5', 'Backtesting', 'Risk controls'] },
];

export default function TechnologyPage() {
  return (
    <>
      <PageIntro eyebrow="SOFTWARE & AI ENGINEERING" title={<>Engineering products<br /><em>end to end.</em></>} description="I design, build and ship digital products across web, mobile, backend systems, AI integrations, payments and infrastructure. The work is grounded in production delivery — not just prototypes." />
      <section className="section">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">TECHNICAL TOOLKIT</div><h2>A broad stack. <em>Practical delivery.</em></h2></div><p>Technologies are tools. The important part is understanding the system and choosing what fits the product.</p></div>
          <div className="skill-grid">
            {skills.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className={`stack-row ${styles.stackRow}`}>{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></article>)}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">SELECTED ENGINEERING WORK</div><h2>Systems built for <em>real use.</em></h2></div></div>
          <div className="timeline">
            <div className="timeline-item"><div><h3>LUXEN</h3><span className="timeline-meta">LIVE · WEB, ANDROID & IOS</span></div><p>Built a Next.js web platform and Expo mobile apps for discovering movies, anime and TV series, all sharing a Supabase backend. Shipped on Google Play and the App Store, available across 178 countries, with thousands of users. Designed timed rewarded-ad access, VIP subscriptions and access codes, alongside server-side RevenueCat purchase reconciliation, cached status endpoints, rate limits, push reminders, consent-gated ads and SEO.</p></div>
            <div className="timeline-item"><div><h3>GrowthOS</h3><span className="timeline-meta">LIVE PLATFORM</span></div><p>Built a marketplace with wallet funding through Paystack, order tracking, verification-provider routing, admin tools, support requests and transactional email. Supabase provides authentication and administration; Resend handles transactional communication.</p></div>
            <div className="timeline-item"><div><h3>LifeLeague</h3><span className="timeline-meta">GAME · RELEASE CANDIDATE</span></div><p>Developed a multi-generation life-simulation engine with career mastery, football seasons, investments, businesses and family progression. The server-authoritative wallet ledger, cloud saves with optimistic concurrency, rewarded-ad claims and premium webhook are supported by 22 SQL migrations.</p></div>
            <div className="timeline-item"><div><h3>EURUSD Trading System</h3><span className="timeline-meta">PYTHON · LIVE DEPLOYMENT</span></div><p>Built a backtester with 20+ research iterations, independent-data validation and a MetaTrader 5 connection. Execution controls include spread, position and volume limits, plus a daily-loss lock.</p></div>
            <div className="timeline-item"><div><h3>Appointment Booking Platform</h3><span className="timeline-meta">PROTOTYPE</span></div><p>Built service selection, date and time picking, configurable home-visit travel fees, conflict checks and protected administration. Checkout remains a prototype and does not collect payments.</p></div>
          </div>
          <div className="hero-actions"><Link className="button button-primary" href="/projects">Explore project details <ArrowIcon /></Link><Link className="button button-quiet" href="/cv">Full CV <DownloadIcon /></Link></div>
        </div>
      </section>
      <section className="section">
        <div className="shell availability-panel"><div className="eyebrow">OPEN TO WORK</div><h2>Need an engineer who can own the whole product?</h2><p>Available for remote Software & AI Engineering roles, freelance development, full-stack product builds, integrations, technical problem-solving and ongoing engineering support.</p><div className="hero-actions"><Link className="button button-primary" href="/contact">Discuss a role or project <ArrowIcon /></Link><Link className="button button-outline" href="/cv">Download CV <DownloadIcon /></Link></div></div>
      </section>
    </>
  );
}
