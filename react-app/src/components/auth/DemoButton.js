import React from "react";
import { Redirect } from "react-router-dom";
import { demo } from "../../services/auth";

const DemoButton = ({ setAuthenticated, authenticated }) => {
  const demoPress = async (e) => {
    await demo();
    setAuthenticated(true);
  };

  return (
    <button className="demo-button-home" onClick={demoPress}>
      Login as a Demo User
    </button>
  );
};

export default DemoButton;
