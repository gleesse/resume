import React from 'react'
import ListCard from '../ListCard/ListCard'
import ListElement from '../ListCard/ListElement'
import {H1, InfoContainer} from './SectionElements'
import {CardsData} from '../../data/Data'


//#region Utilities
    const ParseCard = ({data, index}) =>{
        return (
            <div>
                {data[index].map(item => (
                    <ListCard title={item.title} >
                        <ParseCardElements dataArray={item.content} />
                    </ListCard>
                ))}
            </div>
        );
    };

    const ParseCardElements = ({dataArray}) =>{
        return (
            <div>
                {dataArray.map(item => (
                    <div>
                        <ListElement content={item.name} preIcon={item.logo} postIcon={item.indicator}/> 
                        {/* {item.logo!==undefined? <ListElement content={item.name} preIcon={item.logo} postIcon={item.indicator}/> : <ListElement content={item}/>} */}
                    </div>
                ))}
            </div>
        );
    };
//#endregion


const InfoSection = ({id}) => {
    
    return (
        <InfoContainer id={id}>
            <H1 className="flex items-center justify-center text-5xl md:text-6xl lg:py-0 py-10 font-bold tracking-tight lg:text-8xl">
                        <h1>WHAT I CAN?</h1>
                        <h1 class="stroke">WHAT I CAN?</h1>
                        <h1>WHAT I CAN?</h1>
                        <h1 className="underline">WHAT I CAN?</h1>
            </H1>
            <div className="grid gap-6 my-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-y-10 mx-14">
                <ParseCard data={CardsData} index={0}/>
                <ParseCard data={CardsData} index={1}/>
                <ParseCard data={CardsData} index={2}/>
            </div>
        </InfoContainer>
    )
}

export default InfoSection
