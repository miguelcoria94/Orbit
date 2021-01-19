import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";


const GoalsComingSoon = ({ currentUserId, currentUser, setAuthenticated }) => {
    document.title = "Orbit - Coming Soon"
    return (
        <Container fluid className="dashboard-wrapper">
            <Row className="transfer-wrapper">
                <Col className="col-3">
                    <SideNav
                        title={"Goals"}
                        currentUser={currentUser}
                        setAuthenticated={setAuthenticated}
                    />
                </Col>
                <Col className=" vc-container">
                </Col>
            </Row>
        </Container>
    );
}

export default GoalsComingSoon;
