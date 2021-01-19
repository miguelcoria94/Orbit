import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import { PieChart } from "react-chartkick";


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
                        <Col>
                            <h1 className="bug-report-title">Expense Breakdown</h1>
                            <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
                        </Col>
                        <Col className="bug-report-wrapper">
                            <h1 className="bug-report-title">Add Expense</h1>
                            <form>
                                <input name="firstname" className="input w-100" type="text" placeholder="First Name">
                                </input>
                                <input name="firstname" className="input w-100" type="text" placeholder="First Name">
                                </input>
                                <input name="firstname" className="input w-100" type="text" placeholder="First Name">
                                </input>
                            </form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ExpenseTracking;
