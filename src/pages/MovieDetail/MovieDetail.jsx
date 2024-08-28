// src/pages/MovieDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../../Api";
import VideoTrailer from "./VideoTrailer";
// import "./MovieDetail.css";
import SkeletonDetail from "./SkeletonDetail.jsx";
import GetAktor from "../../components/getAktor/getAktor.jsx";
import MovieRecomend from "../../components/MoviesSlider/MovieRecomend.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";

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
                setTimeout(() => {
                    setMovie(movieDetails);
                    setVideos(movieVideos);
                    setIsLoading(false);
                }, 500); // Delay selama 1 detik
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovieData();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen">
                <p className="font-semibold text-2xl my-5">Loading...</p>
                <div className="flex justify-center items-center">
                    <SkeletonDetail />
                </div>
            </div>
        );
    }

    const backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const youtubeVideos = videos.filter(
        video => video.site === "YouTube" && video.type === "Trailer"
    );

    return (
        <div className="mb-28 min-h-screen">
            <div className="relative">
                <img
                    className="w-full h-[300px] md:h-auto object-cover object-center"
                    src={backdropUrl}
                    alt={`${movie.title} Poster`}
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, transparent 100%)"
                    }}
                />
            </div>
            <div className="container flex">
                <img
                    className="z-20 md:-my-36 -my-24 mb-14 md:mb-20 w-[45%] md:w-[50%] h-auto md:h-auto object-cover object-center border-2 rounded-2xl"
                    src={posterUrl}
                    alt={movie.title}
                />
                <div className="flex-col px-5">
                    <h1 className="font-primary font-semibold text-xl my-2">
                        {movie.title}
                    </h1>
                    <p className="font-bold">
                        Genres :{" "}
                        <span className="bg-slate-700 px-2 rounded-xl">
                            {movie.genres.map(genre => genre.name).join(", ")}
                        </span>
                    </p>
                </div>
            </div>

            <div className="container">
                <p className="font-bold my-2">
                    Release Date :{" "}
                    <span className="bg-slate-700 px-2 rounded-xl">
                        {movie.release_date}
                    </span>
                </p>

                <p className="font-bold my-2">
                    Status :{" "}
                    <span className="bg-slate-700 px-2 rounded-xl">
                        {movie.status}
                    </span>
                </p>
                <p className="font-bold my-2">
                    Production_Countries :{" "}
                    <span className="bg-slate-700 px-2 rounded-xl">
                        {movie.production_countries
                            .map(country => country.name)
                            .join(", ")}
                    </span>
                </p>
                <p className="mb-2 font-bold">
                    Overview :{" "}
                    <span className="bg-slate-700 px-2 rounded-xl text-sm">
                        {movie.overview}
                    </span>
                </p>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 space-x-5">
                    <span role="img" arial-lable="start">
                        ⭐&nbsp;
                    </span>
                    Vote : {movie.vote_average}
                    <span role="img" arial-lable="start">
                        ⭐&nbsp;
                    </span>
                    Popularity : {movie.popularity}
                </p>
            </div>
            <GetAktor />
            <div className="my-4 mx-4">
                <p className="font-bold">Production Companies:</p>
                <div className="flex space-x-2 overflow-x-auto">
                    {movie.production_companies.map(company => (
                        <div
                            key={company.id}
                            className="flex items-center justify-center border rounded px-12 bg-emerald-700"
                        >
                            {company.logo_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                    alt={company.name}
                                    className="w-20 mr-2"
                                />
                            ) : (
                                <div className="w-20 h-12 bg-gray-200 flex items-center justify-center text-gray-600 px-14">
                                    No Logo
                                </div>
                            )}
                            <p>{company.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="ml-4 my-5 text-xl font-primary">Trailer</h2>
            <div className="flex space-x-6 my-5 mx-2 overflow-x-auto scroll-smooth">
                {youtubeVideos.map(video => (
                    <div
                        key={video.id}
                        className="lg:w-[500px] md:w-[450px] lg:h-[300px] md:h-[250px] w-[360px] h-[225px] rounded-lg border"
                    >
                        <VideoTrailer video={video} />
                    </div>
                ))}
            </div>
            <MovieRecomend />
            <NavMenu />
        </div>
    );
};

export default MovieDetail;
