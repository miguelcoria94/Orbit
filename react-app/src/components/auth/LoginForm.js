import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { Container , Row} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      window.location.reload();
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
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
    <Container>
      <Row className="d-flex justify-content-center form-wrapper ">
        <form
          onSubmit={onLogin}
          className="form"
        >
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <p className="tiny-text welcome">Welcome Back!</p>
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
            <button className="demo-button-home" type="submit">
              Login
            </button>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default LoginForm;
