import React from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Dashboard.css";
import LogoutButton from "./auth/LogoutButton"
import SavingsCard from "./SavingsCard"
import CheckingsCard from "./CheckingsCard";
import QuickPay from "./QuickPay";
import { Chart } from "react-charts";
import { LineChart, PieChart } from "react-chartkick";
import "chart.js";

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
          <div className="chart-div">
            <LineChart
              colors={["rgb(50, 173, 81)", "#666"]}
              label="Value"
              data={{ 1: 3500, 2: 4000, 3: 3600, 4: 5000 }}
            />
          </div>
        </Col>
        <Col col-3>
          <SavingsCard currentUserId={currentUserId} />
        </Col>
        <Col col-3 className="last-div">
          <QuickPay currentUserId={currentUserId} />
          <PieChart data={{ Blueberry: 1, Strawberry: 3 }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;