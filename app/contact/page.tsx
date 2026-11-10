import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon, MailIcon, WhatsAppIcon } from '@/components/icons';
import { site } from '@/data/site';
import { SocialLinks } from '@/components/social-links';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact & Work Enquiries',
  description: 'Contact Stephen Omojola — JaytheWizzy for remote Software & AI Engineering roles, freelance projects, commissioned development and partnerships.',
  path: '/contact/',
  image: '/og/contact.jpg',
});

export default function ContactPage() {
  const telegramProfile = site.socials.find((social) => social.name === 'Telegram');
  const googlePlayDeveloperProfile = site.socials.find((social) => social.name === 'Google Play Developer Profile');

  return (
    <>
      <PageIntro eyebrow="CONTACT & OPPORTUNITIES" title={<>Let&apos;s build something<br /><em>worth putting into the world.</em></>} description="I’m open to remote Software & AI Engineering roles, freelance development, commissioned product builds, technical partnerships and selected creative collaborations." />
      <section className="section"><div className="shell contact-layout">
        <div className="contact-intro-card">
          <div className="contact-person"><div className="contact-person-placeholder">JW</div><div><span className="eyebrow">STEPHEN OMOJOLA</span><b>Software & AI Engineer · JaytheWizzy</b><small>Remote roles · Freelance · Partnerships</small></div></div>
          <h2>Tell me what you&apos;re <em>building.</em></h2>
          <p>Share the role, project, challenge or idea. For formal employment and project enquiries, email is usually the best starting point. You can also connect with me on LinkedIn or send a direct message through my social profiles below.</p>
          <div className="contact-detail"><span className="contact-icon"><MailIcon /></span><div><small>EMAIL</small><b>{site.email}</b></div><a href={`mailto:${site.email}?subject=JaytheWizzy%20-%20Professional%20Enquiry`}>Write an email <ArrowIcon /></a></div>
          <div className="contact-detail"><span className="contact-icon">in</span><div><small>LINKEDIN</small><b>linkedin.com/in/jaythewizzy</b></div><a href="https://www.linkedin.com/in/jaythewizzy/" target="_blank" rel="noreferrer noopener">Connect on LinkedIn <ArrowIcon /></a></div>
          <div className="contact-detail"><span className="contact-icon">GH</span><div><small>GITHUB</small><b>github.com/jaythewizzy</b></div><a href="https://github.com/jaythewizzy" target="_blank" rel="noreferrer noopener">View profile <ArrowIcon /></a></div>
          {googlePlayDeveloperProfile && <div className="contact-detail"><span className="contact-icon">GP</span><div><small>GOOGLE PLAY DEVELOPER</small><b>JaytheWizzy on Google Play</b></div><a href={googlePlayDeveloperProfile.href} target="_blank" rel="noreferrer noopener">View developer profile <ArrowIcon /></a></div>}
          {telegramProfile && <div className="contact-detail"><span className="contact-icon">TG</span><div><small>TELEGRAM</small><b>{'handle' in telegramProfile ? telegramProfile.handle : 'Telegram profile'}</b></div><a href={telegramProfile.href} target="_blank" rel="noreferrer noopener">Message on Telegram <ArrowIcon /></a></div>}
          <div className="contact-detail"><span className="contact-icon">CV</span><div><small>CV / RÉSUMÉ</small><b>Software & AI Engineering profile</b></div><Link href="/cv">View CV <ArrowIcon /></Link></div>
          <div className="social-label">FOLLOW, CONNECT &amp; REACH OUT · @JAYTHEWIZZY</div><SocialLinks />
        </div>
        <div className="whatsapp-panel">
          <div className="eyebrow">DIRECT MESSAGE</div>
          <h2>Choose your preferred <em>WhatsApp line.</em></h2>
          <p>Each link opens WhatsApp with a prepared greeting. Nothing is sent until you choose to send it.</p>
          {site.whatsapp.map((line, index) => <a className="whatsapp-option" key={line.href} href={`${line.href}?text=Hello%20JaytheWizzy%2C%20I%27d%20like%20to%20discuss%20a%20professional%20opportunity%20or%20project.`} target="_blank" rel="noreferrer noopener"><span className="contact-icon"><WhatsAppIcon /></span><span><small>WHATSAPP · LINE {index + 1}</small><b>{line.display}</b><em>{line.label} · Open conversation</em></span><ArrowIcon /></a>)}
          <div className="contact-note">For a project enquiry, include a short description of what you want to build, the main features or platforms, your target timeline and an estimated budget range if you have one. If the budget is still undecided, that is fine too.</div>
        </div>
      </div></section>
      <section className="section section-soft">
        <div className="shell detail-grid">
          <article className="detail-panel">
            <div className="eyebrow">PROJECT & BUSINESS ENQUIRIES</div>
            <h2>Scope first.<br /><em>Then a tailored proposal.</em></h2>
            <div className="detail-copy">
              <p>Project pricing is not one-size-fits-all, so I do not publish fixed rates on this page. A quote is prepared after understanding the goals, features, platforms, integrations, complexity, delivery requirements and timeline.</p>
              <p>To help me assess an enquiry, describe what you want to build, who it is for, the essential features and when you hope to launch. Include a budget range if you already have one; it is completely fine to say that you are still working it out.</p>
            </div>
            <p className="investor-note">The next step is a direct conversation to clarify the scope. Any proposal will set out the agreed deliverables, pricing, milestones and timeline before work is committed.</p>
          </article>
          <article className="detail-panel">
            <div className="eyebrow">INVESTMENT & STRATEGIC PARTNERSHIPS</div>
            <h2>A different <em>conversation.</em></h2>
            <div className="detail-copy">
              <p>Investment interest, distribution opportunities and strategic partnerships involving the wider WizzyLux Global Concepts ecosystem have a dedicated page and enquiry process.</p>
              <p>You can review the portfolio areas, see what information is useful for an initial discussion and contact me directly. These enquiries are considered individually; there are no published valuations, investment terms or promised returns.</p>
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/investors/">Investors & strategic partners <ArrowIcon /></Link>
              <Link className="button button-quiet" href="/wizzy-lux-global-concepts">Explore WizzyLux <ArrowIcon /></Link>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="shell"><div className="brand-company-panel"><div><div className="eyebrow">THE WIDER ECOSYSTEM</div><h2>WizzyLux Global Concepts</h2><p>Explore the parent company behind the technology, products and creative ventures.</p><div className="hero-actions"><Link className="button button-outline" href="/wizzy-lux-global-concepts">Explore the company <ArrowIcon /></Link></div></div><div className="brand-company-mark">WL</div></div></div>
      </section>
    </>
  );
}
