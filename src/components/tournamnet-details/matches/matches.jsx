import React from "react";
import Pad from "../../../../static/icons/pad.png";
const MatchesTabe = () => {
  return (
    <div>
      {/* matches_main_div */}
      <div className="matches_main_div flex flex-col items-center py-24 justify-center">
        {/* image_div */}
        <div>
          <img src={Pad} alt=""  className="h-10"/>
        </div>
        {/* title_div */}
        <div className=" title_div pt-2 pb-1 ">
          <p className="text-sm font-semibold">You need to be logged in to participate.</p>
        </div>
        {/* button_div*/}
        <div className="button_div">
          <button className="px-12 py-3 text-sm font-semibold rounded">LOG IN</button>
        </div>
      </div>
    </div>
  );
};
export default MatchesTabe;
