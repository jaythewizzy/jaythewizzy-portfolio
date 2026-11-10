import { site } from '@/data/site';
import { SocialIcon, type SocialIconName } from './icons';

type Props = { compact?: boolean; exclude?: readonly string[] };

export function SocialLinks({ compact = false, exclude = [] }: Props) {
  const visibleSocials = site.socials.filter((social) => !exclude.includes(social.name));

  return (
    <div className={compact ? 'social-row social-row-compact' : 'social-row'} aria-label={`Social and professional profiles for ${site.socialHandle}`}>
      {visibleSocials.map((social) => {
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
