import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle'
import pdf from "../assets/Dhiraj_Shah_Software_Developer_Resume.pdf"

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import SEO from "../components/SEO";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <SEO
        title="Resume & Professional Experience | Dhiraj Shah"
        description="Official Software Developer Resume of Dhiraj Shah. Full Stack Developer specializing in React, Node.js, Express, MongoDB, Redis, BullMQ & AWS. View and download resume."
        keywords="Dhiraj Shah Resume, Software Engineer CV, Full Stack Developer Resume, Backend Engineer Resume Delhi India"
        canonicalPath="/resume"
      />
      <Container fluid className="resume-section">
        <Particle />

        <div className="text-center mb-4">
          <h1 className="section-title">
            Professional <span className="yellow">Resume</span>
          </h1>
          <p className="section-subtitle">
            Dhiraj Shah — Full Stack Developer &amp; Backend Engineer (Delhi, India)
          </p>
        </div>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume (PDF)
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.4} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume (PDF)
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume