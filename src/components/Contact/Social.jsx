import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/thedhirajshah13"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/thedhirajshah_13/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/dhiraj-shah-280118225/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://leetcode.com/u/illusion_13/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social