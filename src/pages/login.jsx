/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from "react";
import SocialLinks from "../components/subscribe-comps/socialLinks";
import OrBanner from "../components/subscribe-comps/orBanner";
import InputField from "../components/subscribe-comps/inputField";

import { graphql } from "gatsby";

const Login = () => {
    // Styles
    const submitStyle =
        "cursor-pointer bg-indigo-900 rounded block text-center text-white w-72 h-10 mt-2 mb-4 text-sm font-bold  m-auto ";
    const titleStyle = "text-center  mb-2";
    const linkStyle = "text-gray-400 text-sm font-bold mb-1";
    const SocialLinksStyle =
        "min-w-fit  m-auto justify-items-center  justify-center items-center mb-24";
    const containerStyle =
        " max-w-xl  text-white m-auto my-auto text-center justify-items-center  justify-center items-center";

    return (
        <>
            <div className=" absolute bottom-0 right-0 bg-black m-0 h-full w-full  items-center mb-0 pb-0 py-24  overflow-x-hidden overflow-y-scroll">
                <div className={containerStyle}>
                    <h3 className={titleStyle}>Login with</h3>
                    <h4 className={titleStyle}>your OneUpGaming Account</h4>

                    <form className="relative my-4 ">
                        <InputField value={"Email"} type={"email"} />
                        <InputField value={"Password"} type={"password"} />
                        <br />
                        <input
                            type="submit"
                            value="LOG IN"
                            className={submitStyle}
                        />
                    </form>

                    <h4 className={linkStyle}>
                        <a className="cursor-pointer" href="/register">
                            Dont have an account yet?
                        </a>
                    </h4>
                    <h4 className={linkStyle}>
                        <a className="cursor-pointer">Forgot your password?</a>
                    </h4>
                    <br />
                    <OrBanner />
                    <br />
                    <div className={SocialLinksStyle}>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </>
    );
};

// Make a graphql query to get the data from the page
export const query = graphql`
    query loginPageQuery {
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
        page(title: { eq: "dashboardPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
    }
`;

export default Login;
