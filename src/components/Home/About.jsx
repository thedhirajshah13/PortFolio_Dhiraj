import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description text-start">
            <h2 className="section-title mb-4">
              About <span className="yellow">Me</span>
            </h2>
            <p className="home-about-body lead">
              I'm a <strong>Full Stack Developer</strong> with <strong>8+ months of professional experience</strong> building production web applications, backend automation systems and high-throughput data pipelines.
            </p>
            <p className="home-about-body">
              I primarily work with <strong>React, Node.js, Express, MongoDB, Redis and AWS</strong>, with additional specialized experience in <strong>Python, web scraping, and NLP modeling</strong>.
            </p>
            <p className="home-about-body">
              Whether architecting resilient background queue pipelines, implementing custom NLP information extractors, or crafting responsive React frontends, I focus on clean code, system reliability, and measurable business impact.
            </p>
          </Col>
          
          <Col md={4} className="myAvtar text-center">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" style={{ maxHeight: "300px" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;