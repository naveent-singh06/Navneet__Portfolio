import { useCallback, useState } from 'react';
import './Navbar.css';
import { navItems } from '../../data/navigation';
import { personal } from '../../data/personal';
import ThemeSwitcher from '../ThemeSwitcher';
import MobileMenu from '../MobileMenu';
import { useLenisScroll } from '../../hooks/useLenisScroll';
import { useNavScrollSpy } from '../../hooks/useNavScrollSpy';

/** Fixed top navigation: NAVNEET wordmark, pill-highlighted links, theme
 * switcher, "Say hello" CTA, and the mobile menu toggle. */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenisRef = useLenisScroll();
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  useNavScrollSpy(lenisRef, closeMobileMenu);

  return (
    <>
      <nav id="nav">
        <div className="wrap">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo">
              <span className="logo-glow" />
              <span className="logo-ring" />
              <span className="logo-text">
                <span className="logo-nav">NAV</span>
                <span className="logo-neet">NEET</span>
              </span>
            </a>
            <ul className="nav-links" id="navLinks">
              <span className="nav-pill" id="navPill" />
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <a href={item.href} data-nav className={i === 0 ? 'active' : ''}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ThemeSwitcher />
              <a href={`mailto:${personal.email}`} className="nav-cta">
                Say hello
              </a>
              <button
                className="nav-toggle"
                id="navToggle"
                aria-label="Open menu"
                onClick={() => setMobileOpen((o) => !o)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu open={mobileOpen} />
    </>
  );
}
