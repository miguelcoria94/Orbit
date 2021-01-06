import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Container from "react-bootstrap/Container";

const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <Container>
      <div>
        logo
      </div>
      <ul className="navbar_container">
        <li className="navbar_links">
          <NavLink to="/" exact={true} activeClassName="active">
            <p className="navbar_link">Home</p>
          </NavLink>
        </li>
        <li className="navbar_links">
          <NavLink to="/login" exact={true} activeClassName="active">
            <p className="navbar_link">Login</p>
          </NavLink>
        </li>
        <li className="navbar_links">
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <p className="navbar_link">Signup</p>
          </NavLink>
        </li>
        <li className="navbar_links">
          <NavLink to="/users" exact={true} activeClassName="active">
            <p className="navbar_link">Users</p>
          </NavLink>
        </li>
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
          <li className="navbar_links">
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        ) : (
          ""
        )}
      </ul>
    </Container>
  );
}

export default NavBar;