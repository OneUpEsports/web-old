import React from "react";
import Trophy1 from "../../../../static/icons/trophy1.png";
import Trophy2 from "../../../../static/icons/trophy2.png";
import Trophy3 from "../../../../static/icons/trophy3.png";
import Trophy4 from "../../../../static/icons/trophy4.png";
import Img2 from "../../../../static/icons/img2.png";
import Img1 from "../../../../static/icons/img1.png";
import Img6 from "../../../../static/icons/img6.png";
import Img7 from "../../../../static/icons/img7.png";
import { Link } from "gatsby";
const Biography = () => {
    return (
        <div>
            {/* background_color_main_contaner */}
            <div className="background_color_main_contaner">
                <div className="flex justify-center">
                    {/* biography_main_container   */}
                    <div className="biography_main_container flex flex-col lg:flex-row w-11/12 lg:w-10/12 pt-6 pb-3.5">
                        {/* left_side_container */}
                        <div className="left_side_container w-full lg:w-1/4 px-8 py-4 rounded-xl shadow-md ">
                            {/* heading_text_div */}
                            <div className="heading_text_div">
                                {/* heading */}
                                <h2 className="text-center text-white  font-bold">
                                    Biography
                                </h2>
                                {/* text */}
                                <p className="py-1 text-center lg:text-left text-xs gray_color">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Eos quaerat animi nulla
                                    porro impedit esse incidunt optio in
                                    distinctio magni, similique autem earum
                                </p>
                            </div>
                            {/* trophies_container */}
                            <div className="trophies_container flex justify-center">
                                {/* heading_images_div */}
                                <div className=" heading_images_div py-2">
                                    {/* heading */}
                                    <h2 className="pb-2 text-white  font-bold">
                                        Trophies
                                    </h2>
                                    {/* trophies_images */}
                                    <div className="flex py-1">
                                        <img
                                            src={Trophy1}
                                            alt=""
                                            className="h-5"
                                        />
                                        <p className="px-2.5 text-xs">33x</p>
                                    </div>
                                    <div className="flex py-1">
                                        <img
                                            src={Trophy2}
                                            alt=""
                                            className="h-5"
                                        />
                                        <p className="px-2.5 text-xs">19x</p>
                                    </div>
                                    <div className="flex py-1">
                                        <img
                                            src={Trophy3}
                                            alt=""
                                            className="h-5"
                                        />
                                        <p className="px-2.5 text-xs">10x</p>
                                    </div>
                                    <div className="flex py-1">
                                        <img
                                            src={Trophy4}
                                            alt=""
                                            className="h-5"
                                        />
                                        <p className="px-2.5 text-xs">3x</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right_side_containe */}
                        <div className=" right_side_containe w-full lg:w-4/5 ml-0 lg:ml-4 my-4 lg:my-0 ">
                            {/* up_side_container */}
                            <div className="up_side_container w-full p-4 rounded-xl shadow-md">
                                {/* heading */}
                                <h4 className="gray_color text-center lg:text-left text-white font-light ">
                                    <u>Favourite Games</u>
                                </h4>
                                {/* images_div */}
                                <div className="flex flex-col lg:flex-row  items-center lg:items-left  p-3.5">
                                    <div className="  px-0 lg:px-2.5 py-2.5 lg:py-0">
                                        <Link to="/games">
                                            <img
                                                src={Img2}
                                                alt=""
                                                className="h-14 cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                    <div className="  px-0 lg:px-2.5 py-2.5 lg:py-0">
                                        <Link to="/games">
                                            <img
                                                src={Img1}
                                                alt=""
                                                className="h-14 cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                    <div className="  px-0 lg:px-2.5 py-2.5 lg:py-0">
                                        <Link to="/games">
                                            <img
                                                src={Img6}
                                                alt=""
                                                className="h-14 cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                    <div className="  px-0 lg:px-2.5 py-2.5 lg:py-0">
                                        <Link to="/games">
                                            <img
                                                src={Img7}
                                                alt=""
                                                className="h-14 cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* down_side_container */}
                            <div className="down_side_container w-full px-4 pt-4 pb-16 mt-4 lg:mt-2  rounded-xl shadow-md">
                                {/* heading */}
                                <h4 className="text-center lg:text-left text-white font-light gray_color">
                                    <u>Stats</u>
                                </h4>
                                {/* heading_details_div */}
                                <div className="flex flex-col lg:flex-row  px-0 lg:px-12 py-2 lg:py-0">
                                    {/* played_tournaments_div */}
                                    <div className="px-0 lg:px-12 py-2 lg:py-0 text-center ">
                                        <h5 className="text-base text-white font-normal gray_color">
                                            Played Tournaments
                                        </h5>
                                        <p className="text-md gray_color">23</p>
                                    </div>
                                    {/* Best_Finish_div */}
                                    <div className="px-0 lg:px-12 py-2 lg:py-0 text-center">
                                        <h5 className="text-base text-white font-normal  gray_color">
                                            Best Finish
                                        </h5>
                                        <p className=" text-md  gray_color">
                                            1
                                        </p>
                                    </div>
                                    {/* Worst_finish_div */}
                                    <div className="px-0 lg:px-12 py-2 lg:py-0 text-center">
                                        <h5 className="text-base text-white font-normal  gray_color ">
                                            Worst Finish
                                        </h5>
                                        <p className=" text-md  gray_color ">
                                            Top 16
                                        </p>
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
export default Biography;
