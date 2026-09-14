/** Tiny console logger — swap for pino/winston if this backend grows. */
export const logger = {
  info: (...args: unknown[]) => console.log('[info]', ...args),
  error: (...args: unknown[]) => console.error('[error]', ...args),
};
