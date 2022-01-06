import React from "react"
import {BsExclamationCircle} from "react-icons/bs"

const ToursImage = ({image , info1,info2}) => {
    return(
        <div className="relative flex  items-center justify-center mb-2">
           <div className="relative"><img  className="h-full w-full" src={image} alt=""/></div>
           <h6 className="hidden md:block absolute left-28 bottom-4 text-orange-200">
               {info1}
               <br/>
               {info2}
           </h6>
           <button className="absolute w-fit m-auto px-6 bottom-4 bg-gradient-to-r from-pink-500 to-orange-200">JOIN</button>

        </div>
    )
}
export default ToursImage