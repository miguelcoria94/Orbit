import React from "react";
import { demo } from "../../services/auth";

const DemoButton = ({ setAuthenticated, authenticated }) => {
  const demoPress = async (e) => {
    await demo();
    setAuthenticated(true);
    window.location.reload(false);
  };

  return authenticated ? (
    ""
  ) : (
    <button className="demo-button-home" onClick={demoPress}>
      Login as a Demo User
    </button>
  );
};

export default DemoButton;
