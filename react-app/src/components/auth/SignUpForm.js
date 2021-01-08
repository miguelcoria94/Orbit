import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import { Container, Row } from "react-bootstrap/";
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
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center form-wrapper ">
        <form
          onSubmit={onSignUp}
          className="form animate__animated animate__zoomIn"
        >
          <p className="tiny-text welcome">Welcome!</p>
          <h1 className="form-title">Sign up</h1>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              onChange={updateFirstname}
              value={firstname}
            ></input>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              onChange={updateLastname}
              value={lastname}
            ></input>
          </div>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </Row>
    </Container>
  );
};

export default SignUpForm;
