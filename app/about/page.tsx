import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon, DownloadIcon } from '@/components/icons';
import { createPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { personProfileStructuredData } from '@/lib/structured-data';

export const metadata = createPageMetadata({
  title: 'About Stephen Omojola',
  description: 'Stephen Omojola (JaytheWizzy), Software & AI Engineer and founder of WizzyLux Global Concepts, building across technology, media and future film projects.',
  path: '/about/',
  image: '/og/about.jpg',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personProfileStructuredData} />
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
            <p>Selected work includes <Link href="/apps/luxen">LUXEN</Link>, a movie and television discovery product for web and mobile; <Link href="/projects/growthos">GrowthOS</Link>, a digital services platform; and the game projects <Link href="/games/coinwell">Coinwell</Link> and <Link href="/games/lifeleague">LifeLeague</Link>. The wider portfolio also includes <Link href="/projects/the-foundry">The Foundry</Link>, a developing digital studio; <Link href="/projects/wizzylux">WizzyLux</Link>, a clothing and lifestyle brand; a <Link href="/projects/eurusd-trading-system">Python-based EURUSD research and trading system</Link>; and an <Link href="/projects/appointment-booking-platform">appointment-booking platform prototype</Link>. <Link href="/projects">Explore the full project portfolio</Link>.</p>
            <p>My creative catalogue includes <Link href="/music">two released EPs and four standalone singles</Link>, alongside <Link href="/books/the-second-life-of-julian-vale">The Second Life of Julian Vale</Link>, a planned four-book fiction saga with Book One in progress. <Link href="/media">Explore the music, books and screen work</Link>.</p>
            <p>My creativity also extends to music. I play the piano, flutes and drums, and I’m learning other instruments. I’ve always considered myself naturally talented and creatively curious, with an interest in developing skills across different disciplines.</p>
            <p><strong>“Jack of All Trades, Master of All.”</strong> It’s a phrase I like to live by — a reminder to stay curious, keep learning, explore widely and pursue excellence in every discipline I take on.</p>
            <p>My long-term ambition is to build a media and technology empire through WizzyLux Global Concepts — not a collection of disconnected projects, but an interconnected ecosystem. Technology, AI, apps and games are one side of that vision; music, publishing and original film are another. I plan to develop original stories for the screen and, over time, build the creative and production capabilities to bring them to life. Film is a future direction I’m actively working toward as the wider ecosystem grows.</p>
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
