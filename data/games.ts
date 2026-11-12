export type Game = {
  slug: string;
  name: string;
  category: string;
  status: string;
  statusTone: 'live' | 'testing' | 'development';
  summary: string;
  description: string[];
  stack: string[];
  highlights: string[];
  publisher?: string;
  tagline?: string;
  featureImage?: string;
  featureCardImage?: string;
  privacyPath?: string;
  supportPath?: string;
  termsPath?: string;
};

export const games: Game[] = [
  {
    slug: 'streetbite-empire',
    name: 'StreetBite Empire',
    category: 'Idle food-business simulator',
    status: 'In development',
    statusTone: 'development',
    summary: 'Build a street-food business, upgrade eight food stations, hire managers and expand across five cities.',
    description: [
      'StreetBite Empire is a single-player idle business simulator about turning a small food stand into a growing street-food operation. Players upgrade food stations, improve production, hire managers and build income that continues while they are away.',
      'The current development baseline includes eight upgradeable food stations, manager automation, offline earnings, five city destinations, prestige progression, achievements, daily gem rewards and a repeatable opt-in Sponsor Cash video-reward loop. Rewards are virtual in-game currency and have no cash value.',
      'StreetBite Empire is being developed for Android first, with the Expo project retaining an iOS configuration for a later release. It is not yet available on Google Play or the Apple App Store.',
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'Local-first saves', 'Google Mobile Ads'],
    highlights: [
      'Eight upgradeable food stations, from lemonade and hot dogs to burgers, sushi and desserts',
      'Hire managers to automate stations and continue earning while away',
      'Five city destinations with permanent prestige progression',
      'Repeatable, optional Sponsor Cash rewarded-video offers',
      'Achievements, daily rewards, boosts and a game-specific shop',
      'Offline-first core play with advertising and purchases used for optional online services',
    ],
    publisher: 'JaytheWizzy Games',
    tagline: 'Build it. Serve it. Own the streets.',
    featureImage: '/games/streetbite-empire/feature-graphic.png',
    featureCardImage: '/games/streetbite-empire/feature-art.webp',
    privacyPath: '/games/streetbite-empire/privacy/',
    supportPath: '/games/streetbite-empire/support/',
    termsPath: '/games/streetbite-empire/terms/',
  },
  {
    slug: 'coinwell',
    name: 'Coinwell',
    category: 'Casual progression game',
    status: 'Live on Google Play',
    statusTone: 'live',
    summary: 'A progression game built around collecting, earning, upgrades, mastery and long-term play.',
    description: [
      'Coinwell is a casual progression game centred on collecting, earning, upgrading and mastering a growing world. Its Beyond the Vault expansion adds themed collections, daily and weekly contracts, events, achievements, Legacy progression and an optional New Journey reset.',
      'The game is designed around clear goals and satisfying progress, with an offline-friendly core loop and rewarded advertising integrated into the economy. Existing player progress is preserved through the expansion save migration.',
      'Coinwell is published by GrowthOS and is live on Google Play.',
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'AsyncStorage', 'Google Mobile Ads', 'EAS Build'],
    highlights: ['Offline-friendly core gameplay and local saves', 'Vault collections, upgrades and mastery ranks', 'Daily and weekly contracts, Spotlight events and festivals', 'Achievements, Trophy Gallery and Legacy progression', 'Optional New Journey reset with retained legacy records'],
    publisher: 'GrowthOS',
  },
  {
    slug: 'lifeleague',
    name: 'LifeLeague',
    category: 'Life-simulation game',
    status: 'Release candidate',
    statusTone: 'development',
    summary: 'A multi-generation life simulator spanning childhood, career, family, business and legacy.',
    description: [
      'LifeLeague is a life-simulation game spanning childhood, career, family and legacy. Its simulation engine covers career mastery, specialisations, rare opportunities, football seasons and contracts, investments, businesses and generational storylines.',
      'The economy is server-authoritative, with a wallet ledger designed to prevent client-side cash fabrication. Cloud saves use optimistic concurrency, while age-up processing, rewarded-ad claims and premium purchase events are handled through server workflows.',
      'The project is at release-candidate stage.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Server-side game economy'],
    highlights: ['Approximately 1,900-line simulation engine', 'Career, football, investment and business systems', 'Server-authoritative wallet ledger', 'Cloud saves with optimistic concurrency', 'Rewarded-ad claims, premium webhook and 22 SQL migrations'],
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}
