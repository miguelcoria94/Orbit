import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import LoadCheckings from "./LoadCheckings";
import AddFunds from "./AddFunds";

function CheckingsCard({ currentUserId }) {
    const [balance, setBalance] = useState([]);
    const [currentBalance, setCurrentBalance] = useState("");

  useEffect(() => {
    (async () => {
      const data = await axios.get(`/api/checkings_account/${currentUserId}`);
        setBalance(data.data.checkings_balance[0]);
        setCurrentBalance(data.data.checkings_balance[0].balance);
    })();
}, []);

  return (
    <div className="card custom-card">
      {balance.balance !== undefined ? (
        <>
          <div className="disabled-wrapper">
            <i className="fas fa-circle icon-active"></i>
            <p className="active-text">active</p>
            <AddFunds
              currentBalance={currentBalance}
              currentUserId={currentUserId}
            />
          </div>
          <h1 className="balance">${balance.balance}</h1>
        </>
      ) : (
        <>
          <div className="disabled-wrapper">
            <i class="fas fa-circle icon-disabled"></i>
            <p className="disabled-text">Disabled</p>
            <LoadCheckings currentUserId={currentUserId} />
          </div>
          <h1 className="balance">{"$0"}</h1>
        </>
      )}
      <p className="balance-tag">Checkings Account</p>
    </div>
  );
}

export default CheckingsCard;
