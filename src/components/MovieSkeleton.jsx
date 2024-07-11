// MovieSkeleton.jsx
import React from "react";

const MovieSkeleton = () => {
    return (
        <div className="movie-card animate-pulse">
            <div className="w-full h-[220px] md:h-[250px] lg:h-[300px] bg-slate-200 rounded-2xl"></div>
            <div className="h-4 md:h-6 bg-slate-200 mt-2 rounded"></div>
            <div className="h-4 bg-slate-200 mt-1 rounded"></div>
            <div className="h-4 bg-slate-200 mt-1 rounded"></div>
        </div>
    );
};

export default MovieSkeleton;
