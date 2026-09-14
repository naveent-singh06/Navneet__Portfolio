import { useRef } from 'react';
import './LeetCode.css';
import { Card, SectionHeader } from '../../components/common';
import { leetcodeProfile, leetcodeStats, leetcodeTopicGroups } from '../../data/leetcode';
import { useCountUp } from '../../hooks/useCountUp';

/** Live-snapshot LeetCode analytics: profile, stat tiles, topic breakdown. */
export default function LeetCode() {
  const shellRef = useRef<HTMLDivElement>(null);
  useCountUp(shellRef);

  return (
    <section id="leetcode">
      <div className="wrap">
        <SectionHeader
          eyebrow="LEETCODE"
          title={
            <>
              🧩 LeetCode <span className="accent">Analytics</span>
            </>
          }
          description={
            <>
              Live snapshot from{' '}
              <a href={leetcodeProfile.profileUrl} target="_blank" rel="noopener" style={{ color: 'var(--cyan)' }}>
                leetcode.com/u/Navneet_20singh ↗
              </a>
            </>
          }
        />
        <div className="lc-shell" ref={shellRef}>
          <Card reveal className="lc-profile">
            <div className="lc-avatar">NS</div>
            <div>
              <h3>Navneet Singh</h3>
              <div className="lc-badges">
                <span>{leetcodeProfile.handle}</span>
                <span className="b-highlight">{leetcodeProfile.badge}</span>
                <span>{leetcodeProfile.rank}</span>
              </div>
            </div>
            <a href={leetcodeProfile.profileUrl} target="_blank" rel="noopener" className="btn btn-ghost magnetic lc-cta">
              View Profile →
            </a>
          </Card>

          {leetcodeStats.map((stat) => (
            <Card reveal className="stat-tile" key={stat.label}>
              <div className="st-icon">{stat.icon}</div>
              {stat.count !== undefined ? (
                <div className="st-num" data-count={stat.count}>
                  0
                </div>
              ) : (
                <div className="st-num" data-static={stat.staticValue}>
                  {stat.staticValue}
                </div>
              )}
              <div className="st-label">{stat.label}</div>
            </Card>
          ))}

          <Card reveal className="lc-topics">
            <h4>
              Topic breakdown{' '}
              <a href={leetcodeProfile.profileUrl} target="_blank" rel="noopener">
                View LeetCode Profile →
              </a>
            </h4>
            {leetcodeTopicGroups.map((group) => (
              <div className="topic-group" key={group.label}>
                <div className="tg-label">{group.label}</div>
                <div className="topic-row">
                  {group.topics.map((t) => (
                    <span className="topic-chip" key={t.name}>
                      {t.name} <b>×{t.count}</b>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}
