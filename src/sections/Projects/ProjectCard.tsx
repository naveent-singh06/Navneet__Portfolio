import { Fragment, useEffect, useRef } from 'react';
import type { Project } from '../../data/projects';
import { Card } from '../../components/common';

interface ProjectCardProps {
  project: Project;
}

/** One project card: preview visualization (CPU Gantt or ML pipeline) + details. */
export default function ProjectCard({ project }: ProjectCardProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Cycles the "active" stage in the ML pipeline preview every 900ms,
  // exactly like the original setInterval-driven animation.
  useEffect(() => {
    if (project.preview.type !== 'ml') return;
    const row = rowRef.current;
    if (!row) return;
    const stageCount = project.preview.stages.length;
    let i = 0;
    const id = setInterval(() => {
      row.querySelectorAll('.ml-stage').forEach((el) => el.classList.remove('active'));
      row.querySelector(`.ml-stage[data-i="${i}"]`)?.classList.add('active');
      i = (i + 1) % stageCount;
    }, 900);
    return () => clearInterval(id);
  }, [project]);

  return (
    <Card reveal className="proj-card">
      <div className="proj-preview">
        {project.preview.type === 'cpu' ? (
          <div className="cpu-viz">
            <div className="cv-top">
              {project.preview.processes.map((p) => (
                <div className="cpu-proc" key={p.id}>
                  <b>{p.id}</b>
                  {p.burst}
                </div>
              ))}
            </div>
            <div className="gantt">
              <div className="gantt-label">{project.preview.ganttLabel}</div>
              <div className="gantt-track">
                {project.preview.ganttBlocks.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${b.w}%`,
                      background: b.c,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'IBM Plex Mono'",
                      fontSize: '9px',
                      color: '#fff',
                    }}
                  >
                    {b.p}
                  </div>
                ))}
              </div>
              <div className="gantt-axis">
                {project.preview.ganttAxis.map((a) => (
                  <span key={a}>{a}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-viz">
            <div className="ml-stage-row" ref={rowRef}>
              {project.preview.stages.map(([emoji, label], i) => (
                <Fragment key={label}>
                  <div className="ml-stage" data-i={i}>
                    <div className="ml-node">{emoji}</div>
                    <span>{label}</span>
                  </div>
                  {i < project.preview.stages.length - 1 && <div className="ml-line" />}
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="proj-body">
        <div className="proj-period">{project.period}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="pill-row">
          {project.pills.map((p) => (
            <span className="tpill" key={p}>
              {p}
            </span>
          ))}
        </div>
        <ul className="feat-list">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="proj-actions">
          <a href={project.githubUrl} target="_blank" rel="noopener" className="pbtn magnetic">
            <i className="devicon-github-original" /> GitHub
          </a>
        </div>
      </div>
    </Card>
  );
}
