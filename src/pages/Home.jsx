// Home.jsx
import React from "react";
// Components
import NavbarDate from "../components/NavbarDate/NavbarDate";
import MovieTrending from "../components/MoviesSlider/MovieTrending";
import MoviePopular from "../components/MoviesSlider/MoviePopular";
import MovieUpcoming from "../components/MoviesSlider/MovieUpcoming";
import SearchMovie from "../components/SearchMovie";
// Utils
import Banner from "../utils/Banner.jsx";
import ButtonUp from "../utils/ButtonUp";

const Home = () => {
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
