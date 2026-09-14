import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  reveal?: boolean;
  className?: string;
}

/** The repeated eyebrow + title + description block at the top of each section. */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  reveal = true,
  className = 'sec-head',
}: SectionHeaderProps) {
  return (
    <div className={`${className}${reveal ? ' reveal' : ''}`}>
      <div className="eyebrow">
        <span className="bar" /> {eyebrow}
      </div>
      <h2 className="sec-title">{title}</h2>
      {description && <p className="sec-desc">{description}</p>}
    </div>
  );
}
