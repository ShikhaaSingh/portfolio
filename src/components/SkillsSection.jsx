import { certifications, skillGroups } from "../data/portfolio.js";

function SkillsSection() {
  return (
    <section className="content-section section-wrap">
      <div className="skills-list">
        {skillGroups.map(({ label, items, description }) => (
          <div className="skill-row" key={label}>
            <div>
              <h3>{label}</h3>
              {description && <p className="skill-description">{description}</p>}
            </div>
            <ul aria-label={label}>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
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
