import React from "react";

const ActivateSavingsButton = ({ currentUserId }) => {
  const activateSavings = async (e) => {
    window.location.reload();
  };

  return (
    <button className="activate-savings-button" onClick={activateSavings}>
      Initiate Savings
    </button>
  );
};

export default ActivateSavingsButton;
