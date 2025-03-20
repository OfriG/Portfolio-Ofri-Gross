import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import booksImg from "../assets/img/books.png";
import weddingPlanImg from "../assets/img/weddingPlan.png";
import snakesImg from "../assets/img/SNAKES.png";

export const Projects = () => {

  const projects = [
    {
      title: "Google Books Website",
      description: "Google Books Website",
      imgUrl: "http://localhost:3000" + booksImg,
      url: "https://proj.ruppin.ac.il/cgroup76/test2/tar6/index.html"
    },
    {
      title: "Wedding Planner",
      description: "Wedding Planner system built with AWS service",
      imgUrl: 'weddingPlan.png',
      url: "https://weddingplanner1.s3.us-east-1.amazonaws.com/mywebsite/index.html"
    },
    {
      title: "Snakes Game",
      description: "Design & Development",
      imgUrl:snakesImg,
      url: "https://ofrig.github.io/snake-game/"
    },
  
  ];

  return (
    <section className="project" id="projects">
    <Container>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
  );
};
