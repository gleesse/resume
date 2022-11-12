import React from 'react'
import{
InfoContainer,
H1,
Link
} from './SectionElements'


const ProjectsSection = ({id}) => {


    return (
        <InfoContainer id={id}>
                <div className="grid items-center gap-y-14">
                    <H1 className="flex justify-center items-center tracking-tight font-bold lg:text-8xl text-6xl">
                        <h1>EXPIRIENCE</h1>
                        <h1>EXPIRIENCE</h1>
                        <h1 class="stroke">EXPIRIENCE</h1>
                        <h1 className="underline">EXPIRIENCE</h1>
                    </H1>
                    <h1 className="text-center text-2xl text-red-50 font-josefin py-10 px-20">2 years in developing banking application, based on customer requirements. Used to deliver back-end and front-end solutions from scratch, working both independetly and closely with a team and a customer. Sharing specific details and work examples is not allowed, but you can always see some of my personal and schooling projects (which include web-APIs, blazor & C# projects, basic ai algorithms implementation and some server/client in java) on my&nbsp; 
                        <Link target="_blank" href="https://github.com/Glexe" title="mine github profile">github</Link>
                    </h1>                
                </div>
        </InfoContainer>
    )
}

export default ProjectsSection
