import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import blog from "../assets/projects/Blog.png";
import MovieRecomendation from "../assets/projects/Movie_Recomendation.png";
import ECommerce from "../assets/projects/E-Commerce.png";
import Tindog from "../assets/projects/Tindog.png";
import MyNote from "../assets/projects/My_Note.png";
import Book from "../assets/projects/Book_Manager.png";
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
              imgPath={ECommerce}
              isBlog={false}
              title="E-coomerce"
              description="Developed a comprehensive e-commerce website using React.js, featuring user authentication with login and logout functionalities integrated via Dummy JSON API. The application includes protected routes to ensure secure access. Product data is dynamically fetched from the same API, allowing users to add and remove items from their cart, apply filters, and proceed through a seamless checkout process. The site is optimized for performance and designed to be responsive, ensuring compatibility across various devices. Additionally, state management is efficiently handled, and the interface is built using Material-UI components for a modern and user-friendly experience."
              ghLink="https://github.com/thedhirajshah13/Stop_Go_Mart"
              demoLink="https://steady-eclair-2b89b9.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieRecomendation}
              isBlog={false}
              title="Movie Recomendation"
              description="Developed a movie recommendation system using Python and machine learning algorithms. The system leverages various techniques such as collaborative filtering, content-based filtering, and hybrid methods to suggest movies to users based on their preferences and viewing history. Utilized libraries like Pandas, NumPy, Scikit-learn, and TensorFlow to preprocess data, build models, and evaluate their performance. Implemented features like user and movie similarity calculations, and recommendation rankings to enhance the user experience. The project showcases a strong understanding of machine learning concepts and their application in real-world scenarios, resulting in a robust and efficient recommendation system."
              ghLink="https://github.com/thedhirajshah13/movie-recommending-system"
              demoLink="https://moviesfreak.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyNote}
              isBlog={false}
              title="My Note"
              description="Developed a feature-rich note-taking application using React. The application allows users to create, edit, delete, and organize notes efficiently. Implemented a user-friendly interface with components for adding and managing notes, leveraging React's state management for seamless user interactions. Integrated functionalities such as search, categorization, and tagging to enhance note organization and retrieval. Ensured a responsive design to provide an optimal user experience across various devices. The project demonstrates proficiency in React, component-based architecture, and modern web development practices, resulting in a highly functional and intuitive note-taking app."
              ghLink="https://github.com/thedhirajshah13/My-Note-App"
              demoLink="https://merry-pothos-834a33.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Website"
              description="Developed a full-stack blog web application using Node.js, Express.js, MongoDB, and EJS. The application features user authentication, CRUD operations for posts, and dynamic EJS templates for a responsive and interactive user interface. Utilized MongoDB for efficient data management and implemented robust routing with Express.js to handle server-side logic"
              ghLink="https://github.com/thedhirajshah13"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tindog}
              isBlog={false}
              title="Tindog"
              description="Developed a compactly designed website using HTML and CSS, focusing on minimalist aesthetics and efficient layout for a streamlined user experience."
              ghLink="https://github.com/thedhirajshah13/tindog"
              demoLink="https://majestic-moxie-75587f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="BooK Manager"
              description="Developed a full-stack library management system using Node.js, Express.js, MongoDB, and EJS. Implemented functionalities such as book and member management with CRUD operations, transaction handling, and robust data storage using MongoDB. Designed dynamic and responsive views using EJS templates, ensuring seamless user interaction and efficient library administration."
              ghLink="https://github.com/thedhirajshah13"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects