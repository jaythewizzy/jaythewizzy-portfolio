export type MusicTrack = {
  title: string;
  performance: 'Vocal' | 'Vocal duet' | 'Instrumental';
  note: string;
};

export type MusicRelease = {
  slug: string;
  title: string;
  format: 'EP' | 'Single';
  genre: string;
  status: 'Released';
  description: string;
  tracks: readonly MusicTrack[];
};

/** Official JaytheWizzy artist profiles supplied by the artist. */
export const musicArtistPlatforms = {
  primary: [
    {
      label: 'Spotify',
      mark: 'S',
      href: 'https://open.spotify.com/artist/5AciBMXf9Yz0kDpZiFZGdW?si=XdsNWXp3Rx-AatXjy6xZbA',
    },
    {
      label: 'Apple Music',
      mark: 'A',
      href: 'https://music.apple.com/ng/artist/jaythewizzy/6831857237',
    },
    {
      label: 'YouTube Music',
      mark: 'YT',
      href: 'https://music.youtube.com/channel/UCm5-I95tQ3s-AXb5H6-HfcA?si=zStI7065qUq_joVb',
    },
    {
      label: 'Amazon Music',
      mark: 'AM',
      href: 'https://music.amazon.com/artists/B0HQSP2H2H/jaythewizzy?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_tQDg88dcEAmZELsNitqCFpYil',
    },
  ],
  more: [
    { label: 'Deezer', href: 'https://link.deezer.com/s/34UIchu2fLivEOCAt7MRU' },
    { label: 'TIDAL', href: 'https://tidal.com/artist/89641862/u' },
    {
      label: 'Boomplay',
      href: 'https://www.boomplay.com/artists/EQJ1h0G2irkQm833TbBJ6DeG?from=search&srModel=COPYLINK&srList=WEB&share_content=artist&share_channel=copylink&share_platform=web',
    },
  ],
} as const;

export const musicDistributionNote =
  "Distributed through DistroKid to streaming services and social music platforms, including TikTok's music library.";

/**
 * Public catalogue. Keep release facts and track metadata here so new music can
 * be added without changing the catalogue or detail-page layouts.
 */
export const musicReleases: readonly MusicRelease[] = [
  {
    slug: 'the-life-we-made',
    title: 'The Life We Made',
    format: 'EP',
    genre: 'Afrobeats',
    status: 'Released',
    description:
      'A feel-good Afrobeats collection built around romance, everyday joy, celebration and peace.',
    tracks: [
      {
        title: 'Bamidele, Come Closer',
        performance: 'Vocal',
        note: 'Romantic, inviting Afrobeats',
      },
      {
        title: 'Every Little Moment',
        performance: 'Vocal',
        note: 'Warm, affectionate and easygoing',
      },
      {
        title: 'Enjoyment',
        performance: 'Vocal',
        note: 'Celebratory, dance-led feel-good track',
      },
      {
        title: 'Peace of Mind',
        performance: 'Vocal',
        note: 'Relaxed, positive and uplifting',
      },
    ],
  },
  {
    slug: 'beyond-the-horizon',
    title: 'Beyond the Horizon',
    format: 'EP',
    genre: 'Cinematic / Fantasy Orchestral',
    status: 'Released',
    description:
      'An uplifting cinematic adventure collection: heroic orchestral builds, fantasy atmosphere, emotional anthems and expansive instrumental passages.',
    tracks: [
      {
        title: 'Here in My Hands',
        performance: 'Vocal',
        note: 'Inspirational orchestral anthem; lead track',
      },
      {
        title: 'First Love Flight',
        performance: 'Instrumental',
        note: 'Luminous, graceful fantasy orchestral piece',
      },
      {
        title: 'Radiant and Clear',
        performance: 'Vocal',
        note: 'Adventure-driven orchestral anthem',
      },
      {
        title: 'Soaring Horizons',
        performance: 'Instrumental',
        note: 'Peaceful cinematic orchestral score',
      },
      {
        title: 'Soar Above the Storm',
        performance: 'Vocal',
        note: 'Heroic, triumphant fantasy orchestral anthem',
      },
    ],
  },
  {
    slug: 'home-isnt-a-place-we-own',
    title: "Home Isn't a Place We Own",
    format: 'Single',
    genre: 'Pop / Soul',
    status: 'Released',
    description: 'A warm, romantic Pop/Soul vocal duet and the first standalone single released under JaytheWizzy.',
    tracks: [
      {
        title: "Home Isn't a Place We Own",
        performance: 'Vocal duet',
        note: 'First single; warm, romantic Pop/Soul',
      },
    ],
  },
  {
    slug: 'i-choose-you',
    title: 'I Choose You',
    format: 'Single',
    genre: 'Pop / R&B Soul',
    status: 'Released',
    description: 'A commitment-focused standalone vocal single with a retro Pop and R&B soul direction.',
    tracks: [
      {
        title: 'I Choose You',
        performance: 'Vocal',
        note: 'Commitment-focused retro Pop / R&B soul',
      },
    ],
  },
  {
    slug: 'that-smile',
    title: 'That Smile',
    format: 'Single',
    genre: 'Pop / R&B',
    status: 'Released',
    description: 'A playful standalone vocal single with retro-funk energy.',
    tracks: [
      {
        title: 'That Smile',
        performance: 'Vocal',
        note: 'Playful Pop / R&B with retro-funk energy',
      },
    ],
  },
  {
    slug: 'home-is-your-hand-in-mine',
    title: 'Home Is Your Hand in Mine',
    format: 'Single',
    genre: 'Pop / Soul',
    status: 'Released',
    description: 'A cinematic, heartfelt Pop/Soul vocal duet released as a standalone single.',
    tracks: [
      {
        title: 'Home Is Your Hand in Mine',
        performance: 'Vocal duet',
        note: 'Cinematic, heartfelt Pop/Soul duet',
      },
    ],
  },
] as const;

export const musicEps = musicReleases.filter((release) => release.format === 'EP');
export const musicSingles = musicReleases.filter((release) => release.format === 'Single');

export function getMusicRelease(slug: string) {
  return musicReleases.find((release) => release.slug === slug);
}
