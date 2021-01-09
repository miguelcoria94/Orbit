import React from "react";

const ActivateSavingsButton = ({ currentUserId }) => {
  const activateSavings = async (e) => {
    e.preventDefault();
  };



  return (
    <button className="activate-savings-button" onClick={activateSavings}>
      <i class="fas fa-power-off"></i> Activate Savings
    </button>
  );
};

export default ActivateSavingsButton;
