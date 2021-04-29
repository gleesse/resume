import React from 'react'
import ListCard from '../ListCard/ListCard'
import ListElement from '../ListCard/ListElement'
import {InfoContainer} from './SectionElements'
import {CardsData} from '../../data/Data'


const InfoSection = ({id}) => {

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
                    {item.logo!==undefined? <ListElement content={item.name} logo={item.logo} /> : <ListElement content={item}/>}
                    </div>
                ))}
            </div>
        );
    };
//#endregion

    const Cards = () =>{
        return(
            <div className="grid gap-4 mt-11 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-y-10 mx-14">
                <ParseCard data={CardsData} index={0}/>
                <ParseCard data={CardsData} index={1}/>
                <ParseCard data={CardsData} index={2}/>
            </div>
        );
    }

    

    return (
        <InfoContainer id={id} className=" bg-black">
            <h1 className="font-mono text-5xl font-black text-center text-green-400 pt-7">Skills</h1>
            <Cards />
        </InfoContainer>
    )
}

export default InfoSection
