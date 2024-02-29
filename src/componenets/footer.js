import "./footerstyles.css"

import React from "react"

import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p> no address avalible at the moment</p>
                    <p>Tempe, Arizona</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            480-828-4344</h4>
            
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            srclarke777@gmail.com</h4>
            
            </div>
        </div>
        <div className="right">
            <h4>About me</h4>
            <p>i am shawn clarke a beginner developer looking to grow as a developer 
                and share what i make with others</p>
                <div className="social">
                    <FaFacebook
                    size={20}
                    style={{color:"#fff",
                    marginRight:"1rem"}}
                    />
                       <FaTwitter
                    size={20}
                    style={{color:"#fff",
                    marginRight:"1rem"}}
                    />
                       <FaLinkedin
                    size={20}
                    style={{color:"#fff",
                    marginRight:"1rem"}}
                    />
                </div>
        </div>
      </div>
    </div>
  )
}

export default footer
