import "./WorkCard.css";
import React from 'react'
import project1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    
    <div>
      <div className="project-card">
      <img src={project1} alt="project1" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            <NavLink to={props.view} className="btn">
              View
            </NavLink>
            <NavLink to={props.source} className="btn">
              Source
            </NavLink>
          </div>
        </div>
      </div>
      
      </div>
  )
}

export default WorkCard;
