import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { withRouter } from "react-router-dom";

class MenuBar extends Component {
  onClick = (path) => {
    this.props.history.push("/" + path);
  };

  render() {
    return (
      <Container fluid style={{ padding: 0 }} className="fixed-top">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand onClick={() => this.onClick("")}>
              Kos Bu Meni
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link onClick={() => this.onClick("")}>Home</Nav.Link>
                <Nav.Link onClick={() => this.onClick("lokasi")}>
                  Lokasi
                </Nav.Link>
                <Nav.Link onClick={() => this.onClick("info")}>Info</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
  }
}
export default withRouter(MenuBar);
