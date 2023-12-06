import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerimage from '../photos/headerImage4.jpg'
import prazual from '../photos/prazualPhoto.jpg'

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Full Stack developer', 'web designer', 'UI/UX designer']
  const [text, setText] = useState('')
  const period = 2000
  const [delta, setDelta] = useState(300 - Math.random() * 100)

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (!isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <div>
      <section className='banner' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>Hi, I'm Prazual Karki</h1>
              <h2>{text}</h2>
              <p>
                Experienced Front-end developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB. Expertise in building modern web applications with seamless user experiences. Proficient in front-end and knowledge of back-end development, creating reusable and efficient code. Eager to contribute to innovative and impactful projects.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerimage} alt='prazual karki' />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
