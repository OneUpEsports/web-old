import { Link } from "gatsby"
import React from "react"
import MainLayout from "../../../components/adminpanel/MainLayout"

const Home=()=>{
    const inputStyle=`lg:text-md text-sm block shadow appearance-none border border-[#707070] 
    rounded lg:w-2/3 w-full py-2 lg:px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline h-14`
    return(
        <MainLayout>
                <div className="flex items-center mb-8"><h2>Tournaments &gt; Create</h2></div>
               <div className=" flex flex-col items-center w-full" >
                   <form className="flex lg:flex-row flex-col lg:w-4/5 lg:mr-4 w-full items-center justify-center ">
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
                               <input className ={inputStyle} type="number" placeholder="Min Players >4"/>
                               <select  className={inputStyle} name = "dropdown" name="Max-Players" defaultValue="Max Players">
                                <option selected="selected">Max Players</option>
                                    <option value = "4">4</option>
                                    <option value = "8">8</option>
                                    <option value = "16">16</option>
                                    <option value = "32">32</option>
                                    <option value = "64">64</option>
                                    <option value = "128">128</option>
                                    <option value = "256">256</option>
                                    <option value = "512">512</option>
                                    <option value = "1024">1024</option>
                                </select>
                               <input className ={inputStyle} type="text" name="" id="" placeholder="Date and time"/>
                               <input className ={inputStyle} type="text" name="region" id="region" placeholder="Region"/>
                         

                       </div>
                       <div className="lg:w-1/2 lg:ml-4 w-full  items-center justify-center text-md">
                       <select  className={inputStyle} name = "dropdown" name="Select a status" defaultValue="Select Status">
                                   <option selected="selected">Select Status</option>
                                    <option value = "status1">Status1</option>
                                    <option value = "status2">Status2</option>
                                    <option value = "status3">Status2</option>
                                </select>

                                <input className ={inputStyle}  type="text" placeholder="Price money (euro)"/>

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
                                <input className="mr-2 h-5 w-5 " type="radio" id="bracket" name="tournament_type" value="bracket"/>
                                <label className="mr-4" for="bracet">Bracket</label>
                                <input className="mr-2 h-5 w-5 " type="radio" id="1vs1" name="tournament_type" value="1vs1"/>
                                <label className="mr-4" for="1vs1">1vs1</label>
                                <input className="mr-2 h-5 w-5 " type="radio" id="2vs2" name="tournament_type" value="2vs2"/>
                                <label className="mr-4" for="2vs2">2vs2</label>
                                <input className="mr-2 h-5 w-5 " type="radio" id="3vs3" name="tournament_type" value="3vs3"/>
                                <label className="mr-4" for="3vs3">3vs3</label><br/>
                                <input className="mr-2 h-5 w-5 " type="radio" id="4vs4" name="tournament_type" value="4vs4"/>
                                <label className="mr-4" for="4vs4">4vs4</label>
                                <input className="mr-2 h-5 w-5 " type="radio" id="5vs5" name="tournament_type" value="5vs5"/>
                                <label className="mr-4" for="5vs5">5vs5</label>
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
                                <label className="mr-4" for="xb/xbx">xbox/xbox-series</label><br/>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="mobile" name="mobile" value="Mobile"/>
                                <label className="mr-4" for="mobile">Mobile</label>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="pc" name="pc" value="Pc"/>
                                <label for="pc">Pc</label>
                                </div>
                       </div>
                   </form>
                   <button className="mt-8 bg-[#3ed669] px-4 py-2 text-md text-white rounded">Save</button>
               </div>
              
              
        </MainLayout>

    )
}
export default Home
