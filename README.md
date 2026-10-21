# Shikha Singh | Software Engineer Portfolio

A modern, responsive personal portfolio showcasing my software engineering experience, Java backend development skills, projects, and technical contributions.

**Tech Stack:** React · Vite · JavaScript · Tailwind CSS

- **GitHub:** [ShikhaaSingh/portfolio](https://github.com/ShikhaaSingh/portfolio)
- **Live Portfolio:** [singh-shikha.vercel.app](https://singh-shikha.vercel.app/)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## About

This portfolio presents my professional background as a Software Engineer with a focus on Java backend development, REST APIs, problem-solving, and software engineering.

It highlights my professional experience, technical skills, featured projects, and engineering contributions, providing recruiters and developers with an overview of my work.

## Features

- Professional introduction and career overview
- Work experience and engineering contributions
- Featured projects with detailed overview modals
- Technical skills and technology categories
- Contact information and contact form
- Light and dark themes
- Responsive design for desktop, tablet, and mobile
- Quick navigation across portfolio sections and pages

## Technology Stack

### Frontend
- React
- React DOM
- JavaScript

### Styling
- Tailwind CSS

### Build and Tooling
- Vite
- `@vitejs/plugin-react`
- PostCSS
- Autoprefixer

## Project Structure

```text
portfolio/
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
├── vercel.json
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js 18 or later
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

Open the local URL shown in the terminal, typically `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

The production build is generated in the `dist` directory.

### 5. Preview the production build

```bash
npm run preview
```

## Customization

The portfolio can be customized using the following files and directories:

- `src/App.jsx` — main application structure and routing
- `src/components/` — reusable UI components and page sections
- `src/data/portfolio.js` — portfolio content, skills, project information, and contact links
- `src/index.css` — global styles and theme styling
- `public/Profile.jpg` — profile image
- `public/projects/` — project images and other visual assets

## Deployment

The portfolio is deployed on Vercel and is connected to this GitHub repository.

**Live URL:** [https://singh-shikha.vercel.app/](https://singh-shikha.vercel.app/)

The project uses Vite to build the production application. The `vercel.json` configuration supports client-side routing so that portfolio routes can be opened directly or refreshed without returning a 404 error.

## Contact

For professional inquiries, collaboration opportunities, or project discussions, please use the contact form or email address available on the live portfolio.
