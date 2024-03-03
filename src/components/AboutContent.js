import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import React1 from "../assests/react1.jpg"
import React2 from "../assests/react2.webp"


const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>Who am I?</h1>
        <p>I'm a Full Stack Web Developer. I create responsive secure websites for my clients.</p>
    </div>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={React1} className="img" alt="true" />

        </div>
        <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />

        </div>
    </div>

    </div>      
    </div>
  )
}

export default AboutContent
