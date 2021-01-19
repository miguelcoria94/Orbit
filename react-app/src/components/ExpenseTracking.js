import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import { PieChart } from "react-chartkick";
import axios from "axios";
import ExpenseReport from "./ExpenseReport";


const ExpenseTracking = ({ currentUserId, currentUser, setAuthenticated }) => {
    const [expenseType, setExpenseType] = useState("");
    const [amount, setAmount] = useState("");
    const [userId, setUserId] = useState("");
    const [merchant, setMerchant] = useState("");
    const [error1, setError1] = useState("");
    const [pieData, setPiedata] = useState([]);
    let HousingTotal = 0
    let InsuranceTotal = 0
    let FoodTotal = 0
    let GivingTotal = 0
    let SavingsTotal = 0
    let UtilitiesTotal = 0
    let TransportationTotal = 0
    let RecreationTotal = 0
    let PersonalTotal = 0

    
    useEffect(() => {
        (async () => {
            const data = await axios.get(`/api/users/${currentUserId}/expense-history`);
            setPiedata(data.data.history);
        })();
    }, []);
    
    console.log(pieData)

    const setData = () => {
        pieData.map((data) => {
            if (data.expense_type === "Housing") {
                HousingTotal += data.amount
            }
            else if (data.expense_type === "Insurance") {
                InsuranceTotal += data.amount
            }
            else if (data.expense_type === "Food") {
                FoodTotal += data.amount
            }
            else if (data.expense_type === "Giving") {
                GivingTotal += data.amount
            }
            else if (data.expense_type === "Savings") {
                SavingsTotal += data.amount
            }
            else if (data.expense_type === "Utilities") {
                UtilitiesTotal += data.amount
            }
            else if (data.expense_type === "Transportation") {
                TransportationTotal += data.amount
            }
            else if (data.expense_type === "Recreation") {
                RecreationTotal += data.amount
            }
            else if (data.expense_type === "Personal") {
                PersonalTotal += data.amount
            }
        })
    }

    setData()

    console.log(HousingTotal)
    console.log(InsuranceTotal)
    console.log(RecreationTotal)
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
                currentUserId
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
                            <PieChart legend={false} data={[["Food", FoodTotal], ["Housing", HousingTotal], ["Insurance", InsuranceTotal], ["Giving", GivingTotal], ["Savings", SavingsTotal], ["Utilities", UtilitiesTotal], ["Transportation", TransportationTotal], ["Recreation", RecreationTotal], ["Personal", PersonalTotal]]} width="300px" height="250px"/>
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
                                    <option value="Giving">Giving</option>
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
                        <ExpenseReport currentUserId={currentUserId}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ExpenseTracking;
