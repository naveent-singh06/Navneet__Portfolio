import type { Request, Response } from 'express';
import { handleContactSubmission } from '../services/contactService';

export async function postContact(req: Request, res: Response) {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'name, email and message are required.' });
  }
  await handleContactSubmission({ name, email, message });
  res.json({ success: true });
}
