import { Card } from '../../components/common';
import { education } from '../../data/education';

/** Degree card (right column, top) — degree, institution, key facts. */
export default function Education() {
  return (
    <Card reveal className="edu-card">
      <div className="ed-deg">{education.degree}</div>
      <div className="ed-major">{education.institution}</div>
      <div className="edu-facts">
        {education.facts.map((f) => (
          <div className="ef-row" key={f.key}>
            <span className="k">{f.key}</span>
            <span>{f.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
