import React from "react"
import {FcSettings} from "react-icons/fc"

const MyTeam = ({image,name,members}) => {
    return(
        <div className="flex  items-center justify-center">
        <div className="grid grid-cols-6 grid-flow-col-dense  ">
        

            <div className=" col-span-1"><img  src={image} alt=""/></div>
            
            <h5 className="flex  items-center justify-center col-span-2">{name}</h5>
            <div className="flex items-center justify-center  col-span-2">
                {members}
                <img src="/img/dashboard/Icon material-people.png" alt=""/>
            </div>
            <div className="flex  items-center justify-center"><button><FcSettings/></button></div>
        </div>
        </div>
    )
}
export default MyTeam