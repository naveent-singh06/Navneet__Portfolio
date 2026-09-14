export interface ProjectPreviewCpu {
  type: 'cpu';
  processes: { id: string; burst: string }[];
  ganttLabel: string;
  ganttBlocks: { p: string; w: number; c: string }[];
  ganttAxis: string[];
}

export interface ProjectPreviewMl {
  type: 'ml';
  stages: [string, string][]; // [emoji, label]
}

export interface Project {
  period: string;
  title: string;
  description: string;
  pills: string[];
  features: string[];
  githubUrl: string;
  preview: ProjectPreviewCpu | ProjectPreviewMl;
}

export const projects: Project[] = [
  {
    period: 'FEB 2025 — JUL 2025',
    title: 'OS Lab Simulator',
    description:
      'An interactive CPU scheduling simulator built to make five classic scheduling algorithms tangible — step through execution and watch the Gantt chart build in real time.',
    pills: ['React', 'JavaScript', 'TailwindCSS'],
    features: [
      'FCFS, SJF, SRJF',
      'Priority, Round Robin',
      'Step-by-step execution',
      'Gantt chart visualization',
      'Turnaround & waiting time',
      'Algorithm documentation',
    ],
    githubUrl: 'https://github.com/naveent-singh06',
    preview: {
      type: 'cpu',
      processes: [
        { id: 'P1', burst: 'Burst 6' },
        { id: 'P2', burst: 'Burst 3' },
        { id: 'P3', burst: 'Burst 8' },
        { id: 'P4', burst: 'Burst 4' },
      ],
      ganttLabel: 'Round Robin — Gantt chart',
      ganttBlocks: [
        { p: 'P2', w: 14, c: 'linear-gradient(90deg,#22d3ee,#3b7bff)' },
        { p: 'P1', w: 24, c: 'linear-gradient(90deg,#3b7bff,#5b6cf9)' },
        { p: 'P4', w: 16, c: 'linear-gradient(90deg,#5b6cf9,#9b5cf6)' },
        { p: 'P3', w: 32, c: 'linear-gradient(90deg,#9b5cf6,#c084fc)' },
        { p: 'P1', w: 14, c: 'linear-gradient(90deg,#3b7bff,#5b6cf9)' },
      ],
      ganttAxis: ['0', '5', '10', '15', '21'],
    },
  },
  {
    period: 'JAN 2024 — MAR 2024',
    title: 'Next Gen Class',
    description:
      'A machine-learning pipeline that predicts student performance from attendance, marks and study-pattern data — turning raw records into an early-warning signal.',
    pills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    features: [
      'Data cleaning pipeline',
      'Feature engineering',
      'Model training',
      'Evaluation & scoring',
      'Attendance + marks inputs',
      'Performance prediction',
    ],
    githubUrl: 'https://github.com/naveent-singh06',
    preview: {
      type: 'ml',
      stages: [
        ['📥', 'Data'],
        ['🧹', 'Clean'],
        ['🧬', 'Features'],
        ['🧠', 'Train'],
        ['📊', 'Eval'],
        ['🎯', 'Predict'],
      ],
    },
  },
];
