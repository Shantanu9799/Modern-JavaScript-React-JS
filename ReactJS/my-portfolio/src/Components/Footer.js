import "./Footer.css";
import React from "react";
import {
  FaGit,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:cshantanu712@gmail.com';
  };

  const handelLinkedINClick = () => {
    window.open("https://www.linkedin.com/in/shantanu-chatterjee-a5b6441b7/");
  };

const handelGitHubClick = () => {
  window.open("https://github.com/Shantanu9799");
};

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>N165, Gopalbera, Purba Bardhaman, Pin - 713427</p>
              <p>West Bengal, India</p>
            </div>
          </div>

          <div>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9775128807
            </h4>
          </div>
          <div onClick={handleEmailClick}>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
              />
              cshantanu712@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            This is me, Shantanu Chatterjee, MTS-L4 at Interra Information
            Technology. I enjoy discussing new project and design challenges.
          </p>
          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              onClick={ handelLinkedINClick }
            />
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
              onClick = { handelGitHubClick }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
