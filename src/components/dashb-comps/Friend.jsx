import React from "react"
import {FcSettings} from "react-icons/fc"

const Friend = ({image,name,games,title}) => {
    return(
        <div className="flex  items-center justify-center mb-2 lg:w-full  lg:p-auto  pl-8 w-[calc(740px)]">
        <div className="grid grid-cols-5 grid-flow-col-dense  w-full px-6  overflow-x-scroll   scrollbar-hide">
        
            <div className="flex items-center justify-left pl-6  col-span-1">
                <img className="h-24 w-24 mr-3" src={image} alt=""/>
                <div className=" col-span-1"><h3>{name}</h3></div>
            </div>
            
           
            <div className=" relative flex  items-center justify-center col-span-2">
            <div className="absolute -top-1 z-50">
                {title}
            </div>
            <div className="flex ">
            <img className="h-8 w-8 mr-1 ml-2" src="/img/create_team/valorant_preview.png" alt=""/>
            <img className="h-8 w-8 mr-1 ml-2" src="/img/create_team/rocketleague_preview.png" alt=""/>
            <img className="h-8 w-8 mr-1 ml-2" src="/img/create_team/apex_preview.png" alt=""/>
            </div>
            </div>
            <div className="flex  items-center justify-center col-span-2">
            <button className="rounded-xl bg-gray-200  w-24 h-12 text-md "
            >Invite</button>
            </div>
           
            
            
        </div>
        </div>
    )
}
export default Friend