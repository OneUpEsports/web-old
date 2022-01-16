import { navigate } from "gatsby";
import React from "react"
import Tournament from "../../../components/tournament/Tournament";


const CrossPlatForm=()=>{
    return(
        <div className="absolute  bottom-0 right-0 h-full w-full bg-secondary-100  overflow-x-hidden overflow-y-scroll">
             <button onClick={()=> navigate("/dashboard")} className="text-white absolute top-6 left-6 z-50 bg-secondary-100 px-1  ">Back to Dashboard</button>
            <div className="relative ">
                <img className="opacity-50 lg:h-auto  h-96 w-screen" src="/img/tournament/tournament_banner.png" alt=""/>
                <div className=" z-50 flex flex-col items-center justify-center  ">
                    <div className="absolute xl:top-24 lg:top-20   top-12 xl:h-auto h-1/3">
                    <img  calssName="xl:h-auto xl:w-auto  " src="/img/tournament/apex_logo.png" alt=""/>
                    <img className="w-fit m-auto" src="/img/tournament/ps_icon.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className=" relative z-30 lg:w-5/6 m-auto bg-[#1c1a1b] h-fit mt-0 pt-0 w-full overflow-x-scroll scrollbar-hide">
                         <div className="grid grid-cols-6 grid-flow-col-dense lg:w-full  w-[calc(540px)] m-auto">
                             <div className="flex intems-center justify-center bg-[#b2f617] col-span-2 ">
                                 <h3 calssName="w-fit m-auto">TODAY</h3>
                             </div>
                             <div className="bg-[#292d30] col-span-4 ">
                               
                             </div>

                         </div>
                        <div className="grid grid-cols-6 grid-flow-col-dense lg:w-full  w-[calc(540px)] m-auto text-white  bg-[#2d2928]  ">
                                <div className="  justify-left"><h3 className="w-fit m-auto">Time</h3></div>
                                <div className="flex items-center justify-left pl-6 ">
                                    <h3 className="w-fit m-auto">Format</h3>
                                </div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Rule </h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Price Money </h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Slots </h3></div>
                                
                                <div className="flex  items-center justify-center "><button className="text-sm bg-gray-200"></button></div>
                        </div>
                <Tournament date="3:00 PM" format="Bracket" rule="1vs1 Saturday damage cup" price="50" up="43" down="64" leftNb="1" rightNb="1"/>
                <Tournament date="6:00 PM" format="Bracket" rule="Apex Legends Top damage" price="3"  up="12" down="32" leftNb="9" rightNb="7"/>
                <Tournament date="9:00 PM" format="Bracket" rule="Apex Legends Top damage" price="3"  up="6" down="32" leftNb="1" rightNb="1"/>
                
                      <div className="grid grid-cols-6 grid-flow-col-dense lg:w-full  w-[calc(540px)] m-auto">
                             <div className="flex intems-center justify-center bg-[#b2f617] col-span-2 ">
                                 <h3 calssName="w-fit m-auto">TOMORROW</h3>
                             </div>
                             <div className="bg-[#292d30] col-span-4 ">
                               
                             </div>

                         </div>
                        <div className="grid grid-cols-6 grid-flow-col-dense lg:w-full  w-[calc(540px)] m-auto text-white  bg-[#2d2928]  ">
                                <div className="  justify-left"><h3 className="w-fit m-auto">Time</h3></div>
                                <div className="flex items-center justify-left pl-6 ">
                                    <h3 className="w-fit m-auto">Format</h3>
                                </div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Rule </h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Price Money </h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Slots </h3></div>
                                
                                <div className="flex  items-center justify-center "><button className="text-sm bg-gray-200"></button></div>
                        </div>
                        <Tournament date="3:00 PM" format="Bracket" rule="Apex Legends Top damage" price="30"  up="24" down="32" leftNb="1" rightNb="1"/>
                <Tournament date="6:00 PM" format="Bracket" rule="Apex Legends Top damage" price="33" up="24" down="32" leftNb="1" rightNb="1"/>
                <Tournament date="9:00 PM" format="Bracket" rule="Apex Legends Top damage" price="3" up="24" down="32" leftNb="1" rightNb="1"/>
                <div className="grid grid-cols-6 grid-flow-col-dense w-full m-auto">
                             <div className="flex intems-center justify-center bg-[#b2f617] col-span-2 ">
                                 <h3 calssName="w-fit m-auto">MONDAY,JANUARY 17</h3>
                             </div>
                             <div className="bg-[#292d30] col-span-4 ">
                               
                             </div>

                         </div>

            </div>
        </div>
    )

}
export default CrossPlatForm;