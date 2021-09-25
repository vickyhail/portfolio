import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import victoria from '../image/vic.JPG';
import Socialicons from './Socialicons';

function About() {
    return (
        <div className="main">
            <h1 className="h1 text-center text-decoration-underline aboutme">About Me</h1>
            <Container>
            <Row>
                 <Col className="ms-5 my-5" ><Image src={victoria}alt="" roundedCircle className="vicpic" ms-5/></Col>
                 <Col><p className="text-left py-5" color="#77075b">Hello World! I'm Victoria Ekpoh, a Front-End Web Developer based in Manchester. 
                Passionate about writing welled-structured, efficient and maintainable code.
                I love combining the worlds of logic and creative design to make eye-catching, accessible, 
                and user-friendly websites and applications. <Socialicons /></p> </Col>
                
             </Row>
             </Container>
            
            
        </div>
    )
}

export default About
