import './Hero.css';
import { personal } from '../../data/personal';
import { NetworkBackground, FloatingOrbs } from '../../background';

interface HeroProps {
  playEntrance: boolean;
}

/** The full-viewport hero: live canvas network, glow blobs, floating tech
 * icons, and the staggered name/role entrance animation. */
export default function Hero({ playEntrance }: HeroProps) {
  return (
    <section id="hero">
      <NetworkBackground />
      <div className="hero-glow-a" />
      <div className="hero-glow-b" />
      <div className="hero-glow-c" />
      <FloatingOrbs />
      <div className={`wrap hero-inner${playEntrance ? ' hero-play' : ''}`} id="heroPlay">
        <div className="hero-kicker">
          <span className="dot" /> {personal.heroKicker}
        </div>
        <h1 className="hero-title">
          <span className="hero-hi">Hi, I'm</span>
          <span className="line-name">{personal.name.toUpperCase()}</span>
          <span className="line2">{personal.role}</span>
        </h1>
        <p className="hero-sub">{personal.heroSub}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary magnetic">
            View Projects <span className="arr">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost magnetic">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
