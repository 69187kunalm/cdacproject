// Header.js

import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("login", false);
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Appliances</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/customerhome/updatepass">Update Password</Nav.Link>
          </Nav>
          <Nav.Link href="#" style={{ color: "red" }} disabled>
            {" "}
            Hello! {localStorage.getItem("user")}
          </Nav.Link>
        </Navbar.Collapse>
        <Button
          variant="link"
          onClick={handleLogout}
          className="ml-auto"
          style={{ textDecoration: "none", color: "black" }}
        >
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
