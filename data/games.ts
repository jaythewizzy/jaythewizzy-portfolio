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
};

export const games: Game[] = [
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
