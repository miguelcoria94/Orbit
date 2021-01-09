import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SideNav = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ul>
            <li className="navbar_links">
              <NavLink to="/" exact={true} activeClassName="active">
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="navbar_links">
              <NavLink to="/" exact={true} activeClassName="active">
                <p>Accounts</p>
              </NavLink>
            </li>
            <li className="navbar_links">
              <NavLink to="/" exact={true} activeClassName="active">
                <p>Transfer</p>
              </NavLink>
            </li>
            <li className="navbar_links">
              <NavLink to="/" exact={true} activeClassName="active">
                <p>Transactions</p>
              </NavLink>
            </li>
            <li className="navbar_links">
              <NavLink to="/" exact={true} activeClassName="active">
                <p>Goals</p>
              </NavLink>
            </li>
            <li className="navbar_links">
              <NavLink to="/" exact={true} activeClassName="active">
                <p>Education</p>
              </NavLink>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SideNav;
