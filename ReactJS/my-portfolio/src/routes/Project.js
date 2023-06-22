import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Projects from "../Components/Projects";

const Project = () => {
  return (
    <div>
      <NavBar />
        <HeroImg2 heading="PROJECTS" text="Some of my most recent works" />
        <Projects />
      <Footer />
    </div>
  );
};

export default Project;
