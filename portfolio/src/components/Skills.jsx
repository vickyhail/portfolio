import React from 'react'
import {FaHtml5} from 'react-icons/fa';
import {DiCss3} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {AiFillApi} from 'react-icons/ai';
import {DiReact} from 'react-icons/di';
import {AiFillGithub} from 'react-icons/ai';
import {DiResponsive} from 'react-icons/di';
import {DiPython} from 'react-icons/di';
import {SiDjango} from 'react-icons/si';
import {BsTerminalFill} from 'react-icons/bs';
import {BsBootstrapFill} from 'react-icons/bs';
import {SiSass} from 'react-icons/si';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <div className="skills">
            <h1 className="text-center text-decoration-underline my-5">SKILLS</h1>   

        <Container className="container">
          <Row >
            <Col >
            <FaHtml5  size="5rem" color ="rgb(158, 12, 139)" /> 
            <p>HTML5</p>
            </Col> 

            <Col className="movecss">
            <DiCss3  size="5rem" color ="rgb(158, 12, 139)"/>
            <p>CSS5</p>
            </Col>

            <Col  >
           <BsBootstrapFill size="5rem" color ="rgb(158, 12, 139) "/>
            <p>Boostrap</p>
            </Col>
        
            <Col >
            < SiSass size="5rem" color ="rgb(158, 12, 139) "/>
            <p>SASS</p>
            </Col>  
            </Row>  


            <Row>
            <Col className="css">
            <SiJavascript className="css" size="5rem" color ="rgb(158, 12, 139)"/>
            <p>JAVASCRIPT+ES6</p>
            </Col>

            <Col className="css">
            <AiFillApi  className="css" size="7rem" color ="rgb(158, 12, 139)"/>
            <p>REST API</p>
            </Col>
            
            <Col className="css">
            <DiReact className="css" size="7rem" color ="rgb(158, 12, 139)"/>
            <p>REACT JS</p>
            </Col>
            
            <Col className="css">
            <AiFillGithub className="css" size="7rem" color ="rgb(158, 12, 139)"/>
            <p>GITHUB</p>
            </Col>
            </Row>


            <Row>
            <Col className="css">
            <DiResponsive className="css" size="7rem" color ="rgb(158, 12, 139)"/>
            <p>RESPONSIVE DESIGNS</p>
            </Col>
    
            <Col className="css">
            <DiPython className="css" size="7rem" color ="rgb(158, 12, 139)"/>
            <p>PYTHON</p>
            </Col>
            
            <Col className="css">
            <SiDjango className="css"  size="6rem"color ="rgb(158, 12, 139)"/>
            <p>DJANGO FRAMEWORK</p>
            </Col>

            <Col className="css">
            <BsTerminalFill className="css" size="6rem" color ="rgb(158, 12, 139)"/>
            <p>TERMINAL</p>
            </Col>
            
            </Row>

        
        </Container>
      
        </div>
    )
}

export default Skills
