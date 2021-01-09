import React from "react";
import { demo } from "../../services/auth";

const ActivateSavingsButton = ({  }) => {
  const demoPress = async (e) => {
    await demo();
    setAuthenticated(true);
    window.location.reload();
  };

  return (
    <button className="demo-button-home" onClick={demoPress}>
      Login as a Demo User
    </button>
  );
};

export default ActivateSavingsButton;
