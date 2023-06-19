import React from "react";
import { Link } from "react-router-dom";
import "./HeroImg.css";

import IntroImg from "../Assets/IntroImg.jpg";
import MyImg from "../Assets/ShantanuImg3.jpg";

import IntroImg2 from "../Assets/IntroImg2.jpg";
import IntroImg3 from "../Assets/IntroImg3.jpg";
import IntroImg4 from "../Assets/IntroImg4.jpg";
import IntroImg5 from "../Assets/IntroImg5.jpg";
import IntroImg6 from "../Assets/IntroImg6.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <img className="my-img" src={MyImg} alt="MyImg"></img>
        <div>
          <p>I'm SHANTANU CHATTERJEE</p>
          <h1>DevOps Engineer</h1>
        </div>

        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
