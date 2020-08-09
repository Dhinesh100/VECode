import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
      <header>
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <a href="https://play.google.com/store/apps/details?id=com.insights.veccode"><img
              src="/vecode.png"
              width="75"
              height="30"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
            /></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="index.html">Home</Nav.Link>
              <Nav.Link href="index.html">Profile</Nav.Link>
              <Nav.Link href="index.html">MCQ</Nav.Link>
              <Nav.Link href="index.html">About Us</Nav.Link>
              <Nav.Link href="index.html">Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar><br /><br /><br />
      </header>
    );
}

export default Header;