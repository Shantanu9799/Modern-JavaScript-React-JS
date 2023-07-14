import React from "react";

import c1 from "../Assets/c1.jfif";
import c2 from "../Assets/c2.jfif";
import c3 from "../Assets/c3.jfif";
import c4 from "../Assets/c4.jfif";
import c5 from "../Assets/c5.jfif";
import c6 from "../Assets/Google Project Management Course Certificate 1.jpg";

const CertificateContent = () => {
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
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="rounded mx-auto  d-block" src={c1} alt="First slide"  />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto  d-block" src={c2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto  d-block" src={c3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto  d-block" src={c4} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto  d-block" src={c5} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="rounded mx-auto  d-block" src={c6} alt="Second slide" />
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

export default CertificateContent;
