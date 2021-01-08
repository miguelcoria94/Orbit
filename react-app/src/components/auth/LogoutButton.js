import React from "react";
import { logout } from "../../services/auth";
import 'bootstrap/dist/css/bootstrap.min.css'

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return (
    <button className="demo-button-home logout-button" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
