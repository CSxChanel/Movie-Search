import { useState, useEffect } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { CgExtensionRemove, CgExtensionAdd } from "react-icons/cg";
import { TbWorldSearch } from "react-icons/tb";
import { SiTurbosquid } from "react-icons/si";
import { Link } from "react-router-dom";

const NavMenu = ({ changeBackground }) => {
    const [changeUp, setChangUp] = useState("hidden");
    const changeScrollUp = () => {
        if (window.scrollY > 90) {
            setChangUp(false);
        } else {
            setChangUp("hidden");
        }
    };
    useEffect(() => {
        changeScrollUp();
        window.addEventListener("scroll", changeScrollUp);
    });
    return (
        <main className={changeUp}>
            <nav className="md:hidden fixed bottom-2 lg:bottom-8 w-full  z-50">
                <div className="container">
                    <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl border rounded-full mx-w-[460px] mx-auto px-5 py-2 flex items-center justify-between text-3xl text-slate-100">
                        <Link
                            to="/"
                            className="cursor-pointer hover:text-amber-200"
                        >
                            <BiHomeAlt />
                        </Link>
                        <Link
                            to="popular"
                            className="cursor-pointer hover:text-amber-200"
                        >
                            <CgExtensionRemove />
                        </Link>
                        <button
                            onClick={changeBackground}
                            className="cursor-pointer text-[60px] animate-spin
                            hover:text-amber-200"
                        >
                            <SiTurbosquid />
                        </button>
                        <Link
                            to="tranding"
                            className="cursor-pointer hover:text-amber-200"
                        >
                            <CgExtensionAdd />
                        </Link>
                        <Link
                            to="/autor"
                            className="cursor-pointer hover:text-amber-200"
                        >
                            <BiUser />
                        </Link>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default NavMenu;
