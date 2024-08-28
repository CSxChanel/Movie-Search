import React from "react";

const CardAktor = ({ name, posterPath, character }) => {
    const imageUrl = posterPath
        ? `https://image.tmdb.org/t/p/w200${posterPath}`
        : "/dummy-user.png";
    return (
        <div className="shadow-md rounded-md">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-[150px] border rounded-t-md object-cover object-center rounded-full"
            />
            <div className="text-center">
                <h3 className="font-bold text-sm border border-b-amber-200">
                    {name}
                </h3>
                <p className="text-sm">{character}</p>
            </div>
        </div>
    );
};

export default CardAktor;
