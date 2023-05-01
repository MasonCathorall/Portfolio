import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/email-3249062_960_720.png";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {

  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  const [enableBtn, setEnableBtn] = useState(false);

  const formInitialDetails = {
    first: '',
    last: '',
    their_email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const verify = () =>{
    setCaptchaToken(captchaRef.current.getValue());
    setEnableBtn(true);
  }

  const sendEmail = async () => {
    let params = {
      'from_name': formDetails.first + ' ' + formDetails.last,
      'subject': 'Contact Form @ masoncathorall.com',
      'email': formDetails.their_email,
      'message': formDetails.message
    };

    await emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_EMAIL_TEMPLATE, params, process.env.REACT_APP_EMAIL_KEY)
      .then(function(response) {
        setStatus({ succes: true, message: 'Message sent successfully'});
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        console.log('FAILED...', error);
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    captchaRef.current.reset();

    await axios.post("https://portfolio-backend-mason.azurewebsites.net/post", captchaToken)
        .then(res =>  {
          console.log(res);
          if(res.data === 'Human'){
            console.log('ReCAPTCHA says you are Human, sending Email.');
          } else {
            console.log('ReCAPTCHA says you are Robot, please try again later.');
          }
        })
        .catch((error) => {
        console.log(error);
        });

    sendEmail();
    setButtonText("Send");
    
  };

  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form id="form" onSubmit={handleSubmit}> 
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.first} placeholder="First Name" onChange={(e) => onFormUpdate('first', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.last} placeholder="Last Name" onChange={(e) => onFormUpdate('last', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.their_email} placeholder="Email Address" onChange={(e) => onFormUpdate('their_email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <ReCAPTCHA sitekey='6LeSadElAAAAAJe8zPXzyReagHi1VOHcu90jCK-M' ref={captchaRef} onChange={verify} />
                      <button type="submit" disabled={!enableBtn}><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                  <div id="recaptcha-container"></div>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
