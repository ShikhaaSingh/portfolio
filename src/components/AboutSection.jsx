import { education } from "../data/portfolio.js";
import AchievementsSection from "./AchievementsSection.jsx";

function AboutSection() {
  return (
    <section className="content-section section-wrap about-section">
      <p className="eyebrow about-eyebrow">A LITTLE ABOUT ME</p>
      <div className="about-copy">
        <p>
          I'm a Software Engineer who enjoys building reliable backend systems
          and solving complex engineering problems. My experience at Google
          gave me the opportunity to work on Java-based debugging tools, REST
          APIs, and cloud-backed systems used in production engineering
          workflows.
        </p>
        <p>
          I enjoy understanding how systems work behind the scenes,
          investigating difficult issues, and turning manual processes into
          practical tools. I value clean code, thoughtful problem solving, and
          building solutions that make developers' work easier.
        </p>
        <p>
          Beyond development, I continuously strengthen my fundamentals through
          Data Structures and Algorithms and hands-on projects.
        </p>
      </div>
      <div className="about-highlights">
        <article className="certification-card about-highlight-card">
          <p className="eyebrow about-card-eyebrow">EDUCATION</p>
          <h3>{education.degree}</h3>
          <p className="about-education-institution">{education.institution}</p>
          <div className="about-card-meta">
            <span>{education.dates}</span>
            <span>CGPA: {education.cgpa}</span>
          </div>
        </article>
        <AchievementsSection />
      </div>
    </section>
  );
}

export default AboutSection;
