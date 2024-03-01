import React from 'react'
import Navbar from '../componenets/navbar';
import Footer from '../componenets/footer';
import HeroImg2 from '../componenets/heroimg2';
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="small time developer."/>
      <Footer/>
    </div>
  )
}

export default About;
