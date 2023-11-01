import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import { Button, Col, Form, InputGroup, Offcanvas, Row } from "react-bootstrap";
import SearchIcon from "../icon/search";
import CloseIcon from "../icon/close";
import { useState } from "react";

export default function Header() {
  const [closeState, setCloseState] = useState(true);

  const toggleSizeMenu = () => {
    setCloseState((prev) => !prev);
  };

  return (
    <Navbar
      expand="md"
      key="md"
      fixed="top"
      className="headerContainer position-sticky"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img alt="Sample news feed logo" src="/logo.png" /> SAMPLE PAGE
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={toggleSizeMenu}
          aria-controls={`offcanvasNavbar-expand-md`}
        />
        <Navbar.Offcanvas
          show={!closeState}
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end">
              <Row className="justify-content-between">
                <Col xs="auto">
                  <Nav.Link href="#action1">Home</Nav.Link>
                </Col>
                <Col
                  xs="auto"
                  className="d-flex align-items-center d-flex d-md-none"
                >
                  <div className="closeButton" onClick={toggleSizeMenu}>
                    <CloseIcon />
                  </div>
                </Col>
              </Row>
              <NavDropdown
                title="Features"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="More"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Col lg="5" md="3" className="mx-auto">
              <InputGroup className="rounded-2 p-2">
                <Form.Control
                  className="searchInput"
                  type="text"
                  placeholder="Enter your search here..."
                />
                <SearchIcon />
              </InputGroup>
            </Col>
            <Button className="ms-auto">Login</Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
