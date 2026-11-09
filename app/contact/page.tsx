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
  return (
    <>
      <PageIntro eyebrow="CONTACT & OPPORTUNITIES" title={<>Let&apos;s build something<br /><em>worth putting into the world.</em></>} description="I’m open to remote Software & AI Engineering roles, freelance development, commissioned product builds, technical partnerships and selected creative collaborations." />
      <section className="section"><div className="shell contact-layout">
        <div className="contact-intro-card">
          <div className="contact-person"><div className="contact-person-placeholder">JW</div><div><span className="eyebrow">STEPHEN OMOJOLA</span><b>Software & AI Engineer · JaytheWizzy</b><small>Remote roles · Freelance · Partnerships</small></div></div>
          <h2>Tell me what you&apos;re <em>building.</em></h2>
          <p>Share the role, project, challenge or idea. For formal employment and project enquiries, email is usually the best starting point.</p>
          <div className="contact-detail"><span className="contact-icon"><MailIcon /></span><div><small>EMAIL</small><b>{site.email}</b></div><a href={`mailto:${site.email}?subject=JaytheWizzy%20-%20Professional%20Enquiry`}>Write an email <ArrowIcon /></a></div>
          <div className="contact-detail"><span className="contact-icon">GH</span><div><small>GITHUB</small><b>github.com/jaythewizzy</b></div><a href="https://github.com/jaythewizzy" target="_blank" rel="noreferrer noopener">View profile <ArrowIcon /></a></div>
          <div className="contact-detail"><span className="contact-icon">CV</span><div><small>CV / RÉSUMÉ</small><b>Software & AI Engineering profile</b></div><Link href="/cv">View CV <ArrowIcon /></Link></div>
          <div className="social-label">FOLLOW @JAYTHEWIZZY</div><SocialLinks />
        </div>
        <div className="whatsapp-panel">
          <div className="eyebrow">DIRECT MESSAGE</div>
          <h2>Choose your preferred <em>WhatsApp line.</em></h2>
          <p>Each link opens WhatsApp with a prepared greeting. Nothing is sent until you choose to send it.</p>
          {site.whatsapp.map((line, index) => <a className="whatsapp-option" key={line.href} href={`${line.href}?text=Hello%20JaytheWizzy%2C%20I%27d%20like%20to%20discuss%20a%20professional%20opportunity%20or%20project.`} target="_blank" rel="noreferrer noopener"><span className="contact-icon"><WhatsAppIcon /></span><span><small>WHATSAPP · LINE {index + 1}</small><b>{line.display}</b><em>{line.label} · Open conversation</em></span><ArrowIcon /></a>)}
          <div className="contact-note">For remote roles, freelance builds and commissioned software work, please include a short description of the opportunity, expected scope and timeline.</div>
        </div>
      </div></section>
      <section className="section section-soft"><div className="shell"><div className="brand-company-panel"><div><div className="eyebrow">BUSINESS & PARTNERSHIP ENQUIRIES</div><h2>WizzyLux Global Concepts</h2><p>For company-level partnerships, media development and opportunities involving the wider portfolio.</p><div className="hero-actions"><Link className="button button-outline" href="/wizzy-lux-global-concepts">Explore the company <ArrowIcon /></Link></div></div><div className="brand-company-mark">WL</div></div></div></section>
    </>
  );
}
