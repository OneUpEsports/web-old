import React from "react"
import {Link} from "gatsby"
import {AiOutlineQuestionCircle,AiFillTrophy} from "react-icons/ai"
import {HiOutlineLogout} from "react-icons/hi"
import {RiGamepadLine} from "react-icons/ri"
import {BiNews} from "react-icons/bi"
const Settings = ({children}) => { 
    const inputStyle=`lg:text-md text-sm block shadow appearance-none border border-[#707070] 
    rounded lg:w-2/3 w-full py-2 lg:px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline h-12`   
    return (
        <div className="   w-full flex flex-col items-center justify-center lg:pl-12  ">
                   <form className="flex lg:flex-row flex-col w-full m-auto items-center justify-center ">
                       <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
                                <select  className={inputStyle} name = "dropdown" name="Select a game" defaultValue="Select a game">
                                <option selected="selected">Select a game</option>
                                <option value = "Clash-of-Clans">Clash of Clans</option>
                                    <option value = "apex-legends">Apex Legends</option>
                                    <option value = "call-of-duty-mobile">Call of duty mobile</option>
                                    <option value = "call-of-duty-warzone">Call of duty warzone</option>
                                    <option value = "fifa-22">Fifa 22</option>
                                    <option value = "fortnite">Fortnite</option>
                                    <option value = "league-of-legends">League of legends</option>
                                    <option value = "rainbow-six-siege">Rainbow six siege</option>
                                    <option value = "rocket_league">Rocket League</option>
                                    <option value = "valorant">Valorant</option>
                                    <option value = "csgo">CSGO</option>
                                </select>
                               <input className ={inputStyle} type="text" placeholder="Tournament Name"/>
                               <input className ={inputStyle} type="number" placeholder="Min Players >3"/>
                               <input className ={inputStyle} type="number" placeholder="Max Players"/>
                               <input className ={inputStyle} type="text" placeholder="Date and time"/>
                               <input className ={inputStyle} type="text" name="" id="" placeholder="Region"/>
                         

                       </div>
                       <div className="lg:w-1/2 lg:ml-4 w-full  items-center justify-center text-md">
                       <select  className={inputStyle} name = "dropdown" name="Select a status" defaultValue="Select Status">
                                   <option selected="selected">Select Status</option>
                                    <option value = "status1">Status1</option>
                                    <option value = "status2">Status2</option>
                                    <option value = "status3">Status2</option>
                                </select>

                                <input className ={inputStyle}  type="text" placeholder="Price money (eur)"/>

                                {/* Mode */}
                                <div className="text-black ">
                                <h3 className="font-bold">Mode</h3>
                                <input className="mr-2 h-5 w-5 text-[#000]"  type="radio" id="individual" name="mode" value="individual"/>
                                <label className="mr-4 " for="individual">Individual</label>
                                <input className="mr-2 h-5 w-5" type="radio" id="teams" name="mode" value="teams"/>
                                <label  for="teams">Teams</label>
                                </div>
                                {/* Type */}
                                <div>
                                <h3 className="font-bold">Tournament Type</h3>
                                <input className="mr-2 h-5 w-5 " type="radio" id="bracet" name="tournament_type" value="bracet"/>
                                <label className="mr-4" for="bracet">Bracet</label>
                                <input className="mr-2 h-5 w-5 " type="radio" id="vs" name="tournament_type" value="vs"/>
                                <label for="vs">1vs1,2vs2,3vs3</label>
                                </div>
                                {/* Period */}
                                <div>
                                <h3 className="font-bold">Match starts every</h3>
                                <input className="mr-2 h-5 w-5" type="radio" id="15min" name="start_match" value="15min"/>
                                <label className="mr-4" for="15min">15min</label>
                                <input className="mr-2 h-5 w-5 " type="radio" id="30min" name="start_match" value="30min"/>
                                <label className="mr-4" for="30min">30min</label>
                                <input className="mr-2 h-5 w-5" type="radio" id="custom" name="start_match" value="custom"/>
                                <label for="custom">custom</label>
                                </div>
                                {/* Platform */}
                                <div>
                                <h3 className="font-bold">PlattForm</h3>
                                <input className="mr-2 h-5 w-5" type="checkbox" id="crossplay" name="crossplay" value="Crossplay"/>
                                <label className="mr-4" for="crossplay">Crossplay</label>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="ps4/5" name="ps4/5" value="PS4/5"/>
                                <label className="mr-4" for="ps4/5">ps4/5</label>
                                <input className="mr-2 h-5 w-5" type="checkbox" id="xb/xbx" name="xb/xbx" value="XB/XBX"/>
                                <label className="mr-4" for="xb/xbx">XB/XBX</label><br/>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="mobile" name="mobile" value="Mobile"/>
                                <label className="mr-4" for="mobile">Mobile</label>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="pc" name="pc" value="Pc"/>
                                <label for="pc">Pc</label>
                                </div>
                       </div>
                   </form>
                   <button className="mt-8 bg-[#3ed669] px-4 py-2 text-md text-white rounded">Save</button>
             
        </div>
    )
}
export default Settings
