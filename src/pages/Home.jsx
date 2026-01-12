import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Academics from '../components/Home/Academics';
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import ProjectCard from "../components/Projects/ProjectCard";
import blog from "../assets/projects/blog.png";
import shop from "../assets/projects/shop.png";
import Gym from "../assets/projects/gym.png";
import ChatFussion from "../assets/projects/chatfussion.png";
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Dhiraj Shah</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Section */}
      <About />

      {/* Academics Section */}
      <Academics />

      {/* Skills Section */}
      <Container fluid className="about-section" id="skills">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Professional <strong className="yellow">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="yellow">Tools</strong> I use
          </h1>
          <Toolstack />

          <Leetcode />
          <Github />
        </Container>
      </Container>

      {/* Projects Section */}
      <Container fluid className="project-section" id="projects">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Recent Top <strong className="yellow">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ChatFussion}
                isBlog={false}
                title="Chat Application"
                description="ChatFussion is a dynamic full-stack chat application designed to facilitate real-time communication with cutting-edge technology. It features secure user authentication using JWT, ensuring private and reliable access to chat functionalities. Powered by Socket.IO, it delivers seamless real-time messaging, enabling users to send and receive messages instantly. The application integrates serverless authentication for enhanced security and scalable session management.

Technologies Used: React.js for the user interface, Node.js and Express.js for the backend, Socket.IO for real-time communication, MongoDB for database management, and JSON Web Token (JWT) for secure authentication. ChatFussion is the perfect solution for modern communication needs, offering reliability, security, and a user-friendly experience."
                ghLink="https://github.com/thedhirajshah13/ChatFussion"
                demoLink="https://chatfussion.netlify.app"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blog}
                isBlog={false}
                title="Blog Application"
                description="Echoes of Expression is a personal blog platform that allows users to share insights, stories, and reflections on diverse topics such as lifestyle, technology, and personal development. Designed with the MERN stack, this application features RESTful APIs for seamless content management, offering dynamic interactions with the database for an intuitive and interactive user experience.

Technologies Used: MongoDB for the database, Express.js for backend routing, React for the front-end interface, and Node.js for the server-side logic. Echoes of Expression is a perfect space for bloggers and writers to express their thoughts, fostering a vibrant community for content creation and engagement."
                ghLink="https://github.com/thedhirajshah13"
                demoLink="https://echoofvoices.netlify.app"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={shop}
                isBlog={false}
                title="E-Commerce Store"
                description="TechCart is a comprehensive e-commerce platform designed to offer a seamless shopping experience for technology products. Built using the MERN stack, it combines the power of MongoDB for data management, Express.js for server-side operations, React for a dynamic and responsive user interface, and Node.js for efficient backend processing."
                ghLink="https://github.com/thedhirajshah13"
                demoLink="https://techcart.netlify.app"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Gym}
                isBlog={false}
                title="Gym Website"
                description="FitnessPro is a modern gym website built to showcase fitness services, class schedules, and trainer profiles. This responsive website provides users with an intuitive interface to explore various fitness programs and connect with experienced trainers."
                ghLink="https://github.com/thedhirajshah13"
                demoLink="https://fitnessgym.netlify.app"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Contact Section */}
      <Container fluid className="contact-section" id="contact" style={{ padding: '60px 0' }}>
        <Particle />
        <Container>
          <ContactForm />
          <Social />
        </Container>
      </Container>
    </section>
  );
}

export default Home