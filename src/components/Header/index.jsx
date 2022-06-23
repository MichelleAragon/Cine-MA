import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./index.css";

export const Header = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="nav-title">CINEMA</Navbar.Brand>
      </Container>
    </Navbar>
    <br />
  </>
);


