import React from 'react';
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import Hero from '../components/Home/Hero';
import ImpactMetrics from '../components/Home/ImpactMetrics';
import Experience from '../components/Experience/Experience';
import FeaturedProject from '../components/Projects/FeaturedProject';
import ProjectCard from '../components/Projects/ProjectCard';
import OrganizedTechstack from '../components/Skillset/OrganizedTechstack';
import About from '../components/Home/About';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

import blog from "../assets/projects/blog.png";
import shop from "../assets/projects/shop.png";
import Gym from "../assets/projects/gym.png";

const Home = () => {
  const secondaryProjects = [
    {
      title: "Echo's of Voice — Blog Platform",
      imgPath: blog,
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      description: "A feature-packed blogging platform allowing users to share insights, stories, and reflections with real-time interactive user features and moderation capabilities.",
      ghLink: "https://github.com/thedhirajshah13",
      demoLink: "https://echoofvoices.netlify.app"
    },
    {
      title: "Shop Circle — E-Commerce Store",
      imgPath: shop,
      tags: ["React", "Material-UI", "REST APIs", "State Management"],
      description: "Full-featured e-commerce platform with dynamic product catalog fetching, cart management, search filtering, user authentication, and responsive checkout flows.",
      ghLink: "https://github.com/thedhirajshah13/Stop_Go_Mart",
      demoLink: "https://shop-circle.netlify.app"
    },
    {
      title: "Gold's Gym — Fitness Web App",
      imgPath: Gym,
      tags: ["React", "Material-UI", "RapidAPI", "ExerciseDB"],
      description: "Modern gym application featuring 1,300+ body-part targeted exercises, YouTube video tutorials, lazy loading optimizations, and responsive search filtering.",
      ghLink: "https://github.com/thedhirajshah13/Gold_Gym",
      demoLink: "https://golg-gym.netlify.app"
    }
  ];

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Impact Metrics */}
      <ImpactMetrics />

      {/* 3. Experience Section (ABOVE Projects) */}
      <Experience />

      {/* 4. Projects Section (Featured + Secondary Cards) */}
      <section className="project-section py-5" id="projects">
        <Particle />
        <Container>
          <div className="text-center mb-4">
            <h2 className="section-title">
              Featured &amp; Production <span className="yellow">Projects</span>
            </h2>
            <p className="section-subtitle">
              Demonstrating real-world full-stack architecture, API design, and performance
            </p>
          </div>

          {/* Featured ChatFussion Project */}
          <FeaturedProject />

          {/* Secondary 3 Projects */}
          <div className="mt-5">
            <h3 className="section-title text-center mb-4 fs-4">
              More <span className="yellow">Projects</span>
            </h3>
            <div className="row justify-content-center g-4">
              {secondaryProjects.map((project, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <ProjectCard
                    imgPath={project.imgPath}
                    title={project.title}
                    tags={project.tags}
                    description={project.description}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Organized Tech Stack */}
      <section className="about-section py-5" id="skills">
        <Particle />
        <Container>
          <div className="text-center mb-4">
            <h2 className="section-title">
              Tech <span className="yellow">Stack</span>
            </h2>
            <p className="section-subtitle">
              Technologies, framework ecosystems &amp; infrastructure tools
            </p>
          </div>

          <OrganizedTechstack />
        </Container>
      </section>

      {/* 6. About Me */}
      <About />

      {/* 7. Contact Section */}
      <section className="contact-section py-5" id="contact">
        <Particle />
        <Container>
          <ContactForm />
          <Social />
        </Container>
      </section>
    </main>
  );
};

export default Home;