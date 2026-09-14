import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_THEME, THEME_STORAGE_KEY } from '../data/themes';

/**
 * Theme state, backed by `data-theme` on <html> and localStorage — the same
 * mechanism the original inline script used (`root.setAttribute('data-theme', id)`).
 */
export function useTheme() {
  const [themeId, setThemeId] = useState<string>(() => {
    if (typeof window === 'undefined') return DEFAULT_THEME;
    return localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  }, [themeId]);

  const applyTheme = useCallback((id: string, animate = true) => {
    if (animate) {
      document.documentElement.style.setProperty('transition', 'background .6s var(--ease)');
    }
    setThemeId(id);
  }, []);

  return { themeId, applyTheme };
}
