import type { DependencyList } from 'react';
import { useEffect, useRef, type RefObject } from 'react';

/**
 * Attach to a container ref; animates every descendant `[data-count]`
 * element from 0 to its target once it scrolls into view, identical to the
 * original IntersectionObserver-based count-up.
 */
export function useCountUp(containerRef: RefObject<HTMLElement>, deps: DependencyList = []) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>('[data-count]');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.count || '0');
          const suffix = el.dataset.suffix || '';
          let cur = 0;
          const step = Math.max(target / 60, 1);
          const tick = () => {
            cur += step;
            if (cur >= target) {
              el.textContent = target + suffix;
              return;
            }
            el.textContent = Math.floor(cur) + suffix;
            requestAnimationFrame(tick);
          };
          tick();
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
