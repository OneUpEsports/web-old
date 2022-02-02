import { Link } from "gatsby"
import React from "react"
import {AiFillSetting} from "react-icons/ai"

const Match = ({period,playerOneImage,playerOneName,playerTwoImage,playerTwoName,result,id,restart,change,proof}) => {
    return(
 
        <div className="flex items-center grid grid-cols-23 grid-flow-col-dense lg:w-full w-[calc(1000px)] bg-[#f8fafb]  h-16 my-3 overflow-x-scroll  scrollbar-hide ">
                       <div className=" col-span-3"><h4 className="w-fit ">{period}</h4></div>
                       <div className="flex items-center col-span-3"><img className="h-12 w-12  ml-4 mr-6 rounded-2xl" src={playerOneImage} alt=""/><h4 className="font-bold  text-[#3ed669]">{playerOneName}</h4></div>
                       <div className=" col-span-2"><h4 className="  w-fit m-auto ">{result}</h4></div>
                       <div className="flex items-center col-span-3"><img className="h-12 w-12  ml-4 mr-6 rounded-2xl" src={playerTwoImage} alt=""/><h4 className="font-bold text-[#FFA500]">{playerTwoName}</h4></div>
                       <div className=" col-span-3"><h4>ID:{id}</h4></div>
                       <div className=" col-span-3"><h4 className="w-fit font-bold">{restart}</h4></div>
                       <div className=" col-span-3"><h4 className="w-fit m-auto font-bold">{change}</h4></div>
                       <div className=" col-span-3"><h4 className="w-fit m-auto font-bold">{proof}</h4></div>
       </div>
     
        
    )
}
export default Match