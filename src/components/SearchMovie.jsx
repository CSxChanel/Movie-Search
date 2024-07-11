// src/components/SearchMovies.jsx

import React, { useState } from "react";
import { searchMovie } from "../Api"; // pastikan import yang benar
import MovieCard from "./MovieCard"; // pastikan import yang benar

const SearchMovies = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        try {
            const data = await searchMovie(query);
            setResults(data.results);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative container items-center flex flex-col">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Cari filem kesayangan..."
                className="w-[70%] h-[30px] p-2 my-4 rounded-full border font-bold text-black" // Pastikan warna teks terlihat
            />
            <button onClick={handleSearch} className="btn text-sm p-2">
                Search
            </button>

            {isModalOpen && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center left-5 right-5">
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur"></div>
                    <div className="bg-slate-300 pt-4 border-2 backdrop-blur rounded-lg overflow-hidden w-full max-w-4xl max-h-[80vh]">
                        <div className="flex items-center flex-col overflow-y-scroll max-h-[70vh]">

                            <div className="mt-8 p-4 text-black text-left">
                                {isLoading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4">
                                        {results.map(movie => (
                                            <MovieCard
                                                key={movie.id}
                                                movie={movie}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-100 px-4 py-3">
                            <button
                                onClick={handleCloseModal}
                                type="button"
                                className="btn justify-center w-full rounded-md px-4 py-2"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchMovies;
