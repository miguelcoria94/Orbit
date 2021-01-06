import React from "react";
import { logout } from "../../services/auth";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
