import { Link, navigate } from "gatsby";
import React from "react"
import BottomBar from "../../../components/dashb-comps/BottomBar";
import Tournament from "../../../components/tournament/Tournament";
import {BsDiscord,BsTwitter,BsInstagram,BsYoutube,BsTwitch} from "react-icons/bs"


const CrossPlatForm=()=>{
    return(
        <div className="absolute  bottom-0 right-0 h-full w-full bg-secondary-100  overflow-x-hidden overflow-y-scroll">
             <button onClick={()=> navigate("/dashboard")} className="text-white absolute md:top-6 top-4 left-6 z-50 bg-secondary-100 px-3 py-3  ">Back to Dashboard</button>
            <div className="relative ">
                <img className="opacity-50 lg:h-[calc(100vh-550px)] md:h-[calc(100vh-250px)] h-96 w-screen" src="/img/tournament/tournament_banner.png" alt=""/>
                <div className=" z-50 flex flex-col items-center justify-center  ">
                    <div className="absolute xl:top-12 lg:top-10   top-12 xl:h-auto h-1/3">
                    <img  calssName="xl:h-auto xl:w-auto  " src="/img/tournament/apex_logo.png" alt=""/>
                    <div className="flex  w-64 m-auto items-center justify-center">
                       {/* <div calssName="mr-2 block"><img   src="/img/tournament/xbox_icon.png" alt=""/></div>
                       <div calssName="mr-2 block"><img  src="/img/tournament/ps_icon.png" alt=""/></div>
                       <div calssName="ml-2 block"><img   src="/img/tournament/pc_icon.png" alt=""/></div> */}
                   
            <button className="mx-2"><Link to="#"><img className="w-14 h-14" src="/img/dashboard/Gruppe 142.png" alt=""/></Link></button>
            <button className="mx-2"><Link to="#"><img className="w-14 h-14" src="/img/dashboard/Gruppe 156.png" alt=""/></Link></button>
            <button className="mx-2 bg-gray-900 rounded-md w-14 h-14 flex flex-col items-center justify-center text-center"><Link to="#"><img className="w-10 h-10" src="/img/dashboard/Pc.png" alt=""/></Link></button>
            </div>
              
                    </div>
                </div>
            </div>
            <div className=" relative z-30 lg:w-5/6 m-auto bg-[#1c1a1b] h-fit mt-0 pt-0 w-full overflow-x-scroll scrollbar-hide">
                         <div className="grid md:grid-cols-6 grid-flow-col-dense w-full m-auto">
                             <div className="flex intems-center justify-center bg-[#b154f0] col-span-2 ">
                                 <h3 calssName="w-fit m-auto">TODAY</h3>
                             </div>
                             <div className="bg-[#292d30] md:col-span-4 hidden md:block ">
                               
                             </div>

                         </div>
                        <div className="grid md:grid-cols-6 grid-cols-5 grid-flow-col-dense w-full m-auto text-white  bg-[#2d2928]  ">
                                <div className="  flex  items-center justify-center"><h3 className="w-fit m-auto">Time</h3></div>
                                <div className="flex  items-center justify-center ">
                                    <h3 className="w-fit m-auto">Format</h3>
                                </div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Rule </h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Price</h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Slots </h3></div>
                                
                                <div className="flex  items-center justify-center hidden md:block "><button className="text-sm bg-gray-200"></button></div>
                        </div>
                <Tournament date="3:00 PM" format="Bracket" rule="1vs1 Saturday damage cup" price="50" up="43" down="64" leftNb="1" rightNb="1" />
                <Tournament date="6:00 PM" format="Bracket" rule="Apex Legends Top damage" price="3"  up="12" down="32" leftNb="9" rightNb="7" startin="41:59"/>
                <Tournament date="9:00 PM" format="Bracket" rule="Apex Legends Top damage" price="3"  up="6" down="32" leftNb="1" rightNb="1"/>
                
                      <div className="grid md:grid-cols-6 grid-flow-col-dense w-full m-auto">
                             <div className="flex intems-center justify-center bg-[#b154f0] col-span-2 ">
                                 <h3 calssName="w-fit m-auto">TOMORROW</h3>
                             </div>
                             <div className="bg-[#292d30] col-span-4 hidden md:block ">
                               
                             </div>

                         </div>
                         <div className="grid md:grid-cols-6 grid-cols-5 grid-flow-col-dense w-full m-auto text-white  bg-[#2d2928]  ">
                                <div className="  flex  items-center justify-center"><h3 className="w-fit m-auto">Time</h3></div>
                                <div className="flex  items-center justify-center ">
                                    <h3 className="w-fit m-auto">Format</h3>
                                </div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Rule </h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Price</h3></div>
                                <div className="flex  items-center justify-center"><h3 className="w-fit m-auto">Slots </h3></div>
                                
                                <div className="flex  items-center justify-center hidden md:block "><button className="text-sm bg-gray-200"></button></div>
                        </div>
                        <Tournament date="3:00 PM" format="Bracket" rule="Apex Legends Top damage" price="30"  up="24" down="32" leftNb="1" rightNb="1"/>
                <Tournament date="6:00 PM" format="Bracket" rule="Apex Legends Top damage" price="33" up="24" down="32" leftNb="1" rightNb="1"/>
                <Tournament date="9:00 PM" format="Bracket" rule="Apex Legends Top damage" price="3" up="24" down="32" leftNb="1" rightNb="1"/>
                <div className="grid md:grid-cols-6 grid-flow-col-dense w-full m-auto">
                             <div className="flex intems-center justify-center bg-[#b154f0] col-span-2 ">
                                 <h3 calssName="w-fit m-auto">MONDAY,JANUARY 17</h3>
                             </div>
                             <div className="bg-[#292d30] col-span-4 hidden md:block ">
                               
                             </div>

                         </div>

            </div>
            <div className="md:hidden">
            <div className="flex flex-col lg:flex-row  items-center justify-between text-white  bg-[#1c1a1b]">
            <div className="flex mt-6">
                <Link to="https://bit.ly/ougdiscord"  className="px-2 mb-4"><BsDiscord/></Link>
                <Link to="https://bit.ly/ougtwitter"  className="px-2 mb-4"><BsTwitter /></Link>
                <Link to="https://bit.ly/ouginstagram"  className="px-2 mb-4"><BsInstagram /></Link>
                <Link to="https://bit.ly/ougyoutube"  className="px-2 mb-4"><BsYoutube /></Link>
                <Link to="https://bit.ly/ougtwitch"  className="px-2 mb-4"><BsTwitch /></Link>
            </div>
           
            <div className="  md:hidden block  text-sm">
                <span>
                    
                 
                </span>
            </div>
      
        </div>
            </div>
        </div>
    )

}
export default CrossPlatForm;
