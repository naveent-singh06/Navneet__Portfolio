import express from 'express';
import { config } from './config/config';
import { corsMiddleware } from './middleware/cors';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';
import contactRoutes from './routes/contactRoutes';
import githubRoutes from './routes/githubRoutes';
import aiRoutes from './routes/aiRoutes';

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Optional routes — the frontend does not call any of these by default.
app.use('/api/contact', contactRoutes);
app.use('/api/github', githubRoutes);
app.use('/api/ai', aiRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  logger.info(`Backend listening on http://localhost:${config.port}`);
});
