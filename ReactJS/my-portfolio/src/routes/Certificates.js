import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import CertificateContent from "../Components/CertificateContent";

const Certificates = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CERTIFICATES" text="Here is some of my certifaction i've done till now." />
      <CertificateContent />
      <Footer />
    </div>
  );
};

export default Certificates;
