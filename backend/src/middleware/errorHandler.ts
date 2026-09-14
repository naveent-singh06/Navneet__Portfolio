import type { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  logger.error(err);
  res.status(500).json({ success: false, message: 'Internal server error' });
}
