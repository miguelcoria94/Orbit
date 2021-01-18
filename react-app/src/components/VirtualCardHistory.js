import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import axios from "axios";
import DeleteVC from "./DeleteVC"

const VirtualCardHistory = ({ currentUserId }) => {
    const [virtualCards, setVirtualCard] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get(`/api/users/${currentUserId}/virtual-cards`);
            setVirtualCard(data.data.users);
        })();
    }, []);


    return (
        <div className="virtual-card-transfer-container h-100">
            <Row>
                <Col className="col-12">
                    <p className="transfer-table-title virtual-card-title">Virtual Card History</p>
                </Col>
            </Row>
            <Row className="info-row">
                <Col className="col-2 table-label-wrapper">
                    <p className="table-label">
                        <i class="fas fa-store from-icon">
                        </i>Merchant
            </p>
                </Col>
                <Col className="col-2 table-label-wrapper">
                    <p className="table-label">
                        <i class="far fa-money-bill-alt amount-icon"></i>Amount
            </p>
                </Col>
                <Col className="col-2 table-label-wrapper">
                    <p className="table-label">
                        <i class="fas fa-question to-icon"></i>Status
            </p>
                </Col>
                <Col className="col-2 table-label-wrapper">
                    <p className="table-label">
                        <i class="far fa-calendar-alt table-icon"></i>Date Created
            </p>
                </Col>
                <Col className="col-2 table-label-wrapper">
                    <p className="table-label">
                        <i class="fab fa-cc-visa to-icon"></i>Card Number
            </p>
                </Col>
            </Row>
            {virtualCards.map((card, id) => (
                <Row className="info-row">
                    <Col className=" info">
                        <p>{card.merchant}</p>
                    </Col>
                    <Col className=" info">
                        <p>${card.amount}</p>
                    </Col>
                    <Col className=" info">
                        <p>{card.status}</p>
                    </Col>
                    <Col className=" info">
                        <p>{card.date.slice(4, 16)}</p>
                    </Col>
                    <Col className="info">
                        <p>{card.card_number}</p>
                    </Col>
                    <Col className="info">
                        <DeleteVC cardId={card.id} cardBalance={card.amount}/>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

export default VirtualCardHistory;