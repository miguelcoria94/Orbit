import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import BigCheckingsCard from "./BigCheckingsCard";
import VirtualCardForm from "./VirtualCardForm"
import "./virtualcard.css"


const VirtualCard = ({ currentUserId, currentUser, setAuthenticated }) => {
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
            <div className="virtual-card-info-card card custom-card">
              <h1 className="vc-card-title">
                Keep your personal information private
              </h1>
              <p classname="vc-card-text">
                {" "}
                Virtual Cards provides a solution that allows you to generate unique card
                numbers for free for your online purchases.
              </p>
            </div>
            <BigCheckingsCard currentUserId={currentUserId} />
                </Col>
                <Col className="col-5">
                    <VirtualCardForm currentUser={currentUser} currentUserId={currentUserId}/>
                </Col>
        </Row>
      </Container>
    );
}

export default VirtualCard;