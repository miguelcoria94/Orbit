import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container , Row} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Dashboard.css";

const QuickPay = () => {
    const [errors, setErrors] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [senderId, setSenderId] = useState("");
    const [amount, setAmount] = useState("");

    const updateEmail = (e) => {
        setUserEmail(e.target.value);
    };

    const updateAmount = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    
    return (
      <div className="Card custom-card last-card depth">
        <p className="quick-pay-test">Quick Pay</p>
        <form onSubmit={handleSubmit} className="small-form">
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
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
}

export default QuickPay;