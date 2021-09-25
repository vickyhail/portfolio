import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComp() {
    return (
        <div className="bar my-3">
            <Navbar bg="non" expand="lg" ml-5>
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link  as ={Link} to = {'/home'} className="link">Home</Nav.Link>
        <Nav.Link as ={Link} to = {'/Aboutme'} className="link">About</Nav.Link>
        <Nav.Link as ={Link} to = {'/Projects'} className="link">Project</Nav.Link>
        <Nav.Link as ={Link} to ={ '/contact'} className="link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarComp

