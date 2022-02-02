import { Link } from "gatsby"
import React from "react"
import {AiFillSetting} from "react-icons/ai"

const Player = ({image,name,id,clan,email,warn,ban}) => {
    return(
 
        <div className="flex items-center grid grid-cols-16 grid-flow-col-dense w-full bg-[#f8fafb]  h-16 my-3 ">
                       <div className="flex items-center col-span-3"><img className="h-12 w-12  ml-4 mr-6 rounded-2xl" src={image} alt=""/><h4 className="font-bold">{name}</h4></div>
                       <div className=" col-span-3"><h4>ID:{id}</h4></div>
                       <div className=" col-span-3"><h4 className="  w-fit m-auto ">{clan}</h4></div>
                       <div className=" col-span-3"><h4 className="w-fit font-bold">{email}</h4></div>
                       <div className=" col-span-2"><h4 className="w-fit m-auto font-bold">{warn}</h4></div>
                       <div className=" col-span-2"><h4 className="w-fit m-auto font-bold">{ban}</h4></div>
       </div>

        
    )
}
export default Player