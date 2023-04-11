import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { NavLink } from 'react-router-dom';

function HeaderNav () {
  return (
    <div>
        <Navbar bg="info" variant="light" expand="lg">
            <Container fluid style={{ padding: '0 5vw' }}>
            <Navbar.Brand href="#">Au Priestess Emporium</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ml-auto my-2 my-lg-0"
                style={{ maxHeight: '10%' }}
                >
                <NavLink to="/" className="nav-link mx-3">Our Products</NavLink>
                <NavLink to="/about" className="nav-link mx-3">About Us</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default HeaderNav;