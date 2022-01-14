import React from "react"
import BottomBar from "../../components/dashb-comps/BottomBar"
import MainLayout from "../../components/dashb-comps/MainLayout"
import {FaPen} from "react-icons/fa"
import Friend from "../../components/dashb-comps/Friend"

const CreateTeam=()=>{
    return (
        <MainLayout>
            <div className="w-full h-11/12  lg:px-12   lg:p-6 pb-24 ">
            <h3 className="flex mb-4">My Teams <img className="ml-2" src="/img/dashboard/Icon ionic-ios-people.png" alt=""/></h3>
            <div className=" flex flex-col items-center lg:justify-center justify-left h-full  lg:w-11/12 w-full lg:m-auto rounded-2xl border-2 border-gray-200 ">
               <div className="w-full lg:px-16 flex lg:flex-row flex-col items-center justify-between h-1/3 py-4">
                   <div className="flex items-center justify-center md:flex-row flex-col mb-4 md:mb-auto ">
                   <div className="relative flex  flex-items justify-center  ">
                   <div className="absolute  z-30 lg:top-12 cursor-pointer">
                        <FaPen className="m-auto"/>
                        <h4>Team Logo</h4>
                    </div>
                   <button><img className="xl:w-36 xl:h-36 h-24 w-24" src="/img/create_team/Team Logo.png"/></button>
                   </div>
                  
                   <div className="lg:ml-2">
                       <div className="mb-4 relative" >
                       <FaPen className="absolute  top-3 md:left-2 left-2"/>
                       <input className=" pl-8  p-2 bg-[#4c4f57] outline-none w-72 rounded h-10 " type="text" placeholder="Team Name"/>
                       </div>
                       <div className="mt-2 relative">
                       <FaPen className="absolute  top-3 md:left-2 left-2"/>
                       <input className=" pl-8 p-2 bg-[#4c4f57] outline-none w-72 rounded h-10 " type="text" placeholder="Description"/>
                       </div>
                      
                   </div>
                   </div>
                    <div  className="relative flex flex-col flex-items justify-center w-fit">
                    <div className="absolute  z-30 top-45 lg:left-72 cursor-pointer">
                        <FaPen className="m-auto"/>
                        <h4>banner image</h4>
                    </div>
                    <button><img className="lg:w-11/12 lg:h-36" src="/img/create_team/Team_Banner.png"/></button>
                    </div>
               </div>
             
               <div className="relative flex flex-col items-center justify-left h-2/3 w-full lg:px-16">
                   <h3 className="absolute left-8">Invite Friends</h3><br/><br/>
                   <div className="bg-[#4c4f57] flex flex-col items-center   w-full  bg-gray-900 justify-center h-5/6  rounded-2xl border-2 border-gray-200 pt-6  overflow-x-scroll overflow-y-scroll scrollbar-hide">
                   
                      <Friend image="/img/create_team/user_profile-pic.png" name="CONI" title="Favorite Games"/>
                      <Friend image="/img/create_team/user_profile-pic.png" name="CONI"/>
                      <Friend image="/img/create_team/user_profile-pic.png" name="CONI"/>
                    
                    </div>

               </div>
               <button className="rounded-2xl border-2 border-gray-200 bg-[#181b28]  px-8 text-md mb-2 mt-2">
                   SAVE
               </button>
            </div>
            
            </div>
        </MainLayout>
    )
}

export default CreateTeam