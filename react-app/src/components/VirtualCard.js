import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import BigCheckingsCard from "./BigCheckingsCard";
import VirtualCardForm from "./VirtualCardForm"
import "./virtualcard.css"
import "./vc.css";


const VirtualCard = ({ currentUserId, currentUser, setAuthenticated }) => {
    return (
      <Container fluid className="dashboard-wrapper">
        <Row className="transfer-wrapper">
          <Col className="col-3">
            <SideNav
              title={"Virtual Cards"}
              currentUser={currentUser}
              setAuthenticated={setAuthenticated}
            />
          </Col>
          <Col className=" vc-container">
                    <VirtualCardForm currentUser={currentUser} currentUserId={currentUserId}/>
                </Col>
        </Row>
      </Container>
    );
}

export default VirtualCard;