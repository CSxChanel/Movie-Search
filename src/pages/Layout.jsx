import React from "react";

import Header from "../components/Profile/Header";
import Banner from "../components/Profile/Banner";
import About from "../components/Profile/About";
import Services from "../components/Profile/Services";
import Work from "../components/Profile/Work";
import Contact from "../components/Profile/Contact";
import Nav from "../components/Profile/Nav";

function Layout() {
    return (
        <>
            <Header />
            <Banner />
            <About />
            <Services />
            <Work />
            <Contact />
            <Nav />
        </>
    );
}
export default Layout;
