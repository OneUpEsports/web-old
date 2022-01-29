import React, { useEffect, useState } from "react";
import { RoundsLists } from "../../../constants/tournament";
const Rounds = () => {
  const [roundsdata, setRoundsData] = useState([]);
  console.log("record", roundsdata);
  useEffect(() => {
    setRoundsData(RoundsLists);
  }, []);
  const showWinnerRecordsHandler = (index) => {
    if (roundsdata?.winnerRecords[index]?.show === true) {
      let duplicate = { ...roundsdata };
      duplicate.winnerRecords[index] = {
        ...duplicate?.winnerRecords[index],
        show: false,
      };
      setRoundsData(duplicate);
    } else {
      let duplicate = { ...roundsdata };
      duplicate.winnerRecords[index] = {
        ...duplicate?.winnerRecords[index],
        show: true,
      };
      setRoundsData(duplicate);
      console.log("duplicte", duplicate);
    }
  };
  const showLoserRecordsHandler = (index) => {
    if (roundsdata?.loserRecords[index]?.show === true) {
      let duplicate = { ...roundsdata };
      duplicate.loserRecords[index] = {
        ...duplicate?.loserRecords[index],
        show: false,
      };
      setRoundsData(duplicate);
    } else {
      let duplicate = { ...roundsdata };
      duplicate.loserRecords[index] = {
        ...duplicate?.loserRecords[index],
        show: true,
      };
      setRoundsData(duplicate);
    }
  };

  return (
    <div>
      {/* main_flex_div */}
      <div className="flex justify-center">
        {/* main_width_div */}
        <div className="w-full lg:w-4/5">
          {/* rounds_main_bg_color_div */}
          <div className=" rounds_main_bg_color_div p-6 my-10">
            {/* rounds_title_div */}
            <div className="pb-3.5">
              <p className="text-white text-sm font-bold upparcase ">Rounds</p>
            </div>
            {/* rounds_content_main_div_for_winner_Data */}
            <div className="rounds_content_main_div  ">
              {/* rounds_container_main_div */}
              {roundsdata?.winnerRecords?.map((single, index) => (
                <div className=" rounds_container_main_div  shadow shadow-current">
                  {/* rounds_status_main_div */}
                  <div
                    className="rounds_status_main_div flex items-center cursor-pointer py-4"
                    onClick={() => {
                      showWinnerRecordsHandler(index);
                    }}
                  >
                    {/* round_number_heading */}
                    <div className="w-44 px-7">
                      <p className="text-white text-base font-bold upparcase">
                        {single?.roundStatus}
                      </p>
                    </div>
                    {/* border_right */}
                    <div className="border_right "></div>
                    {/* best_of_heading */}
                    <div className=" best_of_heading px-6">
                      <p className="text-sm font-bold upparcase ">
                        {single.bestOFHeading}
                      </p>
                    </div>
                  </div>
                  {/* rounds_battles_main_div */}
                  {single?.show && (
                    <div className="rounds_battles_main_div p-6">
                      <div>
                        <div className="pb-3.5">
                          <p className="text-white text-base font-bold upparcase ">
                            {single?.rulesDetailsHeading}
                          </p>
                        </div>
                        <div className="flex flex-wrap ">
                          {single.roundsDetails?.map((roundsData) => (
                            <div className="rounds_details_main_div ">
                              {/* rounds_title_box_main_div */}
                              <div className=" rounds_title_box_main_div m-2.5">
                                {/* round_title */}
                                <div className="pb-3.5">
                                  <p className="text-white text-sm">
                                    {roundsData.roundTitle}
                                  </p>
                                </div>
                                {/* round_box */}
                                <div className="round_box rounded-none w-56 text-center">
                                  {/* boxe_content_div */}
                                  <div className="boxe_content_div pt-6">
                                    {/* stock_heading */}
                                    <div className="stock_heading relative flex justify-center">
                                      <p className="text-white text-xs font-semibold upparcase h-fit py-px px-5">
                                        {roundsData.boxData}
                                      </p>
                                    </div>
                                    {/* veto_map_heading */}
                                    <div className="py-3.5">
                                      <p className="text-xs text-white ">
                                        {roundsData.boxSubData}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rounds;
