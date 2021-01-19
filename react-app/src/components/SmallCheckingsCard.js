import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import LoadCheckings from "./LoadCheckings";

function SmallCheckingsCard({ currentUserId }) {
    const [balance, setBalance] = useState([]);
    const [currentBalance, setCurrentBalance] = useState("");

    useEffect(() => {
        (async () => {
            const data = await axios.get(`/api/checkings_account/${currentUserId}`);
            setBalance(data.data.checkings_balance[0]);
            setCurrentBalance(data.data.checkings_balance[0].balance);
        })();
    }, []);

    return (
        <div className="card debit-card">
            {balance.balance !== undefined ? (
                <>
                    <div className="disabled-wrapper">
                        <i className="fas fa-circle icon-active active-text-small"></i>
                        <p className="active-text active-text-small">active</p>
                    </div>
                    <h1 className="balance balance-small">${balance.balance}</h1>
                </>
            ) : (
                    <>
                        <div className="disabled-wrapper">
                            <i class="fas fa-circle icon-disabled active-text-small"></i>
                            <p className="disabled-text active-text-small">Disabled</p>
                            <LoadCheckings currentUserId={currentUserId} />
                        </div>
                        <h1 className="balance balance-small">{"$0"}</h1>
                    </>
                )}
            <p className="big-balance-tag small-balance-tag">Checkings Account</p>
        </div>
    );
}

export default SmallCheckingsCard;
