import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import blog from "../assets/projects/blog.png";

import shop from "../assets/projects/shop.png";


import Gym from "../assets/projects/gym.png";
import ChatFussion from "../assets/projects/chatfussion.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
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
              title="Shop Circle E-Commerce"
              description="Developed a comprehensive e-commerce website using React.js, featuring user authentication with login and logout functionalities integrated via Dummy JSON API. The application includes protected routes to ensure secure access. Product data is dynamically fetched from the same API, allowing users to add and remove items from their cart, apply filters, and proceed through a seamless checkout process. The site is optimized for performance and designed to be responsive, ensuring compatibility across various devices. Additionally, state management is efficiently handled, and the interface is built using Material-UI components for a modern and user-friendly experience."
              ghLink="https://github.com/thedhirajshah13/Stop_Go_Mart"
              demoLink="https://shop-circle.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym}
              isBlog={false}
              title="Gold Gym"
              description="This gym application is built using React and Material UI, integrating data from ExerciseDB and YouTube Search via RapidAPI. It supports over 1,300 exercises categorized by body part, equipment, and target muscle. YouTube API dynamically fetches 5+ video tutorials per exercise, enhancing user learning. The app boasts a 95% mobile responsiveness score, <200ms API latency, and is compatible with all major browsers (Chrome, Firefox, Edge, Safari). Optimized using lazy loading and debounce input handling, it delivers smooth performance with load times under 1.5s on average. Designed for scalability, the UI ensures seamless user interaction and accessibility."
              ghLink="https://github.com/thedhirajshah13/Gold_Gym"
              demoLink="https://golg-gym.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
