import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import VirtualCardForm from "./VirtualCardForm"
import "./virtualcard.css"
import "./vc.css";


const BugReport = ({ currentUserId, currentUser, setAuthenticated }) => {

    document.title = "Orbit - Report a Bug"

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const updateLastName = (e) => {
        setLastName(e.target.value);
    };
    const updateEmail = (e) => {
        setUserEmail(e.target.value);
    };
    const updateTitle = (e) => {
        setTitle(e.target.value);
    };
    const updateBody = (e) => {
        setBody(e.target.value);
    };
    return (
        <Container fluid className="dashboard-wrapper">
            <Row className="transfer-wrapper">
                <Col className="col-3">
                    <SideNav
                        title={"Report a bug"}
                        currentUser={currentUser}
                        setAuthenticated={setAuthenticated}
                    />
                </Col>
                <Col className="bug-report-wrapper">
                    <h1 className="bug-report-title"><i class="fas fa-bug"></i> Bug Report</h1>
                    <form className="bug-form">
                        <Row>
                            <Col>
                        <input name="firstname" className="input w-100" type="text" placeholder="First Name">
                        </input>
                            </Col>
                            <Col>
                        <input name="lastname" className="input w-100" type="text" placeholder="last Name">
                        </input>
                            </Col>
                        </Row>
                        <input name="email" className="input" type="email" placeholder="Enter Your Email">
                        </input>
                        <input name="subject" className="input" type="text" placeholder="Headline">
                        </input>
                        <textarea name="body" className="input ta" type="textarea" placeholder="Please Explain The Issue">
                        </textarea>
                        <button className="demo-button">
                            Submit Bug
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default BugReport;