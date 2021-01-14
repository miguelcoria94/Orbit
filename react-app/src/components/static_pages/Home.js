import React from 'react'
import { Row, Col, Container } from "react-bootstrap/";
import spaceman from "../images/Laptop_03.png";
import DemoButton from "../auth/DemoButton"

const Home = ({ setAuthenticated }) => {
    return (
      <Container>
        <Row>
          <Col className="main-header-container">
            <p className="tiny-text">Personal Finance & Banking App</p>
            <h1 className="main-header-h1">
              Mission{" "}
              <span className="home-cta animate__animated animate__zoomIn">
                control
              </span>
              , but for{" "}
              <span className="home-cta animate__animated animate__zoomIn">
                your
              </span>{" "}
              <span className="home-cta animate__animated animate__zoomIn">
                money
              </span>
              .
            </h1>
            <DemoButton setAuthenticated={setAuthenticated} />
          </Col>
          <Col className="col-5 image-col">
            <img
              alt="home-spaceman"
              src={spaceman}
              width="700"
              className="home_image"
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