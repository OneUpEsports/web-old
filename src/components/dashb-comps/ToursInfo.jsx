import React from "react"
import {BsExclamationCircle} from "react-icons/bs"

const ToursInfo = ({date,type,plattform,num,rule,slots,price,status}) => {
    return(
        <div className="flex  items-center justify-center mb-2 lg:w-full w-[calc(100vh-60px)] ">
        <div className="grid grid-cols-11 grid-flow-col-dense w-full  ">
        

            <div className=" col-span-2 justify-left"><h6>{date}</h6></div>
            <div className="flex items-center justify-left pl-6  col-span-2">
                <img className="h-4 w-6" src="/img/dashboard/Icon material-computer.png" alt=""/>
                <h6>{type}</h6>
            </div>
            <div className="flex  items-center justify-center"><h6><img className="w-6 h-6 "src={plattform} alt=""/></h6></div>
            <div className="flex  items-center justify-center col-span-3"><h6><span className="text-orange-200 mr-2">{num}</span>{rule} </h6></div>
            <div className="flex  items-center justify-center"><h6>{slots} </h6></div>
            <div className="flex  items-center justify-center"><h6>{price} </h6></div>
            <div className="flex  items-center justify-center "><h6><BsExclamationCircle className="text-white"/> </h6></div>
        </div>
        </div>
    )
}
export default ToursInfo