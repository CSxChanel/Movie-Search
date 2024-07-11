import {Link} from 'react-router-dom'
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
                            <svg
                                className="h-6 w-6 text-green-600"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>
                        <div className="mt-8 p-8 text-black text-left">
                            <h3 className="text-lg font-medium">Cara Login</h3>
                            <div className="mt-2 text-sm w-full">
                                <p>
                                    Pastikan kamu sudah&nbsp;
                                    <b>Register</b> terlebih dahulu. lengkapi
                                    data register dengan benar.
                                </p>
                                <h4 className="text-md font-bold my-2">
                                    Belum punya Akun?
                                </h4>

                                <p>
                                    Klik&nbsp;
                                    <Link
                                        className="text-green-500"
                                        to="/daftar"
                                    >
                                        daftar
                                    </Link>
                                    &nbsp; untuk dapat melihat dan mengelola
                                    profile.
                                </p>
                                <h4 className="text-md font-bold my-2">
                                    Sudah menjadi member?
                                </h4>
                                <ol className="list-decimal ml-4">
                                    <li>
                                        Klik&nbsp;
                                        <b>Login</b>
                                    </li>
                                    <li>
                                        Masukkan&nbsp;
                                        <b>username</b> dan&nbsp;
                                        <b>password</b> yang kamu miliki lalu
                                        klik&nbsp;
                                        <b>masuk</b>
                                    </li>
                                </ol>
                            </div>
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
