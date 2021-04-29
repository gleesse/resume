import React from 'react'
import {Link} from 'react-scroll'
import {HeroContainer} from './HeroElements'

const ArrowDown = ()=> (
    <svg xmlns="http://www.w3.org/2000/svg" className='w-16 h-16 text-white transition duration-300 ease-in-out opacity-60 hover:text-green-400 lg:w-48 md:w-24 lg:h-48 md:h-24' fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
    </svg>
);

const Hero = () => {

    return (
        <HeroContainer className="flex flex-col items-center lg:justify-center pt-32 bg-black bg-cover bg-sand-pattern">
            <h1 className="mb-2 lg:text-8xl md:text-6xl text-4xl font-semibold text-gray-400 text-bold ">
                Hello, I'm
                <hr className="mt-2 border-t-4 border-green-400 lg:border-t-8 md:border-t-6"></hr>
            </h1>
            <p className="lg:text-9xl md:text-7xl text-5xl font-semibold text-gray-100 pb-10">Glexe</p>
            <Link to="about" smooth={true} spy={true} duration={800} offset={-64} className="cursor-pointer animate-bounce">    
                <ArrowDown/>
            </Link>
        </HeroContainer>
    )
}

export default Hero
