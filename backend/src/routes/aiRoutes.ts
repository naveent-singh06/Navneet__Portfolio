import { Router } from 'express';
import { postAiQuery } from '../controllers/aiController';

const router = Router();
router.post('/query', postAiQuery);

export default router;
