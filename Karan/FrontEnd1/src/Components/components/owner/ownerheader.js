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
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "1.5rem", color: "black" }}
        >
          My Appliances
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ fontSize: "1rem", color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/customerhome/updatepass"
              style={{ fontSize: "1rem", color: "black" }}
            >
              Update Password
            </Nav.Link>
            <Nav.Link
              href="ownerform"
              style={{ fontSize: "1rem", color: "black" }}
            >
              Rent Your Appliances
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "red" }} disabled>
              {" "}
              Hello! {localStorage.getItem("user")}
            </Nav.Link>
          </Nav>
          <Button
            variant="link"
            onClick={handleLogout}
            className="ml-auto"
            style={{ textDecoration: "none", color: "black" }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
