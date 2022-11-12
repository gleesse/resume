import React from 'react'

const ListCard = (props) => {
    return (
        <div className="transform transition duration-500 hover:scale-105 cursor-pointer">
            {/* Header */}
            <div className="text-black bg-secondary-100 rounded-t-3xl items-center justify-center lg:w-full flex h-14 font-josefin font-bold text-4xl">{props.title}</div>
            {/* Content container */}
                <div className="bg-red-50 rounded-b-3xl flex justify-start px-5 py-5 overflow-auto lg:w-full">
                    <ul className="list-none lg:space-y-2 md:space-y-1.5 sm:space-y-1">
                        {props.children}
                    </ul>
                </div>
        </div>
    )
}

export default ListCard
