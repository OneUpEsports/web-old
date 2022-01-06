/* eslint-disable prettier/prettier */
import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { logo } from "./oneupgame.png";

const Socials = () => {
    const titleStyle = "text-white text-center  mb-2";
    const containerStyle =
        " max-w-xl  text-black m-auto my-auto text-center justify-items-center  justify-center items-center";
    const links =
        "text-white text-center mt-5 p-5 border-2 block ml-auto mr-auto hover:bg-white";
    const body = "text-white bg-white text-white text-sm";
    const profilepicture = "text-white text-center p-8";
    const profilename = "text-white text-center p-8";
    const bottomtext = "text-white text-center mt-10 text-xl font-bold";
    const hover = "text-white bg-white";

    return (
        <>
            <Helmet title="OneUpGaming • Socials" defer={false} />
            <div className="text-white absolute bottom-0 right-0 bg-black m-0 h-full w-full  items-center mb-0 pb-0 py-24  overflow-x-hidden overflow-y-scroll">
                <div className={containerStyle}>
                    <h3 className={titleStyle}>OneUpGaming Socials</h3>
                </div>
                <div className={containerStyle}>
                    <title>OneUpGaming</title>
                    <img src={logo} className={profilepicture} />
                    {/* Profile name*/}
                    <div className={profilename}></div>
                    {/* Links*/}
                    <a
                        href="https://oneupgaming.eu/shop"
                        className={links}
                    >
                        OneUpGaming Shop
                    </a>
                    <a href="https://www.tiktok.com/@oneupgamingeu?" className={links}>
                        TikTok
                    </a>
                    <a
                        href="https://discord.com/invite/WH8ANZ73Vs"
                        className={links}
                    >
                        Discord
                    </a>
                    <a
                        href="https://www.instagram.com/oneupgamingeu/"
                        className={links}
                    >
                        Instagram
                    </a>
                    <a
                        href="https://twitter.com/OneUpGamingEU"
                        className={links}
                    >
                        Twitter
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCUA1kR6sFcWCpqVMMiKbPtw"
                        className={links}
                    >
                        YouTube
                    </a>
                    <a
                        href="https://www.twitch.tv/oneupgamingeu"
                        className={links}
                    >
                        Twitch
                    </a>
                    <div className={bottomtext}>OneUpGaming</div>
                </div>
            </div>
        </>
    );
};

export const query = graphql`
    query socialsPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        page(title: { eq: "socialsPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
    }
`;

export default Socials;
