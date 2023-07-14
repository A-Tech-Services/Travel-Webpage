import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/herosection/HeroSection'
import Footer from '../components/footer/Footer'
import Trip from '../components/trips/Trip'



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
        <Trip/>
        <Footer />
    </div>
  )
}

export default Service