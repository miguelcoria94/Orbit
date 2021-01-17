import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./vc.css";
import SmallCheckingsCard from "./SmallCheckingsCard";
import BigSavingsCard from "./BigSavingsAccount";
import TransferHistory from "./TransferHistory";
import DebitCard from "./DebitCard"
import axios from "axios";

const VirtualCardForm = ({ currentUser, setAuthenticated, currentUserId }) => {

  return (
    <Container className="virtual-card-form" fluid>
      <h1 className="transfer-from-title">Create a Virtual Card</h1>
      <Row className="card-container">
        <Col className="card-holder">
          <SmallCheckingsCard currentUserId={currentUserId}></SmallCheckingsCard>
        </Col>
        <Col className="card-holder">
          <DebitCard></DebitCard>
        </Col>
      </Row>
    </Container>
  );
};

export default VirtualCardForm;
