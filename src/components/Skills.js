import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import csharpLogo from "../assets/img/c--4.svg";
import reactjsImg from "../assets/img/React-icon.svg.png";
import angularjsImg from "../assets/img/Angular_full_color_logo.svg.png";
import pythonImg from "../assets/img/python-seeklogo.com.svg";
import azureImg from "../assets/img/azure-1-logo-svgrepo-com.svg";
import gitImg from "../assets/img/Git_icon.svg";
import CICDImg from "../assets/img/ci-cd-svgrepo-com.svg";
import OOPImg from "../assets/img/oop-logo.png";
import JiraImg from "../assets/img/jira-seeklogo.com.svg";
import ASPImg from "../assets/img/asp.net.png";
import ADOImg from "../assets/img/Adonet.webp";
import DockerImg from "../assets/img/docker-svgrepo-com.svg";
import MVCImg from "../assets/img/mvc.png";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={csharpLogo} alt="csharp" />
                                  <h5>C#</h5>
                                  {/* <h6>Years: ~3</h6> */}
                              </div>
                              <div className="item">
                                  <img src={ADOImg} alt="ado.net" />
                                  <h5>ADO.NET</h5>
                                  {/* <h6>Years: ~1</h6> */}
                              </div>
                              <div className="item">
                                  <img src={ASPImg} alt="asp.net" />
                                  <h5>ASP.NET</h5>
                                  {/* <h6>Years: ~1</h6> */}
                              </div>
                              <div className="item">
                                  <img src={MVCImg} alt="mvc" />
                                  <h5>MVC - Model View Controller</h5>
                                  {/* <h6>Years: ~1</h6> */}
                              </div>
                              <div className="item">
                                  <img src={reactjsImg} alt="reactjs" />
                                  <h5>ReactJS</h5>
                                  {/* <h6>Years: ~2</h6> */}
                              </div>
                              <div className="item">
                                  <img src={angularjsImg} alt="angular" />  
                                  <h5>Angular</h5>
                                  {/* <h6>Years: ~2</h6> */}
                              </div>
                              <div className="item">
                                  <img src={pythonImg} alt="python" />
                                  <h5>Python</h5>
                                  {/* <h6>Years: ~3</h6> */}
                              </div>
                              <div className="item">
                                  <img src={azureImg} alt="azure" />
                                  <h5>Azure Deployment</h5>
                                  {/* <h6>Years: ~1</h6> */}
                              </div>
                              <div className="item">
                                  <img src={azureImg} alt="azure" />
                                  <h5>Azure DevOps</h5>
                                  {/* <h6>Years: ~1</h6> */}
                              </div>
                              <div className="item">
                                  <img src={gitImg} alt="git" />
                                  <h5>Git</h5>
                                  {/* <h6>Years: ~4</h6> */}
                              </div>
                              <div className="item">
                                  <img src={CICDImg} alt="cicd" />
                                  <h5>CI/CD</h5>
                                  {/* <h6>Years: ~2</h6> */}
                              </div>
                              <div className="item">
                                  <img src={OOPImg} alt="oop" />
                                  <h5>OOP - Object Oriented Programming</h5>
                                  {/* <h6>Years: ~4</h6> */}
                              </div>
                              <div className="item">
                                  <img src={DockerImg} alt="docker" />
                                  <h5>Docker</h5>
                                  {/* <h6>Years: ~1</h6> */}
                              </div>
                              <div className="item">
                                  <img src={JiraImg} alt="jira" />
                                  <h5>Jira</h5>
                                  {/* <h6>Years: ~1</h6> */}
                              </div>
                              {/* <div className="item">
                                  <img src={undefined} alt="" />
                                  <h5> </h5>
                                  { <h6>Years: ~1</h6> }
                              </div> */}
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Ima" />
      </section>
    )
  }
  