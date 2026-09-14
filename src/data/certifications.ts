export interface Certification {
  name: string;
  description: string;
  period: string;
}

export const certifications: Certification[] = [
  {
    name: 'Python Certification',
    description: 'Fundamentals, OOP, and Data Analysis Libraries',
    period: 'SEP – OCT 2024',
  },
  {
    name: 'MongoDB Certification',
    description: 'NoSQL Database Design and Querying',
    period: '',
  },
];
