import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

const Tos = () => {
    const titleStyle = "text-center  mb-2";
    const containerStyle =
        " max-w-xl  text-white m-auto my-auto text-center justify-items-center  justify-center items-center";

    return (
        <>
            <Helmet title="OneUpGaming • ToS" defer={false} />
            <div className=" absolute bottom-0 right-0 bg-black m-0 h-full w-full  items-center mb-0 pb-0 py-24  overflow-x-hidden overflow-y-scroll">
                <div className={containerStyle}>
                    <h3 className={titleStyle}>Terms of Service</h3>
                </div>
                <h4 className={containerStyle}>Text goes here, yes.</h4>
            </div>
        </>
    );
};

export const query = graphql`
    query termsPageQuery {
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
        page(title: { eq: "termsPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
    }
`;

export default Tos;
