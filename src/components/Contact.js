import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {


  return (
    <section id="contact" className="contact">
    <Container>
    <Row className="skill-bx wow zoomIn">
          <h1>Contact Me</h1>
          <p>
            <strong>My mail</strong> <br />
            <a href="mailto:ofri900@gmail.com">ofri900@gmail.com</a>
          </p>
          <p>
            <strong>My phone</strong> <br />
            <a href="tel:+972504423440">050-4423440</a>
          </p>
          </Row>
      </Container>

</section>
  )
}