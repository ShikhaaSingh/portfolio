import { achievement, links } from "../data/portfolio.js";
import SectionLabel from "./SectionLabel.jsx";

function AchievementsSection() {
  return (
    <section className="content-section section-wrap achievement-section">
      <SectionLabel number="05">PROBLEM SOLVING</SectionLabel>
      <div className="achievement">
        <strong>{achievement.value}</strong>
        <span>{achievement.label}</span>
        <p>Consistent focus on data structures, algorithms, and problem solving using Java.</p>
        {links.leetcode && (
          <a href={links.leetcode} target="_blank" rel="noreferrer">
            LeetCode profile <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  );
}

export default AchievementsSection;
