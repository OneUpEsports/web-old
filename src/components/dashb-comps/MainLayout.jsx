import React from "react"
import SideBar from "./SideBar"

const MainLayout = ({children}) => {
    return (
        <div className="absolute  bottom-0 right-0 h-full w-screen bg-secondary-100 overflow-x-hidden overflow-y-scroll text-white">
        <div className="flex  w-screen h-full">
        <SideBar/>
        <div className="w-full h-full ml-24">
            {children}
        </div>
        </div>
    </div>
    )
}
export default MainLayout