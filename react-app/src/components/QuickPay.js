import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Dashboard.css";

const QuickPay = ({ currentUserId }) => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [senderId, setSenderId] = useState("");
  const [amount, setAmount] = useState("");
  const [noMoneyError, setNoMoneyError] = useState("")
  const [noEmailError, setEmailError] = useState("");

  const transferFunds = async (e) => {
      e.preventDefault();
      const data = await axios.get(`/api/checkings_account/${currentUserId}`);
    setCurrentBalance(data.data.checkings_balance[0].balance);
    if (data.data.checkings_balance[0].balance < parseInt(amount)) {
      setNoMoneyError("insufficient funds");
      return;
    }

    if (parseInt(amount) < 0) {
      setNoMoneyError("Invalid Amount");
      return;
    }
      
      const response = await fetch("/api/checkings_account/transfer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentUserId,
        recipientEmail,
        senderId,
        amount,
      }),
    });

    if (response.ok) {
      window.location.reload();
    }

    if (!response.ok) {
      setNoMoneyError("Email Invalid")
    }
  };

  const updateEmail = (e) => {
    setNoMoneyError("");
    setRecipientEmail(e.target.value);
    setSenderId(currentUserId);
  };

  const updateAmount = (e) => {
    setNoMoneyError("");
    setNoMoneyError("");
    setAmount(e.target.value);
    setSenderId(currentUserId);
  };

  return (
    <div className="Card custom-card last-card depth">
      <p className="quick-pay-test">Quick Pay</p>
      <form onSubmit={transferFunds} className="small-form">
        <div>
          <div className="small-input-wrapper">
            <input
              name="text"
              type="number"
              placeholder="Amount to send"
              onChange={updateAmount}
              className="small-input"
            />
          </div>
          <div className="small-input-wrapper">
            <input
              name="email"
              type="email"
              placeholder="Recipient Email"
              onChange={updateEmail}
              className="small-input"
            />
            <button
              type="submit"
              className={
                noMoneyError
                  ? "activate-savings-button animate__animated animate__shakeX"
                  : "add-funds-button"
              }
            >
              {noMoneyError ? `${noMoneyError}` : noEmailError ? `${noEmailError}` : "Send Now"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuickPay;
