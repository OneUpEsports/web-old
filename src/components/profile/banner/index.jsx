import React from "react";
import BannerBg from "../../../../static/img/banner-bg.png";
import Stefan from "../../../../static/icons/stefan.png";
import Tick from "../../../../static/icons/tick.png";
import Austria from "../../../../static/icons/austria.png";
import Youtube from "../../../../static/icons/youtube.png";
import Instagram from "../../../../static/icons/instagram.png";
import Twitter from "../../../../static/icons/twitter.png";
import Hangout from "../../../../static/icons/hangout.png";
import Request from "../../../../static/icons/req.png";
import Friends from "../../../../static/icons/friends.png";
import Inbox from "../../../../static/icons/inbox.png";
import Team1 from "../../../../static/icons/team1.png";
import Team2 from "../../../../static/icons/team2.png";
import Team3 from "../../../../static/icons/team3.png";
const Banner = () => {
    return (
        <div>
            {/* banner_image_container */}
            <div className="banner_image_container absolute w-full ">
                <img src={BannerBg} alt="" className="w-full h-full" />
            </div>
            {/* banner_content_container */}
            <div className="flex justify-center">
                <div className="main_container pt-20 lg:pt-44  w-11/12 lg:w-10/12">
                    {/* content_background_color_container */}
                    <div className="content_background_color_container rounded-t-xl relative">
                        {/* content_details_container */}
                        <div className="flex flex-col items-center lg:flex-row lg:justify-between p-5 lg:p-12">
                            {/* left_side_content */}
                            <div className="left_side_content flex flex-col lg:flex-row items-center lg:items-start">
                                {/* left_Stefan_image */}
                                <div>
                                    <img src={Stefan} alt="" className="h-36" />
                                </div>
                                {/* left_content_div */}
                                <div className="flex flex-col items-center lg:items-start px-6">
                                    {/* heading_image_button */}
                                    <div className=" heading_image_button flex items-center">
                                        {/* heading */}
                                        <div>
                                            <h2 className="text-white text-md font-normal">
                                                Coni
                                            </h2>
                                        </div>
                                        {/* image */}
                                        <div className="px-2">
                                            <img
                                                src={Tick}
                                                alt=""
                                                className="h-5"
                                            />
                                        </div>
                                    </div>
                                    {/* p_tag */}
                                    <div>
                                        <p class="text-xs opacity-50 px-1">
                                            Max Mustermann
                                        </p>
                                    </div>
                                    {/*details */}
                                    <div className="flex flex-col items-center lg:items-start lg:flex-row py-1">
                                        <h5 className="text-white text-center lg:text-left">
                                            joined 21.May 2021, from tyrol ,
                                            Austria
                                        </h5>
                                        {/* flag_image */}
                                        <div className="flex items-center">
                                            <img
                                                src={Austria}
                                                alt=""
                                                className="px-1 h-5"
                                            />
                                        </div>
                                    </div>
                                    {/* socia_media_icons */}
                                    <div className="flex items-center pt-5 pb-6 lg:py-1">
                                        {/* youtube */}
                                        <div className="mx-1.5">
                                            <img
                                                src={Youtube}
                                                alt=""
                                                className="w-6"
                                            />
                                        </div>
                                        {/* instagram */}
                                        <div className="mx-1.5">
                                            <img
                                                src={Instagram}
                                                alt=""
                                                className="w-5"
                                            />
                                        </div>
                                        {/* hangouts */}
                                        <div className="mx-1.5">
                                            <img
                                                src={Hangout}
                                                alt=""
                                                className="w-5"
                                            />
                                        </div>
                                        {/* twitter */}
                                        <div className="">
                                            <img
                                                src={Twitter}
                                                alt=""
                                                className="w-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right_side_images_container */}
                            <div className="flex items-center">
                                <div className="px-2 ">
                                    <img
                                        src={Request}
                                        alt=""
                                        className="w-8 "
                                    />
                                </div>
                                <div className="px-2">
                                    <img
                                        src={Friends}
                                        alt=""
                                        className="w-8 "
                                    />
                                </div>
                                <div className="px-2">
                                    <img src={Inbox} alt="" className="w-8 " />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* teams_main_container_background_color */}
                    <div className="teams_main_container_background_color relative rounded-b-xl px-9 py-5">
                        {/* team_container_content */}
                        <div className="flex flex-col lg:flex-row items-center lg:px-12 ">
                            {/* heading_div */}
                            <div className="heading_div">
                                <h2 className="font-light">Teams</h2>
                            </div>
                            {/* images_div */}
                            <div className="flex lg:px-9 py-4 lg:py-0">
                                <div className="lg:px-8 mx-3">
                                    <img
                                        src={Team1}
                                        alt=""
                                        className="h-9 lg:h-12"
                                    />
                                </div>
                                <div className="lg:px-8 mx-3">
                                    <img
                                        src={Team2}
                                        alt=""
                                        className="h-9 lg:h-12"
                                    />
                                </div>
                                <div className="lg:px-8 mx-3">
                                    <img
                                        src={Team3}
                                        alt=""
                                        className="h-9 lg:h-12"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;
