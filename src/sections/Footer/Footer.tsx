import './Footer.css';
import { personal } from '../../data/personal';
import { footerLinks } from '../../data/contact';

/** Site footer: brand mark, quick links, copyright. */
export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <div className="fb-name">NAVNEET</div>
          <div className="fb-role">
            {personal.role} · {personal.location}
          </div>
        </div>
        <div className="footer-links">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="footer-copy">© 2026 Navneet Singh</div>
      </div>
    </footer>
  );
}
