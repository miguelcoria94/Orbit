import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import "./ProjectInfo.css"

const ProjectInfo = () => {
    return (
        <Container className="aboutPageContainer">
            <h1 className="about-title">About Orbit</h1>
            <Row>
                <Col>
                    <h3 className="about-subheading">How Orbit works.</h3>
                    <p className="about-feature">Active your accounts.
                    </p>
                    <p className="about-feature-text">Load money into your account and beginning divvy money up between your checkings and savings account. </p>
                    <p className="about-feature">Active your accounts.
                    </p>
                    <p className="about-feature-text">Load money into your account and beginning divvy money up between your checkings and savings account. </p>
                    <p className="about-feature">Active your accounts.
                    </p>
                    <p className="about-feature-text">Load money into your account and beginning divvy money up between your checkings and savings account. </p>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectInfo