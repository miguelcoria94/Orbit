import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav"


const Dashboard = () => {
    return (
      <Container>
            <SideNav />
      </Container>
    );
}

export default Dashboard;