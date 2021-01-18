import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import axios from "axios";

const VirtualCardCreator = ({ currentUserId }) => {
    const [amount, setAmount] = useState("");
    const [currentUser, setCurrentUser] = useState("")

    useEffect(() => {
    }, []);

    const updateAmount = (e) => {
        setAmount(e.target.value);
        setCurrentUser(currentUserId);
    };


    return (
        <Container className="virtual-card-transfer-container virtual-card-form-container h-100">
            <Row>
                <Col className="col-12">
                    <p className="transfer-table-title virtual-card-title">Create A Virtual Card</p>
                </Col>
            </Row>
            <Row className="">
                <Col>
                    <form className="virtualcardform">
                        <input placeholder="Purchase Amount" name="amount"
                            type="number"
                            onChange={updateAmount}
                            className="input"></input>
                        <input placeholder="Merchant Name" name="merchantname"
                            type="text"
                            onChange={"ph"} className="input"></input>
                        <button type="submit" className="demo-button">Create Now</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default VirtualCardCreator;