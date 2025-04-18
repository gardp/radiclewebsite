import React, { useState } from 'react';
// import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Cart.css';
import '../styles/SkeuomorphicButtons.css';
import CartPreview from './cart/CartPreview';
import useCart from '../hooks/useCart';

const CustomNavbar = () => {
  const [cartPreviewOpen, setCartPreviewOpen] = useState(false);
  const { totalItems } = useCart();
  
  const toggleCartPreview = () => {
    setCartPreviewOpen(prevState => !prevState);
  };
  
  const closeCartPreview = () => {
    setCartPreviewOpen(false);
  };
  
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
            <div className="cart-button-container">
            {totalItems > 0 && (
              <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{ color: 'white', width: '18px', height: '18px', position: 'absolute', right: '0', bottom: '0', transform: 'translate(-5%, 40%)', zIndex: 3 }}
              >
               3 {totalItems}
              </div>
            )}
              <button 
                className="cart-button skeuomorphic-btn primary size-lg"
                onClick={toggleCartPreview}
                aria-label="Open cart"
              >
                <div className="cart-icon"></div>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <CartPreview 
        isOpen={cartPreviewOpen} 
        onClose={closeCartPreview} 
        position="right" 
      />
    </Navbar>
  );
};

export default CustomNavbar;