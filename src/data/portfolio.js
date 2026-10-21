export const navigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const experience = {
  company: "Google",
  role: "Software Engineer",
  dates: null,
  highlights: [
    "Built and shipped **2 production-grade applications in Java** — the PLX/GoogleSQL Sawmill Log Debug Dashboard and ARES NG Debugger — unifying internal Google data sources with third-party tooling and reducing average issue resolution time by **30%** across GMS and ARES NG systems.",
    "Developed and shipped **4+ REST APIs using Core Java and Spring Boot**, enabling reliable, low-latency data exchange between live production systems and supporting production debugging workflows.",
    "Built **event-driven data pipelines on GCP** to ingest and process high-volume Sawmill logs using PLX and GoogleSQL, handling **millions of log events per day** and reducing manual log-analysis effort by **35%**.",
    "Established the **cloud-native architecture** for the ARES NG Debugger on GCP using the Boq Apps Framework and Guice dependency injection, reducing new-engineer onboarding time by **20%**.",
    "Used **Generative AI tools including GitHub Copilot and Google Gemini** in my daily development workflow to accelerate query writing, debugging, boilerplate implementation, and repetitive engineering tasks.",
    "Participated in **code reviews, unit testing, and Jenkins CI/CD workflows**, contributing to production-quality software development.",
  ],
  technologies: [
    "Core Java",
    "Python",
    "Spring Boot",
    "REST APIs",
    "GCP",
    "PLX",
    "GoogleSQL",
    "Boq Apps Framework",
    "Guice DI",
    "Jenkins",
    "GitHub Copilot",
    "Google Gemini",
  ],
};

export const engineeringFocus = [
  "Backend services",
  "REST APIs",
  "Cloud-native systems",
  "Developer & debugging tools",
  "Data-driven systems",
  "Production troubleshooting",
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    label: "Backend Development",
    items: [
      "Spring Boot",
      "REST APIs",
      "Hibernate",
      "JPA",
      "Guice DI",
      "Boq Apps Framework",
    ],
  },
  {
    label: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "GoogleSQL"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["GCP", "AWS"],
  },
  {
    label: "Developer Tools & CI/CD",
    items: [
      "Git",
      "Maven",
      "Gradle",
      "Jenkins",
      "JUnit",
      "Mockito",
      "Postman",
      "Unix/Linux",
    ],
  },
  {
    label: "Software Engineering",
    items: [
      "DSA",
      "OOP",
      "SOLID",
      "System Design",
      "Debugging",
      "Root Cause Analysis",
      "Agile/Scrum",
    ],
  },
  {
    label: "AI Development Tools",
    items: ["GitHub Copilot", "ChatGPT", "Google Gemini", "Claude"],
  },
];

