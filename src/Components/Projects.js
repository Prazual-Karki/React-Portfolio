import React from 'react'
import { Container, Row, Tab, Nav } from 'react-bootstrap'
import rent from '../photos/Capture.PNG'
import blog from '../photos/blog.PNG'
import social from '../photos/pkmedia.PNG'
import Col from 'react-bootstrap/Col'

export default function Projects() {
  return (
    <div>
      <section className='project' id='projects'>
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                I have created many awesome projects on my own and here you can
                observe a little glimpse of some of my projects.
                <br />
                Click below on the Tab to see
              </p>
              <Tab.Container id='projects-tabs' defaultActive='first'>
                <Nav
                  variant='tabs'
                  className='nav-pills mb-5 justify-content-center align-items-center'
                  id='pills-tab'
                >
                  <Nav.Item>
                    <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <div className='proj-imgbx'>
                      <img src={rent} alt='image' />
                      <div className='proj-txtx'>
                        <h5>Rent-Nepal</h5>
                        <a
                          href='https://github.com/Prazual-Karki/Mern-RentNepal'
                          style={{ color: 'white' }}
                        >
                          GitHub Link
                        </a>
                            <br/><br/>
                            <a
                          href='https://rent-nepal.onrender.com'
                          style={{ color: 'white' }}
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <div className='proj-imgbx'>
                      <img src={social} alt='image' />
                      <div className='proj-txtx'>
                        <h5>Social-Media</h5>
                        <a
                          href='https://github.com/Prazual-Karki/SocialMedia-MERN'
                          style={{ color: 'white' }}
                        >
                          GitHub Link
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                    <div className='proj-imgbx'>
                      <img src={blog} alt='image' />
                      <div className='proj-txtx'>
                        <h5>Blog-App</h5>
                        <a
                          href='https://github.com/Prazual-Karki/Blog'
                          style={{ color: 'white' }}
                        >
                          GitHub Link
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
