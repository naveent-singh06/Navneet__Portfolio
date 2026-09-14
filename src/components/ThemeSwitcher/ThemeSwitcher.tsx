import { useEffect, useRef, useState } from 'react';
import './ThemeSwitcher.css';
import { THEMES } from '../../data/themes';
import { useTheme } from '../../hooks/useTheme';

/** The 🎨 nav button + its "choose a theme" panel — all 10 live themes. */
export default function ThemeSwitcher() {
  const { themeId, applyTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const panel = panelRef.current;
      const btn = btnRef.current;
      if (!panel || !btn) return;
      if (!panel.contains(e.target as Node) && e.target !== btn) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        className="theme-btn"
        id="themeBtn"
        aria-label="Change theme"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        🎨
      </button>
      <div id="themePanel" ref={panelRef} className={open ? 'open' : ''}>
        <div className="tp-title">CHOOSE A THEME</div>
        <div className="theme-grid" id="themeGrid">
          {THEMES.map((t) => {
            const glowMatch = t.swatch.match(/#[0-9a-f]{6}/gi);
            const swGlow = (glowMatch?.[1] || '#3b7bff') + '66';
            return (
              <button
                key={t.id}
                className={`theme-swatch${themeId === t.id ? ' active' : ''}`}
                data-theme-id={t.id}
                style={{ ['--sw-glow' as any]: swGlow }}
                onClick={() => applyTheme(t.id, true)}
              >
                <span className="sw-dot" style={{ background: t.swatch }} />
                <span className="sw-label">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
