import { useEffect, type RefObject } from 'react';
import { useIsTouch } from './useMediaQuery';

/**
 * Drives the custom cursor dot + ring: the ring eases toward the mouse
 * position every frame, and both elements are hidden entirely on touch
 * devices (matching the original CSS + JS behaviour).
 */
export function useCustomCursor(
  dotRef: RefObject<HTMLDivElement>,
  ringRef: RefObject<HTMLDivElement>
) {
  const isTouch = useIsTouch();

  useEffect(() => {
    if (isTouch) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0,
      ry = 0,
      mx = 0,
      my = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    window.addEventListener('mousemove', onMouseMove);

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(loop);
    };
    loop();

    const hoverTargets = Array.from(document.querySelectorAll<HTMLElement>('a,button,.magnetic'));
    const previewTargets = Array.from(document.querySelectorAll<HTMLElement>('.proj-preview'));

    const onEnter = () => {
      ring.classList.add('hover');
      ring.textContent = '';
    };
    const onLeave = () => {
      ring.classList.remove('hover');
      ring.textContent = '';
    };
    const onPreviewEnter = () => {
      ring.classList.add('hover');
      ring.textContent = 'VIEW';
    };
    const onPreviewLeave = () => {
      ring.classList.remove('hover');
      ring.textContent = '';
    };

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    previewTargets.forEach((el) => {
      el.addEventListener('mouseenter', onPreviewEnter);
      el.addEventListener('mouseleave', onPreviewLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      previewTargets.forEach((el) => {
        el.removeEventListener('mouseenter', onPreviewEnter);
        el.removeEventListener('mouseleave', onPreviewLeave);
      });
    };
  }, [isTouch, dotRef, ringRef]);
}
