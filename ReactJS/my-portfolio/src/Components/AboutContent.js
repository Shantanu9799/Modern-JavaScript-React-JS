import "./AboutContent.css";

import React from "react";
import { Link } from "react-router-dom";

import react1 from "../Assets/react1.jpg";
import react2 from "../Assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I ?</h1>
        <p>
          I'm Shantanu Chatterjee, currently working as a React Developer in
          Interra Information Technology, MTS-L4. I am working on ONEMAZDA
          project, which is basically the main website of MAZDA Motors.
        </p>
        <Link to="/contact">
          <botton className="btn">CONTACT</botton>
        </Link>
      </div>

      <div className="right">
      <div className="img-container">
      <div className="img-stack top">
      <img src = {react1} className="img" alt="1st img" />
      </div>
      <div className="img-stack bottom">
      <img src = {react2} className="img" alt="1st img" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default AboutContent;
