import "./HeroImage.css";
import React from 'react';
import p from "../assets/p.jpg"
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-Image" src={p} alt="p" />
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCER</p>
          <h1>React Developer</h1>
          <div>
            <Link to="/registration" className="btn">Registration</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImage;
