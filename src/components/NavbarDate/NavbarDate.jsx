import { BsClock } from "react-icons/bs";
import { IoHome, IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
//utils
import PesanMasuk from "./pesan-masuk";
//components
import DigitalClock from "./DigitalClock";
import MasehiDate from "./MasehiDate";
import HijriyahDate from "./HijriyahDate";

function NavbarDate() {
    const [show, setShow] = useState(false);
    return (
        <main>
            <div>{show && <PesanMasuk />}</div>
            <div
                className="lg:flex lg:py-4 lg:justify-between fixed top-0 pt-2 px-2 z-50 left-0 right-0
					 bg-black/20 backdrop-blur-2xl
					 border-b rounded-b-2xl items-center"
            >
                <div className="flex p-2 lg:gap-x-10 justify-between items-center">
                    <div className="justify-center">
                        <Link
                            to="/autor"
                            // target="_blank"
                            className="flex flex-row items-baseline font-extrabold font-primary gap-x-1 text-[25px]"
                        >
                            <IoHome />
                            cP_$jt
                        </Link>
                    </div>
                    <button
                        onClick={() => setShow(!show)}
                        type="button"
                        className="relative inline-block focus:bg-cyan-500 hover:scale-150 rounded-full mr-2 text-[30px]"
                    >
                        <span className="hover:animate-none animate-ping">
                            <IoNotificationsOutline />
                            <div className="absolute top-2 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-rose-700 rounded-full w-4 h-4">
                                2
                            </div>
                        </span>
                    </button>
                </div>
                <div className="flex pb-2 mt-2 text-sm lg:text-xl">
                    <div className="flex gap-x-2 px-2 items-center text-gradient">
                        <BsClock className="text-indigo-400" />

                        <DigitalClock />
                    </div>
                    <div className="flex-1 px-2 flex-row text-end justify-items-center text-end text-gradient ">
                        <MasehiDate />
                        <div className="border-b border-amber-200 my-2"></div>
                        <HijriyahDate />
                    </div>
                </div>
            </div>
        </main>
    );
}
export default NavbarDate;
