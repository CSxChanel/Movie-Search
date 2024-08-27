import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-[20px] text-gradient btn-link">
                        Cp_$jt
                    </Link>
                    <Link
                        to="https://wa.me/6282213452856?text=*Hallo!*,%20Agar%20silaturahmi%20tetap%20terjaga%20Pinjam%20dulu%20*Seratus*🙈%20"
                        className="btn text-sm p-2"
                    >
                        Work With Me
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
