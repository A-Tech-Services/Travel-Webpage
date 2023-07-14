import React from 'react';
import NavBar from '../components/navbar/NavBar';
import HeroSection from '../components/herosection/HeroSection';
import Footer from '../components/footer/Footer';
import Abouts from '../components/aboutUs/About';

const About = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection
            cName="aboutHero" 
            title="About" 
            text="Revealing our empowering story and values." 
            btnC ="herobtn"
            url="/"
            btnClass= "aboutshow"
        />
        <Abouts />
        <Footer/>
    </div>
  )
}

export default About