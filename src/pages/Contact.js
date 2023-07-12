import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/herosection/HeroSection'

const Contact = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection
            cName="aboutHero contactHero" 
            title="Contact" 
            text="Connect and converse with us today." 
            btnC ="herobtn"
            url="/"
            btnClass= "aboutshow"
        />
    </div>
  )
}

export default Contact