import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap/";

const SideNav = () => {
  return (
    <Container>
          <ul>
            <li>Dashboard</li>
            <li>Accounts</li>
            <li>Transfers</li>
            <li>Dashboard</li>
            <li>Goals</li>
          </ul>
    </Container>
  );
};

export default SideNav;
