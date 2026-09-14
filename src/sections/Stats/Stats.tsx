import { useRef } from 'react';
import './Stats.css';
import { Card } from '../../components/common';
import { statsRow } from '../../data/stats';
import { useCountUp } from '../../hooks/useCountUp';

/** The four-stat highlight row between Education and Contact. */
export default function Stats() {
  const rowRef = useRef<HTMLDivElement>(null);
  useCountUp(rowRef);

  return (
    <section id="stats">
      <div className="wrap">
        <div className="stats-row" ref={rowRef}>
          {statsRow.map((s) => (
            <Card reveal className="stat-cell" key={s.label}>
              {s.count !== undefined ? (
                <div className="cnum" data-count={s.count} data-suffix={s.suffix || undefined}>
                  0
                </div>
              ) : (
                <div className="cnum" data-static={s.staticValue}>
                  {s.staticValue}
                </div>
              )}
              <div className="clabel">{s.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
