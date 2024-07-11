import React from "react";
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
    return (
        <div className="bg-site bg-cover overflow-hidden bg-no-repeat">
            <Routes>
                <Route path="/" element={<Home />} />
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
