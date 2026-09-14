export interface ContactLink {
  label: string;
  href: string;
  icon: string; // emoji or devicon class
  iconType: 'emoji' | 'devicon';
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:csds23026@glbitm.ac.in', icon: '✉️', iconType: 'emoji' },
  { label: 'Phone', href: 'tel:+919352395638', icon: '📞', iconType: 'emoji' },
  {
    label: 'GitHub',
    href: 'https://github.com/naveent-singh06',
    icon: 'devicon-github-original',
    iconType: 'devicon',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/navneet-singh-61977b191',
    icon: 'devicon-linkedin-plain colored',
    iconType: 'devicon',
    external: true,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Navneet_20singh/',
    icon: '🧩',
    iconType: 'emoji',
    external: true,
  },
];

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/naveent-singh06', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/navneet-singh-61977b191', external: true },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Navneet_20singh/', external: true },
  { label: 'Email', href: 'mailto:csds23026@glbitm.ac.in', external: false },
];
