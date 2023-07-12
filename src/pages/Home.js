import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/herosection/HeroSection'
import Destination from '../components/destination/DestinantionData'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection
        container="hero" 
        cName="homeHero" 
        title="Your Journey Your Story" 
        text="Choose Your Favorite Destination." 
        btnC ="herobtn"
        url="/"
        btnClass= "show"
      />
      <Destination/>
    </div>
  )
}

export default Home