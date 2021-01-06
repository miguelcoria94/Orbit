import React from 'react'
import { Row, Col, Container } from "react-bootstrap/";

const Home = ({ setAuthenticated }) => {

    return <Container>
        <Row>
            <Col className="main-header-container">
                <h1 className="main-header-h1">Mission control but for your money</h1>
            </Col>
      </Row>
  </Container>;
};

export default Home;