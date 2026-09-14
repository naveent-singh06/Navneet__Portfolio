import { apiPost } from './api';

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

/**
 * Sends a contact-form submission to the optional backend
 * (`POST /api/contact`, see backend/src/routes/contactRoutes.ts).
 * Not currently wired to any UI — the portfolio's Contact section only
 * exposes direct mailto/tel/social links, exactly as in the original.
 */
export async function submitContactForm(payload: ContactFormPayload): Promise<{ success: boolean }> {
  return apiPost('/api/contact', payload);
}
