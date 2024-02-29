import "./heroimage.css";
import React from 'react';
import Intoimg from "../assets/gaming-computer-6903836_1280.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Intoimg} alt="Intoimg" />
        </div>
        <div className="content">
          <p>Hi, I'm Shawn Clarke</p>
          <h1>Beginner Developer</h1>
          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      
    </div>
  );
};

export default Heroimg;