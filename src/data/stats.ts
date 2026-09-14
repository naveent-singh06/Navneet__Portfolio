export interface StatCell {
  count?: number;
  suffix?: string;
  staticValue?: string;
  label: string;
}

export const statsRow: StatCell[] = [
  { count: 150, suffix: '+', label: 'Students supported' },
  { count: 131, label: 'LeetCode problems solved' },
  { count: 2, label: 'Featured projects' },
  { staticValue: '7.0/10', label: 'CGPA' },
];
