import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ecom from "../assets/img/Ecommerce-site.JPG";
import health from "../assets/img/RevaHealth.JPG";
import flash from "../assets/img/flashcard-application.JPG";

export const Projects = () => {

    const webProjs = [
        {
          title: "Full Stack Ecommerce Website",
          description: "My team was given the code of a full stack website. We were told to refactor the backend to entity framework as well as to add a couple features such as deals as well as a persistent cart. We were then told to deploy the website to Azure using a CI/CD pipeline tool. My main role in this project was to maintain the sql server database as well as setup the CI/CD pipeline. I was also involved in the registration of a new user.",
          imgUrl: ecom,
        },
        {
          title: "Health Insurance Portal",
          description: "Design & Development",
          imgUrl: health,
        },
        {
          title: "Flashcard Application",
          description: "Design & Development",
          imgUrl: flash,
        }
    ];

    const softProjs = [
        {
          title: "Link Checker Project",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Account Checking Windows Forms Application",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup Soft3",
          description: "Design & Development",
          imgUrl: projImg3,
        }
    ];

    // const dataProjs = [
    //     {
    //       title: "Business Startup full1",
    //       description: "Design & Development",
    //       imgUrl: projImg1,
    //     },
    //     {
    //       title: "Business Startup full2",
    //       description: "Design & Development",
    //       imgUrl: projImg2,
    //     },
    //     {
    //       title: "Business Startup full3",
    //       description: "Design & Development",
    //       imgUrl: projImg3,
    //     }
    // ];


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
                        {/* <Nav.Item>
                          <Nav.Link eventKey="third">Data Projects</Nav.Link>
                        </Nav.Item> */}
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
                        {/* <Tab.Pane eventKey="third">
                        <Row>
                            {
                              dataProjs.map((dataProj, index) => {
                                return (
                                  <ProjectCard
                                  key={dataProj.title}
                                    {...dataProj}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane> */}
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