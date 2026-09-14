export interface LeetcodeStat {
  icon: string;
  count?: number; // used for count-up
  staticValue?: string;
  label: string;
}

export interface TopicGroup {
  label: string;
  topics: { name: string; count: number }[];
}

export const leetcodeProfile = {
  handle: '@Navneet_20singh',
  badge: '🏅 50-Day Badge 2026',
  rank: 'Rank 1,334,441',
  profileUrl: 'https://leetcode.com/u/Navneet_20singh/',
};

export const leetcodeStats: LeetcodeStat[] = [
  { icon: '✅', count: 131, label: 'Problems solved' },
  { icon: '🌍', staticValue: '1,334,441', label: 'Global rank' },
  { icon: '🏅', staticValue: '50-Day', label: 'Badge — 2026' },
];

export const leetcodeTopicGroups: TopicGroup[] = [
  {
    label: 'ADVANCED',
    topics: [
      { name: 'Dynamic Programming', count: 9 },
      { name: 'Monotonic Stack', count: 8 },
      { name: 'Backtracking', count: 4 },
    ],
  },
  {
    label: 'INTERMEDIATE',
    topics: [
      { name: 'Hash Table', count: 31 },
      { name: 'Tree', count: 29 },
      { name: 'Binary Tree', count: 29 },
    ],
  },
  {
    label: 'FUNDAMENTAL',
    topics: [
      { name: 'Array', count: 54 },
      { name: 'String', count: 25 },
      { name: 'Two Pointers', count: 20 },
    ],
  },
];
