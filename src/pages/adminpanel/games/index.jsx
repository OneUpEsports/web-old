import { Link } from "gatsby"
import React from "react"
import Game from "../../../components/adminpanel/Game"
import MainLayout from "../../../components/adminpanel/MainLayout"
import {AiOutlinePlus} from "react-icons/ai"

const Home=()=>{
    return(
        <MainLayout>
               
               <div className="flex items-center mb-8"><h2>Games</h2></div>
                <Link  className="w-full h-52  bg-[#707070] flex items-center justify-center" to="/adminpanel/games/create"><button className=" bg-[#707070]    text-white text-4xl font-bold"><AiOutlinePlus /></button></Link>
                <div className="w-full mt-8">
                <h3 className="font-bold">Game List</h3>
               <div className="w-full  bg-[#707070] pl-2 py-2">
               <Game name="Fifa 22" ps="ps4/5" pc="pc" mobile="mobile" xbx="XBX" image="/img/dashboard/NoPath - Kopie (7).png"/>
               <Game name="Fifa 22" ps="ps4/5" pc="pc" mobile="mobile" xbx="XBX" image="/img/dashboard/NoPath - Kopie (7).png"/>
               <Game name="Fifa 22" ps="ps4/5" pc="pc" mobile="mobile" xbx="XBX" image="/img/dashboard/NoPath - Kopie (7).png"/>
               </div>
                </div>
                   
        </MainLayout>

    )
}
export default Home
