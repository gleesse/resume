import React from 'react'
import{
InfoContainer,
H1,
Link,
Pa
} from './SectionElements'

import ListElement from '../ListCard/ListElement'
import TestImage from '../../images/DoneMark.svg'
import Selfie from '../../images/cat.jpg'

const InfoSection = ({id}) => {


    return (
        <InfoContainer id={id}>
            <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 my-8">
                <div className="grid items-center gap-y-14">
                    <H1 className="flex justify-center items-center tracking-tight font-bold lg:text-8xl text-6xl">
                        <h1 class="stroke">WHO AM I?</h1>
                        <h1>WHO AM I?</h1>
                        <h1>WHO AM I?</h1>
                        <h1 className="underline">WHO AM I?</h1>
                    </H1>
                    <Pa className="text-center">
                        &mdash; 
                        Some very motivated guy on the 3rd year of&nbsp;
                        <Link target="_blank" href="https://www.pja.edu.pl" title="Official PJAIT site">PJAIT</Link>
                        , who 
                    </Pa>
                    <ul className="list-none mx-auto space-y-2">
                        <ListElement content={<Pa>Located in Warsaw,</Pa>} postIcon={TestImage} />
                        <ListElement content={<Pa>Climbing hard to his goals,</Pa>} postIcon={TestImage} />
                        <ListElement content={<Pa>Has passion for learning new things,</Pa>} postIcon={TestImage} />
                        <ListElement content={<Pa>Speaks both English and Polish,</Pa>} postIcon={TestImage} />
                        <ListElement content={<Pa>Always trying to find the best solution,</Pa>} postIcon={TestImage} />
                        <ListElement content={<Pa>Not afraid to take responsibility,</Pa>} postIcon={TestImage} />
                        <ListElement content={<Pa>Approaches any tasks very responsibly</Pa>} postIcon={TestImage} />
                    </ul>
                </div>
                
                <div className="grid justify-center">
                    <img src={Selfie} class="select-none rounded-full lg:w-auto lg:h-auto w-72 h-72 border-8 border-secondary-200" alt="selfie"/>
                </div>
            </div>
        </InfoContainer>
    )
}

export default InfoSection
