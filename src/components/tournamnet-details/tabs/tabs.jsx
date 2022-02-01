import React from "react";
const Tabs = (props) => {
    let { activeTab, setActiveTab } = props;
    return (
        <div>
            {/* Tabs_bg_color_main_div */}
            <div className="Tabs_bg_color_main_div">
                {/* main_flex_div */}
                <div className="flex justify-center">
                    {/* main_width */}
                    <div className="w-ful lg:w-4/5">
                        {/* tabs_content_div */}
                        <div className="tabs_content_div ">
                            {/* main_lists_div */}
                            <div className="main_lists_div ">
                                {/* main_ul */}
                                <ul className="  flex flex-wrap justify-center lg:justify-start pt-4 ">
                                    <li
                                        className={`${
                                            activeTab === "matches"
                                                ? "active_ul"
                                                : "  main_ul"
                                        }  lg:w-36 inline-block text-white text-sm font-medium m-0 uppercase text-center cursor-pointer py-4 lg:py-0 px-4 lg:px-0`}
                                        onClick={() => {
                                            setActiveTab("matches");
                                        }}
                                    >
                                        Matches
                                    </li>
                                    <li
                                        className={` ${
                                            activeTab === "rules"
                                                ? "active_ul"
                                                : "  main_ul"
                                        } lg:w-36 inline-block text-white text-sm font-medium m-0 uppercase text-center cursor-pointer py-4 lg:py-0 px-4 lg:px-0`}
                                        onClick={() => {
                                            setActiveTab("rules");
                                        }}
                                    >
                                        Rules
                                    </li>
                                    <li
                                        className={`${activeTab ==="rounds" ? "active_ul" : " main_ul"} lg:w-36 inline-block text-white text-sm font-medium m-0 uppercase text-center cursor-pointer py-4 lg:py-0 px-4 lg:px-0`}
                                        onClick={() => {
                                            setActiveTab("rounds");
                                        }}
                                    >
                                        Rounds
                                    </li>
                                    <li
                                        className={`${activeTab ==="bracket" ? "active_ul" : " main_ul"} lg:w-36 inline-block text-white text-sm font-medium m-0 uppercase text-center cursor-pointer py-4 lg:py-0 px-4 lg:px-0`}
                                        onClick={() => {
                                            setActiveTab("bracket");
                                        }}
                                    >
                                        Bracket
                                    </li>
                                    <li
                                        className={`${activeTab ==="participants" ? "active_ul" : " main_ul"} lg:w-36 inline-block text-white text-sm font-medium m-0 uppercase text-center cursor-pointer py-4 lg:py-0 px-4 lg:px-0`}
                                        onClick={() => {
                                            setActiveTab("participants");
                                        }}
                                    >
                                        Participants
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Tabs;
