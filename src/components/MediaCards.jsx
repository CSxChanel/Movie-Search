import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MediaCard = ({ media, type }) => {
    return (
        <Link to={`/${type}/${media.id}`} className="">
            <LazyLoadImage
                alt={media.name || media.title}
                effect="blur"
                src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                className="w-full min-h-[350px] object-center object-cover rounded-2xl border-2 cursor-pointer shadow-lg"
            />
            <h3 className="text-md md:text-base text-slate-900 dark:text-slate-100 text-ellipsis mb-1 sm:mb-2 line-clamp-1 cursor-pointer">
                {media.name || media.title}
            </h3>
            <div className="flex justify-between px-2">
                <p className="text-xs md:text-sm text-slate-600 dark:text-zinc-400">
                    {media.first_air_date || media.release_date}
                </p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-zinc-400">
                    <span role="img" aria-label="star">
                        ⭐&nbsp;
                    </span>
                    {media.vote_average}
                </p>
            </div>
        </Link>
    );
};

export default MediaCard;
