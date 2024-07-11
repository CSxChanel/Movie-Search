import { BsArrowRightShort } from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
import { Link } from "react-router-dom";
import React from "react";

function BoxPromo(argument) {
    return (
        <>
            <div className="bg-white/50 backdrop-blur-2xl border rounded-2xl mb-2 text-white p-2">
                <div className="flex flex-row justify-between mb-4">
                    <p className="flex flex-row font-primary items-center gap-1">
                        <FcAdvertising />
                        Movies add Price
                    </p>
                    <Link
                        to="/price-movies"
                        className="flex text-sm items-center gap-1"
                    >
                        Lihat Semua
                        <BsArrowRightShort />
                    </Link>
                </div>
                <div className="flex items-center mb-3">
                    <div className="flex-1">
                        <p className="font-secondary">
                            Paket nonton hemat • 7 Hari
                        </p>
                    </div>
                    <button className="hover:text-2xl btn-sm h-8 bg-indigo-800 rounded-2xl">
                        Rp 15.000
                    </button>
                </div>
                <div className="flex items-center mb-3">
                    <div className="flex-1">
                        <p className="font-secondary">
                            GigaMax puas 80 GB • 30 Hari
                        </p>
                    </div>
                    <button className="hover:text-2xl btn-sm h-8 bg-indigo-800 rounded-2xl">
                        Rp 70.000
                    </button>
                </div>
                <div className="flex items-center mb-3">
                    <div className="flex-1">
                        <p className="font-secondary">
                            Super Seru Movies • 30 Hari
                        </p>
                    </div>
                    <button className="hover:text-2xl btn-sm h-8 bg-indigo-800 rounded-2xl">
                        Rp 90.000
                    </button>
                </div>
            </div>
        </>
    );
}
export default BoxPromo;
