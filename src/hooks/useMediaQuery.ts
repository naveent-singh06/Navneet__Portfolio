import { useEffect, useState } from 'react';

/** Tracks a CSS media query, matching the original `matchMedia` checks used
 * throughout the vanilla-JS version (e.g. `(max-width:860px)`). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const listener = () => setMatches(mql.matches);
    listener();
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

/** Replicates `isTouch` from the original script: small viewport or a touch device. */
export function useIsTouch(): boolean {
  const isNarrow = useMediaQuery('(max-width:860px)');
  const [hasTouch] = useState(() => typeof window !== 'undefined' && 'ontouchstart' in window);
  return isNarrow || hasTouch;
}

/** Replicates `reduceMotion` from the original script. */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
