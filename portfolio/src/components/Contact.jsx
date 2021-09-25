import React from 'react'
import Socialicons from './Socialicons'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        
            <div className="main">
               <h1 className="text-center text-decoration-underline my-5 contact">CONTACT ME</h1>

              <Container>
              <Row> 

              <Col>
              <form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Email" className="my-3"/>
                  <Form.Control type="name" placeholder="Name" />
              </Form.Group>
               
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={9} placeholder="Message" />
             </Form.Group>
             <Form.Group className="mb-3 mx-5">
             <Button variant="primary" type="submit" className="butt" >
                GET IN TOUCH
             </Button>
             </Form.Group>
                </form>
              </Col>

              <Col >
               <p className="my-2">If you have any questions about me or my projects.</p>
               <p>I'm available to grab a coffee and chat! Drop a comment, question, concern, and thanks for stopping by!</p>
               <p >Straight shot to my inbox:<b>VICKYHAIL@YAHOO.COM</b> </p>
               <Socialicons />
              </Col>

             
             </Row>
              </Container>
        </div>
    )
}

export default Contact



