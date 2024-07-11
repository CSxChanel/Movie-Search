import { Link } from "react-router-dom";
//BoxMenu

function BoxMenu() {
    // body...
    return (
        <div className="mt-40 bg-white/10 backdrop-blur-2xl rounded-2xl p-2">
            <div className="flex flex-row text-sm mb-2 pb-2 items-center justify-around justify-items-center border-b border-white/30">
                <h2>Box1</h2>
                <h2>Box2</h2>
                <h2>Box3</h2>
            </div>
            <div className="flex flex-row justify-between">
                <Link
                    to="/comingsoon"
                    type="button"
                    // target="_blank"
                    className="text-base rounded-xl border border-white/30 px-1.5"
                >
                    Menu
                </Link>
                <Link
                    to="/login"
                    // target="_blank"
                    className="text-base rounded-xl border border-white/30 px-1.5"
                >
                    Login
                </Link>
                <Link
                    to="/daftar"
                    // target="_blank"
                    className="text-base rounded-xl border border-white/30 px-1.5"
                >
                    Daftar
                </Link>
            </div>
        </div>
    );
}
export default BoxMenu;
