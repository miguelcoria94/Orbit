import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SideNav = () => {
  return (
    <Container className="sidenav-wrapper">
      <Row>
        <Col>
          <ul>
            <li className="navbar_links-sidenav">
              <NavLink
                to="/dashboard"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fas fa-home icon"></i>Dashboard
                </p>
              </NavLink>
            </li>
            <li className="navbar_links-sidenav">
              <NavLink
                to="/accounts"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fas fa-wallet icon"></i>Accounts
                </p>
              </NavLink>
            </li>
            <li className="navbar_links-sidenav">
              <NavLink
                to="/transfer"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fas fa-exchange-alt icon"></i>Transfer
                </p>
              </NavLink>
            </li>
            <li className="navbar_links-sidenav">
              <NavLink
                to="/transactions"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fas fa-receipt icon"></i>Transactions
                </p>
              </NavLink>
            </li>
            <li className="navbar_links-sidenav">
              <NavLink
                to="/goals"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fas fa-plane-departure icon"></i>Goals
                </p>
              </NavLink>
            </li>
            <li className="navbar_links-sidenav">
              <NavLink
                to="/education"
                exact={true}
                activeClassName="active-sidenav"
              >
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
