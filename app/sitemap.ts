import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { games } from '@/data/games';
import { books } from '@/data/books';
import { musicReleases } from '@/data/music';
import { apps } from '@/data/apps';

export const dynamic = 'force-static';

const base = 'https://jaythewizzy.com';

function withTrailingSlash(path: string): string {
  if (path === '/') return '/';
  return `${path.replace(/\/+$/, '')}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '', '/about', '/technology', '/studio', '/projects', '/games', '/music', '/books',
    '/media', '/film-tv', '/contact', '/cv', '/apps', '/play', '/investors', '/wizzy-lux-global-concepts',
  ];
  const detailRoutes = [
    ...projects.map((project) => `/projects/${project.slug}`),
    ...games.map((game) => `/games/${game.slug}`),
    ...books.map((book) => `/books/${book.slug}`),
    ...musicReleases.map((release) => `/music/${release.slug}`),
    ...apps.map((app) => `/apps/${app.slug}`),
  ];

  return [...staticRoutes, ...detailRoutes].map((route) => {
    const path = withTrailingSlash(route || '/');

    return {
      url: new URL(path, base).toString(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : route.split('/').length > 2 ? 0.65 : 0.8,
    };
  });
}
