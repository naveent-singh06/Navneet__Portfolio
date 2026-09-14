/**
 * Optional proxy for the GitHub API, useful if you later want to show
 * live repo stats (stars, last commit, etc.) without exposing a token
 * in the frontend. Not currently called by anything.
 */
export async function fetchPublicRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}
