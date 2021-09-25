import React from 'react';

import flo from '../image/flo-landing-page.png';
import calculator from '../image/calculator.png';
import huddle from '../image/huddle.png';
import ordersummary from '../image/ordersummary.png';
import socialproof from '../image/socialproof.png';
import discountchecker from '../image/discountchecker.png';
import { Container, Row, Col } from 'react-bootstrap';

function projects() {
    return (
        <div>
        <h1 className="text-center text-decoration-underline my-5 project">PROJECTS</h1>

        <Container className="projects">
         <Row className="projectspic">
             <Col>
             <img src={calculator} alt="screenshot of userinterface of calculator app" className="shots"  />
             <a href=" https://vickyhail.github.io/percentageCalculator/" className="live">LIVESITE|<a href="https://github.com/vickyhail/percentageCalculator" className="github">GITHUB</a></a>
   
            </Col>

            <Col>
                <img src={flo} alt="fl0-landing page" className="shots1" />
                <a href=" https://upbeat-bardeen-43bfb7.netlify.app/" className="live">LIVESITE|<a href="https://github.com/vickyhail/Flyo-landing-page" className="github">GITHUB</a></a>
            </Col>
            </Row>


            <Row className="projectspic">
              <Col>
                <img src={huddle} alt=""  className="shots2"/>
                <a href=" https://vickyhail.github.io/Huddle-lading-page-with-single-introductory-section/" className="live">LIVESITE|<a href="https://github.com/vickyhail/Huddle-lading-page-with-single-introductory-section" className="github">GITHUB</a></a>
               
              </Col>

              <Col>
                <img src={ordersummary} alt="" className="shots3" />
                <a href="https://zealous-brown-b1f3fc.netlify.app/" className="live">LIVESITE|<a href="https://github.com/vickyhail/ordersummary" className="github">GITHUB</a></a>
              </Col>
            </Row>



            <Row className="projectspic">
                <Col>
                <img src={socialproof} alt="" className="shots4" />
                <a href=" https://vickyhail.github.io/social-proof-section-master-frontend-mentor-challenge/" className="live">LIVESITE|<a href="https://github.com/vickyhail/social-proof-section-master-frontend-mentor-challenge" className="github">GITHUB</a></a>
                
            </Col>

            <Col>
                <img src={discountchecker} alt="screenshot of userinterface of discount cheacker app"  className="shots5"/>
                <a href=" https://vickyhail.github.io/discountChecker/" className="live">LIVESITE|<a href="https://github.com/vickyhail/discountChecker" className="github">GITHUB</a></a>
              </Col>
            </Row>
    
            </Container>
        </div>
    )
}

export default projects

