import { useEffect, useState } from "react";
import { links } from "../data/portfolio.js";

const developerTitles = [
  "Software Engineer",
  "Java Backend Developer",
  "Full Stack Developer",
  "Problem Solver",
];

function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return undefined;

    const intervalId = window.setInterval(() => {
      setTitleIndex((currentIndex) => (currentIndex + 1) % developerTitles.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-copy">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1>Shikha Singh</h1>
        <p className="hero-title" aria-label={developerTitles[titleIndex]}>
          <span key={developerTitles[titleIndex]}>{developerTitles[titleIndex]}</span>
          <span className="title-cursor" aria-hidden="true">|</span>
        </p>
        <p className="hero-description">
          Software Engineer specializing in Java, backend development, REST APIs,
          and production-ready systems.
        </p>
        <div className="hero-actions">
          <a href="/about" className="button button-primary">
            More About Me <span aria-hidden="true">↗</span>
          </a>
          <a href="/contact" className="button button-secondary">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <img
          className="hero-avatar"
          src={links.photo}
          alt="Shikha Singh"
          width="420"
          height="560"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default HeroSection;
