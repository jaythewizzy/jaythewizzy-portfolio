import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://jaythewizzy.com'),
  title: {
    default: 'Stephen Omojola | Software & AI Engineer — JaytheWizzy',
    template: '%s | JaytheWizzy',
  },
  description: 'Stephen Omojola, known as JaytheWizzy — Software & AI Engineer, founder of WizzyLux Global Concepts, building digital products, games and original media.',
  applicationName: 'JaytheWizzy Creative Studio',
  openGraph: {
    type: 'website',
    siteName: 'JaytheWizzy',
    title: 'Stephen Omojola | Software & AI Engineer — JaytheWizzy',
    description: 'Software and AI engineering, independent products, games, music, books and future screen stories.',
    url: 'https://jaythewizzy.com',
  },
  twitter: {
    card: 'summary',
    title: 'JaytheWizzy — Software & AI Engineer',
    description: 'Building software, products and original experiences.',
  },
  icons: { icon: '/assets/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#08090b',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
