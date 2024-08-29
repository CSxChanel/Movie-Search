// src/components/VideoTrailer.jsx

import React from "react";
import PropTypes from "prop-types";

const TvPlaying = ({ video }) => {
    return (
        <iframe
            key={video.id}
            width="360"
            height="225"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="lg:w-[500px] md:w-[450px] lg:h-[300px] md:h-[250px] rounded-lg overflow-hidden"
        ></iframe>
    );
};

TvPlaying.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};

export default TvPlaying;
