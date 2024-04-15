import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";

export const Certifications = () => {
    return(
        <section className="certifications" id="certifications">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Certifications</h2>
                            <div className="item">
                                  <img src={null} alt="IBM" />
                                  <h5>IBM Full Stack Engineer Professional Certification</h5>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}