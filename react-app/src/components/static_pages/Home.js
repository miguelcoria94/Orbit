import React from 'react'
import { Row, Col, Container } from "react-bootstrap/";
import control from "../images/control.png"

const Home = ({ setAuthenticated }) => {

    return (
      <Container>
        <Row>
          <Col className="main-header-container">
            <h1 className="main-header-h1">
              Mission <span>control</span>, but for your money.
            </h1>
          </Col>
          <Col className="main-header-container">
                    <img src={control}/>
          </Col>
          
        </Row>
      </Container>
    );
};

export default Home;