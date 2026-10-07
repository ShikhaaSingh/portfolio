import { links, projects } from "../data/portfolio.js";

function ProjectsSection() {
  return (
    <section className="content-section section-wrap">
      <div className="projects-grid">
        {projects.map(({
          number,
          name,
          subtitle,
          description,
          image,
          previewLabel,
          technologies,
          repositoryUrl,
        }) => {
          const repository = repositoryUrl || links.projectRepositories[number];
          const demo = links.projectDemos[number];

          return (
            <article className="project-card" key={number}>
              {image ? (
                <img
                  className="project-image"
                  src={image}
                  alt={`${name} project preview`}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div
                  className="project-preview"
                  aria-label={`${name} preview image can be added here`}
                >
                  <span className="preview-number">{number}</span>
                  <span className="preview-word">
                    {previewLabel ||
                      (number === "01"
                        ? "RESULTS"
                        : number === "03"
                          ? "FRESH MARKET"
                          : "COMMERCE")}
                  </span>
                  <span className="preview-label">PROJECT PREVIEW</span>
                </div>
              )}
              <div className="project-content">
                <p className="project-category">PROJECT {number}</p>
                <h3>{name}</h3>
                {subtitle && <p className="project-subtitle">{subtitle}</p>}
                {description && <p className="project-description">{description}</p>}
                <ul className="technology-list" aria-label="Technologies">
                  {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {(repository || demo || number === "03") && (
                  <div className="project-links">
                    {repository && (
                      <a href={repository} target="_blank" rel="noreferrer">
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {demo && (
                      <a href={demo} target="_blank" rel="noreferrer">
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {!repository && number === "03" && (
                      <button
                        className="project-link-disabled"
                        type="button"
                        disabled
                        aria-disabled="true"
                        title="GitHub repository link will be added when available"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
