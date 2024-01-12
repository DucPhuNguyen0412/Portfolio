import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yourflight from "../../Assets/Projects/booking-flight-tickets-online-flat-concept-vector-24556036.jpg";
import netflix from "../../Assets/Projects/Netflix.png";
import jobscraper from "../../Assets/Projects/online-job-search.jpg";


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
              imgPath={jobscraper}
              isBlog={false}
              title="Job-Scraper"
              description="A job search tools that gather data from LinkedIn, ZipRecruiter, and Indeed, integrated with a user-friendly UI. Tech stack includes Python for backend logic, MySQL for data storage, and JavaScript along with HTML/CSS for a polished, responsive front-end. "
              ghLink="https://github.com/DucPhuNguyen0412/JobScraper"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A  Netflix clone, built with Django and Tailwind CSS, offers a user-friendly streaming experience, account control, ensuring user data integrity and secure authentication. It utilizes SQLite for lightweight data storage and efficient retrieval."
              ghLink="https://github.com/DucPhuNguyen0412/netflix-clone"
              demoLink="http://ec2-34-229-94-5.compute-1.amazonaws.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yourflight}
              isBlog={false}
              title="YourFlight"
              description="My first step in ETL, along with Cloud Storing via AWS. YourFlight scrapes real-time data from Kayak and Google Flights, and conveniently archives the results on an AWS S3 bucket for easy retrieval and analysis."
              ghLink="https://github.com/DucPhuNguyen0412/YourFlight"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
