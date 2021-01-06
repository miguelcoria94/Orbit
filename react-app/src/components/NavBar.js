import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav>
      <ul className="navbar_container">
        <li className="navbar_links">
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar_links">
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="navbar_links">
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li className="navbar_links">
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li className="navbar_links">
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;