import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getTvDetails, getTvPlaying } from "../../Api";
import TvPlaying from "./TvPlaying.jsx";
import TvSkeletonDetail from "./TvSkeletonDetail.jsx";
import GetAktor from "../../components/getAktor/getAktor.jsx";
import TvRecomend from "../../components/TvSlider/TvRecomend.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";

const TvDetail = ({ changeBackground }) => {
    const { id } = useParams();
    const [tv, setTv] = useState(null);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        const fetchTvData = async () => {
            try {
                const tvInDetails = await getTvDetails(id);
                const tvInVideos = await getTvPlaying(id);
                setTimeout(() => {
                    setTv(tvInDetails);
                    setVideos(tvInVideos);
                    setIsLoading(false);
                }, 500);
            } catch (error) {
                console.error("Error fetching tv data:", error);
            }
        };

        fetchTvData();
    }, [id]);

    if (isLoading) {
        return (
            <>
                <TvSkeletonDetail />
            </>
        );
    }

    const backdropUrl = `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`;
    const posterUrl = `https://image.tmdb.org/t/p/w500${tv.poster_path}`;
    const youtubeVideos = videos.filter(
        video => video.site === "YouTube" && video.type === "Trailer"
    );

    return (
        <>
            <Helmet>
                <title>{tv.name}</title>
                <meta name="description" content={tv.overview} />
                <meta property="og:title" content={tv.name} />
                <meta property="og:description" content={tv.overview} />
                <meta property="og:image" content={backdropUrl} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Movie Search" />
            </Helmet>
            <div className="mb-28 min-h-screen">
                <div className="relative">
                    <img
                        className="w-full h-[300px] md:h-auto object-cover object-center"
                        src={backdropUrl}
                        alt={`${tv.name} Poster`}
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
                        alt={tv.name}
                    />
                    <div className="flex-col">
                        <h1 className="font-primary font-semibold text-xl md:text-3xl my-2">
                            {tv.name}
                        </h1>
                        <div className="font-bold md:text-2xl flex">
                            Genres : &nbsp;
                            <ul className="list-disc list-inside">
                                {tv.genres.map(genre => (
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
                            {tv.first_air_date}
                        </span>
                    </p>

                    <p className="font-bold md:text-2xl my-2">
                        Status :{" "}
                        <span className="bg-slate-700 px-2 rounded-xl">
                            {tv.status}
                        </span>
                    </p>
                    <p className="font-bold md:text-2xl my-2">
                        Production_Countries :{" "}
                        <span className="bg-slate-700 px-2 rounded-xl">
                            {tv.production_countries
                                .map(country => country.name)
                                .join(", ")}
                        </span>
                    </p>
                    <p className="mb-2 font-bold md:text-2xl">
                        Overview :{" "}
                        <span className="bg-slate-700 px-2 rounded-xl text-sm md:text-xl">
                            {tv.overview}
                        </span>
                    </p>
                    <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 space-x-5">
                        <span role="img" arial-lable="start">
                            ⭐&nbsp;
                        </span>
                        Vote : {tv.vote_average}
                        <span role="img" arial-lable="start">
                            ⭐&nbsp;
                        </span>
                        Popularity : {tv.popularity}
                    </p>
                </div>
                <GetAktor />
                <div className="my-4 mx-4">
                    <p className="font-bold md:text-2xl">
                        Production Companies:
                    </p>
                    <div className="flex space-x-2 overflow-x-auto">
                        {tv.production_companies.map(company => (
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
                            <TvPlaying video={video} />
                        </div>
                    ))}
                </div>
                <TvRecomend />
                <NavMenu changeBackground={changeBackground} />
            </div>
        </>
    );
};

export default TvDetail;
