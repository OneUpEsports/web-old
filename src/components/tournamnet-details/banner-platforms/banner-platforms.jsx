import React from "react";
import { Link } from "gatsby";
import Logo from "../../../../static/icons/logo.jpg";
import Station from "../../../../static/icons/station.png";
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
                            <Link to="/tournaments/pc/rainbow-six-siege">
                                <div className="main_game_image_div cursor-pointer ">
                                    {/* tooltips_div */}
                                    <div className="tooltips_div  p-2.5 rounded-sm ">
                                        <img src={Logo} alt="" />
                                    </div>
                                </div>
                            </Link>
                            {/* header_info_main_div */}
                            <div className="header_info_main_div ">
                                {/* platforms_info_main_div */}
                                <div className="platforms_info_main_div flex pb-3 lg:pb-4">
                                    {/* main_playstation_card */}
                                    <div className="main_playstation_card flex items-center p-2.5 lg:p-0 lg:p-1.5">
                                        {/* playstation_image */}
                                        <div className="lg:pl-2.5">
                                            <img
                                                src={Station}
                                                alt=""
                                                className="h-4"
                                            />
                                        </div>
                                        {/* playstation_title */}
                                        <div className="playstation_title  lg:py-1.5 lg:px-4  hidden lg:block">
                                            <p className="text-white text-xs font-bold uppercase">
                                                PLAYSTATION 4
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
