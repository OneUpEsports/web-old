import React from "react";
const Payout = () => {
    let lists = [
        {
            id: 1,
            date: "20.10.2021",
            money: "52,00 EUR",
            bank: "Bank",
            account: "AT43 39***********",
            status: "in progress",
        },
        {
            id: 2,
            date: "20.10.2021",
            money: "52,00 EUR",
            bank: "Bank",
            account: "AT43 39***********",
            status: "in progress",
        },
        {
            id: 3,
            date: "20.10.2021",
            money: "52,00 EUR",
            bank: "Bank",
            account: "AT43 39***********",
            status: "in progress",
        },
        {
            id: 4,
            date: "20.10.2021",
            money: "52,00 EUR",
            bank: "Bank",
            account: "AT43 39***********",
            status: "in progress",
        },
        {
            id: 5,
            date: "20.10.2021",
            money: "52,00 EUR",
            bank: "Bank",
            account: "AT43 39***********",
            status: "in progress",
        },
    ];
    return (
        <div>
            {/* background_color_div */}
            <div className="background_color_div flex justify-center ">
                {/* main_container */}
                <div className="w-3/4">
                    {/* heading_hr_line */}
                    <div className="heading_hr_line w-full ">
                        <h2 className="text-white text-2xl lg:text-6xl font-normal text-center lg:text-left pt-10 pb-4  lg:pb-6">
                            Wallet
                        </h2>
                        <hr className="pt-6" />
                    </div>
                    {/* upside_content_div */}
                    <div className="upside_content_div flex flex-col lg:flex-row ">
                        {/* left_side_content */}
                        <div className="common_bg_color flex justify-center items-center mb-4 lg:mb-0 mr-0 lg:mr-5 lg:w-1/4 w-full rounded-xl">
                            {/* content_div */}
                            <div className="py-10">
                                {/* heading_text */}
                                <div>
                                    <h2 className="text-white text-center  text-xl">
                                        12 EUR
                                    </h2>
                                    <p className="text-white text-center text-xs lg:text-xs">
                                        min payout: 50 EUR
                                    </p>
                                </div>
                                {/* button_div */}
                                <div className="button_div flex justify-center py-1">
                                    <button className="text-sm text-white px-2.5 py-1 rounded ">
                                        Request Payout
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* right_side_div */}
                        <div className=" common_bg_color rounded-xl  w-full lg:w-3/4  ">
                            {/* content_div */}
                            <div className="pt-6 px-4">
                                {/* heading */}
                                <div>
                                    <h2 className="text-md text-white font-normal px-2 lg:px-6">
                                        Payout Requests
                                    </h2>
                                </div>
                                {/* lists_main_div */}
                                <div className="lists_main_div  w-full lg:pt-4 lg:pb-2 ">
                                    {/* list_head */}
                                    <ul className=" list_head flex w-full py-2 lg:py-0 ">
                                        <li className="  common_li text-base font-medium text-center ">
                                            Date
                                        </li>
                                        <li className=" common_li text-base font-medium text-center ">
                                            Amount
                                        </li>
                                        <li className=" common_li text-base font-medium text-center ">
                                            WithdrawType
                                        </li>
                                        <li className=" common_li text-base font-medium text-center  ">
                                            Recipient
                                        </li>
                                        <li className=" common_li text-base font-medium text-center ">
                                            Status
                                        </li>
                                    </ul>
                                    {lists?.map((single) => (
                                        <ul className="w-full py-1">
                                            {/* list_body */}
                                            <ul className="list_body flex ">
                                                <li className=" common_li text-sm font-medium text-center ">
                                                    {single.date}
                                                </li>
                                                <li className=" common_li common_li text-sm font-medium text-center">
                                                    {single.money}
                                                </li>
                                                <li className=" common_li text-sm font-medium text-center">
                                                    {single.bank}
                                                </li>
                                                <li className=" common_li text-sm font-medium text-center ">
                                                    {single.account}
                                                </li>
                                                <li className=" inProgress_text text-sm font-medium text-center  ">
                                                    {single.status}
                                                </li>
                                            </ul>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Payout;
