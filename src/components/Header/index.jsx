import React from "react";
import { Navbar, Container } from "react-bootstrap";

export const Header = () => (
  <>
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="nav-container">
        <Navbar.Brand className="nav-title">CINEMA</Navbar.Brand>
      </Container>
    </Navbar>
    <br />
  </>
);


