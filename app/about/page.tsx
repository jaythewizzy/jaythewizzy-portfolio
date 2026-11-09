import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon, DownloadIcon } from '@/components/icons';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About Stephen Omojola',
  description: 'The background, approach and work of Stephen Omojola, known as JaytheWizzy — Software & AI Engineer and founder of WizzyLux Global Concepts.',
  path: '/about/',
  image: '/og/about.jpg',
});

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="ABOUT STEPHEN OMOJOLA" title={<>A software engineer&apos;s mindset.<br /><em>A creator&apos;s range.</em></>} description="I’m Stephen Omojola, known creatively as JaytheWizzy — a Software & AI Engineer, independent founder and creator working across technology, games, music and original stories." />
      <section className="section">
        <div className="shell about-layout about-layout-no-photo">
          <div className="about-monogram-panel"><span>JW</span><small>STEPHEN OMOJOLA</small><b>SOFTWARE & AI ENGINEER</b></div>
          <div className="about-copy">
            <div className="eyebrow">WHAT I DO</div>
            <h2>From first idea to <em>production.</em></h2>
            <p>I started freelancing in 2019 and have delivered web applications, iOS and Android apps, games and automation tools for clients. My work covers the full product lifecycle: understanding the brief, shaping the experience, engineering the system, integrating services and taking the result through deployment and release.</p>
            <p>My primary professional focus is software and AI engineering. I work across frontend and mobile experiences, backend systems, databases, payments, integrations, AI applications and infrastructure. I care about building systems that work reliably beyond the first demo.</p>
            <p>Alongside client work, I develop independent products through <Link href="/wizzy-lux-global-concepts">WizzyLux Global Concepts</Link>. That work spans software platforms, games, music production and distribution, and original writing.</p>
            <p>I’m open to remote roles, freelance engineering, commissioned product development and thoughtful partnerships.</p>
            <div className="hero-actions"><Link className="button button-primary" href="/contact">Work with me <ArrowIcon /></Link><Link className="button button-quiet" href="/cv">Download CV <DownloadIcon /></Link></div>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">THE WAY I WORK</div><h2>Principles over <em>noise.</em></h2></div><p>A few ideas guide how I build, create and collaborate.</p></div>
          <div className="principle-grid">
            <article><span>01</span><h3>Understand before changing</h3><p>Study the brief, the existing system and the people using it before deciding what needs to change.</p></article>
            <article><span>02</span><h3>Build with intention</h3><p>Start with the problem, audience or story. Make the technical and creative decisions serve the outcome.</p></article>
            <article><span>03</span><h3>Own the delivery</h3><p>Take responsibility for quality, testing, release, communication and the experience after launch.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">EXPERIENCE & BACKGROUND</div><h2>The work behind <em>the portfolio.</em></h2></div></div>
          <div className="timeline">
            <div className="timeline-item"><div><h3>Freelance Software Engineer</h3><span className="timeline-meta">2019 — PRESENT · REMOTE</span></div><p>Delivering web apps, mobile apps, games and automation tools for clients, from requirements and implementation to release and ongoing support. Work has come through freelance platforms and direct client relationships.</p></div>
            <div className="timeline-item"><div><h3>Founder · WizzyLux Global Concepts</h3><span className="timeline-meta">PRESENT</span></div><p>Building and managing independent work across software products, games, The Foundry digital studio, music production and distribution, and wider creative ventures.</p></div>
            <div className="timeline-item"><div><h3>Education & certification</h3><span className="timeline-meta">APTECH · AWS</span></div><p>Advanced Diploma in Software Engineering (ADSE), Aptech, with Distinction (2023). BSc, Information Technology. AWS Certified Developer — Associate.</p></div>
            <div className="timeline-item"><div><h3>Languages</h3><span className="timeline-meta">LANGUAGES</span></div><p>English and Yoruba (native); French and Russian (basic); German and Spanish (learning).</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
