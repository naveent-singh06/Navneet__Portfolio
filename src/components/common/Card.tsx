import { HTMLAttributes } from 'react';
import './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  reveal?: boolean;
}

/** Shared glass "card" surface used across About, Projects, LeetCode, etc. */
export default function Card({ reveal, className = '', children, ...rest }: CardProps) {
  const classes = ['card', reveal ? 'reveal' : '', className].filter(Boolean).join(' ');
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
