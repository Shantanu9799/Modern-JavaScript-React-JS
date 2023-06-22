import React from "react";

import "./ProjectCard.css";
import { NavLink } from "react-router-dom";


const ProjectCard = (props) => {
  return (
        <div className="project-card">
          <img src={props.imgsrc} alt="project img" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.view}</p>
            <div className="pro-btn">
              <NavLink to="url.com" className="btn">
                VIEW
              </NavLink>
              <NavLink to="url.com" className="btn">
                SOURCE
              </NavLink>
            </div>
          </div>
        </div>
  );
};

export default ProjectCard;
