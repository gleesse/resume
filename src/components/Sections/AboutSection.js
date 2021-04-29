import React from 'react'
import{
InfoContainer,
H1
} from './SectionElements'

import Selfie from '../../images/cat.jpg'

const InfoSection = ({id}) => {


    return (
        <InfoContainer id={id} className="bg-black px-32 pb-60">
            <h1 className="font-mono text-5xl font-black text-center text-green-400 pt-7">About me</h1>
            <div className="mt-20 grid justify-center gap-5 grid-cols-1 md:grid-cols-2">
                <div>
                    <H1 className="font-black text-green-500 text-6xl pb-4 text-center underline">WHO AM I ?</H1>
                    <p className="font-black text-gray-100 text-3xl text-center">
                        &mdash; 
                        Some very motivated guy on the 3rd year of&nbsp;
                        <a target="_blank" href="https://www.pja.edu.pl" className="inline-flex underline font-black text-yellow-100 text-3xl cursor-pointer hover:text-yellow-300">
                            <h1 className="text-red-500">PJA</h1>
                            <h1 className="text-gray-400">IT</h1>
                        </a>
                        .&nbsp;Located in Warsaw. 
                        Climbing hard to my goals. 
                        Speak both English and Polish, have passion for learning new things and always trying to find the best solution. 
                        Not afraid to take responsibility and approach any kind of tasks very responsibly.
                    </p>
                </div>
                
                <div>
                    <img src={Selfie} class="rounded-full ml-32 border-8 border-green-600" alt="selfie(?)"/>
                </div>
            </div>
        </InfoContainer>
    )
}

export default InfoSection
