import React from "react"


const Tournament=({date,format,rule,price,up,down,leftNb,rightNb})=>{
    return(
        <div className="flex  items-center justify-center mb-2 lg:w-full w-[calc(800px)]   m-auto  mt-4">
        <div className="grid grid-cols-6 grid-flow-col-dense w-full text-white  ">
        

            <div className=" flex flex-col items-center justify-left"><h4 className="w-fit m-auto font-bold">{date}</h4></div>
            <div className="flex flex-col items-center justify-left pl-6 ">
                <img className="w-10 h-10" src="/img/tournament/bracket.png" alt=""/>
                <h4 className="w-fit m-auto">{format}</h4>
            </div>
            <div className="flex  items-center justify-center"><h4 className=" flex flex-col items-center justify-center w-fit m-auto font-bold">{rule} <span className=" mt-3 flex  items-center justify-center"><span className="  rounded-2xl text-black bg-[#b2f617] px-3 py-1 font-bold lg:mr-4">{leftNb}</span>V<span className=" lg:ml-4 rounded-2xl text-black bg-[#b2f617] px-3 py-1 font-bold">{rightNb}</span></span> </h4></div>
            <div className="flex  items-center justify-center"><h4 className="w-fit m-auto font-bold text-md">{price}<span className="text-sm">c</span> </h4></div>
            <div className="flex  items-center justify-center"><h4 className="w-fit m-auto"><span className=" font-bold text-md">{up}</span> /{down} </h4></div>
            
            <div className="flex  items-center justify-center "><button className="text-sm bg-[#292d30] px-3 py-3 font-bold">See tournament</button></div>
        </div>
        </div>
    )
}

export default Tournament;