import React from 'react'
import Navbar from '../componenets/navbar';
import Footer from '../componenets/footer';
import HeroImg2 from '../componenets/heroimg2';
import Work from '../componenets/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="some of my work"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;
