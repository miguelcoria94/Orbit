import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import spaceman from "../images/spaceman.png"

const LogoutButton = ({ setAuthenticated }) => {
    return (
      <Jumbotron className="bg-404">
        <img
          width={500}
          src={spaceman}
          height={500}
          className="animate__animated animate__slideInRight"
        />
        <h1 className="title-404">This Page is Lost in Space</h1>
        <p className="text-404">
          You thought this mission to the moon would be a quick six month thing.
          Your neighbor offered to look after your dog. Your high school math
          teacher was impressed. He once said you wouldn’t amount to
          anything.You sure showed him. But now here you are, fifty feet from
          your spaceship with no way to get back. Your dog will be so sad. Your
          math teacher will be so smug. Pretty devastating.
        </p>
      </Jumbotron>
    );
};

export default LogoutButton;
