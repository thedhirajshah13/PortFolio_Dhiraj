import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Dhiraj_Shah_Software_Developer_Resume.pdf";
import { Link, useLocation } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const scrollToSection = (id) => {
    updateExpanded(false);
    if (location.pathname !== "/") {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="brand-name">Dhiraj Shah</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-md-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => {
                  updateExpanded(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => scrollToSection("experience")}
              >
                <FaBriefcase style={{ marginBottom: "2px" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skillset"
                onClick={() => updateExpanded(false)}
              >
                <GiSkills style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="ms-md-2 mt-2 mt-md-0">
              <Button
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="btn-resume-nav d-flex align-items-center gap-1"
                size="sm"
              >
                <AiOutlineDownload /> Resume ↓
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
