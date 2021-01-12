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
          <Row>
            <Col className="col-12">
              <div className="transfer-form-wrapper">
                <p className="transfer-from-title">Transfer Form</p>
                <div className="forms-wrapper">
                  <form>
                    <div className="small-input-wrapper">
                      <input
                        name="email"
                        type="email"
                        placeholder="Send to savings"
                        onChange={"ef"}
                        className="small-input"
                      />
                    </div>
                  </form>
                  <p>
                    <i class="fas fa-exchange-alt icon icon-1"></i>
                  </p>
                  <form>
                    <div className="small-input-wrapper">
                      <input
                        name="email"
                        type="email"
                        placeholder="Send to checkings"
                        onChange={"ef"}
                        className="small-input"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-4">
          <BigSavingsCard currentUserId={currentUserId} />
        </Col>
      </Row>
    </Container>
  );
};

export default Transfers;
