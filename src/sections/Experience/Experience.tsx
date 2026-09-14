import { Card } from '../../components/common';
import { experience } from '../../data/experience';

/** Timeline card for work/founder experience (left column of the grid). */
export default function Experience() {
  return (
    <>
      {experience.map((e) => (
        <Card reveal className="timeline-card" key={e.role}>
          <div className="tl-top">
            <span className="tl-dot" />
            <div>
              <h3>{e.role}</h3>
              <div className="tl-org">{e.org}</div>
            </div>
            <span className="tl-period">{e.period}</span>
          </div>
          <ul className="tl-resp">
            {e.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </Card>
      ))}
    </>
  );
}
