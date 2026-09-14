import './Projects.css';
import { SectionHeader } from '../../components/common';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

/** "My projects" — the two featured builds, each with a live preview. */
export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeader
          eyebrow="PROJECTS"
          title={
            <>
              My <span className="accent">projects</span>
            </>
          }
          description="Two builds I've actually shipped and can talk through in detail."
        />
        <div className="proj-list">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
