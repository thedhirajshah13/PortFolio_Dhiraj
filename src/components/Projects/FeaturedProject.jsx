import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { CgExternal } from 'react-icons/cg';
import ChatFussionImg from '../../assets/projects/chatfussion.png';

const FeaturedProject = () => {
  return (
    <div className="featured-project-container my-5">
      <div className="featured-badge mb-2">⭐ FEATURED PROJECT</div>
      <div className="featured-card p-4 p-md-5">
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="featured-img-wrapper text-center">
              <img
                src={ChatFussionImg}
                alt="ChatFussion Real-Time Messaging Platform"
                className="img-fluid featured-img rounded shadow"
              />
            </div>
          </Col>

          <Col lg={6}>
            <h3 className="featured-title mb-2">
              ChatFussion — <span className="yellow">Real-Time Messaging Platform</span>
            </h3>

            <div className="d-flex flex-wrap gap-2 mb-3">
              {['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Google Cloud Speech-to-Text', 'JWT'].map((tech, idx) => (
                <span key={idx} className="tech-tag-featured">
                  {tech}
                </span>
              ))}
            </div>

            <p className="featured-description">
              A dynamic full-stack messaging platform engineered for high-performance real-time communication.
              Supports instant multi-user chat rooms, secure JWT session authentication, serverless state management,
              and <strong>Google Cloud Speech-to-Text powered voice input</strong> allowing effortless voice-to-text messaging.
            </p>

            <div className="featured-highlights mb-4">
              <div className="featured-highlight-item">
                ⚡ <strong>Real-time bi-directional streaming</strong> with Socket.io
              </div>
              <div className="featured-highlight-item">
                🎙️ <strong>Voice-to-text input engine</strong> powered by Google Cloud Speech-to-Text API
              </div>
              <div className="featured-highlight-item">
                🔒 <strong>Secure user auth</strong> &amp; session persistence with JWT &amp; MongoDB
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="primary"
                href="https://chatfussion.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center gap-2 px-4 py-2"
              >
                <CgExternal fontSize="1.2rem" /> Live Demo →
              </Button>

              <Button
                variant="outline-light"
                href="https://github.com/thedhirajshah13/ChatFussion"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center gap-2 px-4 py-2"
              >
                <AiFillGithub fontSize="1.2rem" /> GitHub →
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeaturedProject;
