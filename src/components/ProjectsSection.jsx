import { useRef, useState } from "react";
import { links, projects } from "../data/portfolio.js";
import ProjectOverviewModal from "./ProjectOverviewModal.jsx";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const overviewTriggerRef = useRef(null);

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
          overview,
        }) => {
          const repository = repositoryUrl || links.projectRepositories[number];

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
                <div className="hero-actions project-links">
                  {repository ? (
                    <a
                      className="button button-primary"
                      href={repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : (
                    <button
                      className="button button-primary"
                      type="button"
                      disabled
                      title="GitHub repository link will be added when available"
                    >
                      GitHub
                    </button>
                  )}
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={(event) => {
                      overviewTriggerRef.current = event.currentTarget;
                      setSelectedProject({ name, number, overview });
                    }}
                  >
                    Project Overview
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {selectedProject && (
        <ProjectOverviewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          triggerRef={overviewTriggerRef}
        />
      )}
    </section>
  );
}

export default ProjectsSection;
