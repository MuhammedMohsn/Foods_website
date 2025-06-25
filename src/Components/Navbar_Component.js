import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo_img from "../assets/logo.png";
// it's navbar used in all pages
function NavbarComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      style={{ height: "fit-content" }}
    >
      <Container>
        <Navbar.Brand as={Link}>
          <img src={logo_img} alt="logo_img " />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto w-100 d-flex align-items-center justify-content-end">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT US
            </Nav.Link>
            <Nav.Link as={Link} to="/foods">
              EXPLORE FOODS
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
