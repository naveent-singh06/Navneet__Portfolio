import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT) || 4000,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  contactToEmail: process.env.CONTACT_TO_EMAIL || 'csds23026@glbitm.ac.in',
};
