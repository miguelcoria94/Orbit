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
      <Row className="transfer-wrapper">
        <Col className="col-3">
          <SideNav
            title={"Transfers"}
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}
          />
        </Col>
        <Col className="col-4">
          <BigCheckingsCard currentUserId={currentUserId} />
          <BigSavingsCard currentUserId={currentUserId} />
        </Col>
        <Col className="col-5">
          <div className="transfer-form-wrapper">
            <p className="transfer-from-title">Transfer Form</p>
            <div className="forms-wrapper">
              <form className="transfer-form">
                <div className="smaller-input-wrapper">
                  <input
                    name="amount"
                    type="number"
                    placeholder="Send to savings"
                    className="smaller-input"
                  />
                </div>
              </form>
              <div>
              <p>
                <i class="fas fa-exchange-alt icon icon-1"></i>
              </p>
              </div>
              <form className="transfer-form">
                <div className="smaller-input-wrapper">
                  <input
                    name="amount"
                    type="number"
                    placeholder="Send to checkings"
                    className="smaller-input"
                  />
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Transfers;
