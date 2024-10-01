import { useState, useEffect } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { CgExtensionRemove, CgExtensionAdd } from "react-icons/cg";

import { SiTurbosquid } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavMenu = ({ text1, text2, onClick1, onClick2, changeBackground }) => {
    const [changeUp, setChangUp] = useState("hidden");
    const changeScrollUp = () => {
        if (window.scrollY > 100) {
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
        <>
            <motion.nav
                initial={{ opacity: 1, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`${changeUp} md:hidden fixed bottom-2 lg:bottom-8 w-full  z-50`}
            >
                <div className="container">
                    <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl border rounded-full mx-w-[460px] mx-auto px-5 py-2 flex items-center justify-between text-3xl text-slate-100">
                        <Link
                            to="/"
                            className="cursor-pointer hover:text-amber-200 flex flex-col items-center"
                        >
                            <BiHomeAlt />
                            <p className="text-sm">Home</p>
                        </Link>
                        <button
                            onClick={onClick1}
                            className="cursor-pointer hover:text-amber-200 flex flex-col items-center"
                        >
                            <CgExtensionRemove />
                            <p className="text-sm">{text1}</p>
                        </button>
                        <button
                            onClick={changeBackground}
                            className="cursor-pointer text-[60px] animate-spin
                            hover:text-amber-200 flex flex-col items-center"
                        >
                            <SiTurbosquid />
                        </button>
                        <button
                            onClick={onClick2}
                            className="cursor-pointer hover:text-amber-200 flex flex-col items-center"
                        >
                            <CgExtensionAdd />
                            <p className="text-sm">{text2}</p>
                        </button>
                        <Link
                            to="https://cp-sudrajat.vercel.app/"
                            className="cursor-pointer hover:text-amber-200 flex flex-col items-center"
                        >
                            <BiUser />
                            <p className="text-sm">About</p>
                        </Link>
                    </div>
                </div>
            </motion.nav>
        </>
    );
};

export default NavMenu;
