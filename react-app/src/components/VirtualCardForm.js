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
  document.title = "Orbit - Virtual Cards"
  return (
    <Container className="virtual-card-form" fluid>
      <Row className="card-container">
        <Col className="card-holder h-100">
          <SmallCheckingsCard currentUserId={currentUserId}></SmallCheckingsCard>
        </Col>
        <Col className="card-holder h-100">
          <VirtualCardCreator currentUserId={currentUserId} />
        </Col>
      </Row>
      <Row className="card-container card-container2">
        <Col className="card-holder">
          <VirtualCardHistory currentUserId={currentUserId}/>
        </Col>
      </Row>
    </Container>
  );
};

export default VirtualCardForm;
