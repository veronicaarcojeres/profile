import React from "react";
import { Container, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">About Me</h1>
      <Card>
        <Card.Body>
          <Card.Text>
            I'm a passionate IT student who loves coding, web design, and learning 
            new technologies. I enjoy building modern websites and exploring UI/UX design.
            <br /><br />
            Education: College student, Computer Science  
            <br />
            Hobbies: Drawing, Playing guitar, Coding challenges
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
