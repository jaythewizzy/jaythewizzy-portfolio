import { site } from '@/data/site';
import { SocialIcon, type SocialIconName } from './icons';

type Props = { compact?: boolean };

export function SocialLinks({ compact = false }: Props) {
  return (
    <div className={compact ? 'social-row social-row-compact' : 'social-row'} aria-label={`Social media profiles for ${site.socialHandle}`}>
      {site.socials.map((social) => (
        <a key={social.name} href={social.href} target="_blank" rel="noreferrer noopener" aria-label={`${social.name} · ${site.socialHandle}`} title={`${social.name} · ${site.socialHandle}`}>
          <SocialIcon name={social.icon as SocialIconName} />
        </a>
      ))}
    </div>
  );
}
