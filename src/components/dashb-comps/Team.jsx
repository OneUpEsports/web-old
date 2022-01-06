import { Link } from "gatsby"
import React from "react"

const Team = ({image,name}) => {
    return (
    <div className="flex items-center my-2">
        <img  className="mr-4 md:w-12 md:h-12 h-8 w-8 ml-2 md:ml-auto md:text-md" src={image} alt=""/>
        <h4 className="mr-4 text-sm">{name}</h4>
        <div>
            <button title="add team" className="mr-4 md:w-10 md:h-10 h-6 w-6"><img src="/img/dashboard/Icon ionic-md-person-add.png" alt=""/></button>
            <button title="remove team" className="mr-4 md:w-10 md:h-10 h-6 w-6"><img src="/img/dashboard/Icon metro-cross.png" alt=""/></button>
        </div>
    </div>
    )
}
export default Team