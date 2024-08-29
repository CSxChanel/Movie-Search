import React from "react";

import Header from "../components/Profile/Header";
import Banner from "../components/Profile/Banner";
import About from "../components/Profile/About";
import Services from "../components/Profile/Services";
import Work from "../components/Profile/Work";
import Contact from "../components/Profile/Contact";
import Nav from "../components/Profile/Nav";

function Layout() {
	window.scrollTo(0, 0);
    return (
        <main className="bg-site bg-cover overflow-hidden bg-no-repeat">
            <Header />
            <Banner />
            <About />
            <Services />
            <Work />
            <Contact />
            <Nav />
        </main>
    );
}
export default Layout;
