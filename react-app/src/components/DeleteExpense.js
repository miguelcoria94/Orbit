import React from "react";
import axios from "axios";

const DeleteExpense = ({ id, cardBalance, userId }) => {
    const deleteCard = async (e) => {
        const request = { cardBalance, id, userId };
        const response = await axios.put(`/api/checkings_account/delete-expense`, request);
        window.location.reload()
        return response
    };

    return (
        <button className="add-funds-button add-funds-space disabled-button" onClick={deleteCard}>
            Delete Card
        </button>
    );
};

export default DeleteExpense;
