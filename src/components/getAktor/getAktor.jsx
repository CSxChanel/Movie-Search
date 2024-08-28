import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../Api.js";
import CardAktor from "./cardAktor";

const GetAktor = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            const castData = await getCast(id);
            setCast(castData);
        };

        fetchCast();
    }, [id]);

    return (
        <div className="container my-5">
            <h2 className="text-xl font-primary">Aktor Pemeran</h2>
            <div className="flex gap-4 cursor-pointer overflow-x-auto">
                {cast.map(actor => (
                    <div
                        key={actor.id}
                        className="min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col"
                    >
                        <CardAktor
                            name={actor.name}
                            posterPath={actor.profile_path}
                            character={actor.character}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetAktor;
