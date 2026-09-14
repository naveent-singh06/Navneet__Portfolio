import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useMediaQuery';

declare global {
  interface Window {
    Lenis?: any;
  }
}

/**
 * Initializes Lenis smooth-scrolling (loaded via CDN in index.html) and
 * wires it into the GSAP ticker + ScrollTrigger exactly like the original
 * inline script. Returns a ref to the live Lenis instance (or null).
 */
export function useLenisScroll() {
  const lenisRef = useRef<any>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !window.Lenis) return;

    const lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    }

    return () => {
      lenis.destroy?.();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  return lenisRef;
}
