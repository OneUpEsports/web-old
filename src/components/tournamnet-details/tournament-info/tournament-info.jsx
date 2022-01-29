import React from "react";
import Cash from "../../../../static/icons/cash.png";
import Players from "../../../../static/icons/players.png";
import Close from "../../../../static/icons/close.png";
import Inf from "../../../../static/icons/inf.png";
const TournamnetInfo = () => {
  return (
    <div>
      {/* main_info_div */}
      <div className="main_info_div">
        {/* main_flex_div */}
        <div className="flex justify-center">
          {/* main_width_div */}
          <div className="w-full lg:w-4/5">
            {/* info_content_main_div */}
            <div className="info_content_main_div flex flex-col lg:flex-row py-6 lg:py-0 lg:pt-6 lg:pb-5 px-2.5 lg:px-0">
              {/* info_left_side_div */}
              <div className="info_left_side_div">
                {/* info_left_title */}
                <div className="info_left_title">
                  <h3 className=" font-bold text-white ">
                    R6 BOMBE 5V5 BY G2
                  </h3>
                </div>
                {/* info_left_discipline */}
                <div>
                  <h3 className="text-sm lg:text-base font-medium text-white">
                    Bracket, Team 2v2
                  </h3>
                </div>
                {/* info_left_free_tournament*/}
                <div className="py-2 lg:py0 pt-0 lg:pt-3.5">
                  <div className="info_left_free_tournament rounded-3xl text-left lg:text-center py-2  px-0 lg:px-3.5 lg:w-36">
                    <h3 className="text-white text-xs font-bold  ">
                      Free Tournament
                    </h3>
                  </div>
                </div>
              </div>
              {/* info_middle_div */}
              <div className=" info_middle_div flex items-center lg:h-28  grow  py-3.5 lg:py-0 px-0 lg:px-2">
                {/* middle_image_div */}
                <div className="middle_image_div">
                  {/* back_ground_color */}
                  <div className="back_ground_color w-14 h-14">
                    {/* image_tag */}
                    <img src={Cash} alt="" />
                  </div>
                </div>
                {/*middle_cash_prize_details*/}
                <div className="middle_cash_prize_details w-64 lg:w-72 pl-2.5">
                  {/* cash_prize_title */}
                  <div className=" cash_prize_title">
                    <h4 className="text-white text-base font-bold">
                      {" "}
                      <span>200 €</span> cash prize
                    </h4>
                  </div>
                  {/* cash_prize_info */}
                  <div className="cash_prize_info">
                    <p className="text-xs font-medium">
                      Total amount of cash prize distributed between the first 2
                      places
                    </p>
                  </div>
                </div>
              </div>
              {/* info_right_div */}
              <div className="info_right_div w-full lg:w-1/3">
                {/* up_side_main_div */}
                <div  className="up_side_main_div">
                  {/* right_up_side_main_div */}
                  <div className="right_up_side_main_div flex justify-between items-center pb-2.5">
                    {/* left_side_div_up */}
                    <div className="left_side_div_up ">
                      {/* image_details_div*/}
                      <div className="image_details_div flex items-center">
                        {/* players_image_div */}
                        <div className="players_image_div pr-1.5">
                          <img src={Players} alt="" />
                        </div>
                        <p className="players_text text-xs font-normal">
                          <strong className="font-medium">64</strong>/64
                        </p>
                      </div>
                    </div>
                    {/* right_side_div_up */}
                    <div className="right_side_div_up flex items-center ">
                      {/* X_mark_image_div */}
                      <div className="X_mark_image_div pr-1.5">
                        <img src={Close} alt=""  />
                      </div>
                      {/* title_div */}
                      <div className="title_div">
                        <h3 className="text-xs font-bold uppercase">
                          Registrations closed
                        </h3>
                      </div>
                      {/* info_image_div */}
                      <div className="info_image_div pl-1.5">
                        <img src={Inf} alt=""  />
                      </div>
                    </div>
                  </div>
                  {/* right_side_down_div */}
                  <div className=" right_side_down_div">
                    {/* button_div */}
                    <div className=" button_div cursor-pointer">
                        <button className="text-sm font-semibold uppercase  text-center py-3.5 px-5 w-full ">SIGN UP</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TournamnetInfo;
