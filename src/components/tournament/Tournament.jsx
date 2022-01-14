import React from "react"


const Tournament=({date,format,rule,price,slots})=>{
    return(
        <div className="flex  items-center justify-center mb-2 lg:w-full w-[calc(540px)]   m-auto  mt-4">
        <div className="grid grid-cols-6 grid-flow-col-dense w-full text-white  ">
        

            <div className="  justify-left"><h4 className="w-fit m-auto">{date}</h4></div>
            <div className="flex items-center justify-left pl-6 ">
                <h4 className="w-fit m-auto">{format}</h4>
            </div>
            <div className="flex  items-center justify-center"><h4 className="w-fit m-auto">{rule} </h4></div>
            <div className="flex  items-center justify-center"><h4 className="w-fit m-auto">{price} </h4></div>
            <div className="flex  items-center justify-center"><h4 className="w-fit m-auto">{slots} </h4></div>
            
            <div className="flex  items-center justify-center "><button className="text-sm bg-[#2d2928] ">See tournament</button></div>
        </div>
        </div>
    )
}

export default Tournament;