import type { NextFunction, Request, Response } from 'express';

// Very small in-memory rate limiter (per-IP) to protect the contact
// endpoint from spam. Swap for `express-rate-limit` if traffic grows.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

export function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || 'unknown';
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) {
    return res.status(429).json({ success: false, message: 'Too many requests, please try again shortly.' });
  }
  timestamps.push(now);
  hits.set(ip, timestamps);
  next();
}
