import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import headerimage from '../photos/headerImage4.jpg'


export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["web developer", "web designer", "UI/UX designer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300- Math.random()*100);

    useEffect( () => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker)};

    },[text])

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length + 1)
        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if (!isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <div>
      <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi, I'm Prazual Karki `}<span className='wrap'>{text}</span></h1>
                    <p>A professional web developer responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library.</p>
                    <button onClick={()=> console.log('connect')}>Let's Connect  
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                        </svg>
                    </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerimage} alt="header image"/>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}
