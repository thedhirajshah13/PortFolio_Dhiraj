import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view h-100">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title}
        className="project-card-img"
      />
      <Card.Body className="project-card-body d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="project-card-title">{props.title}</Card.Title>

          {props.tags && props.tags.length > 0 && (
            <div className="d-flex flex-wrap gap-1 my-2">
              {props.tags.map((tag, i) => (
                <span key={i} className="tech-tag-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <Card.Text className="project-card-text">
            {props.description}
          </Card.Text>
        </div>

        <div className="d-flex gap-2 mt-3">
          {props.demoLink && (
            <Button
              className="flex-fill d-flex align-items-center justify-content-center gap-1"
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              size="sm"
            >
              <CgWebsite /> Demo →
            </Button>
          )}

          <Button
            className="flex-fill d-flex align-items-center justify-content-center gap-1"
            variant="outline-light"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            size="sm"
          >
            <BsGithub /> GitHub →
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
