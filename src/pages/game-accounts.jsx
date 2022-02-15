import React from "react";

const GameAccounts = () => {
    return(
        <div className="absolute  bottom-0 right-0 h-full w-full bg-secondary-100 md:px-12 py-12 overflow-x-hidden overflow-y-scroll">
            <h2 className="text-left text-white w-full pl-6 md:pl-2">Game Accounts</h2>
            For playing in our Tournaments you have to link your ingame ID for the Game
            <hr className="text-gray-900"/>
            <br/><br/>
            <div>
               
                <div className=" md:w-fit w-full bg-gray-900 p-8 rounded-2xl border-2 border-gray-200 flex flex-col items-center m-auto">
                <p className="w-11/12 m-auto text-justify">
                </p>
                <br/>
                <div className="w-11/12 m-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8 text-white">
                    <div className="flex  items-center ">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/apex.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    <div className="flex items-center text-white">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/L.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/cod.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/warzone.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text " placeholder="Name"/>
                    </div>
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/V.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/fifa.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/clash.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    <div className="hidden xl:block flex items-center">
                        
                    </div>
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/shield.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/f.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    
                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/6.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>

                    <div className="flex items-center">
                        <img className="mx-2 w-22 h-22" src="/img/game-accounts/CSGOGameAccounts.png" alt=""/>
                        <input className="bg-secondary-100 border-2 border-gray-200 p-2 bg-gray-900 outline-none w-40 rounded h-8 " type="text" placeholder="Name"/>
                    </div>
                    
                   

                </div>
                <br/>
                <button className="mt-6 rounded-lg bg-secondary-100 border-2 border-gray-200 text-white py-2 px-10 m-auto">CONFIRM</button>
                </div>
              
            </div>
        </div>
    )
}
export default GameAccounts;
