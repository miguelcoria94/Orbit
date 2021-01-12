import React from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Dashboard.css";

const Transfers = ({
  currentUser,
  setAuthenticated
}) => {
  return (
    <Container fluid className="dashboard-wrapper">
      <Row>
        <Col className="col-3">
          <SideNav
            title={"Transfers"}
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}
          />
        </Col>
        <Col className="col-3"></Col>
        <Col col-3></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Transfers;
