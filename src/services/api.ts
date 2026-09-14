/**
 * Minimal fetch wrapper for talking to the optional backend (see /backend).
 * The frontend does NOT depend on this at runtime — the AI assistant is
 * fully static/local (see src/data/aiKnowledge.ts) and every other feature
 * runs client-side only. This exists so a real backend feature (e.g. the
 * contact form) can be wired in later without touching component code.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`Request to ${path} failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}
