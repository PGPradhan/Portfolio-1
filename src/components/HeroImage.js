import "./HeroImageStyles.css";
import IntroImg from '../assests/intro-bg.jpg';
import React from 'react'
import { Link } from "react-router-dom";
import Typewriter from "./Typewriter";

const HeroImage = () => {
  return (
    <div className="hero">
    <div className="mask">
    <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        
        <p>HI I'M FREELANCER</p>
        <h1 >
        <Typewriter text="React Developer" delay={100} infinite />
        </h1>
     
        <div>
             <Link to="/project" className="btn">Projects</Link>
            <Link to='/contact' className="btn btn-light">Contact</Link>
        </div>
    </div>
    </div>
    
  )
}

export default HeroImage
