import React, { useState } from "react";
import { Link } from "gatsby";
import Hamburger from "../../../../static/icons/hamburger.png";
import Cross from "../../../../static/icons/cross.png";
import Discord from "../../../../static/icons/discord.png";
import Sidenav1 from "../../../../static/icons/twitter1.png";
import Youtube from "../../../../static/icons/youtube.png";
import Hangout from "../../../../static/icons/twitch2.png";
import Snap from "../../../../static/icons/instagram2.png";
import Logo from "../../../data/images/logo.webp"
import SideNav from "../sideNav/sidenav";
const Header = () => {
    const [navdata, setNavData] = useState(false);
    return (
        <div>
            {/* header_main_div_for_lg */}
            <div className="header_main_div h-16 fixed left-0 right-0 top-0 z-30  hidden lg:block">
                {/* main_flex_div */}
                <div className="flex justify-center items-center">
                    {/* main_width_div */}
                    <div className="w-4/5">
                        {/* header_content_main_div */}
                        <div className="header_content_main_div flex justify-between items-center w-full">
                            {/* tournamens_heading_flag_arrow_div */}
                            <div className=" tournamens_heading_flag_arrow_div flex items-center  w-1/2">
                                <Link to="/">
                                    <img src={Logo} alt="" className="h-16"/>
                                </Link>
                            </div>
                            {/* tag_twitter_instagram_div */}
                            <div className="tag_twitter_instagram_div flex">
                                {/* twitter_instagram_icons_div */}
                                <div className="twitter_instagram_icons_div flex items-center">
                                    {/* twitter_icon */}
                                    <Link to="https://bit.ly/ougdiscord">
                                        <img
                                            src={Discord}
                                            alt=""
                                            className="h-5 pr-3"
                                        />
                                    </Link>
                                    <Link to="https://bit.ly/ougtwitter">
                                        <img
                                            src={Sidenav1}
                                            alt=""
                                            className="h-5 pr-3"
                                        />
                                    </Link>
                                    {/* instagram_icon */}
                                    <Link to="https://bit.ly/ouginstagram">
                                        <img
                                            src={Snap}
                                            alt=""
                                            className="h-5 pr-3"
                                        />
                                    </Link>
                                    <Link to="https://bit.ly/ougyoutube">
                                        <img
                                            src={Youtube}
                                            alt=""
                                            className="h-5 pr-3"
                                        />
                                    </Link>
                                    <Link to="https://bit.ly/ougtwitch">
                                        <img
                                            src={Hangout}
                                            alt=""
                                            className="h-5 pr-3"
                                        />
                                    </Link>
                                </div>
                                {/* heading_div */}
                                <div className="heading_div  w-1/2">
                                    <Link to="/games">
                                        <h4
                                            className="text-sm
                                     font-semibold text-white upparcase cursor-pointer  text-center"
                                        >
                                            TOURNAMENTS
                                        </h4>
                                    </Link>
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
                        <div className="hamburger_div w-full  ">
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
                                    className="h-5 mt-1"
                                    onClick={() => {
                                        setNavData(false);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <SideNav navdata={navdata} />
            </div>
        </div>
    );
};
export default Header;
