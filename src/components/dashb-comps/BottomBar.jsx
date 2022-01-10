import { Link } from "gatsby"
import React from "react"
import {BsDiscord,BsTwitter,BsInstagram,BsYoutube,BsTwitch} from "react-icons/bs"

const BottomBar = () => {
    return(
        <div className="flex flex-col lg:flex-row  items-center justify-between ">
            <div className="flex">
                <Link to="https://bit.ly/ougdiscord"  className="px-2 mb-4"><BsDiscord/></Link>
                <Link to="https://bit.ly/ougtwitter"  className="px-2 mb-4"><BsTwitter /></Link>
                <Link to="https://bit.ly/ouginstagram"  className="px-2 mb-4"><BsInstagram /></Link>
                <Link to="https://bit.ly/ougyoutube"  className="px-2 mb-4"><BsYoutube /></Link>
                <Link to="https://bit.ly/ougtwitch"  className="px-2 mb-4"><BsTwitch /></Link>
            </div>
           
            <div className=" hidden lg:block pr-6 text-sm">
                <span>
                 
                </span>
            </div>
      
        </div>
    )
}
export default BottomBar
