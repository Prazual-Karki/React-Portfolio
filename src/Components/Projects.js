import React from 'react';
import { Container, Row, Tab, Nav } from 'react-bootstrap';
import projimg5 from '../photos/bank.PNG';
import projimg6 from '../photos/calculator.PNG'
import projimg1 from '../photos/ecommerce.PNG'
import projimg2 from '../photos/software.PNG';
import projimg3 from '../photos/portfolio.PNG';
import projimg4 from '../photos/music.PNG';
import Col from 'react-bootstrap/Col';



export default function Projects() {
    
  return (
    <div>
      <section className= 'project' id= 'projects'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>I have created many awesome projects on my own and here you can observe a little glimpse of them.</p>
                    <Tab.Container id='projects-tabs' defaultActiv="first" >
                    <Nav variant="tabs" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                        <div className='proj-imgbx'>
                            <img src={projimg1}  alt='image'/>
                            <div className='proj-txtx'>
                                <h5>E-commerce site</h5>
                            </div>
                        </div> <br/><br/>
                        <div className='proj-imgbx'>
                            <img src={projimg2}  alt='image'/>
                            <div className='proj-txtx'>
                                <h5>Software Company Site</h5>
                            </div>
                        </div>
                            {/* <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key={index} 
                                            {...project}
                                            />
                                        )

                                    })
                                }
                            </Row> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                        <div className='proj-imgbx'>
                            <img src={projimg3}  alt='image'/>
                            <div className='proj-txtx'>
                                
                                <h5>Portfolio Site</h5>
                            </div>
                        </div><br/><br/>
                        <div className='proj-imgbx'>
                            <img src={projimg4}  alt='image'/>
                            <div className='proj-txtx'>
                                
                                <h5>Music Player</h5>
                            </div>
                        </div>
                         </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                        <div className='proj-imgbx'>
                            <img src={projimg5}  alt='image'/>
                            <div className='proj-txtx'>
                               
                                <h5>Bank site</h5>
                            </div>
                        </div>  <br/><br/>
                        <div className='proj-imgbx'>
                            <img src={projimg6}  alt='image'/>
                            <div className='proj-txtx'>
                              
                                <h5>Calculator</h5>
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
