import React, {useState, useEffect} from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavLink} from './NavElements'

const Navbar = ({toggle}) => {

    const MenuImage = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );

    const ScrollToTop = () =>{
        scroll.scrollToTop();
    }

    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 64){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <Nav scrollNav={scrollNav} className="sticky z-10 top-0 flex items-center justify-between w-full h-16 font-roboto text-xl text-red-50 select-none" role='navigation'>
            <h1 className='pl-12 text-3xl font-bold text-secondary-100 cursor-pointer' onClick={ScrollToTop}>Glexe</h1>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <MenuImage/>
            </div>

            <div className="hidden pr-10 md:block">
                <NavLink to="about" smooth={true} spy={true} duration={800}  offset={-64}>About</NavLink>
                <NavLink to="skills" smooth={true} spy={true} duration={800} offset={-64}>Skills</NavLink>
                <NavLink to="projects" smooth={true} spy={true} duration={800} offset={-64}>Projects</NavLink>
                <NavLink to="contacts" smooth={true} spy={true} duration={800} offset={-64}>Contacts</NavLink>
            </div>
        </Nav>
    )
}

export default Navbar
