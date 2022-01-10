import React from "react"
import SideBar from "./SideBar"
import BottomBar from "./BottomBar"
const MainLayout = ({children}) => {
    return (
        <div className="absolute  bottom-0 right-0 h-full w-screen bg-[#181b28] overflow-x-hidden overflow-y-scroll text-white">
        <div className="flex  w-screen h-full">
        <SideBar/>
        <div className="flex flex-col justify-between w-full h-full  ml-24">
            <div className="lg:h-full h-fit">
            {children}
            </div>
            <div className="hidden lg:block ml-24">
              <BottomBar/>
           </div>
        </div>
        </div>
    </div>
    )
}
export default MainLayout
