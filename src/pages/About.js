import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/herosection/HeroSection'

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
    </div>
  )
}

export default About