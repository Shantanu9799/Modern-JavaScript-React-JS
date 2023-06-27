import React from "react";

import a1 from "../Assets/a1.jfif";
import a2 from "../Assets/a2.jfif";
import a3 from "../Assets/a3.jfif";
import a4 from "../Assets/a4.jpg";
import a5 from "../Assets/a5.jfif";
import a6 from "../Assets/a6.jfif";
import a7 from "../Assets/a7.jfif";


const AchievementsContent = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        <li data-target="#carouselExampleIndicators" data-slide-to={4} />
        <li data-target="#carouselExampleIndicators" data-slide-to={5} />
        <li data-target="#carouselExampleIndicators" data-slide-to={6} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="rounded mx-auto d-block" src={a1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto d-block" src={a2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto d-block" src={a3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto d-block" src={a4} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto d-block" src={a5} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto d-block" src={a6} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto d-block" src={a7} alt="Second slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default AchievementsContent;
