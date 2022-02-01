import React from "react";
import Uk from "../../../../static/icons/uk.png";
import French from "../../../../static/icons/french.png";
import Saudi from "../../../../static/icons/saudi.png";
import Discord from "../../../../static/icons/discord.png";
import Sidenav1 from "../../../../static/icons/twitter1.png";
import Youtube from "../../../../static/icons/youtube.png";
import twitch from "../../../../static/icons/twitch2.png";
import Snap from "../../../../static/icons/instagram2.png";
import { Link } from "gatsby";
const SideNav = (props) => {
    let { navdata } = props;
    return (
        <div>
            {/* menu_open_main_div */}
            <div
                className={`${
                    navdata === true
                        ? "min-h-screen opacity-100 z-10"
                        : "h-0 opacity-0 z-0"
                } menu_open_main_div w-full  overflow-auto fixed  top-0 left-0`}
            >
                {/* menu_open_navigations */}
                <div className="py-24">
                    <ul className="px-10">
                        <li className="py-3 text-base font-semibold text-white uppercase">
                            HOME
                        </li>
                        <li className="py-3 text-base font-semibold text-white uppercase">
                            TOURNAMENTS
                        </li>
                    </ul>
                </div>
                {/* social_media_icon */}
                <div className="absolute bottom-0  right-0  left-0 mb-12">
                    {/* images_div */}
                    <div className="flex items-end justify-center ">
                        <Link to="https://bit.ly/ougdiscord">
                            <img src={Discord} alt="" className="h-5 pr-2.5" />
                        </Link>
                        <Link to="https://bit.ly/ougtwitter">
                            <img src={Sidenav1} alt="" className="h-5 pr-2.5" />
                        </Link>
                        {/* instagram_icon */}
                        <Link to="https://bit.ly/ouginstagram">
                            <img src={Snap} alt="" className="h-5 pr-2.5" />
                        </Link>
                        <Link to="https://bit.ly/ougyoutube">
                            <img src={Youtube} alt="" className="h-5 pr-2.5" />
                        </Link>
                        <Link to="https://bit.ly/ougtwitch">
                            <img src={twitch} alt="" className="h-5 pr-2.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideNav;
