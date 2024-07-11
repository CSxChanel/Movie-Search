// src/DigitalClock.js
import React, { useState, useEffect } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Membersihkan interval saat komponen di-unmount
    }, []);

    const formatTime = time => {
        const hours = time.getHours().toString().padStart(2, "0");
        const minutes = time.getMinutes().toString().padStart(2, "0");
        const seconds = time.getSeconds().toString().padStart(2, "0");
        return `${hours} : ${minutes} : ${seconds}`;
    };

    return <div>{formatTime(time)}</div>;
};

export default DigitalClock;
