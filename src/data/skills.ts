export interface CategoryMeta {
  label: string;
}

export type SkillCategory = 'all' | 'lang' | 'front' | 'back' | 'db' | 'tools' | 'data';

export interface Skill {
  name: string;
  cat: Exclude<SkillCategory, 'all'>;
  icon: string;
  level: number;
  label: string;
}

// Exact tech-stack data from the original portfolio (20 technologies).
export const stack: Skill[] = [
  { name: 'Python', cat: 'lang', icon: 'devicon-python-plain colored', level: 0.85, label: 'Confident' },
  { name: 'C', cat: 'lang', icon: 'devicon-c-plain colored', level: 0.7, label: 'Comfortable' },
  { name: 'C++', cat: 'lang', icon: 'devicon-cplusplus-plain colored', level: 0.85, label: 'Confident' },
  { name: 'JavaScript', cat: 'lang', icon: 'devicon-javascript-plain colored', level: 0.85, label: 'Confident' },
  { name: 'PHP', cat: 'lang', icon: 'devicon-php-plain colored', level: 0.6, label: 'Working knowledge' },
  { name: 'HTML5', cat: 'front', icon: 'devicon-html5-plain colored', level: 0.9, label: 'Confident' },
  { name: 'CSS3', cat: 'front', icon: 'devicon-css3-plain colored', level: 0.85, label: 'Confident' },
  { name: 'ReactJS', cat: 'front', icon: 'devicon-react-original colored', level: 0.8, label: 'Comfortable' },
  { name: 'TailwindCSS', cat: 'front', icon: 'devicon-tailwindcss-plain colored', level: 0.85, label: 'Confident' },
  { name: 'SQL', cat: 'db', icon: 'devicon-azuresqldatabase-plain colored', level: 0.75, label: 'Comfortable' },
  { name: 'MongoDB', cat: 'db', icon: 'devicon-mongodb-plain colored', level: 0.7, label: 'Comfortable' },
  { name: 'Pandas', cat: 'data', icon: 'devicon-pandas-original colored', level: 0.8, label: 'Comfortable' },
  { name: 'NumPy', cat: 'data', icon: 'devicon-numpy-original colored', level: 0.8, label: 'Comfortable' },
  { name: 'Matplotlib', cat: 'data', icon: 'devicon-matplotlib-plain colored', level: 0.7, label: 'Comfortable' },
  { name: 'Scikit-learn', cat: 'data', icon: 'devicon-scikitlearn-plain colored', level: 0.7, label: 'Comfortable' },
  { name: 'OpenCV', cat: 'data', icon: 'devicon-opencv-plain colored', level: 0.5, label: 'Fundamentals' },
  { name: 'Git', cat: 'tools', icon: 'devicon-git-plain colored', level: 0.85, label: 'Confident' },
  { name: 'GitHub', cat: 'tools', icon: 'devicon-github-original', level: 0.85, label: 'Confident' },
  { name: 'VS Code', cat: 'tools', icon: 'devicon-vscode-plain colored', level: 0.9, label: 'Confident' },
  { name: 'Linux', cat: 'tools', icon: 'devicon-linux-plain', level: 0.6, label: 'Fundamentals' },
];

export const catMeta: Record<SkillCategory, CategoryMeta> = {
  all: { label: 'All Technologies' },
  lang: { label: 'Languages' },
  front: { label: 'Frontend' },
  back: { label: 'Backend' },
  db: { label: 'Database' },
  tools: { label: 'DevTools' },
  data: { label: 'Data / ML' },
};

// Hero floating technology icons + their fixed positions.
export const heroFloatingIcons = [
  'devicon-react-original colored',
  'devicon-python-plain colored',
  'devicon-cplusplus-plain colored',
  'devicon-javascript-plain colored',
  'devicon-mongodb-plain colored',
  'devicon-github-original',
  'devicon-tailwindcss-plain colored',
  'devicon-mysql-plain colored',
];

export const heroFloatingIconPositions = [
  { top: '16%', left: '9%' },
  { top: '11%', left: '47%' },
  { top: '18%', left: '82%' },
  { top: '50%', left: '90%' },
  { top: '68%', left: '5%' },
  { top: '76%', left: '40%' },
  { top: '82%', left: '68%' },
  { top: '36%', left: '93%' },
];
