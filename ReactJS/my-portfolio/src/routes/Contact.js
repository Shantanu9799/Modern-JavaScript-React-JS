import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTACTS" text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
