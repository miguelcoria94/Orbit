import React from "react";
import { useHistory } from "react-router-dom";

const LoadCheckings = ({ currentUserId }) => {
  const history = useHistory();
  const activateSavings = async (e) => {
    e.preventDefault();
    const loadBalance = 100;

    const response = await fetch("/api/checkings_account", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentUserId,
        loadBalance,
      }),
    });

    if (response.ok) {
      window.location.reload();
    }
  };

  return (
    <button className="activate-savings-button" onClick={activateSavings}>
      Load $100
    </button>
  );
};

export default LoadCheckings;
