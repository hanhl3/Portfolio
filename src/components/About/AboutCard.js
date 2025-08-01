import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Le Hanh </span>
            from <span className="purple"> Da Nang, Viet Nam.</span>
            <br />
            I am currently employed as a software developer at FPT SoftWare.
            <br />
           I am currently a final-year student majoring in Information Technology at VKU (Vietnam-Korea University of Information and Communication Technology).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Football with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">l3hanh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
