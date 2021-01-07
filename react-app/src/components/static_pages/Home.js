import React from 'react'
import { Row, Col, Container } from "react-bootstrap/";
import spaceman from "../images/spaceman2.png"

const Home = ({ setAuthenticated }) => {

    return (
      <Container>
        <Row>
          <Col className="main-header-container">
            <h1 className="main-header-h1">
              Mission <span>control</span>, but for your money.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="main-header-container">
            <img src={spaceman} width="500"/>
          </Col>
        </Row>
      </Container>
    );
};

export default Home;