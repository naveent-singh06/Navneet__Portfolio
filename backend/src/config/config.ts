import { env } from './env';

export const config = {
  ...env,
  isProduction: process.env.NODE_ENV === 'production',
};
