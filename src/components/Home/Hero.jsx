import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineDownload, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Particle from '../Particle';
import pdf from '../../assets/Dhiraj_Shah_Software_Developer_Resume.pdf';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <Particle />
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={12} className="text-center">
            <div className="hero-badge-wrapper mb-3">
              <span className="experience-badge">
                🔥 8+ Months Professional Experience
              </span>
            </div>

            <h1 className="hero-greeting">
              Hi, I'm <span className="highlight-name">Dhiraj Shah</span>
            </h1>

            <h2 className="hero-role mt-2">
              Full Stack Developer
            </h2>

            <p className="hero-description mx-auto mt-4">
              Building scalable web applications, backend systems &amp; data-driven solutions with 
              <strong> React, Node.js, MongoDB, Redis &amp; AWS</strong>.
            </p>

            <div className="hero-cta-group mt-4 d-flex justify-content-center flex-wrap gap-3">
              <button
                className="btn btn-primary btn-cta d-flex align-items-center gap-2"
                onClick={() => scrollToSection('projects')}
              >
                <AiOutlineFundProjectionScreen fontSize="1.2rem" />
                View Projects
              </button>

              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-cta d-flex align-items-center gap-2"
              >
                <AiOutlineDownload fontSize="1.2rem" />
                Download Resume
              </a>

              <a
                href="https://github.com/thedhirajshah13"
                target="_blank"
                rel="noreferrer"
                className="btn btn-social-link d-flex align-items-center gap-2"
                aria-label="GitHub Profile"
              >
                <AiFillGithub fontSize="1.2rem" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dhiraj-shah-280118225/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-social-link d-flex align-items-center gap-2"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn fontSize="1.2rem" />
                LinkedIn
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
