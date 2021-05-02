import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSection from '../components/Sections/InfoSection'
import AboutSection from '../components/Sections/AboutSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/Sections/ProjectsSection'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AboutSection id="about"/>
            <InfoSection id="skills"/>
            <ProjectsSection id="projects"/>
            <Footer/>
        </div>
    )
}

export default Home
