import React from "react";
import logo from "../../../assets/image/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="my-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM, D YYYY")}</p>
      </div>
      <div className="d-flex mx-auto">
        <Button variant="danger">Danger</Button>{" "}
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div className="">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="secondary">Login</Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
