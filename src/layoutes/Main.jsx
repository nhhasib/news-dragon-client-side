import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Right from "../pages/shared/right-side/Right";
import Left from "../pages/shared/left/Left";

const Main = () => {
  return (
    <div className="w-full">
      <Header></Header>
      <Container>
        <Row>
                  <Col lg={3}>
                      <Left></Left>
                  </Col>
                  <Col lg={6}>
                      sm=true
                  </Col>
                  <Col lg={3}>
                      <Right></Right>
                  </Col>
        </Row>
     </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
