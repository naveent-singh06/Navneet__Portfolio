import './About.css';
import { Card, SectionHeader } from '../../components/common';
import { personal } from '../../data/personal';

/** "Who I am" — bio, quick facts, and three side cards. */
export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHeader
          eyebrow="ABOUT"
          title={
            <>
              Who I <span className="accent">am</span>
            </>
          }
          description="A quick look at where I study, what I build, and what I'm working toward."
        />
        <div className="about-grid">
          <Card reveal className="about-main">
            <div className="about-id">
              <div className="about-avatar">{personal.avatarInitials}</div>
              <div>
                <h3>{personal.name}</h3>
                <div className="status">
                  <span className="d" /> {personal.status}
                </div>
              </div>
            </div>
            <p className="about-bio">{personal.bio}</p>
            <div className="fact-grid">
              <div className="fact-cell card">
                <div className="fk">LOCATION</div>
                <div className="fv">{personal.location}</div>
              </div>
              <div className="fact-cell card">
                <div className="fk">ALSO RUNNING</div>
                <div className="fv">Arya Pathshala, since 2023</div>
              </div>
              <div className="fact-cell card">
                <div className="fk">GITHUB</div>
                <div className="fv">
                  <a href={personal.githubUrl} target="_blank" rel="noopener" className="magnetic">
                    {personal.githubHandle} ↗
                  </a>
                </div>
              </div>
              <div className="fact-cell card">
                <div className="fk">LEETCODE</div>
                <div className="fv">
                  <a href={personal.leetcodeUrl} target="_blank" rel="noopener" className="magnetic">
                    {personal.leetcodeHandle} ↗
                  </a>
                </div>
              </div>
            </div>
          </Card>
          <div className="about-side">
            <Card reveal className="side-card">
              <div className="sc-icon">🎓</div>
              <h4>Education</h4>
              <p>
                B.E. Computer Science &amp; Engineering (Data Science) at GL Bajaj Institute of
                Technology and Management. Expected graduation September 2027, CGPA 7.0/10.0.
              </p>
            </Card>
            <Card reveal className="side-card">
              <div className="sc-icon">💼</div>
              <h4>Current focus</h4>
              <p>
                Founder &amp; Faculty at Arya Pathshala since 2023 — teaching Mathematics, Science
                and Computer Skills alongside coursework.
              </p>
            </Card>
            <Card reveal className="side-card">
              <div className="sc-icon">📍</div>
              <h4>Based in</h4>
              <p>Greater Noida, India — open to remote or on-site internship opportunities.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
