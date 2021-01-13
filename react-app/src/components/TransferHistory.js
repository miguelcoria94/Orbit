import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap/";
import axios from "axios";

const TransferHistory = ({currentUserId}) => {
    const [userTransfers, setUserTransfers] = useState([]);

    useEffect(() => {
      (async () => {
        const data = await axios.get(`/api/users/${currentUserId}/transfer-history`);
        setUserTransfers(data.data.users);
      })();
    }, []);

    console.log(userTransfers)

    return <Container>
        <Row>
            <Col className="col-12"><p>Transfer History</p></Col>
        </Row>
            {userTransfers.map((transfer, id) => (
                <Row>
                    <Col className="ol-3">
                        <p>{transfer.amount}</p>
                    </Col>
                </Row>
            ))}
    </Container>
}

export default TransferHistory;