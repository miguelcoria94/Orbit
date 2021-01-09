import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Dashboard.css";
import LogoutButton from "./auth/LogoutButton"

const Dashboard = ({ setAuthenticated, authenticated, currentUser }) => {
  return (
    <Container fluid className="dashboard-wrapper">
      <Row>
        <Col className="col-3">
          <SideNav currentUser={currentUser} />
        </Col>
        <Col></Col>
        <Col>
          <LogoutButton
            setAuthenticated={setAuthenticated}
            currentUser={currentUser}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;