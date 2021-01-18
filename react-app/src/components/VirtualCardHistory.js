import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import axios from "axios";

const VirtualCardHistory = ({ currentUserId }) => {
    const [userTransfers, setUserTransfers] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get(`/api/users/${currentUserId}/transfer-history`);
            setUserTransfers(data.data.users);
        })();
    }, []);

    console.log(userTransfers)

    return (
        <Container className="virtual-card-transfer-container h-100">
            <Row>
                <Col className="col-12">
                    <p className="transfer-table-title virtual-card-title">Virtual Card History</p>
                </Col>
            </Row>
            <Row className="info-row">
                <Col className="col-3 table-label-wrapper">
                    <p className="table-label">
                        <i class="fas fa-long-arrow-alt-down from-icon"></i>FROM
            </p>
                </Col>
                <Col className="col-3 table-label-wrapper">
                    <p className="table-label">
                        <i class="fas fa-long-arrow-alt-up to-icon"></i>TO
            </p>
                </Col>
                <Col className="col-3 table-label-wrapper">
                    <p className="table-label">
                        <i class="far fa-money-bill-alt amount-icon"></i>Amount
            </p>
                </Col>
                <Col className="col-3 table-label-wrapper">
                    <p className="table-label">
                        <i class="far fa-calendar-alt table-icon"></i>Date
            </p>
                </Col>
            </Row>
            {userTransfers.map((transfer, id) => (
                <Row className="info-row">
                    <Col className="col-3 info">
                        <p>{transfer.sending_account}</p>
                    </Col>
                    <Col className="col-3 info">
                        <p>{transfer.receiving_account}</p>
                    </Col>
                    <Col className="col-3 info">
                        <p>${transfer.amount}</p>
                    </Col>
                    <Col className="col-3 info">
                        <p>{transfer.date.slice(4, 16)}</p>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default VirtualCardHistory;