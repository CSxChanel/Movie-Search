import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BiSolidChevronsUp } from "react-icons/bi";

function ButtonUp() {
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
    // body...
    return (
        <main className={changeUp}>
            <div className="animate-bounce flex fixed z-40 bottom-2 lg:bottom-8 text-[40px] overflow-hidden left-0 right-0 justify-center items-end">
                <Link
                    to="home"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className="cursor-pointer flex items-center justify-center"
                >
                    <span className="">
                        <BiSolidChevronsUp />
                    </span>
                </Link>
            </div>
        </main>
    );
}
export default ButtonUp;
