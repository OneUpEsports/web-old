import React from "react"
import SideBar from "./SideBar"

const MainLayout = ({children}) => {
    return (
        <div className="absolute  bottom-0 right-0 h-full w-screen bg-white overflow-x-hidden overflow-y-scroll ">
        <div className="flex   w-full h-full">
       
        <SideBar/>
      
       
        <div className="flex flex-col  w-4/5 h-full py-16 pl-6 ml-64 ">
            <div className="lg:h-full h-fit ml-16">
            {children}
            </div>
        </div>
        </div>
    </div>
    )
}
export default MainLayout
