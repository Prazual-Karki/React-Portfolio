import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import 'react-multi-carousel/lib/styles.css'

export default function Skills() {
  return (
    <div>
      <section className='skill' id='skills'>
        <Container>
          <div className='skill-bx'>
            <Row>
              <Col>
                <h2>Skills</h2>
                <p>
                  I possess a wide range of skills as a full stack developer
                  (especially on MERN stack), enabling me to develop
                  comprehensive web applications and solve complex problems
                  efficiently.
                </p>
              </Col>
            </Row>
            {/* 3 column for skills */}
            <Row>
              <Col xs={12} md={4} lg={4}>
                <p>Front-End skills</p>
                <Button variant='dark'>Html, Css, javascript</Button>
                <Button variant='dark'>React js</Button>
                <Button variant='dark'>Bootstrap</Button>
                <Button variant='dark'>Material UI</Button>
                <Button variant='dark'>Ant Design</Button>
                <Button variant='dark'>Tailwind Css</Button>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <p>Back-End skills</p>
                <Button variant='dark'>Node Js</Button>
                <Button variant='dark'>Python</Button>
                <Button variant='dark'>Java</Button>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <p>Database</p>
                <Button variant='dark'>MongoDb</Button>

                <Button variant='dark'>MySql</Button>
              </Col>
            </Row>

            {/* <Row>
              <Col xs={4} md={2}>
                <p>Front-End skills</p>
              </Col>
              <Col xs={8} md={10}>
                <Button variant='dark'>Html, Css, javascript</Button>
                &nbsp;&nbsp;
                <Button variant='dark'>React js</Button>&nbsp;&nbsp;
                <Button variant='dark'>Bootstrap</Button>&nbsp;&nbsp;
                <Button variant='dark'>Material UI</Button>&nbsp;&nbsp;
                <Button variant='dark'>Ant Design</Button>&nbsp;&nbsp;
                <Button variant='dark'>Tailwind Css</Button>&nbsp;&nbsp;
              </Col>
            </Row>

            <Row>
              <Col xs={4} md={2}>
                <p>Back-End skills</p>
              </Col>
              <Col xs={8} md={10}>
                <Button variant='dark'>Javascript</Button>
                &nbsp;&nbsp;
                <Button variant='dark'>Python</Button>&nbsp;&nbsp;
                <Button variant='dark'>Java</Button>&nbsp;&nbsp;
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={2}>
                <p>Database</p>
              </Col>
              <Col xs={8} md={10}>
                <Button variant='dark'>MongoDb</Button>
                &nbsp;&nbsp;
                <Button variant='dark'>MySql</Button>&nbsp;&nbsp;
              </Col>
            </Row> */}
          </div>
        </Container>
      </section>
    </div>
  )
}
