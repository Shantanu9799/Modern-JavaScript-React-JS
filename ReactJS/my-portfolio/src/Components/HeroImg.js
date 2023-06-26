import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeroImg.css";

// import IntroImg from "../Assets/IntroImg.jpg";
import IntroImg from "../Assets/IntroImg2.jpg";
import MyImg from "../Assets/profile3.jpg";


const HeroImg = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Engineer",
    "React Developer",
    "DevOps Engineer",
    "Coder",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const cursor = '|';

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <div className="myImg">
          <img className="my-img" src={MyImg} alt="MyImg"></img>
        </div>
        <div className="context">
          <p>I'm SHANTANU CHATTERJEE</p>
          <h1>
            {" "}
            <div
              className="txt-rotate"
              dataPeriod="100"
              data-rotate='[ "Software Engineer", "React Developer", "DevOps Engineer", "Coder" ]'
            >
              {text}<span className="Cursor">{cursor}</span>
            </div>
          </h1>
        </div>
        <div className="btn-section">
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
