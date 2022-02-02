import React from "react"
import {Link} from "gatsby"
import {AiOutlineQuestionCircle,AiFillTrophy} from "react-icons/ai"
import {HiOutlineLogout} from "react-icons/hi"
import {RiGamepadLine} from "react-icons/ri"
import {BiSearchAlt2} from "react-icons/bi"
import Player from "./Player"
const Players = ({children}) => {    
    return (
        <div className="lg:mr-4 top-0 w-full flex flex-col items-center justify-center py-4  lg:pr-8 overflow-x-scroll  scrollbar-hide">
            <div className="border-b-4 w-full relative">
                <BiSearchAlt2 className="absolute top-1 left-3"/>
                <input type="text" placeholder="Enter a player id" className="outline-none pl-10"/>
            </div>
            <div className="lg:w-full   overflow-x-scroll  scrollbar-hide">
                <Player image="/img/dashboard/NoPath.png" name="player234" email="email@oneupmail.com" clan="Max Mastermann" id="4343535" ban="Ban" warn="Warn"/>
                <Player image="/img/dashboard/NoPath.png" name="player234" email="email@oneupmail.com" clan="Max Mastermann" id="4343535" ban="Ban" warn="Warn"/>
            
                <Player image="/img/dashboard/NoPath.png" name="player234" email="email@oneupmail.com" clan="Max Mastermann" id="4343535" ban="Ban" warn="Warn"/>
            
                <Player image="/img/dashboard/NoPath.png" name="player234" email="email@oneupmail.com" clan="Max Mastermann" id="4343535" ban="Ban" warn="Warn"/>
            
                <Player image="/img/dashboard/NoPath.png" name="player234" email="email@oneupmail.com" clan="Max Mastermann" id="4343535" ban="Ban" warn="Warn"/>
            
            </div>
    
        </div>
    )
}
export default Players
