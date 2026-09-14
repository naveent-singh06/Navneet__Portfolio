import { useMemo, useState } from 'react';
import './TechStack.css';
import { Card, SectionHeader } from '../../components/common';
import { catMeta, stack, type SkillCategory } from '../../data/skills';

/** Filterable tech-stack grid: category sidebar + comfort-level bars. */
export default function TechStack() {
  const [activeCat, setActiveCat] = useState<SkillCategory>('all');

  const counts = useMemo(() => {
    const c: Record<SkillCategory, number> = {
      all: stack.length,
      lang: 0,
      front: 0,
      back: 0,
      db: 0,
      tools: 0,
      data: 0,
    };
    stack.forEach((s) => {
      c[s.cat]++;
    });
    return c;
  }, []);

  return (
    <section id="techstack">
      <div className="wrap">
        <SectionHeader
          eyebrow="TECH STACK"
          title={
            <>
              My tech <span className="accent">stack</span>
            </>
          }
          description="Languages, frameworks and tools I actually use day to day — with an honest read on how comfortable I am with each."
        />
        <div className="stack-shell reveal">
          <Card className="stack-sidebar">
            <h4>CATEGORIES</h4>
            <div className="cat-list" id="catList">
              {(Object.keys(catMeta) as SkillCategory[]).map((cat) => (
                <div
                  key={cat}
                  className={`cat-item${activeCat === cat ? ' active' : ''}`}
                  data-cat={cat}
                  onClick={() => setActiveCat(cat)}
                >
                  <span>{catMeta[cat].label}</span>
                  <span className="cnt">{counts[cat]}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="stack-main">
            <div className="stack-main-head">
              <h3 id="stackHeading">My Tech Stack</h3>
              <span id="stackSub">{activeCat === 'all' ? 'All technologies' : catMeta[activeCat].label}</span>
            </div>
            <div className="stack-grid" id="stackGrid">
              {stack.map((s) => {
                const show = activeCat === 'all' || s.cat === activeCat;
                return (
                  <div
                    key={s.name}
                    className={`tech-card${show ? ' show' : ''}`}
                    data-cat={s.cat}
                    style={{ ['--lvl' as any]: `${s.level * 100}%` }}
                  >
                    <div className="ti">
                      <i className={s.icon} />
                    </div>
                    <div className="tn">{s.name}</div>
                    <div className="tc">{catMeta[s.cat].label}</div>
                    <div className="tbar">
                      <i />
                    </div>
                    <div className="tlabel">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
