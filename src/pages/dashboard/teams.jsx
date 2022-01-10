import React from "react"
import MainLayout from "../../components/dashb-comps/MainLayout"
import Team from "../../components/dashb-comps/Team"
import {FaSearch} from "react-icons/fa"
import BottomBar from "../../components/dashb-comps/BottomBar"
const Teams=()=>{
    return(
        <MainLayout>
            <div className="lg:w-full h-full  lg:px-12   p-2  ">
            <h3 className="flex mb-4">My Teams <img className="ml-2" src="/img/dashboard/Icon ionic-ios-people.png" alt=""/></h3>
            <div className=" h-full  md:w-11/12 w-full lg:m-auto lg:grid md:grid-cols-2 md:grid-rows-2 lg:gap-x-12 gap-y-6 grid-flow-row-dense grid-cols-1 grid-rows-3">
                
                    <div className="flex flex-col items-center  w-full bg-gray-900 justify-center h-11/12  rounded-2xl border-2 border-gray-200 pt-6  overflow-y-scroll scrollbar-hide">
                       <Team image={"/img/dashboard/NoPath.png"} name={"1Team"}/>
                       <Team image={"/img/dashboard/NoPath.png"} name={"1Team"}/>
                       <Team image={"/img/dashboard/NoPath.png"} name={"1Team"}/>
                    
                    </div>

                    <div className="flex flex-col items-center bg-gray-900 justify-center lg:h-full lg:p-auto p-6 rounded-2xl border-2 border-gray-200">
                        <button><img src="/img/dashboard/Icon awesome-plus.png" alt=""/></button>
                        <br/>
                        <h3>Create Team</h3>
                    </div>
              
               
                   <div className=" relative bg-gray-900  md:col-span-2 w-full  place-content-start h-full  rounded-2xl border-2 border-gray-200">
                   <div>
                       <FaSearch className="absolute  top-6 md:left-6 left-2"/>
                       <input className="  w-full text-sm md:text-sm md:w-2/3 bg-secondary-100 border-2 border-gray-200 p-2 md:pl-8 md:m-4 mt-4 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="     Search for Teams"/>
                   </div>
                  </div>
                <br/>
                <br/>
                
                </div>
              
            </div>
            <div className="lg:hidden block">
                      <br/><br/>
                          <BottomBar/>
                      </div>
        </MainLayout>

    )
}
export default Teams
