import React from "react"
import {Link} from "gatsby"
import {AiOutlineQuestionCircle,AiFillTrophy} from "react-icons/ai"
import {HiOutlineLogout} from "react-icons/hi"
import {RiGamepadLine} from "react-icons/ri"
import {BiSearchAlt2} from "react-icons/bi"
import Match from "./Match"
const Matches = ({children}) => {    
    return (
        <div className="lg:mr-4 top-0 w-full flex flex-col items-center justify-center py-4  lg:pr-8">
        <div className="border-b-4 w-full relative">
            <BiSearchAlt2 className="absolute top-1 left-3"/>
            <input type="text" placeholder="Enter a match id" className="outline-none pl-10 bg-[#707070] text-white w-full"/>
        </div>
        <div className="w-full">
            <Match result="1-0" id="4543454" change="Change Result" period="1/16 FINAL" proof="Proof" restart="Restart Match" playerOneName="player323" playerTwoName="player323" playerOneImage="/img/dashboard/NoPath.png" playerTwoImage="/img/dashboard/NoPath.png" />
            <Match result="1-0" id="4543454" change="Change Result" period="1/16 FINAL" proof="Proof" restart="Restart Match" playerOneName="player323" playerTwoName="player323" playerOneImage="/img/dashboard/NoPath.png" playerTwoImage="/img/dashboard/NoPath.png" />
       
            <Match result="1-0" id="4543454" change="Change Result" period="1/16 FINAL" proof="Proof" restart="Restart Match" playerOneName="player323" playerTwoName="player323" playerOneImage="/img/dashboard/NoPath.png" playerTwoImage="/img/dashboard/NoPath.png" />
            <Match result="1-0" id="4543454" change="Change Result" period="1/16 FINAL" proof="Proof" restart="Restart Match" playerOneName="player323" playerTwoName="player323" playerOneImage="/img/dashboard/NoPath.png" playerTwoImage="/img/dashboard/NoPath.png" />
            <Match result="1-0" id="4543454" change="Change Result" period="1/16 FINAL" proof="Proof" restart="Restart Match" playerOneName="player323" playerTwoName="player323" playerOneImage="/img/dashboard/NoPath.png" playerTwoImage="/img/dashboard/NoPath.png" />
            <Match result="1-0" id="4543454" change="Change Result" period="1/16 FINAL" proof="Proof" restart="Restart Match" playerOneName="player323" playerTwoName="player323" playerOneImage="/img/dashboard/NoPath.png" playerTwoImage="/img/dashboard/NoPath.png" />
       
        </div>

    </div>
    )
}
export default Matches