export const certifications = [
  { name: "Discover the Art of Prompting", issuer: "Google", date: "Dec 2025" },
  { name: "Maximize Productivity With AI Tools", issuer: "Google", date: "Dec 2025" },
  { name: "Use AI Responsibly", issuer: "Google", date: "Dec 2025" },
  { name: "Introduction to AI", issuer: "Google", date: "Nov 2025" },
  { name: "Object-Oriented Programming with Java", issuer: "Coursera", date: "Jun 2024" },
  { name: "Spring Boot with Embedded Database", issuer: "Coursera", date: "Jun 2024" },
  { name: "Build Your Portfolio Website with HTML and CSS", issuer: "Coursera", date: "May 2024" },
  { name: "Certified API Developer", issuer: "Infosys", date: "May 2023" },
  { name: "Perform Sentiment Analysis with scikit-learn", issuer: "Coursera", date: "Nov 2022" },
  { name: "Statistics For Data Science", issuer: "Coursera", date: "Nov 2022" },
  { name: "Basic Statistics in Python (Correlations and T-tests)", issuer: "Coursera", date: "Nov 2022" },
  { name: "Create Interactive Dashboards with Streamlit and Python", issuer: "Coursera", date: "Nov 2022" },
  { name: "Mastering Data Analysis with Pandas", issuer: "Coursera", date: "Nov 2022" },
  { name: "Mastering Data Analysis with Pandas: Learning Path Part 2", issuer: "Coursera", date: "Nov 2022" },
  { name: "Mastering Data Analysis with Pandas: Learning Path Part 3", issuer: "Coursera", date: "Nov 2022" },
  { name: "Mastering Data Analysis with Pandas: Learning Path Part 4", issuer: "Coursera", date: "Nov 2022" },
  { name: "Mastering Data Analysis with Pandas: Learning Path Part 5", issuer: "Coursera", date: "Nov 2022" },
  { name: "RStudio for Six Sigma - Basic Descriptive Statistics", issuer: "Coursera", date: "Nov 2022" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank", date: "Jul 2022" },
  { name: "AWS Cloud Technical Essentials", issuer: "Coursera", date: "Jun 2022" },
  { name: "Building Database Applications in PHP", issuer: "Coursera", date: "Jun 2022" },
  { name: "Foundations of Project Management", issuer: "Coursera", date: "Jun 2022" },
  { name: "Introduction to Structured Query Language (SQL)", issuer: "Coursera", date: "Jun 2022" },
  { name: "Oracle SQL Basics", issuer: "Coursera", date: "Jun 2022" },
  { name: "Python Basics: Selection and Iteration", issuer: "Coursera", date: "May 2022" },
  { name: "Certificate of Achievement", issuer: "Infosys", date: "May 2022" },
  { name: "Certified Spring Associate Developer", issuer: "Infosys", date: "May 2022" },
  { name: "Certificate of Completion", issuer: "LinkedIn Learning", date: "Feb 2022" },
  { name: "Certificate of Internship", issuer: "Internship Studio", date: "Jan 2022" },
  { name: "Java From Zero to First Job", issuer: "Udemy", date: "Nov 2021" },
  { name: "GoF Design Patterns - Complete Course with Java Examples", issuer: "Udemy", date: "Aug 2021" },
  { name: "Complete JavaScript & jQuery Course with Bonus Vue Js Intro", issuer: "Udemy", date: "Jul 2021" },
  { name: "Learn CSS transition and Animation", issuer: "Udemy", date: "Jul 2021" },
  {
    name: "National Engineering Olympiad - Qualification (Round 1 & 2)",
    issuer: "National Engineering Olympiad",
    date: "June 2021",
  },
  { name: "Introduction to Structured Query Language", issuer: "Coursera", date: "June 2021" },
];

export const projects = [
  {
    number: "01",
    name: "AI-Powered Student Result Management System",
    description:
      "A full-stack web application for managing student academic records, examination results, and grades. Built with Java, Spring Boot, MongoDB, HTML5, CSS3, and JavaScript, it provides RESTful APIs and performance analytics to reduce manual result-management work.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Maven",
      "MongoDB",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git & GitHub",
      "ChatGPT",
    ],
    repositoryUrl: "https://github.com/ShikhaaSingh/SRMS",
    overview: {
      whatItDoes:
        "A full-stack application for managing student academic records, examination results, and grades. Its web interface and RESTful APIs help reduce manual result-management work and make student performance easier to analyze.",
      techStack: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Maven",
        "MongoDB",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git & GitHub",
        "ChatGPT (AI-assisted development)",
      ],
      keyFeatures: [
        "Manage student academic records",
        "Manage examination results and grades",
        "Create, read, update, and delete records through RESTful APIs",
        "Analyze and track student performance",
        "Store application data in MongoDB",
        "Responsive web interface",
        "MVC-based application structure",
        "AI-assisted development with ChatGPT",
      ],
    },
  },
  {
    number: "02",
    name: "Smart Student Sojourn",
    subtitle:
      "Full-Stack Student Accommodation Discovery with AI-Powered Natural Language Search",
    previewLabel: "STUDENT SOJOURN",
    description:
      "A full-stack student accommodation discovery platform for finding PGs and hostels by location, preferences, and budget. Its AI-powered natural-language search interprets requests with Google Gemini and retrieves matching sample listings from the database.",
    image: null,
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "Java 21",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Google Gemini API",
      "HTTP/JSON",
      "Maven",
      "Git & GitHub",
    ],
    repositoryUrl: "https://github.com/ShikhaaSingh/Smart-Students-Sojourn-",
    overview: {
      whatItDoes:
        "Smart Student Sojourn helps students discover PGs and hostels based on location, accommodation preferences, and budget. Its React frontend connects to Spring Boot REST APIs and a MySQL database, with Google Gemini interpreting natural-language search requests and the backend returning matching sample listings.",
      status:
        "Demonstration project using sample accommodation data; listing availability and prices are not verified in real time.",
      techStack: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
        "Java 21",
        "Spring Boot",
        "REST APIs",
        "MySQL",
        "Google Gemini API",
        "HTTP/JSON",
        "Maven",
        "Git & GitHub",
      ],
      keyFeatures: [
        "Browse PG and hostel listings with accommodation details, pricing, and amenities",
        "Filter sample listings by city, locality, accommodation type, and budget",
        "Sort and explore accommodation listings",
        "Open accommodation details in a modal",
        "Search using natural-language requests instead of setting filters manually",
        "Use Google Gemini to extract search criteria from natural-language queries",
        "Retrieve matching accommodation records from MySQL through the Spring Boot backend",
        "View AI search results in a slide-out panel with loading and error feedback",
        "Keep AI search grounded in database listings rather than AI-generated accommodation results",
      ],
    },
  },
  {
    number: "03",
    name: "Full-Stack Vegetables & Fruits E-Commerce Platform",
    subtitle: "Real-Time Price Prediction using Machine Learning",
    description:
      "A full-stack e-commerce platform for buying vegetables and fruits, with machine-learning-based price prediction using historical data and market trends.",
    image: null,
    technologies: [
      "Core Java",
      "JavaScript",
      "MySQL",
      "Machine Learning",
      "REST APIs",
      "AWS",
    ],
    overview: {
      whatItDoes:
        "A full-stack e-commerce platform for buying vegetables and fruits, with machine-learning-based price prediction using historical data and market trends.",
      techStack: ["Core Java", "JavaScript", "MySQL", "Machine Learning", "REST APIs", "AWS"],
      keyFeatures: [
        "Vegetable and fruit e-commerce",
        "Product price prediction",
        "Historical data and market trend analysis",
      ],
    },
  },
  {
    number: "04",
    name: "URL Shortener",
    previewLabel: "SHORT LINKS",
    description:
      "A responsive browser-based app for shortening and managing shareable links, with copy actions and recent-link history saved locally.",
    image: "/projects/url-shortener.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Fetch API", "Local Storage"],
    repositoryUrl: "https://github.com/ShikhaaSingh/url-shortener",
    overview: {
      whatItDoes:
        "A responsive browser-based app for shortening and managing shareable links, with copy actions and recent-link history saved locally.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Fetch API", "Local Storage"],
      keyFeatures: [
        "Shorten and manage shareable links",
        "Copy shortened links",
        "Locally saved recent-link history",
      ],
    },
  },
  {
    number: "05",
    name: "Task Manager",
    previewLabel: "TASKS",
    description:
      "A full-stack task management app with a Spring Boot REST API and browser frontend. Users can manage their own tasks, priorities, due dates, and completion status.",
    image: null,
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "H2",
      "HTML",
      "CSS",
      "JavaScript",
      "Maven",
    ],
    repositoryUrl: "https://github.com/ShikhaaSingh/task-Manager",
    overview: {
      whatItDoes:
        "A secure task management application built with Java and Spring Boot that allows users to create, manage, and track tasks through a backend REST API.",
      techStack: [
        "Java 17",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "JPA",
        "H2",
        "HTML",
        "CSS",
        "JavaScript",
        "Maven",
      ],
      keyFeatures: [
        "Task creation and management",
        "REST APIs",
        "JWT-based authentication",
        "Secure API access",
      ],
    },
  },
  {
    number: "06",
    name: "AI-Powered Incident & Log Management Platform",
    subtitle: "Planned · In Development",
    previewLabel: "INCIDENTS & LOGS",
    description:
      "A backend platform in development for collecting application logs and managing production incidents. It will use AI to classify incidents, identify possible root causes, and suggest troubleshooting steps.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Python",
      "REST APIs",
      "AI/LLM Integration",
      "Log Processing",
      "Docker",
    ],
    overview: {
      whatItDoes:
        "A backend platform for collecting application logs and managing production incidents. It will use AI to classify incidents, identify possible root causes, and suggest troubleshooting steps.",
      techStack: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Python",
        "REST APIs",
        "AI/LLM Integration",
        "Log Processing",
        "Docker",
      ],
      keyFeatures: [
        "Incident management",
        "Log ingestion and processing",
        "Error analysis",
        "AI-assisted incident classification and troubleshooting",
      ],
      status: "Planned · In Development",
    },
  },
];

export const education = {
  institution: "Graphic Era Deemed to Be University",
  degree: "B.Tech in Computer Science and Engineering",
  dates: "2020–2024",
  cgpa: "8.3/10",
};

export const contactLocation = "Bengaluru, IN";

export const achievement = {
  value: "1000+",
  label: "LeetCode problems solved",
};

export const links = {
  photo: "/Profile.jpg",
  resume: null,
  email: "shikhakss121@gmail.com",
  github: "https://github.com/ShikhaaSingh",
  linkedin: "https://www.linkedin.com/in/shikha-singh-917297228/",
  leetcode: "https://leetcode.com/u/_Shikha_05/",
  projectDemos: {},
  projectRepositories: {},
};
