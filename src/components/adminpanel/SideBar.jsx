import React from "react"
import {Link} from "gatsby"
import {AiOutlineQuestionCircle,AiFillTrophy} from "react-icons/ai"
import {HiOutlineLogout} from "react-icons/hi"
import {RiGamepadLine} from "react-icons/ri"
import {BiNews} from "react-icons/bi"
const SideBar = ({children}) => {    
    const [active,setActive]=React.useState(2)
    
    return (
        <div className="fixed mr-4   bottom-0 w-fit  flex flex-col items-center  h-screen py-4 border-r-2 bg-[#8701e4] text-white lg:pr-8">
            <ul className="block list-none w-full">
                
                <li className="mb-6 m-auto flex flex-col  w-full items-center lg:pl-6 ">
                 
                    <h4  className="text-md lg:block hidden"> Admin Panel</h4>
                </li>
                <hr className="lg:w-48 w-full mb-4 m-auto"/>
                <li className="mb-4 w-full flex pl-8 text-gray"><Link  className="flex items-center text-lg text-[#b750d8]" to="#"><BiNews className="mr-4"/> <h4 className="text-md lg:block hidden">News</h4></Link></li>
                <li className="mb-4 w-full flex pl-8"  onClick={()=>setActive(2)}><Link  className="flex items-center text-lg" to="/adminpanel"><AiFillTrophy className="pr-4"/> <h4 className="text-md lg:block hidden">Tournaments <span className={active==2? 'inline':'hidden'}>&gt;</span></h4></Link></li>
                <li className="mb-4 w-full flex pl-8 "   onClick={()=>setActive(3)}><Link   className=" flex items-center text-lg" to="/adminpanel/games"><RiGamepadLine className="pr-4"/><h4 className="text-md lg:block hidden">Games <span className={active==3? 'inline':'hidden'}>&gt;</span></h4></Link></li>
              
            </ul>
             <ul className="list-none absolute bottom-4 flex flex-col w-full  items-center justify-center">
                <hr className="lg:w-48 w-full mb-4 m-auto"/>    
                <li className="mb-4 w-full flex  pl-8"><Link  className="flex items-center text-lg"  to="#"><HiOutlineLogout className="mr-4"/><h4 className="text-md lg:block hidden">Logout</h4></Link></li>
            </ul>
        </div>
    )
}
export default SideBar
