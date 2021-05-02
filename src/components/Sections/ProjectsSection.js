import React from 'react'
import{
InfoContainer,
H1
} from './SectionElements'


const ProjectsSection = ({id}) => {


    return (
        <InfoContainer id={id}>
                <div className="grid items-center gap-y-14">
                    <H1 className="flex justify-center items-center tracking-tight font-bold lg:text-8xl text-6xl">
                        <h1>WHAT HAVE I DONE?</h1>
                        <h1>WHAT HAVE I DONE?</h1>
                        <h1 class="stroke">WHAT HAVE I DONE?</h1>
                        <h1 className="underline">WHAT HAVE I DONE?</h1>
                    </H1>
                </div>
        </InfoContainer>
    )
}

export default ProjectsSection
