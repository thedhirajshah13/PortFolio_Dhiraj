import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './Social.css';

const Social = () => {
  return (
    <Container style={{ padding: '30px 0' }}>
      <Row>
        <Col md={12} className="contact-social text-center">
          <div className='contact-text mb-4'>
            <h2 className="section-title">
              Have an opportunity or want to <span className="yellow">work together?</span>
            </h2>
            <p className="lead text-muted">
              I'm always open to discussing full-stack development, backend automation, or data pipeline opportunities.
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
            <a
              href="mailto:thedhirajshah13@gmail.com"
              className="btn btn-primary btn-cta d-flex align-items-center gap-2"
            >
              <AiOutlineMail fontSize="1.2rem" /> Direct Email
            </a>

            <a
              href="https://www.linkedin.com/in/dhiraj-shah-280118225/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-cta d-flex align-items-center gap-2"
            >
              <FaLinkedinIn fontSize="1.2rem" /> LinkedIn Profile
            </a>

            <a
              href="https://github.com/thedhirajshah13"
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-link d-flex align-items-center gap-2"
            >
              <AiFillGithub fontSize="1.2rem" /> GitHub Repositories
            </a>

            <a
              href="https://leetcode.com/u/illusion_13/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-link d-flex align-items-center gap-2"
            >
              <SiLeetcode fontSize="1.2rem" /> LeetCode
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;