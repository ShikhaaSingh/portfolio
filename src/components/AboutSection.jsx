import { education } from "../data/portfolio.js";

function AboutSection() {
  return (
    <>
      <section className="content-section section-wrap about-section">
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I’m a Software Engineer focused on backend development, Java,
              Spring Boot, REST APIs, and cloud-based applications. I have
              experience building production-ready systems, developer tools,
              and scalable applications, with a strong focus on problem
              solving, debugging, and writing clean, reliable code.
            </p>
            <p>
              My technical experience includes Java, Spring Boot, SQL, GCP,
              AWS, databases, CI/CD, and modern development tools. I’ve built
              backend applications, REST APIs, full-stack platforms, and
              data-driven solutions, and I enjoy turning complex technical
              problems into practical and efficient solutions.
            </p>
            <p>
              I also have a strong foundation in Data Structures and
              Algorithms, with <strong>1000+ LeetCode problems solved</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap education-section" aria-labelledby="education-heading">
        <div className="education-heading">
          <p className="eyebrow">EDUCATION</p>
          <h2 id="education-heading">{education.institution}</h2>
        </div>
        <div className="education-details">
          <p>{education.degree}</p>
          <span>{education.dates}</span>
          <span>CGPA: {education.cgpa}</span>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
