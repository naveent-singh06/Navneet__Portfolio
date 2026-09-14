import './ExperienceEducation.css';
import { SectionHeader } from '../../components/common';
import Experience from './Experience';
import Education from '../Education';
import Certifications from '../Certifications';

/** The combined "Experience & Education" section — timeline on the left,
 * degree + certifications stacked on the right, exactly as in the original
 * single-file layout (`#experience` → `.exp-edu-grid`). */
export default function ExperienceEducation() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeader
          eyebrow="EXPERIENCE & EDUCATION"
          title={
            <>
              What I've been <span className="accent">doing</span>
            </>
          }
        />
        <div className="exp-edu-grid">
          <Experience />
          <div className="edu-stack">
            <Education />
            <Certifications />
          </div>
        </div>
      </div>
    </section>
  );
}
