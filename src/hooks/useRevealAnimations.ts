import { useEffect, type DependencyList } from 'react';
import { useReducedMotion } from './useMediaQuery';

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

/**
 * Scroll-reveal for every `.reveal` element, exactly mirroring the original
 * behaviour: GSAP + ScrollTrigger fade/slide-in when available (loaded via
 * CDN in index.html), otherwise elements are simply made visible.
 * Re-runs whenever `deps` changes (e.g. after data-driven sections mount).
 */
export function useRevealAnimations(deps: DependencyList = []) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      const triggers = gsap.utils.toArray('.reveal').map((el: Element, i: number) =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          delay: reduceMotion ? 0 : (i % 4) * 0.05,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      );
      return () => {
        triggers.forEach((tw: any) => tw.scrollTrigger && tw.scrollTrigger.kill());
      };
    }

    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
