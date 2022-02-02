import { Link } from "gatsby"
import React from "react"
import MainLayout from "../../../components/adminpanel/MainLayout"
import Matches from "../../../components/adminpanel/Matches"
import Players from "../../../components/adminpanel/Players"
import Settings from "../../../components/adminpanel/Settings"
import Tabs from "../../../components/adminpanel/Tabs"

const Home=()=>{
    const tournament="Test Tournament"
    const name="Counter Strike:CO"
    const id="123456"
    const Platform="ps4/5, Mobile, PC"

    return(
        <MainLayout>
                 <div className="flex items-center mb-8"><h2>Tournaments &gt; {tournament} (Info)</h2></div>
                 <div className="w-fit m-auto">
                     <h5>Game: {name}</h5>
                     <h5>Id: #{id}</h5>
                     <h5>Plattform : {Platform}</h5>
                 </div>
                 <Tabs/>
        </MainLayout>

    )
}
export default Home
