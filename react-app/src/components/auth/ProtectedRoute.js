import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = (props) => {
  if (!props.authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Route {...props}>
      {props.authenticated ? props.children : ""}
    </Route>
  );
};
export default ProtectedRoute;
