import React from "react"
import {FiClock} from "react-icons/fi"

var cc,dd;
const Tournament=({date,format,rule,price,up,down,leftNb,rightNb,startin})=>{
    if (startin){
        cc=" flex flex-col items-center justify-left hidden"
        dd="flex flex-col items-center justify-left text-[#b2f617]"
    }else{
        cc=" flex flex-col items-center justify-left"
        dd=" flex flex-col items-center justify-left hidden"
    }
    return(
        <div className="flex flex-col items-center justify-center mb-2 w-full   m-auto  mt-4">
            <div className="w-fit m-auto block md:hidden   font-bold text-white">
              {rule}
            </div>
        <div className="grid md:grid-cols-6 grid-cols-5 grid-flow-col-dense w-full text-white  ">
        
            <div className={dd}> <spna>Starts in <br/><span className="flex"><FiClock/> {startin}</span></spna></div>
            <div className={cc}><h4 className="w-fit m-auto font-bold">{date}</h4></div>
            <div className="flex flex-col items-center justify-center ">
                <img className="w-10 h-10" src="/img/tournament/bracket.png" alt=""/>
                <h4 className="w-fit m-auto">{format}</h4>
            </div>
            <div className="flex  items-center justify-center"><h4 className=" flex flex-col items-center justify-center w-fit m-auto font-bold"><span className="md:block hidden">{rule}</span> <span className=" mt-3 flex  items-center justify-center"><span className="  rounded-2xl text-black bg-[#b2f617] px-3 py-1 font-bold lg:mr-4">{leftNb}</span>V<span className=" lg:ml-4 rounded-2xl text-black bg-[#b2f617] px-3 py-1 font-bold">{rightNb}</span></span> </h4></div>
            <div className="flex  items-center justify-center"><h4 className="w-fit m-auto font-bold text-md">{price}<span className="text-sm">c</span> </h4></div>
            <div className="flex  items-center justify-center"><h4 className="w-fit m-auto"><span className=" font-bold text-md">{up}</span> /{down} </h4></div>
            
            <div className="flex  items-center justify-center hidden md:block "><button className="text-sm bg-[#292d30] px-3 py-3 font-bold">See tournament</button></div>
        </div>
        <div className="flex intems-center justify-center md:hidden md:mb-0 mb-6 mt-2 text-white">
            <button className="text-sm bg-[#383d47] px-3 py-3 font-bold rounded-2xl mr-2">Free Tournament</button>
            <button className="text-sm bg-[#292d30] px-3 py-3 font-bold ml-2" >See Tournament</button>
        </div>
        </div>
    )
}

export default Tournament;
