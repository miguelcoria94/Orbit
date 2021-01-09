import React from "react";
import { useHistory } from "react-router-dom";

const AddFunds = ({ currentUserId }) => {
  const history = useHistory();
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
        userBalance,
      }),
    });

    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <button className="add-funds-button" onClick={activateSavings}>
      <i class="fas fa-power-off"></i> Activate Savings
    </button>
  );
};

export default AddFunds;
