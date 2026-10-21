import { certifications, skillGroups } from "../data/portfolio.js";

function SkillsSection() {
  return (
    <section className="content-section section-wrap skills-page">
      <header className="skills-intro">
        <p className="skills-eyebrow">Technical Expertise</p>
        <h1>
          Skills &amp; <span>Technologies</span>
        </h1>
        <p className="skills-intro-copy">
          Technologies and tools across backend, frontend, cloud, data, and software engineering.
        </p>
      </header>
      <div className="skills-grid">
        {skillGroups.map(({ label, items }) => (
          <article className="skill-card" key={label}>
            <div className="skill-card-heading">
              <h2>{label}</h2>
            </div>
            <ul aria-label={label}>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <section className="certifications-section" aria-labelledby="certifications-heading">
        <div className="certifications-heading">
          <p className="eyebrow">LEARNING & DEVELOPMENT</p>
          <h2 id="certifications-heading">Certifications</h2>
        </div>
        <div className="certifications-grid">
          {certifications.map(({ name, issuer, date }) => (
            <article className="certification-card" key={`${name}-${date}`}>
              <h3>{name}</h3>
              <div className="certification-meta">
                <span>{issuer}</span>
                <time>{date}</time>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default SkillsSection;
