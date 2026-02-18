import React from "react";
import { Container, Card } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <Container className="mt-5">
      <Card className="p-4 text-center">
        <h2>Thank you, {name}!</h2>
        <p>Your message has been sent successfully.</p>
        <h5>Submitted Information:</h5>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong> {message}</p>
        <Button as={Link} to="/" variant="primary" className="mt-3">
          Back to Home
        </Button>
      </Card>
    </Container>
  );
}

export default SubmissionSuccess;
