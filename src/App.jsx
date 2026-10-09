import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

const pageTitles = {
  "/": "Home",
  "/work": "Experience",
  "/projects": "Projects",
  "/skills": "Technical Skills",
  "/about": "About Me",
  "/contact": "Contact",
};

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const [theme, setTheme] = useState(
    () => window.localStorage.getItem("portfolio-theme") || "dark",
  );

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  let page;

  switch (path) {
    case "/work":
      page = <ExperienceSection />;
      break;
    case "/projects":
      page = <ProjectsSection />;
      break;
    case "/skills":
      page = <SkillsSection />;
      break;
    case "/about":
      page = <AboutSection />;
      break;
    case "/contact":
      page = <ContactSection />;
      break;
    default:
      page = <HeroSection />;
  }

  const heading = pageTitles[path] ?? pageTitles["/"];

  return (
    <div className="portfolio-app min-h-screen overflow-hidden" data-theme={theme}>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
      />

      <main className={`page-content page-${path === "/" ? "home" : path.slice(1)}`}>
        {path !== "/" && (
          <div className="page-heading section-wrap">
            {path !== "/skills" &&
              path !== "/projects" &&
              path !== "/work" &&
              path !== "/about" &&
              path !== "/contact" && (
                <p className="eyebrow">SHIKHA SINGH · SOFTWARE ENGINEER</p>
              )}
            <h1>{heading}</h1>
          </div>
        )}
        {page}
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
