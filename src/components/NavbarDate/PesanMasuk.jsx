// import { useState } from "react";
//
function PesanMasuk() {
    // Menutup Notifikasi...
    function Closes(argument) {
        let get = document.getElementById("notifikasi");
        if (get != null) {
            get.style.display = "none";
        } // diPanggil ke <button onClick={ ShowNotifikasi }
    }

    return (
        <div
            className="fixed z-50 overflow-hidden overflow-y-auto top-0 w-full left-0 h-screen"
            id="notifikasi"
        >
            <div className="fixed inset-x-0 px-4 pb-4 inset-0 flex z-50 overflow-hidden items-center justify-center backdrop-blur bg-black/10">
                <div className="bg-white/60 pt-4 border-2 backdrop-blur rounded-lg overflow-hidden w-full">
                    <div className="flex items-center flex-col">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-0 h-10 w-10">
                            Menampilkan hasil SearchMovie
                        </div>
                        <div className="mt-8 p-8 text-black text-left">

                           Ukuran 3 kolom sceoll vertikal
                        </div>
                    </div>

                    <div className="bg-gray-100 px-4 py-3 ">
                        <button
                            onClick={Closes}
                            type="button"
                            className="btn justify-center w-full rounded-md px-4 py-2"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PesanMasuk;
