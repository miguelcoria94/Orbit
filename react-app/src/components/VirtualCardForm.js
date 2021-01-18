import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./vc.css";
import SmallCheckingsCard from "./SmallCheckingsCard";
import DebitCard from "./DebitCard";
import VirtualCardHistory from "./VirtualCardHistory";
import VirtualCardCreator from "./VirtualCardCreator";
import axios from "axios";

const VirtualCardForm = ({ currentUser, setAuthenticated, currentUserId }) => {

  return (
    <Container className="virtual-card-form" fluid>
      <Row className="card-container">
        <Col className="card-holder">
          <SmallCheckingsCard currentUserId={currentUserId}></SmallCheckingsCard>
        </Col>
        <Col className="card-holder">
          <DebitCard></DebitCard>
        </Col>
      </Row>
      <Row className="card-container">
        <Col className="card-holder">
          <VirtualCardHistory />
        </Col>
        <Col className="card-holder">
          <VirtualCardCreator />
        </Col>
      </Row>
    </Container>
  );
};

export default VirtualCardForm;
