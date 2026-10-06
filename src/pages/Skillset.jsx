import React from "react";
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import OrganizedTechstack from "../components/Skillset/OrganizedTechstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";
import SEO from "../components/SEO";

const Skillset = () => {
  return (
    <Container fluid className="about-section" id="skills">
      <SEO
        title="Technical Skillset & Architecture | Dhiraj Shah"
        description="Comprehensive technical skill set of Dhiraj Shah: React.js, Node.js, Express, MongoDB, Redis, BullMQ, AWS EC2/S3, Docker, Python, Web Scraping, NLP, and Data Structures."
        keywords="Dhiraj Shah Skills, Full Stack Skills, Node.js, Express, React, Redis, BullMQ, AWS, MongoDB, System Design, NLP, LeetCode"
        canonicalPath="/skillset"
      />
      <Particle />
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title">
            Technical <span className="yellow">Skillset &amp; Architecture</span>
          </h2>
          <p className="section-subtitle">
            Categorized core competencies, frameworks, systems, and cloud infrastructure
          </p>
        </div>

        <OrganizedTechstack />

        <div className="mt-5 text-center">
          <h3 className="section-title fs-3 mb-4">
            Development <span className="yellow">Tools</span>
          </h3>
          <Toolstack />
        </div>

        <Leetcode />
        <Github />
      </Container>
    </Container>
  );
};

export default Skillset;