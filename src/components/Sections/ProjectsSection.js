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
                        <h1>WHAT DID I WORK ON?</h1>
                        <h1>WHAT DID I WORK ON?</h1>
                        <h1 class="stroke">WHAT DID I WORK ON?</h1>
                        <h1 className="underline">WHAT DID I WORK ON?</h1>
                    </H1>
                    <h1 className="text-center text-2xl text-red-50 font-josefin py-10 px-20">Unfortunately, I haven't worked on commercial projects yet, but you always can see some of my personal and schooling projects (which include web-APIs, basic ai algorithms implementation and some server/client in java) on my&nbsp; 
                        <Link target="_blank" href="https://github.com/Glexe" title="mine github profile">github</Link>
                    </h1>                
                </div>
        </InfoContainer>
    )
}

export default ProjectsSection
