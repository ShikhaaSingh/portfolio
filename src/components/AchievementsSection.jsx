import { achievement, links } from "../data/portfolio.js";

function AchievementsSection() {
  return (
    <article className="certification-card about-highlight-card about-problem-card">
      <p className="eyebrow about-card-eyebrow">PROBLEM SOLVING</p>
      <strong>{achievement.value}</strong>
      <h3>LeetCode Problems Solved</h3>
      <p className="about-card-supporting">
        Consistent practice in Data Structures and Algorithms using Java.
      </p>
      <a
        className="about-profile-link"
        href={links.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode Profile (opens in a new tab)"
      >
        LeetCode Profile <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default AchievementsSection;
