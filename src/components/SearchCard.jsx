// MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SearchCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} className="text-center">
            <LazyLoadImage
                alt={movie.title}
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-full h-[220px] md:h-[250px] lg:h-[300px] object-center object-cover rounded-2xl border-2 cursor-pointer shadow-lg"
            />
            <h3 className="text-sm md:text-base text-slate-900 font-semibold mb-1 sm:mb-2 line-clamp-1 cursor-pointer">
                {movie.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-200">
                {movie.release_date}
            </p>
            <p className="text-xs md:text-sm text-slate-200">
                <span role="img" arial-lable="start">
                    ⭐&nbsp;
                </span>
                {movie.vote_average}
            </p>
        </Link>
    );
};

export default SearchCard;
