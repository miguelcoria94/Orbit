import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
