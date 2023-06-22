import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT" text="I'm a friendly Front-End Developer" />
      <Footer />
    </div>
  );
};

export default About;
