import { BsArrowRightShort } from "react-icons/bs";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
const BoxForYou = () => {
    return (
        <>
            <div className="bg-white/50 backdrop-blur-2xl border rounded-2xl mb-2 text-white p-2">
                <div className="flex flex-row justify-between mb-4">
                    <p className="flex flex-row items-center gap-1">For You</p>
                    <Link
                        to="/promo&harga"
                        className="flex text-sm items-center gap-1"
                    >
                        Lihat Semua
                        <BsArrowRightShort />
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">
                        <p className="flex items-center gap-1 text-black rounded-2xl bg-cyan-50  h-[25px]  w-[90px] p-2 font-semibold">
                            <IoBagHandle />
                            Promo
                        </p>
                        <p className="font-bold">
                            Play Movies Premium • 30 Hari
                        </p>
                    </div>
                    <button className="btn-sm h-8 bg-indigo-800 rounded-2xl">
                        Rp 25.000
                    </button>
                </div>
            </div>
        </>
    );
};
export default BoxForYou;
