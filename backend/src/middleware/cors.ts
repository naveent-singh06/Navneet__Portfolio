import cors from 'cors';
import { config } from '../config/config';

export const corsMiddleware = cors({ origin: config.corsOrigin });
