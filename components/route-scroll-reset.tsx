'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Keep route navigation predictable by returning the document to the top
 * whenever the pathname changes. The initial page load and same-page hash
 * navigation are left untouched.
 */
export function RouteScrollReset() {
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (previousPathname.current === null) {
      previousPathname.current = pathname;
      return;
    }

    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    // Run on the next frame so this wins over the router's own scroll handling.
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
