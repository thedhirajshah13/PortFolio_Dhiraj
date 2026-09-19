import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import FeaturedProject from "../components/Projects/FeaturedProject";
import Particle from "../components/Particle";
import blog from "../assets/projects/blog.png";
import shop from "../assets/projects/shop.png";
import Gym from "../assets/projects/gym.png";

const Projects = () => {
  const secondaryProjects = [
    {
      title: "Echo's of Voice — Personal Blog Platform",
      imgPath: blog,
      tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      description: "A feature-packed blogging platform allowing users to share insights, stories, and reflections with real-time interactive user features, moderation capabilities, and responsive UI.",
      ghLink: "https://github.com/thedhirajshah13",
      demoLink: "https://echoofvoices.netlify.app"
    },
    {
      title: "Shop Circle — E-Commerce Application",
      imgPath: shop,
      tags: ["React", "Material-UI", "REST APIs", "State Management"],
      description: "Full-featured e-commerce platform with dynamic product catalog fetching, cart management, search filtering, user authentication, and responsive checkout flows.",
      ghLink: "https://github.com/thedhirajshah13/Stop_Go_Mart",
      demoLink: "https://shop-circle.netlify.app"
    },
    {
      title: "Gold's Gym — Fitness & Workout Web App",
      imgPath: Gym,
      tags: ["React", "Material-UI", "RapidAPI", "ExerciseDB"],
      description: "Modern gym application featuring 1,300+ body-part targeted exercises, YouTube video tutorials, lazy loading optimizations, and responsive search filtering.",
      ghLink: "https://github.com/thedhirajshah13/Gold_Gym",
      demoLink: "https://golg-gym.netlify.app"
    }
  ];

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title">
            Featured &amp; Production <span className="yellow">Projects</span>
          </h2>
          <p className="section-subtitle">
            Polished applications demonstrating real-world full-stack &amp; API engineering
          </p>
        </div>

        {/* Featured Project Showcase */}
        <FeaturedProject />

        {/* Other Top Projects Grid */}
        <div className="mt-5">
          <h3 className="section-title text-center mb-4 fs-3">
            More <span className="yellow">Projects</span>
          </h3>
          <Row className="justify-content-center g-4">
            {secondaryProjects.map((project, idx) => (
              <Col key={idx} lg={4} md={6} className="d-flex align-items-stretch">
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  tags={project.tags}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default Projects;
