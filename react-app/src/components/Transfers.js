import React from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./Transfer.css";
import BigCheckingsCard from "./BigCheckingsCard";
import BigSavingsCard from "./BigSavingsAccount";

const Transfers = ({
  currentUser,
  setAuthenticated,
  currentUserId
}) => {
  return (
    <Container fluid className="dashboard-wrapper">
      <Row>
        <Col className="col-3">
          <SideNav
            title={"Transfers"}
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}
          />
        </Col>
        <Col className="col-5">
          <BigCheckingsCard currentUserId={currentUserId} />
          <BigSavingsCard currentUserId={currentUserId} />
        </Col>
        <Col>
          <div className="transfer-form-wrapper">
            <p>Transfer Form</p>
            <form>

            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Transfers;
