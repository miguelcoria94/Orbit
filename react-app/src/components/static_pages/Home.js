import React from 'react'
import { Row, Col, Container } from "react-bootstrap/";
import spaceman from "../images/spaceman2.png"

const Home = ({ setAuthenticated }) => {

    return (
      <Container>
        <Row>
          <Col className="main-header-container">
            <h1 className="main-header-h1">
              Mission <span className="home-cta">control</span>, but for{" "}
              <span className="home-cta">your</span>{" "}
              <span className="home-cta">money</span>.
            </h1>
          </Col>
          <Col className="main-header-container">
            <img
              src={spaceman}
              width="600"
              className="animate__animated animate__swing"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    );
};

export default Home;