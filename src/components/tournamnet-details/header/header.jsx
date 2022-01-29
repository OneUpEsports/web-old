import React, { useState } from "react";
import Twit from "../../../../static/icons/twit.png";
import Inst from "../../../../static/icons/inst.png";
import Uk from "../../../../static/icons/uk.png";
import Down from "../../../../static/icons/down.png";
import French from "../../../../static/icons/french.png";
import Saudi from "../../../../static/icons/saudi.png";
import Hamburger from "../../../../static/icons/hamburger.png";
import Cross from "../../../../static/icons/cross.png";
import SideNav from "../sideNav/sidenav";
const Header = () => {
    const [navdata, setNavData] = useState(false);
    console.log("navdata", navdata);
    return (
        <div>
            {/* header_main_div_for_lg */}
            <div className="header_main_div h-16 fixed left-0 right-0 top-0 z-30 py-4 hidden lg:block">
                {/* main_flex_div */}
                <div className="flex justify-center items-center">
                    {/* main_width_div */}
                    <div className="w-4/5">
                        {/* header_content_main_div */}
                        <div className="header_content_main_div flex justify-between items-center w-full">
                            {/* beta_tag */}
                            <div className="beta_tag ">
                                <span>BETA</span>
                            </div>
                            {/* tag_twitter_instagram_div */}
                            <div className="tag_twitter_instagram_div">
                                {/* twitter_instagram_icons_div */}
                                <div className="twitter_instagram_icons_div flex items-center">
                                    {/* twitter_icon */}
                                    <img
                                        src={Twit}
                                        alt=""
                                        className="h-4 pr-2.5"
                                    />
                                    {/* instagram_icon */}
                                    <img src={Inst} alt="" className="h-3" />
                                </div>
                            </div>
                            {/* tournamens_heading_flag_arrow_div */}
                            <div className=" tournamens_heading_flag_arrow_div flex items-center justify-end w-1/2">
                                {/* heading_div */}
                                <div className="heading_div  w-3/12">
                                    <h4 className="text-sm
                                     font-semibold text-white upparcase cursor-pointer  text-center">
                                        TOURNAMENTS
                                    </h4>
                                </div>
                                {/* country_flag_down_arrow_div */}
                                <div className="country_flag_down_arrow_div flex items-center cursor-pointer lg:block ">
                                    {/* flag_arrow_div */}
                                    <div className="h-full w-16 px-1.5">
                                        <div className="flex py-1">
                                            {/* flag_image */}
                                            <img
                                                src={Uk}
                                                alt=""
                                                className="h-5"
                                            />
                                            {/* down_arrow_image */}
                                            <img
                                                src={Down}
                                                alt=""
                                                className="h-4 pl-1.5 "
                                            />
                                        </div>
                                        {/* position_div_drop_down_div */}
                                        <div className="position_div_drop_down_div hidden lg:hidden lg:top-0 lg:absolute lg:right-0">
                                            {/* ul_main_div */}
                                            <ul className="ul_main_div bg-white lg:block rounded-lg  ">
                                                {/* same_li */}
                                                <li className="same_li flex justify-end px-2.5 items-center py-1">
                                                    <span className="text-sm m-0 font-bold pr-1">
                                                        french
                                                    </span>
                                                    <img
                                                        src={French}
                                                        alt=""
                                                        className="h-5 pl-p1"
                                                    />
                                                </li>
                                                <li className="same_li flex justify-end px-3 items-center py-1">
                                                    <span className="text-xs m-0 font-bold pr-1">
                                                        English
                                                    </span>
                                                    <img
                                                        src={Uk}
                                                        alt=""
                                                        className="h-5 pl-p1"
                                                    />
                                                </li>
                                                <li className="same_li flex justify-end px-3 items-center py-1">
                                                    <span className="text-xs m-0 font-bold pr-1">
                                                        English
                                                    </span>
                                                    <img
                                                        src={Uk}
                                                        alt=""
                                                        className="h-5  pl-p1"
                                                    />
                                                </li>
                                                <li className="same_li flex justify-end px-2 items-center py-1">
                                                    <span className="text-xs m-0 font-bold pr-1">
                                                        Arabic
                                                    </span>
                                                    <img
                                                        src={Saudi}
                                                        alt=""
                                                        className="h-6 "
                                                    />
                                                </li>
                                                <li className="same_li flex justify-end px-3 items-center py-1">
                                                    <span className="text-xs m-0 font-bold pr-1">
                                                        English
                                                    </span>
                                                    <img
                                                        src={Uk}
                                                        alt=""
                                                        className="h-5 "
                                                    />
                                                </li>
                                                <li className=" change_li flex justify-end px-3 items-center py-1">
                                                    <span className="text-xs m-0 font-bold pr-1">
                                                        English
                                                    </span>
                                                    <img
                                                        src={Uk}
                                                        alt=""
                                                        className="h-5 "
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header_div_for_responsive */}
            <div>
                {/* header_responsive_main_div */}
                <div className="header_responsive_main_div h-12 block lg:hidden z-30 fixed top-0 right-0 left-0 shadow-md shadow-black py-1.5">
                    <div className="flex items-center py-1 px-5">
                        {/* hamburger_div */}
                        <div className="hamburger_div absolute w-full  ">
                            {!navdata ? (
                                <img
                                    src={Hamburger}
                                    alt=""
                                    className="h-7"
                                    onClick={() => {
                                        setNavData(true);
                                    }}
                                />
                            ) : (
                                <img
                                    src={Cross}
                                    alt=""
                                    className="h-5"
                                    onClick={() => {
                                        setNavData(false);
                                    }}
                                />
                            )}
                        </div>
                        {/* beta_tag_div */}
                        <div className="beta_tag_div w-full flex justify-center h-full items-center py-2">
                            <span>BETA</span>
                        </div>
                    </div>
                </div>
                <SideNav navdata={navdata} />
            </div>
        </div>
    );
};
export default Header;
