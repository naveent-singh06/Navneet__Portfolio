/**
 * Placeholder for a *real* LLM-backed assistant, should you ever want to
 * upgrade from the current static/local AI assistant (see
 * src/data/aiKnowledge.ts on the frontend). Intentionally unimplemented —
 * the existing assistant does not call any external AI API and this file
 * must not be wired in without an explicit decision to add one.
 */
export async function generateAiReply(_message: string): Promise<string> {
  throw new Error('Not implemented: the portfolio currently uses a static, local AI assistant.');
}
