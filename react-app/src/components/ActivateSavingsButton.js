import React from "react";

const ActivateSavingsButton = ({ currentUserId }) => {
  const activateSavings = async (e) => {
    e.preventDefault();
    const userBalance = 0;

    const response = await fetch("/api/savings_account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentUserId,
        userBalance
      }),
    });

    if (response.ok) {
      window.location.reload()
    }
  };



  return (
    <button className="activate-savings-button" onClick={activateSavings}>
      <i class="fas fa-power-off"></i> Activate Savings
    </button>
  );
};

export default ActivateSavingsButton;
