import React from "react";
// import { Container } from "react-bootstrap";
import ibmFullStackImg from "../assets/img/FullStackCert.PNG";
import ibmDevopsImg from "../assets/img/DevopsCert.PNG";

export const Certifications = () => {
    return(
        <section className="certifications" id="certifications">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Certifications</h2>
                            <div className="item">
                                  <img src={ibmFullStackImg} alt="IBM Full Stack Certificate" />
                                  <h5>IBM Full Stack Engineer Professional Certification</h5>
                            </div>
                            <div className="item">
                                  <img src={ibmDevopsImg} alt="IBM Devops Certificate" />
                                  <h5>IBM Devops and Software Engineering Professional Certification</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}