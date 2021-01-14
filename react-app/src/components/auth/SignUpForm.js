import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { Container, Row, Col } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password, firstname, lastname);
      if (!user.errors) {
        window.location.reload();
        setAuthenticated(true);
      }
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center form-wrapper-register ">
        <form onSubmit={onSignUp} className="form">
          <p className="tiny-text welcome">Take control of your money today!</p>
          <h1 className="form-title">Sign up</h1>
          <Row className="name-box">
            <Col className="label-wrapper">
              <label className="label">First Name</label>
              <input
                type="text"
                name="firstname"
                onChange={updateFirstname}
                value={firstname}
                className="input"
              ></input>
            </Col>
            <Col className="label-wrapper">
              <label className="label">Last Name</label>
              <input
                type="text"
                name="lastname"
                onChange={updateLastname}
                value={lastname}
                className="input"
              ></input>
            </Col>
          </Row>
          <Row className="name-box">
            <Col className="label-wrapper">
              <label className="label">User Name</label>
              <input
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
                className="input"
              ></input>
            </Col>
            <Col className="label-wrapper">
              <label className="label">Email</label>
              <input
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
                className="input"
              ></input>
            </Col>
          </Row>
          <Row className="name-box">
            <Col className="label-wrapper">
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
                className="input"
              ></input>
            </Col>
            <Col className="label-wrapper">
              <label className="label">Repeat Password</label>
              <input
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                className="input"
              ></input>
            </Col>
          </Row>
          <button className="demo-button" type="submit">
            Sign Up
          </button>
        </form>
      </Row>
    </Container>
  );
};

export default SignUpForm;
