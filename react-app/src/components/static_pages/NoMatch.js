import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import spaceman from "../images/spaceman.png"

const LogoutButton = ({ setAuthenticated }) => {
    return (
      <Jumbotron fluid className="bg-404">
        <img
          alt="spaceman"
          width={500}
          src={spaceman}
          height={500}
          className="animate__animated animate__slideInRight"
        />
        <h1 className="title-404">"Houston, we have a problem"</h1>
        <a href="/">Go back home</a>
      </Jumbotron>
    );
};

export default LogoutButton;
