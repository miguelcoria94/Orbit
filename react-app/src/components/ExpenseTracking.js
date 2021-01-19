import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import { PieChart } from "react-chartkick";
import ExpenseReport from "./ExpenseReport";


const ExpenseTracking = ({ currentUserId, currentUser, setAuthenticated }) => {
    document.title = "Orbit - Expense Tracking"
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
                            <form>
                                <Row>
                                    <Col>
                                <label className="label">Expense Type </label>
                                    </Col>
                                    <Col>
                                <select className="input" name="type" type="text">
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
                                <input name="amount" className="input w-100" type="number" placeholder="How much did you spend?">
                                </input>
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
