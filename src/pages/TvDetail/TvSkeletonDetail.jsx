// MovieSkeleton.jsx
import React from "react";

const TvSkeletonDetail = () => {
    const skeletonArray = new Array(10).fill(0);
    return (
        <div className="mb-28 w-full min-h-screen animate-pulse">
            <div className="w-full bg-slate-500">
                <div
                    className="w-full h-[300px] md:h-[500px] object-cover object-center"
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, transparent 100%)"
                    }}
                ></div>
            </div>
            <div className="container flex">
                <div className="z-20 md:-my-36 -my-24 mb-14 md:mb-20 w-[230px] h-[255px] md:h-[700px] md:w-[450px] border-2 rounded-2xl bg-slate-500">
                    {" "}
                    &nbsp;
                </div>
                <div className="flex-col px-5">
                    <div className="w-[200px] my-4 bg-slate-500 rounded-xl">
                        &nbsp;
                    </div>
                    <div className="w-[170px] h-6 bg-slate-500 rounded-xl">
                        {" "}
                        &nbsp;
                    </div>
                </div>
            </div>

            <div className="container">
                <p className="w-[200px] rounded-xl bg-slate-500 my-2">
                    {" "}
                    &nbsp;
                </p>

                <p className="w-[150px] rounded-xl bg-slate-500 my-2">
                    {" "}
                    &nbsp;
                </p>
                <p className="w-[200px] rounded-xl bg-slate-500 my-2">
                    {" "}
                    &nbsp;
                </p>
                <p className="mb-2 w-[120px] rounded-xl bg-slate-500">
                    {" "}
                    &nbsp;
                </p>
                <p className="flex space-x-5">
                    <p className="w-[50px] rounded-xl bg-slate-500"> &nbsp;</p>
                    <p className="w-[80px] rounded-xl bg-slate-500"> &nbsp;</p>
                </p>
            </div>

            <div className="my-4 mx-4">
                <p className="w-[200px] h-6 rounded-xl bg-slate-500 mb-4">
                    &nbsp;
                </p>
                <div className="flex space-x-2 overflow-x-auto scroll-smooth">
                    {skeletonArray.map((_, index) => (
                        <div
                            key={index}
                            className="w-[100px] h-[100px] rounded-xl border bg-slate-500 flex-shrink-0"
                        >
                            &nbsp;
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="ml-4 my-5 w-[80px] rounded-xl bg-slate-500">
                {" "}
                &nbsp;
            </h2>
            <div className="my-4 mx-4">
                <div className="flex space-x-6 overflow-x-auto scroll-smooth">
                    {skeletonArray.map((_, index) => (
                        <div
                            key={index}
                            className="lg:w-[500px] md:w-[450px] lg:h-[300px] md:h-[250px] w-[360px] h-[225px] rounded-lg border bg-slate-500 flex-shrink-0"
                        >
                            {" "}
                            &nbsp;
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TvSkeletonDetail;
