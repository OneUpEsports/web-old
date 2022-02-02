import React from "react";
import Matches from "./Matches";
import Players from "./Players";
import Settings from "./Settings";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap mt-6 ">
        <div className="w-full">
          <ul className="flex mb-0 list-none lg:flex-wrap pt-3 pb-4 lg:flex-row flex-col" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-md font-bold uppercase px-5 py-3  block  " +
                  (openTab === 1
                    ? " border-b-4 border-b-[#8d34e4]" 
                    : undefined)
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Matches
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-md font-bold uppercase px-5 py-3  rounded block  " +
                  (openTab === 2
                    ? " border-b-4 border-b-[#8d34e4]" 
                    : undefined)
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Players
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-md font-bold uppercase px-5 py-3  rounded block  " +
                  (openTab === 3
                    ? " border-b-4 border-b-[#8d34e4]" 
                    : undefined)
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Settings
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block m-auto" : "hidden"} id="link1">
                  <Matches/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Players/>
                </div>
                <div className={openTab === 3 ? "block m-auto" : "hidden"} id="link3">
                  <Settings/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color="[#8701e4]" />
    </>
  );
}
