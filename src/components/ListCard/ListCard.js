import React from 'react'

const ListCard = (props) => {
    return (
        <div>
            {/* Header */}
            <div className="text-black bg-green-400 rounded-t-3xl items-center justify-center lg:w-full flex h-14 font-black text-3xl">{props.title}</div>
            {/* Content container */}
                <div className="bg-gray-100 rounded-b-3xl flex justify-start px-5 py-5 overflow-auto  lg:w-full">
                    <ul className="list-none lg:space-y-2 md:space-y-1.5 sm:space-y-1">
                        {props.children}
                    </ul>
                </div>
        </div>
    )
}

export default ListCard
