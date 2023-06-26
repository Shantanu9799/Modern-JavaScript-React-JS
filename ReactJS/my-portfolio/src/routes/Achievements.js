import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import AchievementsContent from "../Components/AchievementsContent";

const Achievements = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ACHIEVEMENTS" text="Let's look in some of my achievements." />
      <AchievementsContent />
      <Footer />
    </div>
  );
};

export default Achievements;
