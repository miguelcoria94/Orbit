import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Transfer.css";
import BigCheckingsCard from "./BigCheckingsCard";
import BigSavingsCard from "./BigSavingsAccount";
import axios from "axios";

const Transfers = ({
  currentUser,
  setAuthenticated,
  currentUserId
}) => {
  const [savingsTransferAmount, setSavingsTransferAmount] = useState("");
  const [checkingsTransferAmount, setCheckingsTransferAmount] = useState("");
  const [userId, setUserId] = useState("");

  const transferToSavings = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/checkings_account/transfer-to-savings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        savingsTransferAmount
      }),
    });

    if (response.ok) {
      window.location.reload();
    }

    if (!response.ok) {
    }
  };

  const transferToCheckings = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/savings_account/transfer-to-checkings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        checkingsTransferAmount
      }),
    });

    if (response.ok) {
      window.location.reload();
    }

    if (!response.ok) {
    }
  };

  const updateSavings = (e) => {
    setSavingsTransferAmount(e.target.value);
    setUserId(currentUserId);
  };

  const updateCheckings = (e) => {
    setCheckingsTransferAmount(e.target.value);
    setUserId(currentUserId);
  };

  return (
    <Container fluid className="dashboard-wrapper">
      <Row className="transfer-wrapper">
        <Col className="col-3">
          <SideNav
            title={"Transfers"}
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}
          />
        </Col>
        <Col className="col-4">
          <BigCheckingsCard currentUserId={currentUserId} />
          <BigSavingsCard currentUserId={currentUserId} />
        </Col>
        <Col className="col-5">
          <div className="transfer-form-wrapper">
            <p className="transfer-from-title">Transfer Form</p>
            <div className="forms-wrapper">
              <form className="transfer-form" onSubmit={transferToSavings}>
                <p className="quick-pay-test transfer-form-subtitle">
                  Transfer to Savings
                </p>
                <div className="smaller-input-wrapper">
                  <input
                    name="amount"
                    type="number"
                    placeholder="Enter Amount"
                    className="smaller-input"
                    onChange={updateSavings}
                  />
                </div>
                <div className="button-wrapper">
                  <button
                    type="submit"
                    className="add-funds-button transfer-button"
                  >
                    Transfer Now
                  </button>
                </div>
              </form>
              <div>
                <p>
                  <i class="fas fa-exchange-alt transfer-icon"></i>
                </p>
              </div>
              <form className="transfer-form" onSubmit={transferToCheckings}>
                <p className="quick-pay-test transfer-form-subtitle">
                  Transfer to Checkings
                </p>
                <div className="smaller-input-wrapper">
                  <input
                    name="amount"
                    type="number"
                    placeholder="Enter Amount"
                    className="smaller-input"
                    onChange={updateCheckings}
                  />
                </div>
                <div className="button-wrapper">
                  <button
                    type="submit"
                    className="add-funds-button transfer-button"
                  >
                    Transfer Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Transfers;
