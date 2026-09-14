import type { Request, Response } from 'express';

/**
 * Stubbed out on purpose. The portfolio's AI assistant is fully static
 * (see src/data/aiKnowledge.ts on the frontend) and does not call this
 * endpoint. Left here only as a placeholder for a possible future
 * real-LLM upgrade.
 */
export async function postAiQuery(_req: Request, res: Response) {
  res.status(501).json({
    success: false,
    message: 'Not implemented — the portfolio uses a static, local AI assistant on the frontend.',
  });
}
