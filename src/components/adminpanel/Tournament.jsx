import { Link } from "gatsby"
import React from "react"
import {AiFillSetting} from "react-icons/ai"

const Tournament = ({image,form,game,joined,total,id,type,status,edit}) => {
    return(
        <Link to="/adminpanel/tournament/info">
        <div className="flex items-center grid grid-cols-14 grid-flow-col-dense lg:w-full w-[calc(1000px)] bg-[#f8fafb]  h-16 my-3 overflow-x-scroll  scrollbar-hide ">
                       <div className="flex items-center col-span-3"><img className="h-12 w-12  ml-4 mr-6 rounded-2xl" src={image} alt=""/><h4>{form}</h4></div>
                       <div className=" col-span-3"><h4>{game}</h4></div>
                       <div className=" col-span-1"><h4 className="  w-fit m-auto text-[#3ed669]">{joined}<span className="text-[#000]">/{total}</span></h4></div>
                       <div className=" col-span-1"><h4 className="w-fit m-auto">{id}</h4></div>
                       <div className=" col-span-1"><h4 className="w-fit m-auto text-[#e75779]">{type}</h4></div>
                       <div className=" col-span-3"><h4 className="w-fit m-auto">{status}</h4></div>
                       <div className=" col-span-1"><h6 className="w-fit m-auto"><Link to="#"><AiFillSetting className="text-md"/></Link></h6></div>
        </div>
        </Link>
        
    )
}
export default Tournament