// src/pages/MovieDetail.jsx
import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../../Api";
import VideoTrailer from "./VideoTrailer";
import SkeletonDetail from "./SkeletonDetail.jsx";
import GetAktor from "../../components/getAktor/getAktor.jsx";
import MovieRecomend from "../../components/MoviesSlider/MovieRecomend.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";


const MovieDetail = ({ changeBackground }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        const fetchMovieData = async () => {
            try {
                const movieDetails = await getMovieDetails(id);
                const movieVideos = await getMovieVideos(id);
                setTimeout(() => {
                    setMovie(movieDetails);
                    setVideos(movieVideos);
                    setIsLoading(false);
                }, 500);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovieData();
    }, [id]);

    if (isLoading) {
        return <SkeletonDetail />;
    }
    const backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const youtubeVideos = videos.filter(
        video => video.site === "YouTube" && video.type === "Trailer"
    );
    const getImageUrl = (image, baseUrl = "https://image.tmdb.org/t/p/w500") => {
    return `${baseUrl}${image}`;
    };

    return (
        <>
            <Helmet>
                <meta
                    property="og:image"
                    content="https://cpsudrajat-movie.vercel.app/bg-movie.png"
                />
                
                <title>{movie.title}</title>
                <meta name="description" content={movie.overview} />
                <meta property="og:title" content={movie.title} />
                <meta property="og:description" content={movie.overview} />

                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Movie Search" />
                                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={movie.title} />
                <meta name="twitter:description" content={movie.overview} />
                <meta
                    name="twitter:image"
                    content={
                        movie.poster_path ? getImageUrl(movie.poster_path) : ""
                    }
                />
            </Helmet>
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
                        className="mr-5 z-20 md:-my-36 -my-24 mb-14 md:mb-20 w-[45%] md:w-[50%] h-auto md:h-auto object-cover object-center border-2 rounded-2xl"
                        src={posterUrl}
                        alt={movie.title}
                    />
                    <div className="flex-col">
                        <h1 className="font-primary font-semibold text-xl md:text-3xl my-2">
                            {movie.title}
                        </h1>
                        <div className="font-bold md:text-2xl flex">
                            Genres : &nbsp;
                            <ul className="list-disc list-inside">
                                {movie.genres.map(genre => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <p className="font-bold md:text-2xl my-2">
                        Release Date :
                        <span className="bg-slate-700 px-2 rounded-xl">
                            {movie.release_date}
                        </span>
                    </p>

                    <p className="font-bold md:text-2xl my-2">
                        Status :{" "}
                        <span className="bg-slate-700 px-2 rounded-xl">
                            {movie.status}
                        </span>
                    </p>
                    <p className="font-bold md:text-2xl my-2">
                        Production_Countries :{" "}
                        <span className="bg-slate-700 px-2 rounded-xl">
                            {movie.production_countries
                                .map(country => country.name)
                                .join(", ")}
                        </span>
                    </p>
                    <p className="mb-2 font-bold md:text-2xl">
                        Overview :{" "}
                        <span className="bg-slate-700 px-2 rounded-xl text-sm md:text-xl">
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
                    <p className="font-bold md:text-2xl">
                        Production Companies:
                    </p>
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
                <h2 className="ml-4 my-5 text-xl md:text-3xl font-primary">
                    Trailer
                </h2>
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
                <NavMenu changeBackground={changeBackground} />
            </div>
        </>
    );
};

export default MovieDetail;
