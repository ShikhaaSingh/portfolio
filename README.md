# Shikha Singh | Software Engineer Portfolio

A modern personal portfolio for a software engineer focused on Java backend development, REST APIs, and production-ready software systems.

Technology stack: React + Vite + Tailwind CSS + JavaScript

- GitHub: [ShikhaaSingh/portfolio](https://github.com/ShikhaaSingh/portfolio)
- Live Demo: [Add live deployment URL](#)

## Table of Contents

- [About the Portfolio](#about-the-portfolio)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## About the Portfolio

This portfolio is designed to present Shikha Singh's professional background as a Software Engineer specializing in Java backend development, REST APIs, engineering problem-solving, and software delivery. It provides a focused overview of experience, technical capabilities, project work, and ways to connect for opportunities and collaborations.

Visitors can explore:

- professional introduction and career focus
- work experience and engineering contributions
- featured projects and technical case studies
- skills and tools across backend, frontend, and software engineering
- contact details and message form for professional inquiries

## Features

- Professional introduction and career overview
- Experience and engineering contributions
- Featured projects with project overview modals
- Technical skills and specialization areas
- Contact information and contact form
- Light and dark themes
- Responsive design for desktop, tablet, and mobile

## Technology Stack

### Frontend

- React
- React DOM
- JavaScript

### Styling

- Tailwind CSS

### Build & Tooling

- Vite
- @vitejs/plugin-react
- PostCSS
- Autoprefixer

## Project Structure

```bash
.
├── public/
│   ├── Profile.jpg
│   └── projects/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm

### 1. Clone the repository

```bash
git clone https://github.com/ShikhaaSingh/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

The portfolio will typically be available at:

```bash
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

The production build is generated in the `dist` directory.

### 5. Preview production build

```bash
npm run preview
```

## Customization

The portfolio content and styling can be customized in the following files:

- `src/App.jsx` — page structure and routing logic
- `src/components/` — page sections such as Hero, Experience, Projects, Skills, About, and Contact
- `src/data/portfolio.js` — portfolio content, skills, project information, and contact links
- `src/index.css` — global styles and theme formatting
- `public/Profile.jpg` — profile photo
- `public/projects/` — project asset images and media

## Deployment

This portfolio is compatible with static hosting platforms such as Vercel.

For Vercel deployment:

1. Import the repository into Vercel.
2. Set the project root to the repository root.
3. Use the following build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy the project.

No verified live deployment URL is currently included in the repository.

## Contact

For professional inquiries, collaboration opportunities, or project discussions, please use the contact form in the portfolio or the email address listed on the website.
