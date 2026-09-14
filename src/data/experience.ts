export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  responsibilities: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Founder & Faculty',
    org: 'Arya Pathshala — Greater Noida, India',
    period: '2023 — Present',
    responsibilities: [
      'Founded and run an educational initiative teaching Mathematics, Science and Computer Skills',
      'Manage day-to-day operations of the initiative',
      'Design curriculum for students across levels',
      'Communicate directly with students and parents',
      'Organize extracurricular and cultural activities',
    ],
  },
];
