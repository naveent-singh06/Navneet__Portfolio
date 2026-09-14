import './Preloader.css';
import { personal } from '../../data/personal';

interface PreloaderProps {
  done: boolean;
}

/** Full-screen splash shown before the hero entrance plays. */
export default function Preloader({ done }: PreloaderProps) {
  return (
    <div id="preloader" className={done ? 'done' : ''}>
      <div className="pl-name">{personal.name.toUpperCase()}</div>
      <div className="pl-role">{personal.role.toUpperCase()}</div>
      <div className="pl-bar" />
    </div>
  );
}
