import React from "react";
import MainLayout from "../../components/dashb-comps/MainLayout";
import MyTeam from "../../components/dashb-comps/MyTeam";
import History from "../../components/dashb-comps/History";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ToursInfo from "../../components/dashb-comps/ToursInfo";
import ToursImage from "../../components/dashb-comps/ToursImage";
import BottomBar from "../../components/dashb-comps/BottomBar";
SwiperCore.use([Navigation]);

import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <MainLayout>
            <div className="lg:w-full w-11/12 h-full lg:p-12 py-12 pr-12 pl-2  lg:m-0 mr-2 flex flex-col intems-center justify-center">
                <Helmet title="OneUpGaming • Dashboard" defer={false} />
                <div className=" h-full  w-11/12  lg:grid lg:grid-cols-3 lg:grid-rows-3  Lg:gap-x-16 lg:gap-y-6 lg:grid-flow-row-dense lg:grid-flow-col-dense ">
                    <div className=" relative bg-gray-900  lg:col-span-2  lg:row-span-3 lg:right-4   lg:w-full lg:h-full  rounded-2xl border-2 border-gray-200 p-4">
                        <h4>Upcoming Tournaments</h4>
                        <div>
                            {/* swiper-button-white */}
                            <Swiper
                                navigation={true}
                                loop={true}
                                className="mySwiper m-8  "
                            >
                                <SwiperSlide>
                                    <ToursImage
                                        image="/img/dashboard/banner.png"
                                        info1="5vs5 Wednesday"
                                        info2="Bomb Championship"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ToursImage
                                        image="/img/dashboard/banner.png"
                                        info1="5vs5 Wednesday"
                                        info2="Bomb Championship"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ToursImage
                                        image="/img/dashboard/banner.png"
                                        info1="5vs5 Wednesday"
                                        info2="Bomb Championship"
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className="overflow-y-scroll overflow-x-scroll overflow-y-scroll scrollbar-hide">
                                <div className="flex  items-center justify-center mb-2 lg:w-full w-[calc(100vh-60px)] ">
                                    <div className="grid grid-cols-11 grid-flow-col-dense  w-full ">
                                        <div className=" col-span-2">
                                            <h6>Date</h6>
                                        </div>
                                        <div className="flex items-center justify-left pl-6  col-span-2">
                                            {" "}
                                            <h6>Type</h6>
                                        </div>
                                        <div className="flex  items-center justify-center">
                                            <h6>Plattform</h6>
                                        </div>
                                        <div className="flex  items-center justify-center col-span-3">
                                            <h6>Name </h6>
                                        </div>
                                        <div className="flex  items-center justify-center">
                                            <h6>Slots </h6>
                                        </div>
                                        <div className="flex  items-center justify-center">
                                            <h6>Price </h6>
                                        </div>
                                        <div className="flex  items-center justify-center ">
                                            <h6>Status </h6>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <ToursInfo
                                    date="29.4.2021, 20:00"
                                    type="Bracket"
                                    plattform="/img/dashboard/Gruppe 142.png"
                                    num="5vs5"
                                    rule="WednesdayBomb"
                                    slots="4/24"
                                    price="20$"
                                    status="!"
                                />
                                <ToursInfo
                                    date="29.4.2021, 20:00"
                                    type="Bracket"
                                    plattform="/img/dashboard/Gruppe 142.png"
                                    num="5vs5"
                                    rule="WednesdayBomb"
                                    slots="4/24"
                                    price="20$"
                                    status="!"
                                />
                                <ToursInfo
                                    date="29.4.2021, 20:00"
                                    type="Bracket"
                                    plattform="/img/dashboard/Gruppe 142.png"
                                    num="5vs5"
                                    rule="WednesdayBomb"
                                    slots="4/24"
                                    price="20$"
                                    status="!"
                                />
                                <ToursInfo
                                    date="29.4.2021, 20:00"
                                    type="Bracket"
                                    plattform="/img/dashboard/Gruppe 142.png"
                                    num="5vs5"
                                    rule="WednesdayBomb"
                                    slots="4/24"
                                    price="20$"
                                    status="!"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" bg-gray-900  lg:w-full lg:h-full  rounded-2xl border-2 border-gray-200  p-4 ">
                        <h4 className="  w-fit m-auto">Teams</h4>
                        <div className=" h-5/6 overflow-y-scroll scrollbar-hide">
                            <MyTeam
                                image="/img/dashboard/valorant.png"
                                name="my Team"
                                members="3"
                            />
                            <MyTeam
                                image="/img/dashboard/valorant.png"
                                name="tommy"
                                members="9"
                            />
                        </div>
                    </div>

                    <div className=" relative bg-gray-900  text-gray-100 lg:col-span-1 lg:row-span-2 lg:w-full lg:h-full  rounded-2xl border-2 border-gray-200  p-4 ">
                        <h4 className=" w-fit m-auto">Tournament History</h4>

                        <div className="w-full h-full">
                            <div className="grid grid-cols-5 grid-flow-col-dense mt-2   overflow-y-scroll overflow-x-scroll scrollbar-hide">
                                <div className=" col-span-1">
                                    <h6>Date</h6>
                                </div>
                                <div className="flex items-center justify-left pl-6  col-span-2">
                                    <h6>Name</h6>
                                </div>
                                <div className="flex  items-center justify-center">
                                    <h6>Place</h6>
                                </div>

                                <div className="flex  items-center justify-center">
                                    <h6>Earnings</h6>
                                </div>
                            </div>
                            <hr className="mb-2" />
                            <div className="h-5/6 w-fit lg:w-full overflow-y-scroll overflow-x-scroll scrollbar-hide">
                                <History
                                    date="21.4.2021"
                                    name="Tour1"
                                    place="Top 8"
                                    winnings="0"
                                />
                                <History
                                    date="21.4.2021"
                                    name="Hello"
                                    place="Top 2"
                                    winnings="2"
                                />
                                <History
                                    date="21.3.2022"
                                    name="Dark one eleven"
                                    place="Top 3"
                                    winnings="4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden block">
                    <br />
                    <br />
                    <BottomBar />
                </div>
            </div>
        </MainLayout>
    );
};
export default Home;
