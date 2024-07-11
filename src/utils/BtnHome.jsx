import { Link } from "react-router-dom";

function BtnHome(argument) {
    return (
        <div className="text-center mb-4">
            <Link
                to="/home"
                // target="_blank"
                rel="noopener noreferrer"
                className="btn-sm bg-white/30 rounded-2xl h-8"
            >
                Masuk
            </Link>
        </div>
    );
}
export default BtnHome;
