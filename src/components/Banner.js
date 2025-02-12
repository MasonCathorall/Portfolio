import { useState, useEffect } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Software Developer", "Software Engineer" ];
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tick])


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Mason Cathorall `} <span className="txt-rotate" data-rotate='[ " Web Developer", " Software Developer", " Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                                <p>Hi, my name is Mason Cathorall. I am a full stack .NET Software Engineer and I have successfully completed a bachelor's degree in computer science. Some extracurricular activities for me would have to be that I like to learn new frameworks. For instance, during my time in school, I started to learn how to code using React as well as during my time in college I took an elective to learn game design using unity.</p>
                                <p>What got me into the technology/software development space was when I was in high school I learned about bitcoin mining and I was curious about how it worked. That started me down a long road to learning how to code and then going to school for computer science. Another thing that got me into software development happened when I was in high school where I took a web page design class.</p>
                                <Nav.Link href="#connect">Contact Me <ArrowRightCircle size={25} /></Nav.Link>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    {/* <Col xs={12} md={6} xl={5}>
                        <img src={''} alt="Header Img" />
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}