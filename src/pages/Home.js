//rafce

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSection from '../components/Sections/InfoSection'
import AboutSection from '../components/Sections/AboutSection'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutSection id="about"/>
            <InfoSection id="skills"/>
            <AboutSection id="projects"/>
            <AboutSection id="contacts"/>
        </div>
    )
}

export default Home
