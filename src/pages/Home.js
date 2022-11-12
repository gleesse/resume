import {React, useState}from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSection from '../components/Sections/InfoSection'
import AboutSection from '../components/Sections/AboutSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/Sections/ProjectsSection'
import Dropdown from '../components/Navbar/Dropdown'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Hero/>
            <AboutSection id="about"/>
            <InfoSection id="skills"/>
            <ProjectsSection id="projects"/>
            <Footer id="contacts"/>
        </div>
    )
}

export default Home
