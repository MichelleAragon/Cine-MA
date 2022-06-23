import React from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Stack,
  Row,
  Col,
} from "react-bootstrap";
import "./index.css";
import SearchBar from '../SearchBar';

export const Header = ({ onSubmitQuery }) => (
  <>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>CINEMA</Navbar.Brand>
      </Container>
    </Navbar>
    <br />

    <Container className="container-search">
      <Row>
        <Stack direction="horizontal" gap={2}>
          <Col md={9}>
            <Form.Control
              className="me-auto"
              placeholder="Search your movie here"
            />
          </Col>
          <Button variant="secondary">Search</Button>
          <div className="vr" />
          <Button variant="outline-danger">Stars</Button>
        </Stack>
      </Row>
    </Container>
  </>

);
