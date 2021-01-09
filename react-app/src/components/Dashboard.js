import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Dashboard.css";

const Dashboard = () => {
    return (
      <Container className="dashboard-wrapper">
        <Row>
          <Col className="col-3">
            <SideNav />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
}

export default Dashboard;