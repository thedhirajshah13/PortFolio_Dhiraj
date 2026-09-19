# Dhiraj Shah — Full Stack Developer Portfolio

A high-converting, modern developer portfolio built with **React**, **Bootstrap**, and custom **CSS3**. Aligned with 2026 recruiter standards, featuring a Cyber Obsidian aesthetic, quantifiable impact metrics, featured project deep-dives, categorized skills architecture, and full **SEO, GEO (Generative Engine Optimization), and AGM (Answer Engine Optimization)** schemas.

Live Site: [https://thedhirajshah13.netlify.app/](https://thedhirajshah13.netlify.app/)

---

## 📁 Directory Structure — "What is Where"

```
Portfolio/
├── public/                         # Static files & SEO/GEO Metadata
│   ├── index.html                  # Main HTML entry with JSON-LD Schemas, OG tags & static fallback HTML
│   ├── robots.txt                  # Rules allowing search bots & AI engine crawlers (GPTBot, ClaudeBot, etc.)
│   ├── sitemap.xml                 # Search engine XML sitemap for route indexing
│   ├── manifest.json               # Web App manifest
│   └── sFav.png                    # Site favicon
│
├── src/                            # React Application Source Code
│   ├── App.js                      # Root component with Router, Routes, & Ambient Glow Orbs
│   ├── App.css                     # Global React app utility styles
│   ├── style.css                   # Core CSS design system, color variables, animations, glassmorphism
│   ├── index.js                    # React DOM renderer
│   │
│   ├── assets/                     # Media, Icons & Downloads
│   │   ├── Dhiraj_Shah_Software_Developer_Resume.pdf  # PDF Resume downloaded via top navbar & hero
│   │   ├── about.png               # About section image
│   │   ├── dLogo.png               # Brand logo
│   │   ├── home-bg.jpg             # Hero background overlay
│   │   └── projects/               # Project screenshots
│   │       ├── chatfussion.png     # ChatFussion featured project image
│   │       ├── blog.png            # Echo's of Voice project image
│   │       ├── shop.png            # Shop Circle project image
│   │       └── gym.png             # Gold's Gym project image
│   │
│   ├── components/                 # Reusable UI Components
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx          # Glassmorphic top navigation bar with active state colors & Resume button
│   │   ├── Home/
│   │   │   ├── Hero.jsx            # Hero section (Name, Title, 8+ Months Badge, CTA buttons)
│   │   │   ├── ImpactMetrics.jsx   # Stat bar (3,000+ Users, 10,000+ Jobs, 5+ Scrapers, 90%+ Accuracy)
│   │   │   ├── About.jsx           # Concise technical bio
│   │   │   └── Type.jsx            # Typewriter text effect
│   │   ├── Experience/
│   │   │   └── Experience.jsx      # Work experience timeline (Mployee.me & Admire Softech)
│   │   ├── Projects/
│   │   │   ├── FeaturedProject.jsx # Wide showcase card for ChatFussion (Voice input, Socket.io)
│   │   │   └── ProjectCard.jsx     # Reusable card component for secondary projects
│   │   ├── Skillset/
│   │   │   ├── OrganizedTechstack.jsx # Grouped tech stack (Frontend, Backend, Systems, Cloud, AI/ML)
│   │   │   ├── Techstack.jsx       # Icon-based skillset
│   │   │   ├── Toolstack.jsx       # Tool icons
│   │   │   ├── Github.jsx          # GitHub calendar activity widget
│   │   │   └── Leetcode.jsx        # LeetCode profile link card
│   │   ├── Contact/
│   │   │   ├── Contact.jsx         # Contact form component
│   │   │   └── Social.jsx          # Social buttons (Email, LinkedIn, GitHub, LeetCode)
│   │   ├── Footer/
│   │   │   └── Footer.jsx          # Site footer
│   │   ├── Particle.js             # Canvas particle node background animation
│   │   ├── PreLoader.js            # Page loading screen animation
│   │   └── ScrollToTop.js          # Route change auto scroll-to-top handler
│   │
│   └── pages/                      # Page Containers & Routes
│       ├── Home.jsx                # Main landing page assembling all sections in recruiter order
│       ├── Projects.jsx            # Standalone Projects page
│       ├── Skillset.jsx            # Standalone Skills page
│       ├── Resume.jsx              # Standalone PDF Resume preview page
│       └── Contact.jsx             # Standalone Contact page
│
├── package.json                    # Dependencies & NPM build scripts
└── README.md                       # Project documentation & reference guide
```

---

## 🎨 Theme & Color Palette System

All styling is managed in [`src/style.css`](file:///c:/Users/shahd/OneDrive/Desktop/Portfolio/src/style.css) using CSS Custom Properties:
- `--bg-dark-1`: `#0a0e1a` (Deep Midnight Slate)
- `--bg-dark-2`: `#05070e` (Dark Obsidian)
- `--accent`: `#00f2fe` (Electric Cyan highlight)
- `--accent-2`: `#a78bfa` (Soft Violet)
- `--card-bg`: `rgba(15, 23, 42, 0.65)` (Glassmorphism backdrop-blur containers)
- `--glass-border`: `rgba(255, 255, 255, 0.08)`

---

## ❓ Frequently Asked Questions

### 1. Do I need to update `sitemap.xml` daily?
**NO, absolutely not.** 
- Search engines (Google, Bing) and AI search engines (ChatGPT, Perplexity) do **NOT** expect or require daily sitemap updates for portfolio websites.
- You only need to touch [`public/sitemap.xml`](file:///c:/Users/shahd/OneDrive/Desktop/Portfolio/public/sitemap.xml) when:
  1. You add a **brand-new page route** (e.g. `/blog` or `/case-studies`).
  2. You change your domain name.
- For normal text updates, adding projects, or updating resume details, search engine crawlers re-index your site automatically based on your site's activity.

### 2. How do I update my Resume PDF in the future?
Replace the PDF file located at:
`src/assets/Dhiraj_Shah_Software_Developer_Resume.pdf`
*(Keep the filename the same, or update the import path in `Hero.jsx`, `Navbar.jsx`, and `Resume.jsx`).*

### 3. How do I add a new project?
1. Place a project screenshot inside `src/assets/projects/`.
2. Open [`src/pages/Projects.jsx`](file:///c:/Users/shahd/OneDrive/Desktop/Portfolio/src/pages/Projects.jsx) (or `src/pages/Home.jsx`) and add your new project object to the `secondaryProjects` array.

---

## 🛠️ Development & Deployment Commands

### Run Locally:
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Production Build:
```bash
npm run build
```
Compiles an optimized production bundle in the `build/` directory ready for deployment on **Netlify**, **Vercel**, or **GitHub Pages**.
