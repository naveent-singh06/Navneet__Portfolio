import { Card } from '../../components/common';
import { certifications } from '../../data/certifications';

/** Certifications list card (right column, bottom). */
export default function Certifications() {
  return (
    <Card reveal className="cert-card">
      <h4>CERTIFICATIONS</h4>
      {certifications.map((c) => (
        <div className="cert-item" key={c.name}>
          <div>
            <div className="cn">{c.name}</div>
            <div className="cd">{c.description}</div>
          </div>
          <span className="cp">{c.period}</span>
        </div>
      ))}
    </Card>
  );
}
