import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function ProjectOverviewModal({ project, onClose, triggerRef }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const theme =
    document.querySelector(".portfolio-app")?.getAttribute("data-theme") || "dark";
  const { overview } = project;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [triggerRef]);

  return createPortal(
    <div
      className="project-modal-backdrop"
      data-theme={theme}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
      >
        <div className="project-modal-header">
          <div>
            <p className="project-category">PROJECT {project.number}</p>
            <h2 id="project-modal-title">{project.name}</h2>
            {overview.status && (
              <p className="project-modal-status">{overview.status}</p>
            )}
          </div>
          <button
            className="project-modal-close"
            type="button"
            aria-label="Close project overview"
            onClick={onClose}
            ref={closeButtonRef}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <section className="project-modal-section">
          <h3>What it does</h3>
          <p>{overview.whatItDoes}</p>
        </section>

        <section className="project-modal-section">
          <h3>Tech Stack</h3>
          <ul className="project-modal-technologies" aria-label="Tech Stack">
            {(overview.techStack.length
              ? overview.techStack
              : ["Technology details not listed"]
            ).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>

        <section className="project-modal-section">
          <h3>Key Features</h3>
          <ul className="project-modal-features">
            {overview.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>,
    document.body,
  );
}

export default ProjectOverviewModal;
