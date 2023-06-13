import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import ecom from "../assets/img/Ecommerce-site.JPG";
import health from "../assets/img/RevaHealth.JPG";
import flash from "../assets/img/flashcard-application.JPG";
import chbk from "../assets/img/chbk-app.JPG";
import link from "../assets/img/link.JPG";

export const Projects = () => {

    const webProjs = [
        {
          title: "Ecommerce Website",
          description: "An Ecommerce Application that was created using C#, ASP.NET Core Web API and Angular with SQL Server in a small group. We were told to refactor the backend to entity framework as well as to add a couple features such as deals as well as a persistent cart. My main role in this project was to design/maintain the sql server database as well as setup the CI/CD pipeline and register new user.",
          imgUrl: ecom,
        },
        {
          title: "Health Insurance Portal",
          description: "A Health Insurance Application that was created using C#, ASP.NET Core Web API and Angular with SQL Server in a small group. My roles for this project were to build the register employee and patient, design and implement an Azure SQL Server, implement password encryption using SHA256 and test all API endpoints.",
          imgUrl: health,
        },
        {
          title: "Flashcard Application",
          description: "A Flashcard Application that was created using C#, ASP.NET Core Web API and Angular with SQL Server on my own. I designed and created the Azure SQL Server using GUID as a Primary Key. I was also to implement all CRUD operations as well as be able to interchange the format of the cards to a table on button click.",
          imgUrl: flash,
        }
    ];

    const softProjs = [
        {
          title: "Link Checker Project",
          description: "Using Python my senior project group and I created a desktop application for both MacOS and Windows that can take in a list of links held in a .docx file format. The application sends a request to each link to get the response code. Every code that returns a 3** or 4** http code gets compiled into an email then is sent to all of the recipients using BCC so that each recipient can’t see each other. This program was also supposed to happen automatically, such as once a week using cronjob for Mac and WIndows Task Scheduler for Windows.",
          imgUrl: link,
        },
        {
          title: "Checkbook Windows Forms App",
          description: "Using C#, my group and I created a checkbook balancing application that could save a checkbook file as well as open a saved checkbook file. The person could then deposit or withdraw money using checks and/or cash. The file was to be able to be opened later and saved as a .chbk file extension. ",
          imgUrl: chbk,
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
                    <p>These are a few of the projects that I have worked on. These projects were either worked on independently or with a small group of 3-4 other people.</p>
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