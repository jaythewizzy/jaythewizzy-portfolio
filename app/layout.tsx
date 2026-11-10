import type { Metadata, Viewport } from 'next';
import { DM_Sans, Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-playfair', display: 'swap' });

const themeBootstrap = `try { const saved = localStorage.getItem('jw-theme'); document.documentElement.dataset.theme = saved === 'light' ? 'light' : 'dark'; } catch { document.documentElement.dataset.theme = 'dark'; }`;

export const metadata: Metadata = {
  metadataBase: new URL('https://jaythewizzy.com'),
  alternates: { canonical: '/' },
  title: {
    default: 'Stephen Omojola | Software & AI Engineer — JaytheWizzy',
    template: '%s | JaytheWizzy',
  },
  description: 'Stephen Omojola, known as JaytheWizzy — Software & AI Engineer, founder of WizzyLux Global Concepts, building digital products, games and original media.',
  applicationName: 'JaytheWizzy Creative Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'JaytheWizzy',
    title: 'Stephen Omojola | Software & AI Engineer — JaytheWizzy',
    description: 'Software and AI engineering, independent products, games, music, books and future screen stories.',
    url: 'https://jaythewizzy.com/',
    images: [{ url: 'https://jaythewizzy.com/og/home.jpg', width: 1200, height: 630, alt: 'Stephen Omojola — JaytheWizzy, Software & AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jaythewizzy',
    creator: '@jaythewizzy',
    title: 'Stephen Omojola | Software & AI Engineer — JaytheWizzy',
    description: 'Building software, products and original experiences.',
    images: ['https://jaythewizzy.com/og/home.jpg'],
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className={`${manrope.variable} ${dmSans.variable} ${playfair.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
