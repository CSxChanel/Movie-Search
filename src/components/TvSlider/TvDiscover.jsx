import React, { useEffect, useState } from "react";
import { getTvDiscover } from "../../Api";

import MediaCard from "../MediaCards.jsx";
import MovieSkeleton from "../MovieSkeleton.jsx";
import MediaSlider from "../MediaSlider.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";

const TvDiscover = ({ changeBackground }) => {
    const [tv, setTv] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchTvs = async page => {
        setIsLoading(true);
        const response = await getTvDiscover(page);
        setTimeout(() => {
            setTv(response);
            setIsLoading(false);
        }, 250);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchTvs(page);
    }, [page]);

    const handlePrevPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            <NavMenu
                changeBackground={changeBackground}
                onClick1={handlePrevPage}
                onClick2={handleNextPage}
                text1={"Prev"}
                text2={"Next"}
            />
            <MediaSlider media={tv} type={tv} />
            <div className="mx-2 lg:container mt-72 mb-24">
                <div className="flex justify-between mb-4 mt-9">
                    <h2 className="text-xl font-primary">Peringkat Teratas</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 scroll-smooth">
                    {isLoading
                        ? Array.from({ length: 10 }).map((_, index) => (
                              <MovieSkeleton key={index} />
                          ))
                        : tv.map(tv => (
                              <div key={tv.id}>
                                  <MediaCard media={tv} type="tv" />
                              </div>
                          ))}
                </div>
            </div>
        </>
    );
};

export default TvDiscover;
