import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Dashboard.css";
import LogoutButton from "./auth/LogoutButton"
import SavingsCard from "./SavingsCard"
import CheckingsCard from "./CheckingsCard";

const Dashboard = ({ setAuthenticated, authenticated, currentUser, currentUserId }) => {
  return (
    <Container fluid className="dashboard-wrapper">
      <Row>
        <Col className="col-3">
          <SideNav currentUser={currentUser} />
        </Col>
        <Col className="col-3">
          <CheckingsCard currentUserId={currentUserId} />
        </Col>
        <Col col-3>
          <SavingsCard currentUserId={currentUserId} />
        </Col>
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