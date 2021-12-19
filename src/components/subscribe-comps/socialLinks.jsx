import React from "react";
import {BsDiscord,BsTwitch,BsApple,BsGoogle} from "react-icons/bs";


const SocialLinks =()=>{
    const iconStyle="mr-1 inline text-base"
    return (
        <>   
        <button className="bg-purple-700 rounded block text-white w-72 h-10 mb-1 text-sm font-bold  m-auto " ><BsTwitch className={iconStyle}/>CONTINUE WITH TWITCH</button>
        <button className="bg-blue-800 rounded block text-white w-72 h-10 mb-1 text-sm font-bold  m-auto "><BsDiscord className={iconStyle}/>CONTINUE WITH DISCORD</button>
        <button className="bg-red-500 rounded block text-white w-72 h-10 mb-1 text-sm font-bold  m-auto "><BsGoogle className={iconStyle}/>CONTINUE WITH GOOGLE</button>
        <button className="bg-white rounded block text-black w-72 h-10 mb-1 text-sm font-bold  m-auto "><BsApple className={iconStyle}/>CONTINUE WITH APPLE</button>
        </>

    );
}
export default SocialLinks;