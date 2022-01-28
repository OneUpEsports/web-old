import Team from "../../../../static/icons/team.png";
import Arrow from "../../../../static/icons/arrow.png";
import Avatar from "../../../../static/icons/avatar.png";
import Crown from "../../../../static/icons/crown.png";
import React, { useEffect, useState } from "react";
import { participants } from "../../../constants/tournament";
const Participants = () => {
  const [participantsdata, setParticipantsData] = useState([]);
  useEffect(() => {
    setParticipantsData(participants);
  }, []);

  const CollapsibleHandler = (index) => {
    //   console.log("getdata", participants[index].show)
    if (participants[index]?.show === false) {
      let duplicate = [...participants];
      duplicate[index].show = true;
      setParticipantsData(duplicate);
    } else {
      let duplicate = [...participants];
      duplicate[index].show = false;
      setParticipantsData(duplicate);
    }
  };
  return (
    <div>
      {/* main_flex_div */}
      <div className="flex justify-center">
        {/* main_width_div */}
        <div className="w-full lg:w-4/5">
          {/* participants_main_div  */}
          <div className=" participants_main_div flex flex-wrap py-16 px-2 ">
            {participantsdata?.map((single, index) => (
              <div className="w-full lg:w-2/6 px-2 py-2">
                <div className="card_div bg-black flex flex-col rounded ">
                  {/* image_title_arrow_main_div */}
                  <div
                    className="cursor-pointer image_title_arrow_main_div flex"
                    onClick={() => {
                      CollapsibleHandler(index);
                    }}
                  >
                    {/* image_div */}
                    <div>
                      <img
                        src={Team}
                        alt=""
                        className="h-16 border border-solid border-l-black border-t-black border-b-black rounded-l"
                      />
                    </div>
                    {/* title_arrow_div */}
                    <div className=" title_arrow_div flex items-center justify-between lg:w-4/5 pl-2.5">
                      {/* title_div */}
                      <div>
                        <p className="text-white text-sm font-bold">
                          {single.title}
                        </p>
                      </div>
                      {/* arrow_div */}
                      <div  className={` ${single.show ? "arrow_div" : "arrow_div_close" }  flex items-center`}>
                        <img src={Arrow} alt="" className="h-5" />
                      </div>
                    </div>
                  </div>
                  {/* drop_down_div */}
                  {single?.show ? (
                    <div className="drop_down_div bg-black rounded-b">
                      {/* winner_div */}
                      <div className="flex items-center py-2.5 px-4">
                        {/* image_div */}
                        <div>
                          <img
                            src={Avatar}
                            alt=""
                            className="h-10 rounded-3xl"
                          />
                        </div>
                        {/* title_div */}
                        <div className="pl-2 pr-7">
                          <p className="text-white text-sm font-normal">
                            {single.player1}
                          </p>
                        </div>
                        {/* crown_image */}
                        <div>
                          <img src={Crown} alt="" className="h-7" />
                        </div>
                      </div>
                      {/* loser_div */}
                      <div className="flex items-center py-2.5 px-4">
                        {/* image_div */}
                        <div>
                          <img
                            src={Avatar}
                            alt=""
                            className="h-10 rounded-3xl"
                          />
                        </div>
                        {/* title_div */}
                        <div className="pl-2 pr-7">
                          <p className="text-white text-base font-normal">
                            {single.player2}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Participants;
