import { ArrowIcon } from './icons';
import { musicArtistPlatforms } from '@/data/music';

/** Four primary artist destinations plus an accessible native disclosure menu. */
export function MusicPlatformLinks() {
  return (
    <div className="music-platforms">
      <div className="music-platform-primary" aria-label="Listen to JaytheWizzy">
        {musicArtistPlatforms.primary.map((platform) => (
          <a key={platform.label} href={platform.href} target="_blank" rel="noreferrer noopener">
            <span className="music-platform-mark" aria-hidden="true">{platform.mark}</span>
            <span>{platform.label}</span>
            <ArrowIcon />
          </a>
        ))}
      </div>
      <details className="music-platform-more">
        <summary>
          <span>See more platforms</span>
          <span className="music-platform-chevron" aria-hidden="true">⌄</span>
        </summary>
        <div className="music-platform-popover" aria-label="More JaytheWizzy artist profiles">
          {musicArtistPlatforms.more.map((platform) => (
            <a key={platform.label} href={platform.href} target="_blank" rel="noreferrer noopener">
              <span>{platform.label}</span>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}
