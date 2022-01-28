import React, { useEffect, useState } from "react";
import Placeholder from "../../../../static/icons/placeholder.png";
import Path from "../../../../static/icons/path.png";
import Down from "../../../../static/icons/down.png";
import Screenshot1 from "../../../../static/icons/screenshot1.png";
import Screenshot2 from "../../../../static/icons/screenshot2.png";
import { PrizeList } from "../../../constants/tournament";
const Rules = () => {
    const [prizedetails, setPrizeDetails] = useState();
    const [collapsible, setCollapsible] = useState({
        firstCollapsible: false,
        secondCollapsible: false,
        thirdCollapsible: false,
        thirdCollapsible: false,
        fourthCollapsible: false,
        fifthCollapsible: false,
        sixthCollapsible: false,
    });
    const CollapsibleHandler = (collapsiblekey) => {
        console.log("collapsiblekey", collapsiblekey);
        if (collapsible[collapsiblekey] === true) {
            let duplicate = { ...collapsible };
            duplicate[collapsiblekey] = false;
            console.log("", duplicate);
            setCollapsible(duplicate);
        } else {
            let duplicate = { ...collapsible };
            duplicate[collapsiblekey] = true;
            console.log("specific", duplicate[collapsiblekey]);
            console.log("duplicate", duplicate);
            setCollapsible(duplicate);
        }
    };
    useEffect(() => {
        setPrizeDetails(PrizeList);
    });
    return (
        <div>
            {/* main_div */}
            <div className="flex justify-center ">
                {/* main_width_div */}
                <div className="w-full lg:w-4/5">
                    {/* reward_main_div */}
                    <div className="reward_main_div p-6 my-5">
                        {/* title_div */}
                        <div>
                            <p className=" text-center lg:text-left  text-white text-base font-bold">
                                Rewards
                            </p>
                        </div>
                        {/* reward_list_main_div */}
                        <div className="reward_list_main_div flex flex-col lg:flex-row justfify-center py-9 ">
                            {/* first_prize_main_div */}
                            {prizedetails?.map((single) => (
                                <div className="prize_main_div text-center flex flex-col items-center w-full lg:w-4/12 py-4 lg:py-0">
                                    {/* price_heading */}
                                    <div className="price_heading pb-4">
                                        <p className="font-bold ">
                                            {single.prize}
                                        </p>
                                    </div>
                                    {/* places_div */}
                                    <div className="places_div flex  items-center">
                                        {/* dot_div */}
                                        <div
                                            className={` ${single.circleColor} w-2.5 h-2.5 rounded-3xl`}
                                        ></div>
                                        {/* place_title_div */}
                                        <div className="place_title_div px-2">
                                            <p className="text-white uppercase">
                                                {single.place}
                                            </p>
                                        </div>
                                    </div>
                                    {/* reward_sponser_div */}
                                    <div className="reward_sponser_div pt-2.5">
                                        <p className="text-xs ">
                                            {single.sponser}
                                        </p>
                                    </div>
                                    {/* image_text_div */}
                                    <div className="flex items-center pt-1.5">
                                        {/* image_div */}
                                        <div>
                                            <img src={Path} alt="" />
                                        </div>
                                        <p className="text-sm text-white font-bold pl-2">
                                            {single.Placeholdertext}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* rules_main_div */}
                    <div className="rules_main_div my-12 lg:my-0  pb-0 lg:pb-14 pt-0 lg:pt-8">
                        {/* green_bar_div */}
                        <div className="green_bar_div my-4 w-16 h-0.5"></div>
                        {/* General_rules */}
                        <div
                            className="General_rules bg-black rounded w-full"
                            onClick={() => {
                                CollapsibleHandler("firstCollapsible");
                            }}
                        >
                            {/*title_arrow_main_div */}
                            <div className=" green_border  cursor-pointer my-2 title_arrow_main_div rounded-l-sm ">
                                {/* title_arrow_div */}
                                <div className="  title_arrow_div p-3  title_arrow_div flex items-center justify-between  pl-2.5">
                                    {/* title_div */}
                                    <div className="px-3">
                                        <p className="text-white text-base font-semibold">
                                            GENERAL RULES
                                        </p>
                                    </div>
                                    {/* down_arrow_div */}
                                    <div
                                        className={`${
                                            collapsible?.firstCollapsible
                                                ? "down_arrow_div"
                                                : "arrow_div"
                                        } flex items-center`}
                                    >
                                        <img
                                            src={Down}
                                            alt=""
                                            className="h-9"
                                        />
                                    </div>
                                </div>
                                {/* dropdown_div */}
                                {collapsible?.firstCollapsible === true && (
                                    <div className=" dropdown_div bg-black rounded-b">
                                        {/* text_div */}
                                        <div className="text_div py-3 px-6 text-sm">
                                            <p className="text-white">
                                                In case of trouble encountered
                                                during the match in progress, a
                                                referee may be called
                                            </p>
                                            <p className="text-white">
                                                They will naturally need as much
                                                admissible evidence as possible
                                                to make a good decision (bear in
                                                mind that they can't see
                                                everything that is happening to
                                                you!) Please upload your piece
                                                of evidence as soon as possible,
                                                before your referee comes into
                                                your game chat on Nicecactus.
                                                Note that any abusive request
                                                will be punished
                                            </p>
                                            <p className="text-white">
                                                Please respect your opponents
                                                and referees, esports have to be
                                                gentlemen disciplines. Abiding
                                                by the rules means playing in a
                                                fair environment, and only this
                                                will let you show your real
                                                skills.
                                                <br /> Talking courteously with
                                                your opponent(s), even if your
                                                game goes wrong, will always
                                                make you lose less time and
                                                generate less stress. <br />{" "}
                                                <br />
                                                1.Ensure that your game accounts
                                                are up-to-date:{" "}
                                            </p>
                                            <p className="text-white flex">
                                                <img
                                                    src={Placeholder}
                                                    alt="Logos jeux plateforme"
                                                />
                                                <img
                                                    src={Placeholder}
                                                    alt=""
                                                    className="pl-2"
                                                />
                                            </p>
                                            <p className="text-white">
                                                {" "}
                                                <strong>
                                                    1.1 Check your game accounts
                                                    :
                                                </strong>
                                            </p>
                                            <p className="text-white">
                                                Make sure to check your game
                                                accounts before registering for
                                                a tournament, if you can not
                                                modify your game accounts,
                                                please contact a referee before
                                                starting your match so that he
                                                may modify it.
                                            </p>
                                            <p className="text-white">
                                                To modify a game account on the
                                                site, click on your profile
                                                picture, then "My game accounts"
                                                and finally fill in the field
                                                corresponding to the game
                                                account required by the
                                                tournament you are participating
                                                in.
                                            </p>
                                            <p className="text-white">
                                                1.2 During the tournament:
                                            </p>
                                            <p className="text-white">
                                                During a tournament, it is
                                                imperative to check your
                                                opponent's ID before the start
                                                of the match, if you start the
                                                game despite the presence of an
                                                opponent in violation on this
                                                point, you will no longer be
                                                able to claim the win of the
                                                match by contesting this issue
                                                afterwards.
                                                <b />
                                                During a tournament, it is
                                                imperative to check your
                                                opponent's ID before the start
                                                of the match, if you start the
                                                game despite the presence of an
                                                opponent in violation on this
                                                point, you will no longer be
                                                able to claim the win of the
                                                match by contesting this issue
                                                afterwards.{" "}
                                            </p>
                                            <p className="text-white">
                                                <strong>
                                                    2. Preparation and launch of
                                                    the game :
                                                </strong>
                                            </p>
                                            <p className="text-white">
                                                2.1 Each captain has 10 minutes
                                                to confirm their current
                                                attendance and participation in
                                                the game by clicking on the
                                                button "Ready" (in the Matches
                                                tab). If they don't do it on
                                                time, their team will be
                                                automatically disqualified.
                                                <br />
                                                2.2 Once you claim that your
                                                team is ready, the game must be
                                                launched as soon as possible or
                                                a referee will be entitled to
                                                make you lose the first round,
                                                or even more. (concerning the
                                                single-round matches, this will
                                                be a direct disqualification)
                                                <br />
                                                2.3 When the game launches, the
                                                game chat creates and has to be
                                                used by captains to get in touch
                                                with their opponent, and with
                                                the Nicecactus staff (please
                                                note that he is not going to
                                                come into your game chat until
                                                you call him with the dedicated
                                                button).
                                            </p>
                                            <p className="text-white">
                                                Remember to check all game
                                                settings before playing.
                                            </p>
                                            <p className="text-white">
                                                Playing the game with wrong
                                                settings means you agree to play
                                                with these settings, even if the
                                                rules are not right.
                                                <br />
                                                If you play that game, it will
                                                be considered a valid game and
                                                you won't have the ability to
                                                ask for a referee if you lose
                                                it.
                                                <br />
                                                If you don't accept wrong
                                                settings, please immediately
                                                stop the game, ask your opponent
                                                to set them correctly, and if
                                                needed, ask for a referee
                                            </p>
                                            <p className="text-white">
                                                <strong>
                                                    3.During the game:
                                                </strong>
                                            </p>
                                            <p className="text-white">
                                                3.1 The host is indicated on the
                                                match sheet. The details
                                                regarding the preparation and
                                                the running of the game is
                                                included in the game rules
                                                section.
                                                <br />
                                                3.2 If a connection problem
                                                occurs, you need to refer to the
                                                connection/disconnection section
                                                found in the game rules.
                                                <br />
                                                3.3 Once the game is started,
                                                please use the Nicecactus match
                                                chat to get in touch with your
                                                opponents; Please monitor the
                                                game progress on G4G at least
                                                every five minutes to
                                                avoidrunning the risk of being
                                                disqualified for not replying to
                                                the referee or not seeing that
                                                your opponent is trying to
                                                cheat.
                                                <br />
                                                3.4 At the end of the game you
                                                have to validate the results and
                                                to behave like a gentleman: fair
                                                play is the key to a good
                                                experience.{" "}
                                            </p>
                                            <p className="text-white">
                                                <strong>
                                                    4. Non-compliance to Fair
                                                    Play Regulations :
                                                </strong>
                                            </p>
                                            <p className="text-white">
                                                4.1 Keyboard and mouse on
                                                console: Unless mentioned
                                                otherwise in the tournament's
                                                rules, the use of keyboard and
                                                mouse and additional equipment
                                                offering an advantage (cronus,
                                                rapid fire..) on console is
                                                strictly forbidden, if this
                                                violation is formally noticed
                                                the player in question will be
                                                immediately disqualified and his
                                                opponent will be designated as
                                                the winner.
                                            </p>
                                            <p className="text-white">
                                                In case of recurrence of this
                                                violation, the player will be
                                                banished from the site
                                            </p>
                                            <p className="text-white">
                                                4.2 Insults / bad behavior: You
                                                must show respect to your
                                                opponent, if a bad behavior is
                                                denounced and proven by your
                                                opponent you will receive a
                                                penalty ranging from
                                                disqualification to the final
                                                exclusion of the site.
                                            </p>
                                            <p className="text-white">
                                                Rewards will be paid to the
                                                winner(s) of the tournaments
                                                within 30 days for Freemium and
                                                within 3 days for Premium, after
                                                having fulfilled the conditions
                                                specified in article 6.3.1. of
                                                our Terms of Use
                                            </p>
                                            <p className="last_p text-white">
                                                If you want to know the terms
                                                applicable to any use or
                                                consultation of
                                                <span>
                                                    https://www.nicecactus.gg
                                                </span>
                                                , you can consult our{" "}
                                                <span>terms of use.</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Contact & Support */}
                        <div className="General_rules bg-black rounded w-full">
                            {/*title_arrow_main_div */}
                            <div className=" gray_border  cursor-pointer my-2 title_arrow_main_div rounded-l-sm ">
                                {/* title_arrow_div */}
                                <div
                                    className="  title_arrow_div p-3  title_arrow_div flex items-center justify-between  pl-2.5"
                                    onClick={() => {
                                        CollapsibleHandler("secondCollapsible");
                                    }}
                                >
                                    {/* title_div */}
                                    <div className="px-3">
                                        <p className="text-white text-base font-semibold">
                                            Contact & Support
                                        </p>
                                    </div>
                                    {/* down_arrow_div */}
                                    <div
                                        className={`${
                                            collapsible?.secondCollapsible
                                                ? "down_arrow_div"
                                                : "arrow_div"
                                        } flex items-center`}
                                    >
                                        <img
                                            src={Down}
                                            alt=""
                                            className="h-9"
                                        />
                                    </div>
                                </div>
                                {/* dropdown_div */}
                                {collapsible?.secondCollapsible === true && (
                                    <div className=" dropdown_div bg-black rounded-b">
                                        {/* text_div */}
                                        <div className="text_div py-3 px-6 text-sm">
                                            <p className="text-white support_contact_p">
                                                To join the community or for any
                                                inquiries about Brawlhalla join
                                                us at: <span>Twitter</span>,{" "}
                                                <span>Facebook</span> et{" "}
                                                <span>Discord.</span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* /* Game Preparation */}
                        <div className="General_rules  rounded w-full">
                            {/*title_arrow_main_div */}
                            <div className=" gray_border  cursor-pointer my-2 title_arrow_main_div rounded-l-sm ">
                                {/* title_arrow_div */}
                                <div
                                    className="  title_arrow_div p-3  title_arrow_div flex items-center justify-between  pl-2.5"
                                    onClick={() => {
                                        CollapsibleHandler("thirdCollapsible");
                                    }}
                                >
                                    {/* title_div */}
                                    <div className="px-3">
                                        <p className="text-white text-base font-semibold">
                                            Game Preparation
                                        </p>
                                    </div>
                                    {/* down_arrow_div */}
                                    <div
                                        className={`${
                                            collapsible?.thirdCollapsible
                                                ? "down_arrow_div"
                                                : "arrow_div"
                                        } flex items-center`}
                                    >
                                        <img
                                            src={Down}
                                            alt=""
                                            className="h-9"
                                        />
                                    </div>
                                </div>
                                {/* dropdown_div */}
                                {collapsible?.thirdCollapsible === true && (
                                    <div className=" dropdown_div bg-black rounded-b">
                                        {/* text_div */}
                                        <div className="text_div py-3 px-6 text-sm">
                                            <p className="text-white Game_preparation ">
                                                This tournament is played in
                                                2vs2 in <span>KUNG FOOT</span>{" "}
                                                mode, and on Europe server.
                                                <br />
                                                You must have the{" "}
                                                <strong>
                                                    "Crossplay"
                                                </strong>{" "}
                                                option activated.
                                                <br />
                                                <br />
                                                The captain of the team
                                                designated as HOST on the site
                                                is in charge of creating a
                                                custom game room and then give
                                                the number to his opponent in
                                                the match chat.
                                                <br />
                                                <br />{" "}
                                                <u>
                                                    {" "}
                                                    <strong>
                                                        Game mode:
                                                    </strong>{" "}
                                                </u>{" "}
                                                <span>KUNG FOOT</span>{" "}
                                            </p>
                                            <p className="text-white Game_preparation_second_p">
                                                Team Damage: <span>Off</span>
                                                <br />
                                                Match Time: <span>8:00</span>
                                                <br />
                                                Score to Win: <span>8</span>
                                                <br />
                                                Damage: <span>100%</span>
                                                <br />
                                            </p>
                                            <p className="text-white">
                                                <br />
                                                <br />
                                                <br />
                                                <img src={Screenshot1} alt="" />
                                            </p>
                                            <p className="text-white">
                                                <br />
                                                <br />
                                                <u>
                                                    How to create a custom game
                                                    room ?
                                                </u>
                                            </p>
                                            <p className="text-white">
                                                In the main menu, click on{" "}
                                                <strong>
                                                    "Custom Game Room"
                                                </strong>{" "}
                                                then{" "}
                                                <strong>"Create room"</strong>{" "}
                                                (Europe) and finally{" "}
                                                <strong>"Private Room"</strong>.
                                            </p>
                                            <p className="text-white">
                                                Then, by clicking on
                                                <strong>"Settings"</strong>, you
                                                will need to select 2v2
                                                tournament mode as shown in the
                                                screenshot below:
                                            </p>
                                            <p className="text-white">
                                                <br />
                                                <img src={Screenshot2} alt="" />
                                            </p>
                                            <p className="text-white">
                                                <br />
                                                The game is now created and the
                                                code can be given in the match
                                                chat so that the opponent can
                                                join (the code is located at the
                                                top center of the screen and
                                                looks like this: #123456).
                                                <br />
                                                N.B: If you broadcast your games
                                                live, we advise you to hide the
                                                room number to prevent intruders
                                                from joining the room. <br />
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* /*GAME FORMAT */}
                        <div className="General_rules bg-black rounded w-full">
                            {/*title_arrow_main_div */}
                            <div className=" gray_border  cursor-pointer my-2 title_arrow_main_div rounded-l-sm ">
                                {/* title_arrow_div */}
                                <div
                                    className="  title_arrow_div p-3  title_arrow_div flex items-center justify-between  pl-2.5"
                                    onClick={() => {
                                        CollapsibleHandler("fourthCollapsible");
                                    }}
                                >
                                    {/* title_div */}
                                    <div className="px-3">
                                        <p className="text-white text-base font-semibold">
                                            GAME FORMAT
                                        </p>
                                    </div>
                                    {/* down_arrow_div */}
                                    <div
                                        className={`${
                                            collapsible?.fourthCollapsible
                                                ? "down_arrow_div"
                                                : "arrow_div"
                                        } flex items-center`}
                                    >
                                        <img
                                            src={Down}
                                            alt=""
                                            className="h-9"
                                        />
                                    </div>
                                </div>
                                {/* dropdown_div */}
                                {collapsible?.fourthCollapsible === true && (
                                    <div className=" dropdown_div bg-black rounded-b">
                                        {/* text_div */}
                                        <div className="text_div py-3 px-6 text-sm">
                                            <p className="text-white support_contact_p">
                                                The matches are played in three
                                                rounds (Bo3) for each round the
                                                first team in 10 points wins it.
                                                (except for the Grand Final
                                                which is played in Bo5, see next
                                                chapter). The first team who
                                                wins two rounds wins the whole
                                                match.
                                            </p>
                                            <p className="text-white">
                                                A ban of maps is to be made for
                                                each fight, the first team hits
                                                the maps until there are only
                                                three left, the second team then
                                                hits two of the three remaining
                                                maps to keep only the one to be
                                                played.
                                                <br /> Between each fight the
                                                choice of the map is alternated
                                                between the two teams.
                                                <br />
                                                This is given as an indication,
                                                the tournament mode of the game
                                                manages the settings
                                                automatically.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* /*GRAND FINAL */}
                        <div className="General_rules bg-black rounded w-full">
                            {/*title_arrow_main_div */}
                            <div className=" gray_border  cursor-pointer my-2 title_arrow_main_div rounded-l-sm ">
                                {/* title_arrow_div */}
                                <div
                                    className="  title_arrow_div p-3  title_arrow_div flex items-center justify-between  pl-2.5"
                                    onClick={() => {
                                        CollapsibleHandler("fifthCollapsible");
                                    }}
                                >
                                    {/* title_div */}
                                    <div className="px-3">
                                        <p className="text-white text-base font-semibold">
                                            GRAND FINAL
                                        </p>
                                    </div>
                                    {/* down_arrow_div */}
                                    <div
                                        className={`${
                                            collapsible?.fifthCollapsible
                                                ? "down_arrow_div"
                                                : "arrow_div"
                                        } flex items-center`}
                                    >
                                        <img
                                            src={Down}
                                            alt=""
                                            className="h-9"
                                        />
                                    </div>
                                </div>
                                {/* dropdown_div */}
                                {collapsible?.fifthCollapsible === true && (
                                    <div className=" dropdown_div bg-black rounded-b">
                                        {/* text_div */}
                                        <div className="text_div py-3 px-6 text-sm">
                                            <p className="text-white support_contact_p">
                                                The Grand Final is played in 5
                                                rounds (Bo5).
                                            </p>
                                            <p className="text-white GRAND_FINAL_second_P">
                                                If the team from the loser
                                                bracket wins, there will then be
                                                a bracket reset, i.e. a new Best
                                                of 5 will be played to decide
                                                the final winner.
                                                <br />
                                                <span>
                                                    In this case, you will not
                                                    have to enter a result on
                                                    the site before the end of
                                                    the second Best of 5.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* /*CONNECTION/DISCONNECTION */}
                        <div className="General_rules bg-black rounded w-full">
                            {/*title_arrow_main_div */}
                            <div className=" gray_border  cursor-pointer my-2 title_arrow_main_div rounded-l-sm ">
                                {/* title_arrow_div */}
                                <div
                                    className="  title_arrow_div p-3  title_arrow_div flex items-center justify-between  pl-2.5"
                                    onClick={() => {
                                        CollapsibleHandler("sixthCollapsible");
                                    }}
                                >
                                    {/* title_div */}
                                    <div className="px-3">
                                        <p className="text-white text-base font-semibold">
                                            CONNECTION/DISCONNECTION
                                        </p>
                                    </div>
                                    {/* down_arrow_div */}
                                    <div
                                        className={`${
                                            collapsible?.sixthCollapsible
                                                ? "down_arrow_div"
                                                : "arrow_div"
                                        } flex items-center`}
                                    >
                                        <img
                                            src={Down}
                                            alt=""
                                            className="h-9"
                                        />
                                    </div>
                                </div>
                                {/* dropdown_div */}
                                {collapsible?.sixthCollapsible === true && (
                                    <div className=" dropdown_div bg-black rounded-b">
                                        {/* text_div */}
                                        <div className="text_div py-3 px-6 text-sm">
                                            <p className="text-white support_contact_p">
                                                In order to guarantee an optimal
                                                playing experience, please check
                                                that your internet connection is
                                                stable before starting your
                                                tournament.
                                            </p>
                                            <p className="text-white GRAND_FINAL_second_P">
                                                If a player disconnects, the
                                                round will continue and the next
                                                round will be launched once the
                                                player is able to return to the
                                                lobby, however, based on fair
                                                play, players may agree to
                                                replay the match.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Rules;
