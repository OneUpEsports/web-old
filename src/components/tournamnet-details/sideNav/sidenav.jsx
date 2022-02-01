import React from "react";
import Uk from "../../../../static/icons/uk.png";
import French from "../../../../static/icons/french.png";
import Saudi from "../../../../static/icons/saudi.png";
import Discord from "../../../../static/icons/discord.png";
import Sidenav1 from "../../../../static/icons/twitter1.png";
import Youtube from "../../../../static/icons/youtube.png";
import Hangout from "../../../../static/icons/twitch2.png";
import Snap from "../../../../static/icons/instagram2.png";
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
                {/* menu_open_flags */}
                <div className="menu_open_flags ">
                    {/* menu_ul */}
                    <ul className="menu_ul flex justify-center flex-wrap">
                        <li className="flex items-center py-3 px-3">
                            <img src={French} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                FR
                            </span>
                        </li>
                        <li className="flex items-center py-3 px-3">
                            <img src={Uk} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                EN
                            </span>
                        </li>
                        <li className="flex items-center py-3 px-3">
                            <img src={Uk} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                ES
                            </span>
                        </li>
                        <li className="flex items-center py-3 px-3">
                            <img src={Saudi} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                AR
                            </span>
                        </li>
                        <li className="flex items-center py-3 px-3">
                            <img src={Uk} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                De
                            </span>
                        </li>
                        <li className="flex items-center py-3 px-3">
                            <img src={Uk} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                PT
                            </span>
                        </li>
                        <li className="flex items-center py-3 px-3">
                            <img src={Uk} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                IT
                            </span>
                        </li>
                        <li className="flex items-center py-3 px-3">
                            <img src={Uk} alt="" className="h-6 pr-2.5" />
                            <span className="text-sm font-semibold text-white">
                                JA
                            </span>
                        </li>
                    </ul>
                </div>
                {/* social_media_icon */}
                <div className="absolute bottom-0  right-0  left-0 mb-12">
                    {/* images_div */}
                    <div className="flex items-end justify-center ">
                        <img src={Discord} alt="" className="h-5 pr-2.5" />
                        <img src={Sidenav1} alt="" className="h-5 pr-2.5" />
                        {/* instagram_icon */}
                        <img src={Snap} alt="" className="h-5 pr-2.5" />
                        <img src={Youtube} alt="" className="h-5 pr-2.5" />
                        <img src={Hangout} alt="" className="h-5 pr-2.5" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideNav;
