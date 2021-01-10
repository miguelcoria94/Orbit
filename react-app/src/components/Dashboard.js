import React from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Dashboard.css";
import LogoutButton from "./auth/LogoutButton"
import SavingsCard from "./SavingsCard"
import CheckingsCard from "./CheckingsCard";
import QuickPay from "./QuickPay";

const Dashboard = ({ setAuthenticated, currentUser, currentUserId }) => {
  return (
    <Container fluid className="dashboard-wrapper">
      <Row>
        <Col className="col-3">
          <SideNav
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}
          />
        </Col>
        <Col className="col-3">
          <CheckingsCard currentUserId={currentUserId} />
        </Col>
        <Col col-3>
          <SavingsCard currentUserId={currentUserId} />
        </Col>
        <Col col-3>
          <QuickPay currentUserId={currentUserId} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;