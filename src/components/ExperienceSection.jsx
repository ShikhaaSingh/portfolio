import { experience } from "../data/portfolio.js";

function ExperienceSection() {
  return (
    <section className="content-section section-wrap selected-work">
      <article className="experience-entry">
        <div className="experience-heading">
          <div>
            <h2>{experience.company}</h2>
            <p className="experience-role">{experience.role}</p>
          </div>
          {experience.dates && (
            <p className="experience-dates">{experience.dates}</p>
          )}
        </div>
        <div className="experience-body">
          <div>
            <h3>Impact &amp; contributions</h3>
            <ul className="focus-list">
              {experience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="experience-technologies">
            <h3>Technologies used</h3>
            <ul className="technology-list" aria-label="Technologies used at Google">
              {experience.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ExperienceSection;
