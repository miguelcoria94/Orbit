import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uranus from "./images/uranus.png"

const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <Container>
      <Row>
          {authenticated ? "":
        <Col className="logo" linkto="/">
          <a href="/">
            <img
              src={uranus}
              className="navbar_logo"
              alt="orbit-logo"
              href="/"
            />{" "}
          </a>
          <h1 className="logo-text" href>
            <a href="/">Orbit</a>
          </h1>
        </Col>}
        <Col className="navbar_link-wrapper">
          <ul className="navbar_container">
            <li className="navbar_links">
              <NavLink to="/" exact={true} activeClassName="active">
                <p className="navbar_link">Home</p>
              </NavLink>
            </li>{ authenticated ? "" :
              <li className="navbar_links">
                <NavLink to="/login" exact={true} activeClassName="active">
                  <p className="navbar_link">Login</p>
                </NavLink>
              </li>}{ authenticated ? "":
              <li className="navbar_links">
                <NavLink to="/sign-up" exact={true} activeClassName="active">
                  <p className="navbar_link">Signup</p>
                </NavLink>
              </li>}
            <li className="navbar_links">
              <NavLink to="/about" exact={true} activeClassName="active">
                <p className="navbar_link">About</p>
              </NavLink>
            </li>
            <li className="navbar_links">
              <NavLink to="/contact" exact={true} activeClassName="active">
                <p className="navbar_link">Contact</p>
              </NavLink>
            </li>
            {authenticated ? (
                <LogoutButton setAuthenticated={setAuthenticated} />
            ) : (
              ""
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;