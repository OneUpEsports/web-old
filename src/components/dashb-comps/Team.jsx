import { Link } from "gatsby"
import React from "react"

const Team = ({image,name}) => {
    return (
    <div className="flex items-center justify-between my-2 w-full ">
        <div className="flex items-center pl-12 ">
        <img  className=" md:w-16 md:h-16 h-8 w-8 mr-8 mb-2  md:text-md" src={image} alt=""/>
        <h4 className=" text-md">{name}</h4>
        </div>
        <div className="flex flex-col md:flex-row items-center pr-8">
            <button title="add team" className="mr-4 md:w-10 md:h-10 h-6 w-6"><img src="/img/dashboard/Icon ionic-md-person-add.png" alt=""/></button>
            <button title="remove team" className="mr-4 md:w-10 md:h-10 h-6 w-6"><img src="/img/dashboard/Icon metro-cross.png" alt=""/></button>
        </div>
    </div>
    )
}
export default Team