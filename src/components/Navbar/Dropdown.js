import React from 'react'
import {Link} from 'react-scroll'


const Dropdown = ({isOpen, toggle}) => { 
    return (
        <div className= {isOpen ? "flex justify-center fixed top-0 bottom-0 left-0 right-0 z-40 bg-secondary-100" : "hidden"} onClick={toggle}>
            <div className="grid grid-rows-4 text-center py-40 font-roboto text-3xl items-center justify-center space-y-4">
                <Link to="about" smooth={true} spy={true} duration={800}  offset={-64} onClick={toggle} className="transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2">About</Link>
                <Link to="skills" smooth={true} spy={true} duration={800} offset={-64} onClick={toggle} className="transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2">Skills</Link>
                <Link to="projects" smooth={true} spy={true} duration={800} offset={-64} onClick={toggle} className="transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2">Projects</Link>
                <Link to="contacts" smooth={true} spy={true} duration={800} offset={-64} onClick={toggle} className="transform transition duration-500 hover:scale-125 shadow-xl cursor-pointer border-4 rounded-full p-2">Contacts</Link>
            </div>
        </div>
    )
}

export default Dropdown
