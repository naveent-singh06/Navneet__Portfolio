// Navneet's AI Assistant knowledge base — exact content from the original
// static/local assistant. This is NOT a real LLM call; it is simple
// keyword-matched canned responses, preserved as-is.

export type KnowledgeKey =
  | 'intro'
  | 'skills'
  | 'techstack'
  | 'projects'
  | 'experience'
  | 'education'
  | 'leetcode'
  | 'github'
  | 'contact';

export const knowledgeBase: Record<KnowledgeKey, string> = {
  intro:
    "Navneet Singh is a Software Developer and final-year B.E. CSE (Data Science) student at GL Bajaj Institute of Technology and Management, Greater Noida. He's open to Software Developer or Software Support Engineer internships.",
  skills:
    'Languages: Python, C, C++, JavaScript, PHP, SQL. Frontend: HTML5, CSS3, ReactJS, TailwindCSS. Data/ML: Pandas, NumPy, Matplotlib, Scikit-learn, OpenCV. Tools: Git, GitHub, VS Code, Linux.',
  techstack:
    "Navneet's stack spans 20 technologies across Languages, Frontend, Database, DevTools and Data/ML — from Python and C++ to React, TailwindCSS, MongoDB and Scikit-learn. Type /skills for the full list.",
  projects:
    "Two featured builds: 'OS Lab Simulator' — a React CPU-scheduling visualizer (FCFS, SJF, SRJF, Priority, Round Robin) with Gantt charts, and 'Next Gen Class' — a Python/Scikit-learn pipeline predicting student performance from attendance and marks data.",
  experience:
    'Since 2023 Navneet has been Founder & Faculty at Arya Pathshala, an educational initiative in Greater Noida teaching Mathematics, Science and Computer Skills, handling curriculum, operations and parent communication.',
  education:
    'B.E. Computer Science & Engineering (Data Science) at GL Bajaj Institute of Technology and Management. Expected graduation September 2027, CGPA 7.0/10.0.',
  leetcode:
    'On LeetCode (u/Navneet_20singh) Navneet has solved 131 problems, holds the 50-Day Badge 2026, and global rank 1,334,441. Strongest areas: Array, String, Hash Table, Tree and growing Dynamic Programming practice.',
  github:
    "Navneet's GitHub is github.com/naveent-singh06 — that's where the OS Lab Simulator and Next Gen Class repos live.",
  contact:
    'You can reach Navneet at csds23026@glbitm.ac.in, call +91 93523 95638, or connect on LinkedIn (navneet-singh-61977b191) and GitHub (naveent-singh06).',
};

export const welcomeMessage =
  "👋 Hi! I'm Navneet's AI assistant. Type '/' to see available commands or ask me anything about Navneet!";

export const fallbackMessage = "I don't have that information in Navneet's portfolio.";

export const osLabDetailMessage =
  'OS Lab Simulator is a React + JavaScript + TailwindCSS CPU scheduling visualizer covering FCFS, SJF, SRJF, Priority and Round Robin, with step-by-step execution and Gantt charts. Built FEB–JUL 2025.';

export const nextGenClassDetailMessage =
  'Next Gen Class is a Python (Pandas, NumPy, Scikit-learn) pipeline that predicts student performance from attendance, marks and study-pattern data. Built JAN–MAR 2024.';

export interface QuickCommand {
  cmd: string;
  emoji: string;
}

export const quickCommands: QuickCommand[] = [
  { cmd: '/intro', emoji: '🤖' },
  { cmd: '/skills', emoji: '🧠' },
  { cmd: '/projects', emoji: '💻' },
  { cmd: '/experience', emoji: '💼' },
  { cmd: '/education', emoji: '🎓' },
  { cmd: '/leetcode', emoji: '🧩' },
  { cmd: '/github', emoji: '🐙' },
  { cmd: '/contact', emoji: '✉️' },
  { cmd: '/techstack', emoji: '🛠️' },
];

/**
 * Resolves a raw user query into a canned response, exactly replicating the
 * original keyword-matching logic (including the special-cased project
 * name lookups for the two featured projects).
 */
export function resolveAiResponse(rawQuery: string): string {
  const q = rawQuery.trim();
  if (!q) return '';
  const lower = q.toLowerCase().replace('/', '');

  if (lower.includes('os lab') || lower.includes('scheduling simulator')) {
    return osLabDetailMessage;
  }
  if (lower.includes('next gen')) {
    return nextGenClassDetailMessage;
  }

  let key: KnowledgeKey | null = null;
  if ((knowledgeBase as Record<string, string>)[lower]) {
    key = lower as KnowledgeKey;
  } else if (lower.includes('who is') || lower.includes('intro')) {
    key = 'intro';
  } else if (lower.includes('skill') || lower.includes('technolog') || lower.includes('tech stack')) {
    key = lower.includes('stack') ? 'techstack' : 'skills';
  } else if (lower.includes('project')) {
    key = 'projects';
  } else if (lower.includes('experience') || lower.includes('arya') || lower.includes('work')) {
    key = 'experience';
  } else if (lower.includes('education') || lower.includes('college') || lower.includes('cgpa') || lower.includes('degree')) {
    key = 'education';
  } else if (lower.includes('leetcode') || lower.includes('dsa') || lower.includes('rank')) {
    key = 'leetcode';
  } else if (lower.includes('github')) {
    key = 'github';
  } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) {
    key = 'contact';
  }

  return key ? knowledgeBase[key] : fallbackMessage;
}
