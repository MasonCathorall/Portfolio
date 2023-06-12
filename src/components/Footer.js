import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/mason-cathorall-823a64262/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
