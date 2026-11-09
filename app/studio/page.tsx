import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'JaytheWizzy Creative Studio',
  description: 'A practical creative and product development practice for software, AI, digital products, games, music and original stories.',
};

const services = [
  ['Software & digital products', 'Web applications, mobile apps, APIs, dashboards, integrations and product engineering from architecture to launch.'],
  ['AI & automation', 'LLM integrations, AI-powered workflows, agents and practical automation that solve a defined business problem.'],
  ['Game development', 'Game systems, progression, economies, simulation logic, player experiences and technical foundations.'],
  ['Product strategy & UX', 'Turning a rough idea into a clear product direction, scope, experience and build plan.'],
  ['Music & sound', 'Original music, instrumental arrangements and cinematic sound for independent releases and storytelling.'],
  ['Story & media development', 'Original concepts, characters and worlds, with film and television development as a growing long-term direction.'],
];

export default function StudioPage() {
  return (
    <>
      <PageIntro eyebrow="JAYTHEWIZZY CREATIVE STUDIO" title={<>Creative thinking.<br /><em>Engineering that ships.</em></>} description="The studio is the practical creative and product-development practice behind selected client work and independent projects. It brings direction, craft and technical execution into one place." />
      <section className="section">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">CAPABILITIES</div><h2>From an early idea to <em>a real product.</em></h2></div><p>The common thread is taking an idea seriously, understanding what it needs and building the right experience around it.</p></div>
          <div className="service-grid">
            {services.map(([title, description], i) => <article className="service-card" key={title}><span className="line-icon">{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">HOW COLLABORATION WORKS</div><h2>Clear process. <em>Accountable delivery.</em></h2></div></div>
          <div className="process-grid">
            <div><span>01</span><h3>Understand the brief</h3><p>Define the goal, audience, constraints and what success should look like.</p></div>
            <div><span>02</span><h3>Shape the solution</h3><p>Set product direction, technical approach, scope and priorities.</p></div>
            <div><span>03</span><h3>Build and verify</h3><p>Implement the experience, test the important paths and resolve issues before release.</p></div>
            <div><span>04</span><h3>Launch and improve</h3><p>Deploy, measure, support and make focused improvements based on real use.</p></div>
          </div>
        </div>
      </section>
      <section className="section"><div className="shell availability-panel"><div className="eyebrow">CLIENT WORK & PARTNERSHIPS</div><h2>Have a product, system or idea to build?</h2><p>JaytheWizzy Creative Studio is open to selected freelance engineering projects, commissioned product builds, technical partnerships and creative collaborations.</p><div className="hero-actions"><Link className="button button-primary" href="/contact">Start a conversation <ArrowIcon /></Link><Link className="text-link" href="/wizzy-lux-global-concepts">About WizzyLux Global Concepts <ArrowIcon /></Link></div></div></section>
    </>
  );
}
