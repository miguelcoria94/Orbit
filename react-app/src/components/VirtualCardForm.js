import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import "./vc.css";
import BigCheckingsCard from "./BigCheckingsCard";
import BigSavingsCard from "./BigSavingsAccount";
import TransferHistory from "./TransferHistory";
import axios from "axios";

const VirtualCardForm = ({ currentUser, setAuthenticated, currentUserId }) => {

  return (
        <Col className="virtual-card-form">
        </Col>
  );
};

export default VirtualCardForm;
