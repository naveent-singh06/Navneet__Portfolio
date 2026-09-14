/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Extract every #rrggbb hex color from a CSS gradient string, in order. */
export function extractHexColors(css: string): string[] {
  return css.match(/#[0-9a-f]{6}/gi) || [];
}
