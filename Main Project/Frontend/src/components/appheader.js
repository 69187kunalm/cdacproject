import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppHeader = ()=>{
    return(
        <div>
            <Navbar bg="light" variant="light" expand="lg">
        <Container>
            <Navbar.Brand href="/" >
            Rent IT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/" >
                Home
                </Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default  AppHeader;