// Home.jsx
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
// Components
import NavbarDate from "../components/NavbarDate/NavbarDate";
import MovieNowPlaying from "../components/MoviesSlider/MovieNowPlaying.jsx";
import MovieTrending from "../components/MoviesSlider/MovieTrending";
import MoviePopular from "../components/MoviesSlider/MoviePopular";
import MovieTopRated from "../components/MoviesSlider/MovieTopRated.jsx";
import MovieUpcoming from "../components/MoviesSlider/MovieUpcoming";
import SearchMovie from "../components/SearchMovie";
// Utils
import Banner from "../utils/Banner.jsx";
// import ButtonUp from "../utils/ButtonUp";
import NavMenu from "../components/NavMenu/NavMenu.jsx";
import SkeletonHome from "./SkeletonHome.jsx";
const Home = ({ changeBackground }) => {
    const navigate = useNavigate();
    const handleTvDiscover = () => {
        navigate("/tv-discover");
    };
    const handleMovieDiscover = () => {
        navigate("/movie-discover");
    };
    //Loadong & Skeleton
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 250);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SkeletonHome />;
    }

    return (
        <main id="home">
            <NavbarDate />
            <Banner />
            <SearchMovie />
            <MovieUpcoming />
            <MovieNowPlaying />
            <MovieTrending />
            <MovieTopRated />
            <MoviePopular />
            <NavMenu
                changeBackground={changeBackground}
                onClick1={handleTvDiscover}
                text1={"Tv-Show"}
                onClick2={handleMovieDiscover}
                text2={"All-Movie"}
            />
        </main>
    );
};

export default Home;
