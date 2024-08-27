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
// import ButtonUp from "../utils/ButtonUp";
import NavMenu from "../components/NavMenu/NavMenu.jsx";
import SkeletonHome from "./SkeletonHome.jsx";
const Home = ({ changeBackground }) => {
    //Loadong & Skeleton
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

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
            <MovieTrending />
            <MoviePopular />
            <NavMenu changeBackground={changeBackground} />
        </main>
    );
};

export default Home;
