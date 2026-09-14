import type { Request, Response } from 'express';
import { fetchPublicRepos } from '../services/githubService';

export async function getRepos(req: Request, res: Response) {
  const username = req.params.username || 'naveent-singh06';
  const repos = await fetchPublicRepos(username);
  res.json(repos);
}
