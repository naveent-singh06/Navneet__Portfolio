import { useEffect, type RefObject } from 'react';
import { useReducedMotion } from './useMediaQuery';
import { sectionIds } from '../data/navigation';

/**
 * Replicates the original nav behaviour in one place:
 *  - moving pill highlight under the active link
 *  - smooth-scrolling on `[data-nav]` / `[data-mm]` clicks (via Lenis when present)
 *  - scroll-spy that keeps the active link in sync with the visible section
 *  - closing the mobile menu after a nav click
 */
export function useNavScrollSpy(lenisRef: RefObject<any>, closeMobileMenu: () => void) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('#navLinks a'));
    const pill = document.getElementById('navPill');
    if (!pill || links.length === 0) return;

    function place(el: HTMLElement) {
      pill!.style.width = el.offsetWidth + 'px';
      pill!.style.transform = `translateX(${el.offsetLeft - 4}px)`;
    }
    function setActive(el: HTMLElement) {
      links.forEach((l) => l.classList.remove('active'));
      el.classList.add('active');
      place(el);
    }

    setActive(links[0]);

    const onResize = () => {
      const current = document.querySelector<HTMLElement>('#navLinks a.active');
      if (current) setActive(current);
    };
    window.addEventListener('resize', onResize);

    const navAndMobileLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('[data-nav],[data-mm]')
    );
    const onLinkClick = (e: Event) => {
      e.preventDefault();
      const a = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector<HTMLElement>(a.getAttribute('href') || '');
      closeMobileMenu();
      if (!target) return;
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target, { offset: -40 });
      } else {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    };
    navAndMobileLinks.forEach((a) => a.addEventListener('click', onLinkClick));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const onScroll = () => {
      let current = sections[0];
      sections.forEach((s) => {
        if (window.scrollY + 160 >= s.offsetTop) current = s;
      });
      if (!current) return;
      const link = document.querySelector<HTMLAnchorElement>(`#navLinks a[href="#${current.id}"]`);
      if (link && !link.classList.contains('active')) setActive(link);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      navAndMobileLinks.forEach((a) => a.removeEventListener('click', onLinkClick));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);
}
