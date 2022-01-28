import React from "react";
import Logo from "../../../../static/icons/logo.jpg";
import Smartphone from "../../../../static/icons/smartphone.png";
import Station from "../../../../static/icons/station.png";
import Laptop from "../../../../static/icons/laptop.png";
import Switch from "../../../../static/icons/switch.png";
import Xbox from "../../../../static/icons/xbox.png";
import Calendar from "../../../../static/icons/calendar.png";
const BannerPlatforms = () => {
    return (
        <div>
            {/* banner_platforms_main_div */}
            <div className=" banner_platforms_main_div ">
                {/* main_flex_div */}
                <div className="flex justify-center">
                    {/* main_width_div */}
                    <div className="w-full lg:w-4/5">
                        {/* platforms_images_title_main_div */}
                        <div className=" platforms_images_title_main_div lg:absolute  flex ">
                            {/* main_game_image_div */}
                            <div className="main_game_image_div ">
                                {/* tooltips_div */}
                                <div className="tooltips_div  p-2.5 rounded-sm ">
                                    <img
                                        src={Logo}
                                        alt=""
                                      
                                    />
                                </div>
                            </div>
                            {/* header_info_main_div */}
                            <div className="header_info_main_div ">
                                {/* platforms_info_main_div */}
                                <div className="platforms_info_main_div flex pb-3 lg:pb-4">
                                    {/* main_pc_card */}
                                    <div className="main_pc_card bg-black flex items-center p-2.5 lg:p-0 lg:p-1.5">
                                        {/* pc_image */}
                                        <div className=" lg:pl-2.5">
                                            <img src={Laptop} alt="" className="h-5" />
                                        </div>
                                        {/* pc_title */}
                                        <div className="pc_title  lg:py-1.5 lg:px-4  hidden lg:block">
                                            <p className="text-white text-xs font-bold uppercase">
                                                PC
                                            </p>
                                        </div>
                                    </div>
                                    {/* main_playstation_card */}
                                    <div className="main_playstation_card flex items-center p-2.5 lg:p-0 lg:p-1.5">
                                        {/* playstation_image */}
                                        <div className="lg:pl-2.5">
                                            <img src={Station} alt=""  className="h-4"/>
                                        </div>
                                        {/* playstation_title */}
                                        <div className="playstation_title  lg:py-1.5 lg:px-4  hidden lg:block">
                                            <p className="text-white text-xs font-bold uppercase">
                                                PLAYSTATION 4
                                            </p>
                                        </div>
                                    </div>
                                    {/* main_switch_card */}
                                    <div className="main_switch_card flex items-center p-2.5 lg:p-0 lg:py-1.5">
                                        {/* switch_image */}
                                        <div className="lg:pl-2.5">
                                            <img src={Switch} alt="" className="h-4"/>
                                        </div>
                                        {/* switch_title */}
                                        <div className="switch_title lg:py-1.5 lg:px-4  hidden lg:block">
                                            <p className="text-white text-xs font-bold uppercase">
                                                SWITCH
                                            </p>
                                        </div>
                                    </div>
                                    {/* main_xbox_one_card */}
                                    <div className="main_xbox_one_card flex items-center p-2.5 lg:p-0 lg:py-1.5">
                                        {/* xbox_one_image */}
                                        <div className="lg:pl-2.5">
                                            <img src={Xbox} alt="" className="h-4"/>
                                        </div>
                                        {/* xbox_one_title */}
                                        <div className="xbox_one_title  lg:py-1.5 lg:px-4  hidden lg:block">
                                            <p className="text-white text-xs font-bold uppercase">
                                                XBOX ONE
                                            </p>
                                        </div>
                                    </div>
                                    {/* main_mobile_card */}
                                    <div className="main_mobile_card flex items-center p-2.5 lg:p-0  lg:py-1.5">
                                        {/* mobile_image */}
                                        <div className="pl-2.5">
                                            <img src={Smartphone} alt="" className="h-5" />
                                        </div>
                                        {/* mobile_title */}
                                        <div className="mobile_title py-1.5 px-4  hidden lg:block">
                                            <p className="text-white text-xs font-bold uppercase">
                                                MOBILE
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* header_info_image_title */}
                                <div className="flex items-center lg:px-2.5">
                                    {/* image*/}
                                    <img
                                        src={Calendar}
                                        alt=""
                                        className="px-2.5 lg:px-0 lg:pr-2.5 h-4"
                                    />
                                    {/* title */}
                                    <p className="text-white text-sm lg:text-base font-semibold uppercase  pt-1 ">
                                        Thursday, January 20, 2022, 24:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BannerPlatforms;
