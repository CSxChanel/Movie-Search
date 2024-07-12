// Home.jsx

import React, { useState, useEffect } from "react";
// Components
import NavbarDate from "../components/NavbarDate/NavbarDate";
import MovieTrending from "../components/MoviesSlider/MovieTrending";
import MoviePopular from "../components/MoviesSlider/MoviePopular";
import MovieUpcoming from "../components/MoviesSlider/MovieUpcoming";
import SearchMovie from "../components/SearchMovie";
// Utils
import Banner from "../utils/Banner.jsx";
import ButtonUp from "../utils/ButtonUp";
import SkeletonHome from "./SkeletonHome.jsx";
const Home = () => {
    //Loadong & Skeleton
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SkeletonHome />;
    }

    return (
        <main
            id="home"
            className="bg-site min-h-screen bg-cover overflow-hidden"
        >
            <NavbarDate />
            <Banner />
            <SearchMovie />
            <MovieUpcoming />
            <MovieTrending />
            <MoviePopular />
            <ButtonUp />
        </main>
    );
};

export default Home;
