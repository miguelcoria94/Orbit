import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap/";
import axios from "axios";
import DeleteExpense from "./DeleteExpense"

const ExpenseReport = ({ currentUserId }) => {
    const [expenseHistory, setExpenseHistory] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await axios.get(`/api/users/${currentUserId}/expense-history`);
            setExpenseHistory(data.data.history);
        })();
    }, []);

    


    return (
        <div className="er-con">
            <Row>
                <Col className="col-12">
                    <p className="transfer-table-title virtual-card-title">Expense Report</p>
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
                        <i class="fas fa-cash-register to-icon"></i>Expense Type
            </p>
                </Col>
                <Col className="col-2 table-label-wrapper">
                    <p className="table-label">
                        <i class="far fa-calendar-alt table-icon"></i>Date Created
            </p>
                </Col>
            </Row>
            {expenseHistory.map((card, id) => (
                <Row className="info-row">
                    <Col className=" info col-2">
                        <p>{card.merchant}</p>
                    </Col>
                    <Col className=" info col-2">
                        <p>${card.amount}</p>
                    </Col>
                    <Col className=" info col-2">
                        <p>{card.expense_type}</p>
                    </Col>
                    <Col className=" info col-2">
                        <p>{card.date.slice(4, 16)}</p>
                    </Col>
                    <Col className="info">
                            <DeleteExpense id={card.id} cardBalance={card.amount} userId={card.user_id} />
                    </Col>
                </Row>
            ))}
        </div>
    );
}

export default ExpenseReport;