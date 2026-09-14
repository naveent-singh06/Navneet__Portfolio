export interface ThemeDef {
  id: string;
  label: string;
  swatch: string;
}

// Preserves all 10 existing live themes exactly as in the original portfolio.
export const THEMES: ThemeDef[] = [
  { id: 'cyber', label: 'Cyber Blue', swatch: 'linear-gradient(135deg,#3b7bff,#22d3ee)' },
  { id: 'purple', label: 'Neon Purple', swatch: 'linear-gradient(135deg,#9b4dff,#e14dff)' },
  { id: 'matrix', label: 'Matrix Green', swatch: 'linear-gradient(135deg,#0f7a3d,#39ff88)' },
  { id: 'ocean', label: 'Ocean', swatch: 'linear-gradient(135deg,#0f4a7a,#5eead4)' },
  { id: 'gold', label: 'Royal Gold', swatch: 'linear-gradient(135deg,#3d4dc0,#ffd76a)' },
  { id: 'crimson', label: 'Crimson Night', swatch: 'linear-gradient(135deg,#7a1330,#ff7a3d)' },
  { id: 'aurora', label: 'Aurora', swatch: 'linear-gradient(135deg,#6a7bff,#ff6ec7)' },
  { id: 'emerald', label: 'Emerald Glass', swatch: 'linear-gradient(135deg,#189b76,#7cf6c8)' },
  { id: 'sunset', label: 'Sunset Neon', swatch: 'linear-gradient(135deg,#ff5fa2,#ff9451)' },
  { id: 'light', label: 'White Glass', swatch: 'linear-gradient(135deg,#3b7bff,#9b5cf6)' },
];

export const DEFAULT_THEME = 'cyber';
export const THEME_STORAGE_KEY = 'nv-theme';
