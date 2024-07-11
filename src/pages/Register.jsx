import { Link } from "react-router-dom";
function Register(argument) {
    // body...
    alert("Udah Daftar belum?");
    return (
        <main className="h-screen">
            <div className="text-center py-56">
                <h2>Sama aja belum ada isinya hadeh,,😴</h2>
                <Link className="btn btn-sm" to="/">
                    Back lagi!
                </Link>
            </div>
        </main>
    );
}
export default Register;
