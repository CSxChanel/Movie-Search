// components/TvRecomend.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvRecomend } from "../../Api";
// import Toggle from "../Toggle";
import CardRecomend from "./CardRecomend.jsx";
import MovieSkeleton from "../MovieSkeleton";

const TvRecomend = () => {
    const { id } = useParams();
    const [tv, setTv] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTvData = async () => {
            try {
                const tvRecomends = await getTvRecomend(id);
                setTimeout(() => {
                    setTv(tvRecomends);
                    setIsLoading(false);
                }, 500);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };
        fetchTvData();
    }, [id]);

    return (
        <div className="mx-2 lg:container mb-11">
            <div className="flex justify-between mb-4 mt-9">
                <h2 className="text-xl font-primary">Recommendations</h2>
            </div>
            <div className="flex space-x-2 lg:gap-5 snap-x overflow-x-auto scroll-smooth">
                {isLoading
                    ? Array.from({ length: 10 }).map((_, index) => (
                          <MovieSkeleton key={index} />
                      ))
                    : tv.map(tv => (
                          <div
                              key={tv.id}
                              className="min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col"
                          >
                              <CardRecomend key={tv.id} tv={tv} />
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default TvRecomend;
