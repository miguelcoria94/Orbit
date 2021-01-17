import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import "./ProjectInfo.css"
import profile_pic from "../components/images/profile_pic.jpeg"
const ProjectInfo = () => {
    return (
        <Container className="aboutPageContainer">
            <h1 className="about-title">About Orbit</h1>
            <Row>
                <Col>
                    <h3 className="about-subheading">How Orbit works.</h3>
                    <p className="about-feature">Active your accounts.
                    </p>
                    <p className="about-feature-text">Load money into your account and beginning divvying up your money between your checkings and savings account. </p>
                    <p className="about-feature">Send money to friends or family.
                    </p>
                    <p className="about-feature-text">Easily send money to friends or family with just there email.</p>
                    <p className="about-feature">Create Virtual Cards.
                    </p>
                    <p className="about-feature-text">Virtual Cards provides a solution that allows you to generate unique card numbers for free for your online purchases.</p>
                    <p className="about-feature">Create goals and stay motivated.
                    </p>
                    <p className="about-feature-text">You can use Goals to set money aside while keeping it handy when you need it. Deleting a goal adds the balance right back to your account.</p>
                </Col>
                <Col>
                    <div className="profile-card">
                        <img src={profile_pic} className="profile-pic"/>
                        <button className="demo-button">Github repo</button>
                        <button className="demo-button">Portfolio Site</button>
                        <button className="demo-button">Linkedin</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectInfo