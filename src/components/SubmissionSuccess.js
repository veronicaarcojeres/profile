import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function SubmissionSuccess() {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <Container className="mt-5">
      <h2>Thank you, {name}!</h2>
      <p>Your message has been sent successfully.</p>

      <h5>Submitted Information:</h5>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </Container>
  );
}

export default SubmissionSuccess;
