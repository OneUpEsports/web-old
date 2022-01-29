import React from "react"
import BottomBar from "../../components/dashb-comps/BottomBar"
import MainLayout from "../../components/dashb-comps/MainLayout"
import MobileGame from "../../components/dashb-comps/MobileGame"
import MultiPlatGame from "../../components/dashb-comps/MultiPlatGame"
import PcGame from "../../components/dashb-comps/PcGame"
const Trophies=()=>{
    return(
        <MainLayout>
            <div className="w-full h-full  lg:p-12 p-2">
                <h4 className="lg:pl-14">Select a game and a specific Plattform to see available Tournaments</h4>
                
                <div className=" h-full  w-11/12 m-auto grid lg:grid-cols-4 lg:grid-rows-3  md:grid-cols-2 md:grid-rows-7 grid-cols-1 grid-rows-11 lg:gap-x-12  gap-y-6 ">
                      <MultiPlatGame image="/img/dashboard/NoPath - Kopie (3).png" name="APEX LEGENDS" pclink="/tournaments/crossplay/apex-legends" pslink="/tournaments/crossplay/apex-legends" xboxlink="/tournaments/crossplay/apex-legends"/>
                      <MobileGame image="/img/dashboard/27783djg.png" name="CLASH OF CLANS" link="/tournaments/mobile/clash-of-clans"/>
                      <MobileGame image="/img/dashboard/NoPath - Kopie (5).png" name="CALL OF DUTY MOBILE" link="/tournaments/mobile/call-of-duty"/>
                      <MultiPlatGame image="/img/dashboard/lsu1ddvx.png" name="CALL OF DUTY WARZONE" pclink="/tournaments/crosssplay/call-of-duty-warzone" pslink="/tournaments/crossplay/call-of-duty-warzone" xboxlink="/tournaments/crossplay/call-of-duty-warzone"/>
                      <MultiPlatGame image="/img/dashboard/NoPath - Kopie (7).png" name="FIFA 22" pclink="/tournaments/pc/fifa22" pslink="/tournaments/crossplay/fifa22" xboxlink="/tournaments/xbox/fifa22"/>
                      <MultiPlatGame image="/img/dashboard/NoPath - Kopie (10).png" name="FORTNITE" pclink="/tournaments/crossplay/fortnite" pslink="/tournaments/crossplay/fortnite" xboxlink="/tournaments/crossplay/fortnite"/>
                      <PcGame image="/img/dashboard/NoPath - Kopie (12).png" name="LEAGUE OF LEGENDS" link="/tournaments/pc/league-of-legends"/>
                      <MultiPlatGame image="/img/dashboard/NoPath - Kopie (16).png" name="RAINBOW SIX SIEGE" pclink="/tournaments/pc/rainbow-six-siege" pslink="/tournaments/crossplay/rainbow-six-siege" xboxlink="/tournaments/xbox/rainbow-six-siege"/>
                      <MultiPlatGame image="/img/dashboard/NoPath - Kopie (18).png" name="ROCKET LEAGUE" pclink="/tournaments/crossplay/rocket-league" pslink="/tournaments/crossplay/rocket-league" xboxlink="/tournaments/crossplay/rocket-league"/>
                      <PcGame image="/img/dashboard/NoPath - Kopie (20).png" name="VALORANT" link="/tournaments/pc/valorant"/>
                      <PcGame image="/img/dashboard/NoPath - Kopie (21).png" name="CSGO" link="/tournaments/pc/csgo"/>
                      
                    
                </div>
                <div className="lg:hidden block">
                      <br/><br/>
                          <BottomBar/>
                      </div>
            </div>
        </MainLayout>

    )
}
export default Trophies
