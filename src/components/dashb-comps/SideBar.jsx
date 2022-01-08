import React from "react"
import {Link} from "gatsby"
import {AiOutlineQuestionCircle} from "react-icons/ai"
const SideBar = ({children}) => {
    var imgStyle="h-14 w-14"
    return (
        <div className="fixed  top-0 w-24  flex flex-col items-center  h-screen py-4 border-r-2">
            <ul className="list-none">
                <li className="mb-4 w-fit m-auto"><Link to="/dashboard"><img className="h-12 w-12" src="/img/dashboard/icon-72x72.png.png" alt=""/></Link></li>
                <li className="mb-4 w-fit m-auto"><Link to="/dashboard/games"><img className="h-10 w-10" src="/img/dashboard/Icon ionic-md-trophy.png" alt=""/></Link></li>
                <li className="mb-4 w-fit m-auto"><Link to="/dashboard/teams"><img className="h-10 w-10" src="/img/dashboard/Icon ionic-ios-people.png" alt=""/></Link></li>
                <hr/>
                <li className="mt-2 w-fit m-auto"><Link to="/dashboard"><img className={imgStyle} src="/img/dashboard/dota.png" alt=""/></Link></li>
                <li className="mt-2 w-fit m-auto"><Link to="/dashboard"><img className={imgStyle}  src="/img/dashboard/csgo.png" alt=""/></Link></li>
                <li className="mt-2 w-fit m-auto"><Link to="/dashboard"><img className={imgStyle}  src="/img/dashboard/valorant.png" alt=""/></Link></li>
                <li className="mt-2 w-fit m-auto"><Link to="/dashboard"><img className={imgStyle}  src="/img/dashboard/r6.png" alt=""/></Link></li>
            </ul>
            <ul className="list-none absolute bottom-4">
                <li className="mb-4"><Link to="/dashboard"><img className="h-6 w-6" src="/img/dashboard/Icon awesome-shopping-bag.png" alt=""/></Link></li>
                <li><Link to="/dashboard"><AiOutlineQuestionCircle className="text-md"/></Link></li>
            </ul>
        </div>
    )
}
export default SideBar