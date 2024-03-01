import "./workcardstyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const workcard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
            <img src="https://images.unsplash.com/photo-1586182987320-4f376d39d787?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img"/>
            <h2 className="project-title">project title</h2>
            <div className="pro-details">
                <p>this is a </p>
                <div className="pro-btns">
                    <NavLink to="url.com"
                        className="btn">
                            View
                             </NavLink>
                             <NavLink to="url.com"
                        className="btn">
                            Source
                             </NavLink>
                             
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default workcard
