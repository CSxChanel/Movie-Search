// src/components/VideoTrailer.jsx

import React from "react";
import PropTypes from "prop-types";

const VideoTrailer = ({ video }) => {
    return (
        <iframe
            key={video.id}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg"
        ></iframe>
    );
};

VideoTrailer.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};

export default VideoTrailer;
