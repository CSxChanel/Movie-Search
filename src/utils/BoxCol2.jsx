// import img1 from "../assets/portfolio-img1.png";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

//
function BoxCol2() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            })
            .then(response => {
                setMovies(response.data.results);
            });
    }, []);
    //
    return (
        <div className="bg-white/20">
            <h2 className="font-primary underline underline-offset-auto font-bold px-5">
                SUPERHERO MOVIES
            </h2>

            <Container className="grid grid-rows-* lg:flex-row gap-1.5">
                {movies.map((result, index) => {
                    return (
                        <div
                            className="text-center bg-amber-400 rounded-2xl border-2 border-white m-1 overflow-hidden"
                            key={index}
                        >
                            <div className="group relative overflow-hidden justify-items-center items-center">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-700"></div>
                                <img
                                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                                    alt="test"
                                    className="group-hover:scale-150 transition-all duration-700 h-[auto]"
                                />
                                <div className="m-4">
                                    <span className="h2 text-gradient">
                                        {result.title}
                                    </span>
                                    <p className="absolute -bottom-full left-0 right-0 p-2 group-hover:bottom-32 transition-all duration-500 z-20 font-semibold text-white">
                                        {result.overview}
                                    </p>
                                    <p className="absolute -bottom-full left-0 right-0 group-hover:bottom-20 transition-all duration-700 z-20 text-gradient">
                                        {result.release_date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}
export default BoxCol2;
