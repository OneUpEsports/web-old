import React from "react";
import Earning from "../components/wallet/earning-history";
import Payout from "../components/wallet/payout-request";
const Wallet=()=>{
    return(
        <div className="main_bg_color">
            <Payout/>
            <Earning/>
        </div>
    )
}
export default Wallet;
