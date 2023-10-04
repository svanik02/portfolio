import "./Image.css";
import React from 'react';
import p from '../assets/p.jpg';
import { Component } from "react";


class  Image extends Component {
  render(){
  return (
    <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <img className="HeroImage" src={p} alt="p" />
       </div>
    </div>
  );
}
}


export default Image;
