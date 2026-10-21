import { navigation } from "../data/portfolio.js";

function SideNavIcon({ name }) {
  const commonProps = {
    "aria-hidden": true,
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "Home":
      return (
        <svg {...commonProps}>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v11h14V9M9 20v-7h6v7" />
        </svg>
      );
    case "Experience":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-12-1v2m6-2v2" />
        </svg>
      );
    case "Projects":
      return (
        <svg {...commonProps}>
          <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" />
        </svg>
      );
    case "Skills":
      return (
        <svg {...commonProps}>
          <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M3 10h18" />
        </svg>
      );
    case "About":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21a7 7 0 0 1 14 0" />
        </svg>
      );
    case "Contact":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}

function SideNavigation() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  function handleHomeClick(event) {
    if (currentPath === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <nav className="side-navigation" aria-label="Quick navigation">
      {navigation.map(({ label, href }) => (
        <a
          key={label}
          className="side-navigation-link"
          href={href}
          aria-label={label}
          aria-current={currentPath === href ? "page" : undefined}
          title={label}
          onClick={label === "Home" ? handleHomeClick : undefined}
        >
          <SideNavIcon name={label} />
        </a>
      ))}
    </nav>
  );
}

export default SideNavigation;
