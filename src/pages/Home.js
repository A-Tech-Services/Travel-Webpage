import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/herosection/HeroSection'
import Destination from '../components/destination/DestinantionData'
import Trip from '../components/trips/Trip'

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
      <Trip/>
    </div>
  )
}

export default Home