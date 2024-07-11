// components/Toggle.jsx
import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ handlePrev, handleNext }) => {
    return (
        <div className="flex items-center space-x-2">
            <button
                className="px-3 md:px-4 py-1 md:py-[6px] rounded-full bg-slate-200 dark:bg-slate-600 text-xs md:text-sm text-slate-600 dark:text-slate-100 tracking-wide whitespace-nowrap transition ease-in-out duration-200 cursor-pointer"
                onClick={handlePrev}
            >
                Previous Page
            </button>
            <button
                className="px-3 md:px-4 py-1 md:py-[6px] rounded-full bg-slate-200 dark:bg-slate-600 text-xs md:text-sm text-slate-600 dark:text-slate-100 tracking-wide whitespace-nowrap transition ease-in-out duration-200 cursor-pointer"
                onClick={handleNext}
            >
                Next Page
            </button>
        </div>
    );
};

Toggle.propTypes = {
    handlePrev: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired
};

export default Toggle;
