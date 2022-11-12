import React from 'react'
import{
InfoContainer,
H1,
Link,
Pa
} from './SectionElements'

import ListElement from '../ListCard/ListElement'
import DoneMark from '../../images/DoneMark.svg'
import Selfie from '../../images/cat.jpg'

const InfoSection = ({id}) => {


    return (
        <InfoContainer id={id}>
            <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 my-8">
                <div className="grid items-center gap-y-14">
                    <H1 className="flex justify-center items-center tracking-tight font-bold lg:text-8xl text-6xl">
                        <h1 class="stroke">SUMMARY</h1>
                        <h1>SUMMARY</h1>
                        <h1>SUMMARY</h1>
                        <h1 className="underline">SUMMARY</h1>
                    </H1>
                    <Pa className="text-center">
                        Experienced Developer with 2 years of experience in creating and supporting
                        banking application.
                        Adaptable, diligent and knowledgeable in C# and SQL.
                        Independent but also a team worker.
                    </Pa>
                    <ul className="list-none mx-auto space-y-2">
                        <ListElement content={<Pa>Located in Warsaw,</Pa>} postIcon={DoneMark} />
                        <ListElement content={<Pa>Has passion for learning new things,</Pa>} postIcon={DoneMark} />
                        <ListElement content={<Pa>Speak both English and Polish,</Pa>} postIcon={DoneMark} />
                        <ListElement content={<Pa>Always trying to find the best solution</Pa>} postIcon={DoneMark} />
                        <ListElement content={<Pa>and to write flexible and reusable code,</Pa>} postIcon={DoneMark} />
                        <ListElement content={<Pa>Used to work with someone else's code.</Pa>} postIcon={DoneMark} />
                    </ul>
                </div>
                
                <div className="grid justify-center">
                    {/* <img src={Selfie} class="select-none rounded-full lg:w-auto lg:h-auto w-72 h-72 border-8 border-secondary-200" alt="selfie"/> */}
                    <img class="select-none rounded-full  w-72 h-72 border-8 border-secondary-200" alt="selfie"></img>
                    <i class="text-xl text-gray-400">Maybe some day I will upload my selfie here, but for now...</i>
                </div>
            </div>
        </InfoContainer>
    )
}

export default InfoSection
