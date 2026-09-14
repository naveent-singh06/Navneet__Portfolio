import './Contact.css';
import { Card } from '../../components/common';
import { contactLinks } from '../../data/contact';

/** Final "let's build something" CTA card with contact links. */
export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Card reveal className="contact-card">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="bar" /> CONTACT
          </div>
          <h2>Let's build something that actually works.</h2>
          <p>Reach out for internship opportunities, collaboration, or just to talk about scheduling algorithms.</p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener' : undefined}
                className="clink magnetic"
              >
                {link.iconType === 'emoji' ? link.icon : <i className={link.icon} />} {link.label}
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
