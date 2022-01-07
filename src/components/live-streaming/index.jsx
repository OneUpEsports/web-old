import React, { Fragment, useState } from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Video from "@components/shared/video";

const LiveStreaming = ({ title, image, video_link }) => {
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <div className="gaming_video_thumb relative inline-block w-auto">
                <GatsbyImage
                    className="h-260 md:h-auto"
                    image={getImage(image)}
                    alt=""
                />
            </div>
        </Fragment>
    );
};
LiveStreaming.propTypes = {
    title: PropTypes.string,
    image: PropTypes.object,
    video_link: PropTypes.string,
};
export default LiveStreaming;
