import { Link } from "gatsby"
import React from "react"
import MainLayout from "../../components/adminpanel/MainLayout"
import Tournament from "../../components/adminpanel/Tournament"

const Home=()=>{
    return(
        <MainLayout>
               <div className="flex items-center mb-8"><h2>Tournaments</h2> <Link to="/adminpanel/tournament/create"><button className="bg-[#3ed669] h-12 px-6 ml-4 rounded  text-white">Add</button></Link></div>
               <div className=" flex flex-col items-center w-full" >
                   <div className=" lg:grid grid-cols-14 grid-flow-col-dense w-full  hidden">
                       <div className=" col-span-4 pl-4"><h4 >Form</h4></div>
                       <div className="col-span-3"><h4 className="w-fit ml-4">Game</h4></div>
                       <div className=" col-span-1"><h4 className="w-fit m-auto">Joined</h4></div>
                       <div className=" col-span-1"><h4 className="w-fit m-auto">Id</h4></div>
                       <div className=" col-span-1"><h4 className="w-fit m-auto">Type</h4></div>
                       <div className=" col-span-3"><h4 className="w-fit m-auto">Status</h4></div>
                       <div className=" col-span-1"><h4 className="w-fit m-auto">Edit</h4></div>
                   </div>
                   <div className="w-full">
                      <Tournament image="/img/dashboard/NoPath.png" form="Test Tournament" game="Counter Strike:CO" joined="06" total="32" id="#123456" type="Bracket" status="Starts in 182min" />
                     <Tournament image="/img/dashboard/NoPath.png" form="Test Tournament" game="Counter Strike:CO" joined="06" total="32" id="#123456" type="Bracket" status="Starts in 182min" />
                      <Tournament image="/img/dashboard/NoPath.png" form="Test Tournament" game="Counter Strike:CO" joined="06" total="32" id="#123456" type="Bracket" status="Starts in 182min" />
                      <Tournament image="/img/dashboard/NoPath.png" form="Test Tournament" game="Counter Strike:CO" joined="06" total="32" id="#123456" type="Bracket" status="Starts in 182min" />
                      <Tournament image="/img/dashboard/NoPath.png" form="Test Tournament" game="Counter Strike:CO" joined="06" total="32" id="#123456" type="Bracket" status="Starts in 182min" />
                      <Tournament image="/img/dashboard/NoPath.png" form="Test Tournament" game="Counter Strike:CO" joined="06" total="32" id="#123456" type="Bracket" status="Starts in 182min" />
                      <Tournament image="/img/dashboard/NoPath.png" form="Test Tournament" game="Counter Strike:CO" joined="06" total="32" id="#123456" type="Bracket" status="Starts in 182min" />
                  
                   </div>
               </div>
               
        </MainLayout>

    )
}
export default Home
