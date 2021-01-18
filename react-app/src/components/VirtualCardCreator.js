import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import axios from "axios";

const VirtualCardCreator = ({ currentUserId }) => {
    const [amount, setAmount] = useState("");
    const [currentUser, setCurrentUser] = useState("")
    const [merchant, setMerchant] = useState("");
    const [currentBalance, setCurrentBalance] = useState("")
    const [createError, setCreateError] = useState("")
    const [cardNumber, setCardNumber] = useState("")

    const createVirtualCard = async (e) => {
        e.preventDefault();
        const data = await axios.get(`/api/checkings_account/${currentUserId}`);
        setCurrentBalance(data.data.checkings_balance[0].balance);
        if (data.data.checkings_balance[0].balance < parseInt(amount)) {
            setCreateError("insufficient funds");
            return;
        }

        if (parseInt(amount) < 0) {
            setCreateError("Invalid Amount");
            return;
        }

        const response = await fetch("/api/checkings_account/virtual-card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount,
                cardNumber,
                currentUserId,
                merchant,
                currentBalance,
            }),
        });

        if (response.ok) {
            window.location.reload();
        }

        if (!response.ok) {
            window.location.reload()
            return
        }
    };

    const updateAmount = (e) => {
        setAmount(e.target.value);
        setCurrentUser(currentUserId);
    };

    const updateMerchant = (e) => {
        setMerchant(e.target.value);
        setCurrentUser(currentUserId);
        setCardNumber(Math.floor(Math.random() * 9000000000000000) + 1000000000)
    };


    return (
        <Container className="virtual-card-transfer-container-2">
            <Row>
                <Col className="col-12">
                    <p className="transfer-table-title virtual-card-title">Create A Virtual Card</p>
                </Col>
            </Row>
            <Row className="">
                <Col>
                    <form className="virtualcardform" onSubmit={createVirtualCard}>
                        <Row className="vc-input-wrapper">
                            <Col>
                        <input placeholder="Purchase Amount" name="amount"
                            type="number"
                            onChange={updateAmount}
                            className="input"></input>
                            </Col>
                            <Col>
                        <input placeholder="Merchant Name" name="merchantname"
                            type="text"
                            onChange={updateMerchant} className="input"></input>
                            </Col>
                        </Row>
                        <button
                            type="submit"
                            className={
                                createError
                                    ? "activate-savings-button animate__animated animate__shakeX transfer-button demo-button"
                                    : "add-funds-button transfer-button demo-button"
                            }
                        >
                            {createError ? `${createError}` : "Create Now"}
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default VirtualCardCreator;