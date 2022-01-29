import React from "react";
import { useState } from "react";
import Banner from "../components/tournamnet-details/banner/banner";
import Header from "../components/tournamnet-details/header/header";
import BannerPlatforms from "../components/tournamnet-details/banner-platforms/banner-platforms";
import TournamnetInfo from "../components/tournamnet-details/tournament-info/tournament-info";
import Tabs from "../components/tournamnet-details/tabs/tabs";
import Footer from "../components/tournamnet-details/footer/footer";
import Matches from "../components/tournamnet-details/matches/matches";
import Rules from "../components/tournamnet-details/rules/rules";
import Rounds from "../components/tournamnet-details/rounds/rounds";
import Participants from "../components/tournamnet-details/participants/participants";
import Brackets from "../components/tournamnet-details/brackets/brackets"
const Tournament = () => {
    const [activetab, setActiveTab] = useState("matches");
    const activeTabHandler = (value) => {
        console.log("value", value);
        switch (value) {
            case "matches":
                return <Matches />;
            case "rules":
                return <Rules />;
            case "rounds":
                return <Rounds />;
            case "bracket":
                return <Brackets />;
            case "participants":
                return <Participants />;
            default:
                return <Matches />;
        }
    };

    return (
        <div>
            <Header />
            <Banner />
            <BannerPlatforms />
            <TournamnetInfo />
            <Tabs activeTab={activetab} setActiveTab={setActiveTab} />
            <div className="tournament_tabs_common_color_section">{activeTabHandler(activetab)}</div>
            <Footer />
        </div>
    );
};
export default Tournament;
