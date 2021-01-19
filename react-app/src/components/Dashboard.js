import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Dashboard.css";
import SavingsCard from "./SavingsCard"
import CheckingsCard from "./CheckingsCard";
import QuickPay from "./QuickPay";
import { LineChart } from "react-chartkick";
import "chart.js";
import axios from "axios";

const Dashboard = ({ setAuthenticated, currentUser, currentUserId }) => {
  document.title = "Orbit - Dashboard"

  const [balanceHistory, setBalanceHistory] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        `/api/users/${currentUserId}/balance-history`
      );
      setBalanceHistory(data.data.history);
      
    })();
  }, []);

  console.log(balanceHistory)

  const actualData = {}

  const setData = (object) => {
    object.map((data) => {
      if (data.date[data.amount]) {
        return 
      } else {
        actualData[data.date] = data.amount
      }
    })
  }

  setData(balanceHistory)

  console.log(actualData)

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
              id="users-chart"
              width="64vw"
              height="100%"
              colors={["rgb(8, 255, 29)", "#ffffff"]}
              label="Value"
              data={actualData}
              prefix="$"
            />
          </div>
        </Col>
        <Col col-3>
          <SavingsCard currentUserId={currentUserId} />
        </Col>
        <Col col-3 className="last-div">
          <QuickPay currentUserId={currentUserId} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;