import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const webProjs = [
        {
          title: "Business Startup1",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup2",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup3",
          description: "Design & Development",
          imgUrl: projImg3,
        }
    ];

    const softProjs = [
        {
          title: "Business Startup Soft1",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup Soft2",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup Soft3",
          description: "Design & Development",
          imgUrl: projImg3,
        }
    ];

    const fullProjs = [
        {
          title: "Business Startup full1",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup full2",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup full3",
          description: "Design & Development",
          imgUrl: projImg3,
        }
    ];


    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Web Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Software Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Full Stack Apps</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              webProjs.map((webProj, index) => {
                                return (
                                  <ProjectCard
                                  key={webProj.title}
                                    {...webProj}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                              softProjs.map((softProj, index) => {
                                return (
                                  <ProjectCard
                                  key={softProj.title}
                                    {...softProj}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                              fullProjs.map((fullProj, index) => {
                                return (
                                  <ProjectCard
                                  key={fullProj.title}
                                    {...fullProj}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt="backGroundColor"></img>
        </section>
      )
}