import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiRedis, SiPython,
  SiAmazonaws, SiDocker, SiNginx, SiGit
} from 'react-icons/si';
import { FaCogs, FaBrain } from 'react-icons/fa';

const OrganizedTechstack = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#FFFFFF" /> },
        { name: "REST APIs", icon: <FaCogs color="#9f6bff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
      ]
    },
    {
      title: "Systems & Data",
      skills: [
        { name: "Redis", icon: <SiRedis color="#DC382D" /> },
        { name: "BullMQ", icon: <FaCogs color="#FF9900" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Web Scraping", icon: <FaCogs color="#9f6bff" /> },
        { name: "Data Pipelines", icon: <FaCogs color="#00C7B7" /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS EC2", icon: <SiAmazonaws color="#FF9900" /> },
        { name: "AWS S3", icon: <SiAmazonaws color="#569A31" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Nginx", icon: <SiNginx color="#009639" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> }
      ]
    },
    {
      title: "AI / ML",
      skills: [
        { name: "NLP", icon: <FaBrain color="#E25555" /> },
        { name: "ELECTRA", icon: <FaBrain color="#9f6bff" /> },
        { name: "Aho-Corasick", icon: <FaBrain color="#61DAFB" /> }
      ]
    }
  ];

  return (
    <div className="organized-techstack my-4">
      <Row className="g-4">
        {categories.map((cat, idx) => (
          <Col key={idx} lg={cat.title === "AI / ML" ? 12 : 6}>
            <div className="tech-category-card p-4 h-100">
              <h4 className="tech-category-title mb-3">
                <span className="yellow">{cat.title}</span>
              </h4>
              <div className="d-flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="tech-pill-item d-flex align-items-center gap-2">
                    <span className="tech-pill-icon">{skill.icon}</span>
                    <span className="tech-pill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OrganizedTechstack;
