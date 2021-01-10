import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uranus from "./images/uranus.png";
import LogoutButton from "./auth/LogoutButton";

const SideNav = ({ currentUser, setAuthenticated }) => {
  return (
    <Container className="sidenav-wrapper">
      <Row>
        <Col>
          <h1 className="welcome-message-1">Dashboard</h1>
          <p className="welcome-message-2">Logged in as {currentUser}</p>
          <LogoutButton
            setAuthenticated={setAuthenticated}
            currentUser={currentUser}
          />
          <ul className="ul-wrapper">
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
                to="/transfers"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fas fa-exchange-alt icon"></i>Transfers
                </p>
              </NavLink>
            </li>
            <li className="navbar_links-sidenav">
              <NavLink
                to="/virtual-card"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fab fa-cc-visa icon"></i>Virtual Card
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
                to="/report-a-bug"
                exact={true}
                activeClassName="active-sidenav"
              >
                <p>
                  <i class="fas fa-bug icon"></i>Report A Bug
                </p>
              </NavLink>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SideNav;
