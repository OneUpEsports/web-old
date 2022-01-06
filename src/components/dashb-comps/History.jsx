import React from "react"
import {FcSettings} from "react-icons/fc"

const History = ({date,name,place,winnings}) => {
    return(
        <div className="flex  items-center justify-center mb-2">
        <div className="grid grid-cols-6 grid-flow-col-dense   ">
        

            <div className=" col-span-1"><h6>{date}</h6></div>
            <div className="flex items-center justify-left pl-6  col-span-3">
                <img className="h-4 w-6" src="/img/dashboard/Icon material-computer.png" alt=""/>
                <h6>{name}</h6>
            </div>
            <div className="flex  items-center justify-center"><h6>{place}</h6></div>
            
            <div className="flex  items-center justify-center"><h6>{winnings} </h6></div>
        </div>
        </div>
    )
}
export default History