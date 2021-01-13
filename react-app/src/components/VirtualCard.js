import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";

const VirtualCard = ({ currentUserId, currentUser, setAuthenticated }) => {
    return <Container fluid className="dashboard-wrapper">
      <Row className="transfer-wrapper">
        <Col className="col-3">
          <SideNav
            title={"Transfers"}
            currentUser={currentUser}
            setAuthenticated={setAuthenticated}
          />
            </Col>
            </Row>
            </Container>
}

export default VirtualCard;