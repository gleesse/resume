import React from 'react'
import {Link} from 'react-scroll'
import {HeroContainer} from './HeroElements'

const ArrowDown = ()=> (
    <svg xmlns="http://www.w3.org/2000/svg" className='w-24 h-24 text-white transition duration-300 ease-in-out opacity-60 hover:text-secondary-100 lg:w-48 md:w-36 lg:h-48 md:h-36' fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
    </svg>
);

const Hero = () => {

    return (
        <HeroContainer className="flex flex-col items-center justify-center pb-24 bg-black bg-cover md:pt-48 bg-sand-pattern">
            <h1 className="mb-2 text-6xl font-semibold text-gray-400 lg:text-8xl md:text-7xl font-roboto text-bold ">
                Hello, I'm
                <hr className="mt-2 border-t-4 border-secondary-100 lg:border-t-8 md:border-t-6"></hr>
            </h1>
            <p className="pb-10 text-gray-100 lg:text-9xl md:text-8xl text-7xl font-roboto">Glexe</p>
            <p className="text-3xl md:text-4xl text-gray-100 font-josefin">let me introduce myself</p>        
            <Link to="about" smooth={true} spy={true} duration={800} offset={-64} className="mt-16 cursor-pointer animate-bounce">    
                <ArrowDown/>
            </Link>
        </HeroContainer>
    )
}

export default Hero
