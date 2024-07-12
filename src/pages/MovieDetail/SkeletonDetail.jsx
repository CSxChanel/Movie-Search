// MovieSkeleton.jsx
import React from "react";

const SkeletonDetail = () => {
    return (
        <div className="container animate-pulse">
            <div className="w-full h-[320px] md:h-[250px] lg:h-[300px] bg-slate-200 rounded-2xl"></div>
            <div className="h-4 w-[250px] md:h-6 bg-slate-200 mt-5 rounded"></div>
            <div className="h-4 w-[100px] bg-slate-200 mt-1 rounded"></div>
            <div className="h-14 bg-slate-200 mt-1 rounded"></div>
            <div className="lg:w-[500px] md:w-[450px] lg:h-[300px] md:h-[250px] w-[360px] h-[225px] bg-slate-200 mt-10 rounded-lg"></div>
        </div>
    );
};

export default SkeletonDetail;
