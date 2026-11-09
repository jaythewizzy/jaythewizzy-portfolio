import type { SVGProps } from 'react';

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M12 3v12m-5-5 5 5 5-5M4 20h16" /></svg>;
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M20.5 15.3A8.4 8.4 0 0 1 8.7 3.5 8.9 8.9 0 1 0 20.5 15.3Z" /></svg>;
}

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><circle cx="12" cy="12" r="3.8"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>;
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}


export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M20.4 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-5A8.2 8.2 0 1 1 20.4 11.7Z"/><path d="M8.4 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.4.7 1.2 1.5 2 2 .3.2.5.2.7 0l.8-.9c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-2 .5-1.1-.2-2.5-1-3.8-2.1-1.3-1.2-2.2-2.7-2.4-3.8-.2-.8.1-1.5.7-2.1Z"/></svg>;
}

export type SocialIconName = 'github' | 'youtube' | 'instagram' | 'x' | 'tiktok' | 'spotify';

export function SocialIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: SocialIconName }) {
  const common = { viewBox: '0 0 24 24', fill: 'none' as const, stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const, ...props };
  switch (name) {
    case 'github':
      return <svg {...common}><path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.8A5.3 5.3 0 0 0 18.8 4a4.9 4.9 0 0 0-.1-3S17.5.6 15 2.5a13.5 13.5 0 0 0-7 0C5.5.6 4.3 1 4.3 1A4.9 4.9 0 0 0 4.2 4a5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.1 6.5 6.1 6.8A3.4 3.4 0 0 0 8 17.1V22"/></svg>;
    case 'youtube':
      return <svg {...common}><rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>;
    case 'instagram':
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.6 6.5h.01" strokeWidth="2.8"/></svg>;
    case 'x':
      return <svg {...common}><path d="M4 3h4.8l11.2 18h-4.8L4 3Zm0 18 7.4-8.3m1.2-1.4L20 3"/></svg>;
    case 'tiktok':
      return <svg {...common}><path d="M14 3v11.3a4.1 4.1 0 1 1-3-3.9M14 3c.6 3.5 2.7 5.5 6 5.9"/></svg>;
    case 'spotify':
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M6.3 9.2c4.1-1.2 8.5-.7 11.7 1.2M7.1 12.4c3.4-1 7.3-.5 10.1 1.1M8 15.5c2.7-.7 5.6-.3 7.9.9"/></svg>;
  }
}
