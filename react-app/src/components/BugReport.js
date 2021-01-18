import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import VirtualCardForm from "./VirtualCardForm"
import "./virtualcard.css"
import "./vc.css";


const BugReport = ({ currentUserId, currentUser, setAuthenticated }) => {
    document.title = "Orbit - Report a Bug"
    return (
        <Container fluid className="dashboard-wrapper">
            <Row className="transfer-wrapper">
                <Col className="col-3">
                    <SideNav
                        title={"Report a bug"}
                        currentUser={currentUser}
                        setAuthenticated={setAuthenticated}
                    />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}

export default BugReport;