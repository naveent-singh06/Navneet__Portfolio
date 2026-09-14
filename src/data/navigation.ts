export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Projects', href: '#projects' },
  { label: 'LeetCode', href: '#leetcode' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// section ids used for scroll-spy, in document order
export const sectionIds = [
  'hero',
  'about',
  'techstack',
  'projects',
  'leetcode',
  'experience',
  'contact',
];
