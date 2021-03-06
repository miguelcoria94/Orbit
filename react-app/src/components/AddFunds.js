import React from "react";
import axios from "axios";

const AddFunds = ({ currentUserId, currentBalance }) => {
  const newBalance = 100 + currentBalance
  const addFunds = async (e) => {
    const request = { newBalance, currentUserId };
    const response = await axios.put(`/api/checkings_account/${currentUserId}`, request);
    window.location.reload()
    return response
  };

  return (
    <button className="add-funds-button add-funds-space" onClick={addFunds}>
      <i class="fas fa-plus-circle"></i>$100
    </button>
  );
};

export default AddFunds;
