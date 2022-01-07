import React from "react";
import Playstation from "../../../../static/icons/playstation.png";
import Info from "../../../../static/icons/info.png";
const Earning = () => {
  let list = [
    {
      id: 1,
      date: "24.4.2021, 20:00",
      type: "Bracket",
      plattform: Playstation,
      rule: "5v5 Wednasday Bomb",
      slot: "4/24",
      price: "20€",
      status: Info,
      earned: "16 Days Ago +3",
    },
    {
      id: 2,
      date: "24.4.2021, 20:00",
      type: "Bracket",
      plattform: Playstation,
      rule: "5v5 Wednasday Bomb",
      slot: "4/24",
      price: "20€",
      status: Info,
      earned: "16 Days Ago +3",
    },
    {
      id: 3,
      date: "24.4.2021, 20:00",
      type: "Bracket",
      plattform: Playstation,
      rule: "5v5 Wednasday Bomb",
      slot: "4/24",
      price: "20€",
      status: Info,
      earned: "16 Days Ago +3",
    },
  ];
  return (
    <div>
      {/* background_color_div */}
      <div className="background_color_div flex justify-center ">
        {/* main_container */}
        <div className="w-3/4">
          {/* downside_content_div */}
          <div className="downside_content_div mt-8 mb-12 ">
            {/* main_content_div */}
            <div className="main_content_div rounded-xl px-12 py-3">
              {/* heading */}
              <div>
                <h2 className="text-md text-white font-normal px-0 lg:px-8">
                  Earning History
                </h2>
              </div>
              {/* table_content */}
              <div className="table_content pt-6">
                {/* ul_headings */}
                <div className=" ul_headings  px-10 text-white w-full ">
                  {/* main_ul_headings */}
                  <ul className=" main_ul_headings w-full flex ">
                    <li className="w_12p">Date</li>
                    <li className="w_12p">Type</li>
                    <li className=" w_10p">Plattform</li>
                    <li className=" w_12p">Rule</li>
                    <li className=" w_10p">Slot</li>
                    <li className=" w_10p">Price</li>
                    <li className=" w_10p">Status</li>
                    <li className="w_18p text-center">Earned</li>
                  </ul>
                </div>
                {/* ul_body */}
                {list?.map((single) => (
                  <div className="list_border text-white text-sm flex  w-full rounded-md px-5 mt-1 mb-3 py-2">
                    {/* date_body */}
                    <ul className="date_body w-full flex items-center">
                      <li className="w_12p text-xs">{single.date}</li>
                      <li className="w_12p px-4 text-xs">{single.type}</li>
                      <li className="w_10p px-8">
                        <img src={single.plattform} alt="" className="h-3.5 " />
                      </li>
                      {/* rule */}
                      <li className="rule w_12p text-xs">
                        <span className="font-semibold">5v5</span>{" "}
                        Wednasday Bomb
                      </li>
                      <li className=" w_10p px-2 text-xs">{single.slot}</li>
                      <li className="w_10p px-2 text-xs">{single.price}</li>
                      <li className=" w_10p px-2 ">
                        <img src={single.status} alt="" className="h-3.5 " />
                      </li>
                      <li className="border_right "></li>
                      <li className="w_18p earned px-5 text-xs">
                        16 Days Ago <span>+3 EUR</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Earning;