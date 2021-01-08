import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";


const Dashboard = ({authenticated}) => {
    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    return (<h1>Hello</h1>)
}

export default Dashboard;