import React from "react"

const UserWins = ({image,name,price}) => {
    return(
        <div className="px-4 py-2 grid grid-cols-6 grid-flow-col- w-full font-bold ">
         <div className="col-span-4 flex items-center lg:hover:px-12 ">
                <img className="w-14 h-14 rounded-2xl" src={image} alt=""/>
                <h4 className="ml-3">{name}</h4>
            </div>
        <div className="col-span-2 text-[#b154f0] flex items-center ">
          <h4> +$ {price}</h4>
        </div>

    </div>
    )
    }
export default UserWins 