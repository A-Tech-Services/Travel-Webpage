import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/herosection/HeroSection'


const Service = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection
            cName="aboutHero serviceHero" 
            title="Services" 
            text="Our Area of Expertise." 
            btnC ="herobtn"
            url="/"
            btnClass= "aboutshow"
        />
    </div>
  )
}

export default Service