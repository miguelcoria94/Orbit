import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { Container , Row} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  document.title = "Orbit - Signin"

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      window.location.reload();
      setAuthenticated(true);
    } else {
      setErrors("Invalid Login");
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container className="form-container">
      <Row className="d-flex justify-content-center form-wrapper ">
        <form
          onSubmit={onLogin}
          className="form"
        >
          <p className=" welcome">Welcome Back!</p>
          <h1 className="form-title">Sign in</h1>
          <div className="label-wrapper">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              name="email"
              type="text"
              placeholder=""
              value={email}
              onChange={updateEmail}
              className="input"
            />
          </div>
          <div className="label-wrapper">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder=""
              value={password}
              onChange={updatePassword}
              className="input"
            />
            <button
              type="submit"
              className={
                errors
                  ? "activate-savings-button animate__animated animate__shakeX transfer-button demo-button"
                  : "add-funds-button transfer-button demo-button"
              }
            >
              {errors ? `${errors}` : "Login"}
            </button>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default LoginForm;
