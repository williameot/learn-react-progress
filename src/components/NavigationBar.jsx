import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//Stateless Functional Component
const NavigationBar = ({ totalCounters }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/counter">Counter Page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
