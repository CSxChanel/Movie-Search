//__count__

//__count__
function BoxNotifikasi() {
    // body...
    return (
        <div
            id="Closnotif"
            className="fixed z-999 overflow-y-auto top-0 left-0 w-full"
        >
            <div className="fixed z-999 flex inset-x-0 px-4 pb-4 inset-0 items-center justify-center bg-white/40">
                <div className="pt-4 overflow-hidden w-full rounded-2xl border-2 border-red-500 bg-sky-400">
                    <div className="flex flex-col items-center bg-indigo-200">
                        <div className="flex items-center justify-center rounded-full h-12 w-12 mx-0 h-10 w-10 bg-cyan-400">
                            <p>Icon</p>
                        </div>
                        <div className="mt-8 p-8 text-left">
                            <h1>Isi Content</h1>
                            <form>form input</form>
                        </div>
                    </div>
                    <div className="flex justify-around px-4 py-4 bg-gray-400">
                        <button>Button1</button>
                        <button>Button2</button>
                    </div>
                    <div>
                        <p>paragraf pendukung</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BoxNotifikasi;
