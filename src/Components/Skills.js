import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from '../photos/meter1.svg';
import meter2 from '../photos/meter2.svg';
import meter3 from '../photos/meter3.svg';


export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
      <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p> I have significant experience using JavaScript or Typescript, strong math skills, and a good working knowledge of debugging tools.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={meter1} alt="image"/>
                                <h5>HTML,CSS,JSX</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="image"/>
                                <h5>Git</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="image"/>
                                <h5>Redux, node + npm</h5>
                            </div>
                        </Carousel>
                    </div>
                
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}
