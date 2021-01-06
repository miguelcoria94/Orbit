import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import spaceman from "../images/spaceman.png"

const LogoutButton = ({ setAuthenticated }) => {
    return (
      <Jumbotron fluid className="bg-404 ">
        <div className="d-flex w-80">
          <img
            alt="spaceman"
            width={500}
            src={spaceman}
            height={500}
            className="animate__animated animate__slideInRight image"
                />
        </div>
        <h1 className="title-404">Houston, we have a problem</h1>
        <a href="/" className="text-center test-404">
          404 Page Not Found - Go back home
        </a>
      </Jumbotron>
    );
};

export default LogoutButton;
