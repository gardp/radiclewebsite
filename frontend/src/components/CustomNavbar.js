import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar className="navbar" fixed="top" expand="lg">
            <Navbar.Brand href="#myPage">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#myPage">HOME</Nav.Link>
                    <Nav.Link href="#band">CATALOG</Nav.Link>
                    <Nav.Link href="#tour">MUSIC LICENSING</Nav.Link>
                    <Nav.Link href="#contact">STUDIO SERVICES</Nav.Link>
                    <Nav.Link href="#myPage">ABOUT</Nav.Link>
                    <Nav.Link href="#band">CONTACT</Nav.Link>
                    <NavDropdown title="MORE" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Merchandise</NavDropdown.Item>
                        <NavDropdown.Item href="#">Media</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;