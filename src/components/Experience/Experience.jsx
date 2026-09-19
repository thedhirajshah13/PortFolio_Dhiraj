import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Particle from '../Particle';

const Experience = () => {
  const experiences = [
    {
      company: "Mployee.me",
      role: "Full Stack Developer",
      period: "Feb 2026 – Present",
      type: "Full-Time",
      description: "Building production web applications, backend automation systems, and high-throughput data extraction pipelines.",
      highlights: [
        "Architected and deployed Redis + BullMQ re-engagement pipeline monitoring and processing actions for 3,000+ users with 30% return-rate improvement.",
        "Built 5+ production web scrapers, aggregating over 10,000+ job listings automatically into MongoDB.",
        "Implemented Aho-Corasick algorithm coupled with ELECTRA NLP model for automated skill & qualification extraction achieving 90%+ accuracy.",
        "Deployed backend microservices and databases on AWS EC2 and managed media assets with AWS S3.",
        "Engineered an intuitive, secure Admin Panel empowering operators to manage user pipelines, view scraping telemetry, and configure system rules."
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "AWS EC2", "AWS S3", "Python", "NLP"]
    },
    {
      company: "Admire Softech",
      role: "Full Stack Developer Intern",
      period: "Jul 2025 – Sep 2025",
      type: "Internship",
      description: "Contributed to core backend infrastructure, RESTful APIs, and frontend integration for client-facing platforms.",
      highlights: [
        "Engineered responsive UI modules and scalable backend services for travel management platforms.",
        "Optimized database query response times and implemented JWT-based authentication flows.",
        "Collaborated on deployment workflows, cross-browser responsiveness, and code reviews."
      ],
      skills: ["React", "Node.js", "Express", "REST APIs", "MongoDB", "JavaScript", "Git"]
    }
  ];

  return (
    <section className="experience-section py-5" id="experience">
      <Particle />
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">
            Work <span className="yellow">Experience</span>
          </h2>
          <p className="section-subtitle">
            8+ Months of professional production engineering experience
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-card mb-4 p-4">
                  <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
                    <div>
                      <h3 className="company-name mb-1">
                        <FaBriefcase className="me-2 yellow" />
                        {exp.company}
                      </h3>
                      <h4 className="role-title">{exp.role}</h4>
                    </div>

                    <div className="text-end">
                      <span className="period-badge mb-1 d-inline-block">
                        <FaCalendarAlt className="me-1" /> {exp.period}
                      </span>
                      <div>
                        <Badge bg="purple" className="type-badge">{exp.type}</Badge>
                      </div>
                    </div>
                  </div>

                  <p className="exp-summary">{exp.description}</p>

                  <ul className="exp-highlights-list">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
