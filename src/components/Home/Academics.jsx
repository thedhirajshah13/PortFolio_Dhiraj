import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import "./Academics.css";

const Academics = () => {
  return (
    <Container fluid className="academics-section" id="academics">
      <Container>
        <h1 className="project-heading">
          <strong className="yellow">Academics</strong>
        </h1>

        <Row className="academics-content">
          {/* Education Column */}
          <Col md={6}>
            <h2 className="academics-subtitle">
              <strong className="yellow">Education</strong>
            </h2>

            <div className="academic-card">
              <div className="academic-card-header">
                <FaGraduationCap className="academic-icon" />
                <div>
                  <h4>Masters in Computer Science</h4>
                  <p className="academic-institution">
                    Galgotias University , Greater Noida (8.7 CGPA)
                  </p>
                </div>
              </div>
            </div>

            <div className="academic-card">
              <div className="academic-card-header">
                <FaBook className="academic-icon" />
                <div>
                  <h4>Bachelors in Computer Science</h4>
                  <p className="academic-institution">
                    CCSU University , Meerut UP (8.1 CGPA)
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Experience Column */}
          <Col md={6}>
            <h2 className="academics-subtitle">
              <strong className="yellow">Experience</strong>
            </h2>

            <div className="academic-card">
              <div className="academic-card-header">
                <div className="experience-badge">1</div>
                <div>
                  <h4>Technical Intern</h4>
                  <p className="academic-institution">
                    Techsnitch Pvt Ltd. (1 Jan, 2024 - 1 Feb, 2024)
                  </p>
                  <p className="experience-details">
                    Work on service Now Technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="academic-card">
              <div className="academic-card-header">
                <div className="experience-badge">2</div>
                <div>
                  <h4>Full-stack developer Intern</h4>
                  <p className="academic-institution">
                    Admire Softech Pvt Ltd. (1 Jul - 30 Oct, 2025)
                  </p>
                  <p className="experience-details">
                    <p>
                      • Developed and maintained backend services for 4 live
                      travel websites using Node.js, Express.js, and MongoDB.
                    </p>
                    <p>
                      • Designed REST APIs for destinations, itineraries, blogs,
                      and media management.
                    </p>
                    <p>
                     • Deployed backend on Hostinger VPS using
                      Nginx, SSL, and domain configuration.
                    </p>
                  </p>

                  
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Academics;
