import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskmate from "../../Assets/Projects/taskmate.PNG";
import krunker from "../../Assets/Projects/krunker.png";
import mexpense from "../../Assets/Projects/Capture.PNG";
import hlibrary from "../../Assets/Projects/hlibrary.PNG";
import cinemate from "../../Assets/Projects/cinemate.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krunker}
              isBlog={false}
              types={["PHP", "MYSQl", "JS"]}
              title="Krunker Idea Portal"
              description="The Krunker Idea Portal is a web-based forum tailored for school institution staff to share and discuss improvement ideas. The system incorporates different user roles, each with its own features. I gained experience in web development, database design, and user authentication, contributing to my proficiency in creating interactive and role-based web applications with a basic of PHP."
              ghLink="https://github.com/KrunkerOG-COMP1640/COMP1640_CW-krunkerOG"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mexpense}
              isBlog={false}
              types={["JS", "SQLite", "MobileUI"]}
              title="M-Expense"
              description="M-Expense is a mobile app designed to streamline the process of work trip expense claims for company staff. Users can conveniently add multiple expense types under a single trip. This project has enhanced my mobile app development skills just by using web technologies and convert it to mobile app."
              ghLink="https://github.com/Harinash/M-Expense"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hlibrary}
              isBlog={false}
              types={["PHP", "MySQL", "JS"]}
              title="H-Library"
              description="H-Library is a web based library management system which allow members reserved books in advance and then pick it up physically from the library. Members can search and filter the books through the system, share their reviews and ratings for a specific book and even view their current penalties. "
              ghLink="https://github.com/Harinash/H-Library"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemate}
              isBlog={false}
              types={["React.JS", "TaildwindCSS"]}
              title="Cinemate"
              description="Cinemate is a web app to display all the popular, top rated and upcoming movies. The data for all the movie details is fetched by using the TMDB API. This small project allow me to understand more about react hooks and how to deploy projects in Netlify."
              ghLink="https://github.com/Harinash/cinemate"
              demoLink="https://cinemate-hari.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmate}
              isBlog={false}
              types={["React.JS", "TaildwindCSS"]}
              title="Taskmate"
              description="Taskmate is web app which represents an online todo app. You can add, edit and remove tasks. It also has a theme to change the background color of the site and this small project allowed me to understand the basics of React JS."
              ghLink="https://github.com/Harinash/Taskmate"
              demoLink="https://taskmate-hari.netlify.app/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"     
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
