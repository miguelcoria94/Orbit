import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function SavingsCard({ currentUserId }) {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
		(async () => {
			const data = await axios.get(
        `http://127.0.0.1:5000/api/savings_account/${currentUserId}`
      );
			setBalance(data.data.savings_balance[0]);
		})();
  }, []);
  
  return (
    <div className="card custom-card">
      {balance.balance ? (
        <h1 className="balance">${balance.balance}</h1>
      ) : (
        <div className="disabled-wrapper">
          <p>
            <i class="fas fa-circle icon-disabled"></i>Disabled
          </p>
          <h1 className="balance">{"$0"}</h1>
        </div>
      )}
      <p className="balance-tag">Total Savings</p>
    </div>
  );
}

export default SavingsCard;
