export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
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
    "Built event-driven data pipelines on GCP to ingest and process high-volume Sawmill logs via PLX and GoogleSQL, handling millions of log events per day and reducing manual log-analysis effort by 35%.",
    "Engineered 2 production-grade applications in Core Java, unifying internal Google data sources with third-party tooling, cutting average issue resolution time by 30% across GMS and ARES NG systems. Established the cloud-native service architecture on GCP (Boq Apps Framework) using Guice DI, reducing new-engineer onboarding time by 20%.",
    "Shipped 4+ REST APIs in Core Java and Spring Boot, enabling reliable, low-latency data exchange between 2 live production systems. Participated in code reviews, unit testing, and Jenkins CI/CD pipeline runs.",
    "Used generative AI tools (GitHub Copilot, Google Gemini) in daily workflow to speed up query writing, log-pipeline debugging, and boilerplate code generation.",
  ],
  technologies: [
    "Core Java",
    "Spring Boot",
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
    items: ["Java", "Python", "C++", "SQL", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Frontend & Web",
    items: ["React", "Bootstrap", "Node.js", "Express"],
  },
  {
    label: "Data Engineering",
    items: [
      "Event-Driven Data Pipelines",
      "ETL / Log Ingestion at Scale",
      "Batch & Real-Time Processing",
      "REST API Design",
      "Machine Learning",
      "Price Prediction",
    ],
  },
  {
    label: "Database / RDBMS",
    items: [
      "MySQL",
      "MongoDB",
      "H2",
      "Joins",
      "Indexes",
      "Constraints",
      "Query Writing & Tuning",
      "Stored Procedures / Functions (Basic)",
    ],
  },
  { label: "Cloud", items: ["Google Cloud Platform (GCP)", "AWS"] },
  {
    label: "UNIX / Linux",
    items: [
      "Directory Navigation",
      "Log Search & Analysis",
      "Process Checks",
      "Basic Shell Operations",
    ],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "JWT",
      "Service-Oriented Systems",
    ],
  },
  {
    label: "Web APIs & Storage",
    items: ["Fetch API", "Local Storage"],
  },
  {
    label: "Build, Version Control & Testing",
    items: [
      "Git",
      "GitHub",
      "Maven",
      "Gradle",
      "Jenkins",
      "CI/CD Pipelines",
      "JUnit",
      "Mockito",
      "Postman",
    ],
  },
  {
    label: "Monitoring & Analytics",
    items: ["Splunk", "Dynatrace", "PBI"],
  },
  {
    label: "Computer Science Foundations",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    label: "Core Competencies",
    items: [
      "SDLC",
      "SOLID",
      "System Design",
      "Root Cause Analysis",
      "Agile/Scrum",
      "Debugging",
    ],
  },
  {
    label: "Gen AI Tools (hands-on)",
    items: ["GitHub Copilot", "ChatGPT", "Google Gemini", "Claude"],
    description:
      "Used for code and query generation, debugging, and pipeline development.",
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
    technologies: ["Java", "Spring Boot", "MongoDB/MySQL", "JavaScript", "ChatGPT"],
  },
  {
    number: "02",
    name: "E-Commerce Platform with ML Price Prediction",
    technologies: [
      "Core Java",
      "SQL/MySQL",
      "JavaScript",
      "Machine Learning",
      "AWS",
    ],
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
  },
  {
    number: "05",
    name: "Smart Student Sojourn",
    previewLabel: "STUDENT STAYS",
    description:
      "A project focused on helping students find PG accommodation and making relocation easier.",
    image: null,
    technologies: [],
    repositoryUrl: "https://github.com/ShikhaaSingh/Smart-Students-Sojourn-",
  },
  {
    number: "06",
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
      "HTML/CSS/JavaScript",
      "Maven",
    ],
    repositoryUrl: "https://github.com/ShikhaaSingh/task-Manager",
  },
];

export const education = {
  institution: "Graphic Era Deemed to Be University",
  degree: "B.Tech in Computer Science and Engineering",
  dates: "2020 – 2024",
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
