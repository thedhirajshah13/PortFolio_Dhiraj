import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="project-card-img"
      />
      <Card.Body className="project-card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-text">
          {props.description}
        </Card.Text>
        <Button
          className="project-btn"
          variant="primary"
          href={props.ghLink}
          target="_blank"
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {props.demoLink && (
          <Button
            className="project-btn"
            variant="primary"
            href={props.demoLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
