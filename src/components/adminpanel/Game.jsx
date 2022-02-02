import { Link } from "gatsby"
import React from "react"
import {AiFillSetting} from "react-icons/ai"

const Game = ({image,name,ps,xbx,mobile,pc,edit}) => {
    return(
 
        <div className="flex items-center grid grid-cols-9 grid-flow-col-dense lg:w-full w-[calc(1000px)] bg-[#707070]  h-fit my-3 overflow-x-scroll  scrollbar-hide ">
                       <div className=" col-span-2"><h4 className=" "><img className="h-28 w-34" src={image} alt=""/></h4></div>
                       <div className=" col-span-2"><h4 className="   m-auto  font-bold ">{name}</h4></div>
                       <div className=" col-span-1"><h4 className=" font-bold">{ps}</h4></div>
                       <div className=" col-span-1"><h4 className=" font-bold">{xbx}</h4></div>
                       <div className=" col-span-1"><h4 className=" font-bold">{mobile}</h4></div>
                       <div className=" col-span-1"><h4 className=" font-bold">{pc}</h4></div>
                       <div className=" col-span-1"><h4 className=" font-bold"><Link to="#"><AiFillSetting/></Link></h4></div>
        </div>
     
        
    )
}
export default Game