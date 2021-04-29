import React from 'react'

const ListElement = ({content, logo}) => {

    return (
        <div>
            <li>
                <div className="inline-flex gap-2">
                    <div className="bg-green-400 rounded-3xl h-6 w-6 flex justify-center items-center">
                        <div className="bg-white rounded-3xl h-3 w-3"/>
                    </div>
                    {logo!==undefined && <img src={logo} className="h-6 w-6 overflow-hidden bg-transparent"/>}                   
                    <h3 className="text-semibold text-black font-mono text-xl">{content}</h3>
                </div>
            </li>
        </div>
    )
}

export default ListElement
