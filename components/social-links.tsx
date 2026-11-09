import { site } from '@/data/site';
import { SocialIcon, type SocialIconName } from './icons';

type Props = { compact?: boolean };

export function SocialLinks({ compact = false }: Props) {
  return (
    <div className={compact ? 'social-row social-row-compact' : 'social-row'} aria-label={`Social and professional profiles for ${site.socialHandle}`}>
      {site.socials.map((social) => {
        const handle = 'handle' in social ? social.handle : site.socialHandle;
        return (
          <a key={social.name} href={social.href} target="_blank" rel="noreferrer noopener" aria-label={`${social.name} · ${handle}`} title={`${social.name} · ${handle}`}>
            <SocialIcon name={social.icon as SocialIconName} />
          </a>
        );
      })}
    </div>
  );
}
