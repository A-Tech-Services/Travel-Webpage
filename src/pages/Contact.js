import React from 'react'
import NavBar from '../components/navbar/NavBar'
import HeroSection from '../components/herosection/HeroSection'
import Footer from '../components/footer/Footer'
import Contacts from "../components/contact/Form"


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
        <Contacts/>
        <Footer />
    </div>
  )
}

export default Contact