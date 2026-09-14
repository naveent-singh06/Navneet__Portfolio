import { Router } from 'express';
import { getRepos } from '../controllers/githubController';

const router = Router();
router.get('/repos/:username?', getRepos);

export default router;
