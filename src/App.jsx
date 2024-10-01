import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ComingSoon from "./pages/ComingSoon";
import TvDetail from "./pages/TvDetail/TvDetail.jsx";
import TvDiscover from "./components/TvSlider/TvDiscover.jsx";
import MovieDiscover from "./components/MoviesSlider/MovieDiscover.jsx";

function App() {
    const [bgClass, setBgClass] = useState("bg-site");
    const color = [
        "bg-slate-800",
        "bg-black",
        "bg-rose-800",
        "bg-sky-800",
        "bg-amber-900",
        "bg-violet-900",
        "bg-site"
    ];
    const changeBackground = () => {
        setBgClass(prevBg => {
            const currenIndex = color.indexOf(prevBg);
            const nexIndex = (currenIndex + 1) % color.length;
            return color[nexIndex];
        });
    };
    return (
        <div className={`${bgClass} bg-cover overflow-hidden bg-no-repeat`}>
            <Routes>
                <Route
                    path="/"
                    element={<Home changeBackground={changeBackground} />}
                />
                <Route
                    path="/movie/:id"
                    element={
                        <MovieDetail changeBackground={changeBackground} />
                    }
                />
                <Route path="/autor" element={<Layout />} />
                <Route path="/login" Component={Login} />
                <Route path="/comingsoon" Component={ComingSoon} />
                <Route path="/daftar" Component={Register} />
                <Route path="*" element={<NotFound />} />
                <Route
                    path="/tv-discover"
                    element={<TvDiscover changeBackground={changeBackground} />}
                />
                <Route
                    path="/movie-discover"
                    element={
                        <MovieDiscover changeBackground={changeBackground} />
                    }
                />
                <Route
                    path="/tv/:id"
                    element={<TvDetail changeBackground={changeBackground} />}
                />
            </Routes>
        </div>
    );
}
export default App;
