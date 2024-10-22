/* eslint-disable prettier/prettier */
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

/*
<StaticImage src="../../data/images/logo.webp" alt="OneUpGaming" />
*/

const Logo = () => {
    return (
        <Link to="/">
            <StaticImage src="../../data/images/logo.webp" alt="OneUpGaming" />
        </Link>
    );
};
export default Logo;
