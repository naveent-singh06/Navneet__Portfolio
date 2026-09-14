import { useEffect, useRef } from 'react';
import { heroFloatingIconPositions, heroFloatingIcons } from '../data/skills';
import { useIsTouch } from '../hooks/useMediaQuery';

/** The hero's floating technology-icon orbs (`#icon-field`), including
 * their staggered entrance and cursor-parallax drift. */
export default function FloatingOrbs() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    field.innerHTML = '';

    const timeouts: number[] = [];
    heroFloatingIcons.forEach((cls, i) => {
      const pos = heroFloatingIconPositions[i];
      const el = document.createElement('div');
      el.className = 'tech-orb';
      el.style.top = pos.top;
      el.style.left = pos.left;
      el.style.animationDelay = `${0.7 + i * 0.45}s, ${0.7 + i * 0.45}s, ${0.7 + i * 0.45}s`;
      el.innerHTML = `<i class="${cls}"></i>`;
      field.appendChild(el);
      const id = window.setTimeout(() => el.classList.add('in'), i * 90);
      timeouts.push(id);
    });

    if (isTouch) return () => timeouts.forEach(clearTimeout);

    const onMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      field.style.transform = `translate(${nx * -16}px, ${ny * -16}px)`;
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isTouch]);

  return <div id="icon-field" ref={fieldRef} />;
}
