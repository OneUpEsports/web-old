import { Link } from "gatsby"
import React from "react"

const PcGame = ({image,name,link}) => {
    return(
        <div className="relative flex flex-col items-center justify-center rounded-2xl  lg:w-auto lg:h-auto md:w-60 md:h-48 w-48 h-36">
            <div  className="absolute z-30 top-45 flex">
            <button className="mx-2 bg-gray-900 rounded-md w-10 h-10 flex flex-col items-center justify-center text-center"><Link to={link}><img src="/img/dashboard/Pc.png" alt=""/></Link></button>
            </div>
            <img className="absolute min-w-full min-h-full opacity-60 rounded-2xl" src={image} alt=""/>
            <h5 className="absolute min-w-full text-center -bottom-2 bg-gray-200 rounded-b-2xl">{name}</h5>
        </div>

    )
}
export default PcGame
