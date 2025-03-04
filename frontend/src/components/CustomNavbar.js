import React from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/catalog">CATALOG</Nav.Link>
            <Nav.Link as={Link} to="/licensing">MUSIC LICENSING</Nav.Link>
            {/* <Nav.Link as={Link} to="/services">STUDIO SERVICES</Nav.Link> */}
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            {/* <NavDropdown title="MORE" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/merchandise">Merchandise</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/media">Media</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;