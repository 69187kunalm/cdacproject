// CustomerHeader.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const OwnerHeader = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/owner");
  };

  const handleLogout = () => {
    localStorage.setItem("login",false);
    navigate("/login");
  };
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={handleClick}>
          Applianced
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" onClick={handleClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#owner" onClick={handleClick}>
              Rent Your Appliances
            </Nav.Link>

            <Button variant="link" onClick={handleLogout} className="ml-auto">
                Logout
            </Button>

            <p style={{color:"red"}}>Hello! {localStorage.getItem('user')}</p>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default OwnerHeader;