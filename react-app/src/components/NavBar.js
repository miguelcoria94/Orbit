import React from 'react';
import LogoutButton from './auth/LogoutButton';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

const NavBar = ({ setAuthenticated }) => {
  return (
    <Navbar>
          <Nav.Link href="/" exact={true} activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link href="/login" exact={true} onSelect="active">
            Login
          </Nav.Link>
          <Nav.Link href="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </Nav.Link>
          <Nav.Link href="/users" exact={true} activeClassName="active">
            Users
          </Nav.Link>
          <LogoutButton setAuthenticated={setAuthenticated} />
    </Navbar>
  );
}

export default NavBar;