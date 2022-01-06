import React from "react"

const MultiPlatGame = ({image,name}) => {
    return(
        <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-gray-200 lg:w-auto lg:h-auto md:w-60 md:h-48 w-48 h-36">
            <div  className="absolute z-30 top-45 flex">
            <button className="mx-2"><img src="/img/dashboard/Gruppe 142.png" alt=""/></button>
            <button className="mx-2"><img src="/img/dashboard/Gruppe 156.png" alt=""/></button>
            <button className="mx-2 bg-gray-900 rounded-md w-10 h-10 flex flex-col items-center justify-center text-center"><img src="/img/dashboard/Pc.png" alt=""/></button>
            </div>
            
            <img className="absolute min-w-full miin-h-full opacity-60 rounded-2xl" src={image} alt=""/>
            <h5 className="absolute min-w-full text-center bottom-0 bg-gray-900 rounded-b-2xl">{name}</h5>
        </div>

    )
}
export default MultiPlatGame