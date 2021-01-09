import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddFunds = ({ currentUserId, currentBalance }) => {
    const history = useHistory();
    const newBalance = 100 + currentBalance
    const addFunds = async (e) => {
      const request = { newBalance, currentUserId };
      const response = await axios.put(`/api/checkings_account/${currentUserId}`, request);
      console.log(response);
    };

  return (
    <button className="add-funds-button" onClick={addFunds}>
      Load $100
    </button>
  );
};

export default AddFunds;
