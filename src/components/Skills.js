import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiBootstrap } from "react-icons/si";

function Skills() {
  const skillList = [
    { name: "JavaScript", icon: <SiJavascript size={40} color="#f0db4f"/> },
    { name: "React.js", icon: <SiReact size={40} color="#61dbfb"/> },
    { name: "HTML5", icon: <SiHtml5 size={40} color="#e34c26"/> },
    { name: "CSS3", icon: <SiCss3 size={40} color="#264de4"/> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} color="#563d7c"/> },
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4">My Skills</h1>
      <Row>
        {skillList.map((skill, index) => (
          <Col md={2} sm={4} xs={6} key={index} className="text-center mb-4">
            <Card className="p-3">
              <div>{skill.icon}</div>
              <p className="mt-2">{skill.name}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
