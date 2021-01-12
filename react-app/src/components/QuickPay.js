import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Dashboard.css";

const QuickPay = ({ currentUserId }) => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderId, setSenderId] = useState("");
  const [amount, setAmount] = useState("");

  const transferFunds = async (e) => {
      e.preventDefault();
      
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
  };

  const updateEmail = (e) => {
    setRecipientEmail(e.target.value);
  };

  const updateAmount = (e) => {
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
            <button type="submit" className="add-funds-button">
              Send Now <i class="fas fa-arrow-circle-right icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuickPay;
