import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Video from "@components/shared/video";

const MatchItem = ({
    title,
    registeredTeams,
    date,
    slug,
    video_link,
    teamImage1,
    teamImage2,
}) => {
    // Video Modal Popup
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);

    return <h1></h1>;
};

export default MatchItem;
