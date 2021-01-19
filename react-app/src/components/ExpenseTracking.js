import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import { PieChart } from "react-chartkick";
import ExpenseReport from "./ExpenseReport";


const ExpenseTracking = ({ currentUserId, currentUser, setAuthenticated }) => {
    const [expenseType, setExpenseType] = useState("");
    const [amount, setAmount] = useState("");
    const [userId, setUserId] = useState("");
    const [merchant, setMerchant] = useState("");
    const [error1, setError1] = useState("");
    
    document.title = "Orbit - Expense Tracking"

    const submitExpense = async (e) => {
        e.preventDefault();
        setUserId(currentUserId)

        if (!expenseType) {
            setError1("You must provide a valid expense type")
            return
        }
        
        if (!merchant) {
            setError1("You must provide a valid merchant")
            return
        }
        if (!amount) {
            setError1("You must provide a valid amount")
            return
        }

        const response = await fetch("/api/users/add-expense", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount,
                expenseType,
                merchant,
                userId
            }),
        });

        if (response.ok) {
            window.location.reload();
        }

        if (!response.ok) {
            return
        }
    };

    const updateExpenseType = (e) => {
        setExpenseType(e.target.value);
    };

    const updateAmount = (e) => {
        setAmount(e.target.value);
    };

    const updateMerchant = (e) => {
        setMerchant(e.target.value);
    };

    return (
        <Container fluid className="dashboard-wrapper">
            <Row className="transfer-wrapper">
                <Col className="col-3">
                    <SideNav
                        title={"Expenses"}
                        currentUser={currentUser}
                        setAuthenticated={setAuthenticated}
                    />
                </Col>
                <Col >
                    <Row>
                        <Col className="er-wrap2">
                            <h1 className="bug-report-title">Breakdown</h1>
                            <PieChart data={[["Food", 44], ["Shopping", 23], ["Food", 104]]} width="300px" height="170px"/>
                        </Col>
                        <Col className="er-wrap">
                            <h1 className="bug-report-title">Add Expense</h1>
                            <form onSubmit={submitExpense}>
                                <Row>
                                    <Col>
                                <label className="label">Expense Type </label>
                                    </Col>
                                    <Col>
                                <select className="input" name="type" type="text" onChange={updateExpenseType}>
                                    <option value="Housing">Housing</option>
                                    <option value="Insurance">Insurance</option>
                                    <option value="Food">Food</option>
                                    <option value="Giving">Gving</option>
                                    <option value="Savings">Savings</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Recreation">Recreation</option>
                                    <option value="Personal">Personal</option>
                                </select>
                                    </Col>
                                </Row>
                                <input name="merchant" className="input w-100" type="text" placeholder="Merchant Name" onChange={updateMerchant}>
                                </input>
                                <input name="amount" className="input w-100" type="number" placeholder="How much did you spend?" onChange={updateAmount}>
                                </input>
                                <button
                                    type="submit"
                                    className={
                                        error1
                                            ? "activate-savings-button animate__animated animate__shakeX transfer-button demo-button"
                                            : "add-funds-button transfer-button demo-button"
                                    }
                                >
                                    {error1 ? `${error1}` : "Add Expense"}
                                </button>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <ExpenseReport />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ExpenseTracking;
