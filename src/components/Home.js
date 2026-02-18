import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image
            src="https://lh3.googleusercontent.com/a/ACg8ocJ2HILlxcNVgTGXtsuSfuoXlbOnDrg1WM78Yu_0wllyLQgs00ul=s288-c-no"
            roundedCircle
            fluid
            alt="Profile"
            style={{ maxWidth: "200px" }}
          />
        </Col>
        <Col md={8}>
          <h1>Hi, I'm Veronica!</h1>
          <p>
            I am an aspiring web developer focused on creating modern, responsive, 
            and visually appealing web applications using React.js.
          </p>
          <Button as={Link} to="/contact" variant="primary">
            Contact Me
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
