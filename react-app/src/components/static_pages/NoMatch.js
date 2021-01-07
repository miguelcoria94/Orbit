import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import spaceman4 from "../images/space.png"
import Container from "react-bootstrap/Container";

const LogoutButton = ({ setAuthenticated }) => {
    return (
      <Jumbotron fluid className="bg-404 ">
        <Container fluid className="fluid image container">
          <img
            alt="spaceman"
            width={500}
            src={spaceman4}
            height={500}
            className="animate__animated animate__slideInRight image"
          />
        </Container>
        <h1 className="title-404">Oh, ship...</h1>
        <h1 className="title-404">
          Houston, we have a problem.
        </h1>
        <a href="/" className="text-center test-404">
          404 Page Not Found - Go back home
        </a>
        <div className="inv-box"></div>
      </Jumbotron>
    );
};

export default LogoutButton;
