import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// components

//Pages
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ComingSoon from "./pages/ComingSoon";

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
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/autor" element={<Layout />} />
                <Route path="/login" Component={Login} />
                <Route path="/comingsoon" Component={ComingSoon} />
                <Route path="/daftar" Component={Register} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default App;
