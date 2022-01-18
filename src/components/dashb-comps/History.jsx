import React from "react"
import {FcSettings} from "react-icons/fc"

const History = ({date,name,place,winnings}) => {
    return(
        <div className="flex  items-center justify-center mb-2 w-full">
        <div className="grid grid-cols-5 grid-flow-col-dense  w-full ">
        

            <div className=" col-span-1"><h6>{date}</h6></div>
            <div className="flex items-center justify-left pl-6  col-span-2">
                <img className="h-4 w-6" src="/img/dashboard/icon game-bracket.png" alt=""/>
                <h6>{name}</h6>
            </div>
            <div className="flex  items-center justify-center"><h6>{place}</h6></div>
            
            <div className="flex  items-center justify-center"><h6>{winnings} </h6></div>
        </div>
        </div>
    )
}
export default History