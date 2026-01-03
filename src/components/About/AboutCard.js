import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi I'm <span className="purple">Harinash from </span>
           <span className="purple"> Kuala Lumpur, Malaysia.</span>
            <br />
            I am currently a Junior Web Developer.
            <br />
            I have completed Bsc (Hons) in Computing at Segi College Kuala Lumpur in December 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The era of AI is here so most computer tasks can be partially or fully automated with the help of AI tools to produce the right code."{" "}
          </p>
          <footer className="blockquote-footer">Harinash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
