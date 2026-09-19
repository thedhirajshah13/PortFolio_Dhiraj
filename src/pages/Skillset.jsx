import React from "react";
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import OrganizedTechstack from "../components/Skillset/OrganizedTechstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section" id="skills">
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