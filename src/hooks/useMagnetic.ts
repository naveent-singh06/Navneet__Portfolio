import { useEffect, type DependencyList } from 'react';
import { useIsTouch } from './useMediaQuery';

/**
 * Applies the original "magnetic buttons" effect to every `.magnetic`
 * element: it nudges toward the cursor on mousemove and resets on leave.
 */
export function useMagnetic(deps: DependencyList = []) {
  const isTouch = useIsTouch();

  useEffect(() => {
    if (isTouch) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.magnetic'));

    const handlers = els.map((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      return { el, onMove, onLeave };
    });

    return () => {
      handlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch, ...deps]);
}
