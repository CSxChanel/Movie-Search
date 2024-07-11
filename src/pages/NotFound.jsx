import { Link } from "react-router-dom";
import NavbarDate from "../components/NavbarDate/NavbarDate";
//NotFound

const NotFound = () => {
    return (
        <main className="h-screen">
            <NavbarDate />
            <div className="h3 py-56 flex-row text-center">
                <h2>Page Not Found</h2>
                <h2>404</h2>
                <Link className="p-2 btn" to="/">
                    Back!
                </Link>
            </div>
        </main>
    );
};
export default NotFound;
