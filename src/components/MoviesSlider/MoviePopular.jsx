// components/MoviePopular.jsx
import React, { useEffect, useState } from "react";
import { getPopular } from "../../Api";
import Toggle from "../Toggle";
import MovieCard from "../MovieCard";
import MovieSkeleton from "../MovieSkeleton";

const MoviePopular = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchMovies = async page => {
        setIsLoading(true);
        const response = await getPopular(page);
        setTimeout(() => {
            setMovies(response);
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchMovies(page);
    }, [page]);

    const handlePrevPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div className="mx-2 lg:container mb-24">
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-primary">Popular</h2>
                <Toggle
                    handlePrev={handlePrevPage}
                    handleNext={handleNextPage}
                />
            </div>
            <div className="flex space-x-2 lg:gap-5 snap-x overflow-x-auto scroll-smooth">
                {isLoading
                    ? Array.from({ length: 10 }).map((_, index) => (
                          <MovieSkeleton key={index} />
                      ))
                    : movies.map(movie => (
                          <div
                              key={movie.id}
                              className="min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col"
                          >
                              <MovieCard key={movie.id} movie={movie} />
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default MoviePopular;
