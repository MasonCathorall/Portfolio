import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [, setIndex] = useState(1);
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
                                <h1>{`Hi! I'm Mason Cathorall `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Developer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                                <p>About myself.</p>
                                <button onClick={() => console.log('connect')}>Contact Me<ArrowRightCircle size={25} /></button>
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