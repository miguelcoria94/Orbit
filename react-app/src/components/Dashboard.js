import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "Dashboard.css"

const Dashboard = () => {
    return (
      <Container className="dashboard-wrapper">
            <SideNav />
      </Container>
    );
}

export default Dashboard;