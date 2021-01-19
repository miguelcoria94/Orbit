import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import SideNav from "./SideNav";
import VirtualCardForm from "./VirtualCardForm"
import "./virtualcard.css"
import "./vc.css";


const BugReport = ({ currentUserId, currentUser, setAuthenticated }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");
    document.title = "Orbit - Report a Bug"

    const submitBug = async (e) => {
        e.preventDefault();

        if (!firstName) {
            setError("You must provide a valid first name")
            return
        }

        if (!lastName) {
            setError("You must provide a valid last name")
            return
        }

        if (!userEmail) {
            setError("You must provide a valid email")
            return
        }

        if (!title) {
            setError("You must provide a valid title")
            return
        }

        if (!body) {
            setError("You must provide a valid body")
            return
        }
        const response = await fetch("/api/users/bug-report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                userEmail,
                title,
                body,
                currentUserId
            }),
        });

        if (response.ok) {
            window.location.reload();
        }

        if (!response.ok) {
            return
        }
    };

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
                    <form className="bug-form" onSubmit={submitBug}>
                        <Row>
                            <Col>
                                <input name="firstname" className="input w-100" type="text" placeholder="First Name" onChange={updateFirstName}>
                        </input>
                            </Col>
                            <Col>
                                <input name="lastname" className="input w-100" type="text" placeholder="last Name" onChange={updateLastName}>
                        </input>
                            </Col>
                        </Row>
                        <input name="email" className="input" type="email" placeholder="Enter Your Email" onChange={updateEmail}>
                        </input>
                        <input name="subject" className="input" type="text" placeholder="Headline" onChange={updateTitle}>
                        </input>
                        <textarea name="body" className="input ta" type="textarea" placeholder="Please Explain The Issue" onChange={updateBody}>
                        </textarea>
                        <button
                            type="submit"
                            className={
                                error
                                    ? "activate-savings-button animate__animated animate__shakeX transfer-button demo-button"
                                    : "add-funds-button transfer-button demo-button"
                            }
                        >
                            {error ? `${error}` : "Submit Bug"}
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default BugReport;