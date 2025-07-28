import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vku from "../../Assets/Projects/vku.png";
import giupviecnao from "../../Assets/Projects/giupviecnao.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import anime from "../../Assets/Projects/anime.png";
import coffeapp from "../../Assets/Projects/coffeapp.png";

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
              imgPath={giupviecnao}
              isBlog={false}
              title="GiupViecNao"
              description="A simple and fast platform to find trusted housekeepers near you. Connect with experienced helpers for cleaning, cooking, elderly care, and more."
              ghLink="https://github.com/hanhl3"
              demoLink="https://github.com/hanhl3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokémon Memory Game"
              description="A simple and entertaining memory game where players flip cards to find matching Pokémon pairs. Great for all ages to improve concentration and have fun with favorite characters!"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="Anime web"
              description="A streaming website where users can watch high-quality anime with subtitles. Easily browse popular series, new releases, and classic titles—all in one place."
              ghLink="https://github.com/hanhl3"
              demoLink="https://github.com/hanhl3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vku}
              isBlog={false}
              title="VKU-Assistant"
              description="A helpful platform for VKU students to ask questions about academics, view the student handbook, and get quick answers about school regulations, schedules, and procedures."
              ghLink="https://github.com/hanhl3"
              demoLink="https://github.com/hanhl3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffeapp}
              isBlog={false}
              title="Coffee AI"
              description="An AI-powered feature for your café app that suggests drinks based on customer preferences, weather, and time of day — enhancing customer experience and boosting sales."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
