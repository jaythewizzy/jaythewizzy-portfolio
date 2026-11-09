export type SagaVolume = {
  volume: number;
  title: string;
  stage: string;
  line: string;
  status: 'In progress' | 'Planned';
};

export const books = [
  {
    slug: 'the-second-life-of-julian-vale',
    title: 'The Second Life of Julian Vale',
    subtitle: 'Book One: Play the Game',
    status: 'Book One in progress',
    statusLabel: 'BOOK ONE · IN PROGRESS',
    format: 'Planned four-book saga',
    summary:
      'A character-led story about ambition, family, love, regret and the limits of control. After a lifetime spent building the future he thought he wanted, Julian “Jay” Vale gets another chance to live it differently.',
    synopsis: [
      'Julian “Jay” Vale grows up in Valemont, a fictional coastal city, carrying the familiar feeling that he is meant to do something extraordinary. He is intelligent, curious and ambitious, with interests that reach across business, technology, music, writing and storytelling.',
      'In his first life, Jay achieves much of what he once imagined. He builds businesses, creative ventures and influence, but success gradually pulls him away from the people and ordinary moments that give life its meaning. Family relationships become strained, love is neglected, friendships change and the future he built becomes harder to enjoy.',
      'Then Jay wakes on November 3 — his fifteenth birthday — with the memories of the life he has already lived. His father is alive, his family is together, and he has another chance. But knowing what happened before does not mean he can control what happens next. Each decision can change events and create consequences he never saw coming.',
      'At its heart, the saga asks a question larger than whether Jay can become successful again: can he build an extraordinary life without losing the people, purpose and ordinary moments that make it worth living?'
    ],
    centralIdea:
      'A man spends his first life trying to build an extraordinary future, only to discover that he neglected the ordinary moments that made life worth living. He gets another chance, but this time he must learn that knowing the future does not mean he can control it.',
    governingRule: 'You can change events. You cannot control consequences.',
    setting: {
      name: 'Valemont',
      description:
        'A fictional coastal city with two contrasting worlds: the old city of neighbourhoods, markets, schools, family homes and community life; and the newer city of glass towers, investment firms, hotels, entertainment companies and theatres. The city reflects Jay’s changing relationship with ambition and belonging.'
    },
    saga: [
      {
        volume: 1,
        title: 'Play the Game',
        stage: 'Regret',
        line: '“I should have.”',
        status: 'In progress'
      },
      {
        volume: 2,
        title: 'The Price of Winning',
        stage: 'Possibility',
        line: '“I can.”',
        status: 'Planned'
      },
      {
        volume: 3,
        title: 'Everything We Lose',
        stage: 'Consequence',
        line: '“I shouldn’t have tried to control everything.”',
        status: 'Planned'
      },
      {
        volume: 4,
        title: 'The Distance',
        stage: 'Purpose',
        line: '“Now I know why I’m here.”',
        status: 'Planned'
      }
    ] satisfies readonly SagaVolume[],
    themes: [
      'Family and being present for the people who matter',
      'Ambition, success and the cost of neglect',
      'Love, independence and earned trust',
      'Regret, time and the value of ordinary moments',
      'Creativity as the connection between different talents',
      'Action, direction and the limits of control'
    ],
    creativeThroughline:
      'Music, film, writing, technology, business, producing and theatre begin as separate interests in Jay’s life. Over time, he discovers that they are connected by one deeper impulse: creating something that makes other people feel something.',
    motifs: [
      'An old theatre that first shows Jay how one creation can move a room full of strangers.',
      'A melody that changes across the four books, from a simple piano idea to a full orchestral arrangement.',
      'November 3, the birthday that becomes the beginning of his second life.'
    ]
  }
] as const;

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}
