import "./FooterStyles.css";
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                <div>
                    <p>Chamunda B/106 Co-op Society</p>
                    <p>Lower Parel, Mumbai</p>
                </div>

            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
            +91 7506695675</h4>
            
            </div>
            <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
            pradhan.prathamesh10@gmail.com</h4>
            
            </div>

        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>This is Prathamesh Pradhan.A Web Developer Enthusiast. I enjoy discussing new projects and design</p>
            <div className="social">
            <FaFacebook size={20} style={{color:"#fff",marginRight: "2rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff",marginRight: "2rem"}}/>

            </div>
        </div>

    </div>

    </div>
  )
}

export default Footer
