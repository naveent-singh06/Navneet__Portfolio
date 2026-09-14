import { logger } from '../utils/logger';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

/**
 * Placeholder contact-form handler. Currently just logs the submission —
 * plug in a real email provider (SMTP/SendGrid/Resend/etc.) here when
 * you're ready to accept messages through the site instead of mailto:.
 */
export async function handleContactSubmission(payload: ContactPayload): Promise<void> {
  logger.info('Contact form submission received:', payload);
  // TODO: send email via SMTP/SendGrid/Resend, or store in a database.
}
