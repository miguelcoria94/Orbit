import React from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";


const GoalsComingSoon = ({ currentUser, setAuthenticated }) => {
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
                <Col >
                    <div className="cs-wrapper">
                        <i class="fas fa-plane-departure big-icon"></i>
                        <h1 className="cs-title">Coming Soon !</h1>
                        <p className="cs-text">Check back for updates.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default GoalsComingSoon;
