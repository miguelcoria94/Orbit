import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import ActivateSavingsButton from "./ActivateSavingsButton";

function SavingsCard({ currentUserId }) {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
		(async () => {
			const data = await axios.get(
        `/api/savings_account/${currentUserId}`
      );
			setBalance(data.data.savings_balance[0]);
		})();
  }, []);
  
  return (
    <div className="card custom-card">
      {balance.balance !== undefined ? (
        <>
          <div className="disabled-wrapper">
            <i className="fas fa-circle icon-active"></i>
            <p className="active-text">active</p>
          </div>
          <h1 className="balance">${balance.balance}</h1>
        </>
      ) : (
        <>
          <div className="disabled-wrapper">
            <i class="fas fa-circle icon-disabled"></i>
              <p className="disabled-text">Disabled</p>
              <ActivateSavingsButton currentUserId={currentUserId}/>
          </div>
          <h1 className="balance">{"$0"}</h1>
        </>
      )}
      <p className="balance-tag">Total Savings</p>
    </div>
  );
}

export default SavingsCard;
