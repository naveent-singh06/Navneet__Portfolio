export interface EducationFact {
  key: string;
  value: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  facts: EducationFact[];
}

export const education: EducationEntry = {
  degree: 'B.E. Computer Science & Engineering (Data Science)',
  institution: 'GL Bajaj Institute of Technology and Management',
  facts: [
    { key: 'EXPECTED GRADUATION', value: 'September 2027' },
    { key: 'CGPA', value: '7.0 / 10.0' },
    { key: 'LOCATION', value: 'Greater Noida, India' },
  ],
};
