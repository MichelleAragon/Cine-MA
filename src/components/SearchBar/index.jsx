import React, { useCallback, useState } from "react";
import { Container, Form, Button, Stack, Row, Col } from "react-bootstrap";
import './index.css'

export function SearchBar({ onSubmitQuery }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = useCallback(() => {
    onSubmitQuery(searchQuery);
  }, [searchQuery, onSubmitQuery]);

  return (
    <>
      <Container className="container-search">
        <Row>
          <Stack direction="horizontal" gap={2}>
            <Col d={{ span: 6, offset: 3 }}>
              <Form.Control
                className="me-auto"
                placeholder="Search your movie here"
                onChange={handleChange}
              />
            </Col>
            <Button variant="secondary" onClick={handleClick}>
              Search
            </Button>
          </Stack>
        </Row>
      </Container>
    </>
  );
}


