import { createContext, ReactNode, useContext } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeContextValue {
  themeId: string;
  applyTheme: (id: string, animate?: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Optional provider for components deeper in the tree that need to react
 * to the active theme. Not required today — ThemeSwitcher manages its own
 * state directly via useTheme() — but available for future features.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const value = useTheme();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within a ThemeProvider');
  return ctx;
}
