import React from "react";
import axios from "axios";

const AddFunds = ({ cardId, cardBalance }) => {
    const deleteCard = async (e) => {
        const request = { cardBalance, cardId };
        const response = await axios.put(`/api/checkings_account/update-virtual-card`, request);
        window.location.reload()
        return response
    };

    return (
        <button className="add-funds-button add-funds-space" onClick={deleteCard}>
            Delete Card
        </button>
    );
};

export default AddFunds;
