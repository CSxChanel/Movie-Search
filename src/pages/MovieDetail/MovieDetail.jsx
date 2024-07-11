// src/pages/MovieDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../../Api";
import VideoTrailer from "./VideoTrailer";
// import "./MovieDetail.css";

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const movieDetails = await getMovieDetails(id);
                const movieVideos = await getMovieVideos(id);
                setMovie(movieDetails);
                setVideos(movieVideos);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovieData();
    }, [id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const youtubeVideos = videos.filter(
        video => video.site === "YouTube" && video.type === "Trailer"
    );

    return (
        <div className="mb-20">
            <img src={posterUrl} alt={`${movie.title} Poster`} />
            <div className="container">
                <h1 className="font-primary font-semibold text-3xl my-6">
                    {movie.title}
                </h1>
                <p className="font-bold my-2">
                    Release Date: {movie.release_date}
                </p>
                <p className="mb-2">Overview: {movie.overview}</p>
            </div>
            <div className="flex space-x-6 my-10 overflow-x-auto no-scrollbar scroll-smooth">
                {youtubeVideos.map(video => (
                    <div
                        key={video.id}
                        className="lg:w-[500px] md:w-[450px] w-[360px] lg:h-[300px] md:h-[250px] h-[200px] rounded-lg border"
                    >
                        <VideoTrailer video={video} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieDetail;
