import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";


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
                </Col>
            </Row>
        </Container>
    );
}

export default ExpenseTracking;
