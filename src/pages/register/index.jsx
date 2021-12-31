/* eslint-disable prettier/prettier */
import React from "react";
import { navigate } from "gatsby";
import SocialLinks from "../../components/subscribe-comps/socialLinks";
import OrBanner from "../../components/subscribe-comps/orBanner";

const Subscribe = () => {
    // Styles
    const containerStyle =
        " max-w-xl  text-white m-auto text-center justify-items-center  justify-center items-center";
    const mainTitleStyle = "max-w-md text-center m-auto";
    const socialLinksBoxStyle =
        "buttons min-w-fit  m-auto justify-items-center  justify-center items-center";
    const socialLinksTitleStyle = "text-center text-base mb-2";
    const signUpBtnStyle =
        "bg-indigo-900 rounded block text-white w-64 h-10 mt-2 mb-4 text-sm font-bold  m-auto ";

    return (
        <div className=" absolute bottom-0 right-0  bg-black m-0 h-full  w-full items-center  m-0 p-0 py-24 overflow-x-hidden overflow-y-scroll">
            <div className={containerStyle}>
                <h2 className={mainTitleStyle}>
                    Be a part of the next Gaming Adventure.
                </h2>
                <br />
                <br />
                <div className={socialLinksBoxStyle}>
                    <h3 className={socialLinksTitleStyle}>
                        Create an Account with
                    </h3>
                    <SocialLinks />
                </div>
                <br />
                <OrBanner />

                <div>
                    <button
                        onClick={() => navigate("/register/email")}
                        className={signUpBtnStyle}
                    >
                        CONTINUE WITH EMAIL
                    </button>
                    <h4 className="text-gray-400 text-sm font-bold">
                        Already have an account?{" "}
                        <a
                            className="text-white cursor-pointer"
                            onClick={() => navigate("/login")}
                        >
                            Login instead
                        </a>
                    </h4>
                </div>
            </div>
        </div>
    );
};
export default Subscribe;
