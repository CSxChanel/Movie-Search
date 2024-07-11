import React from "react";
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link to='/' className="text-[20px] text-gradient btn-link">
                        Cp_$jt
                    </Link>
                    <button className="btn btn-sm">Work With Me</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
