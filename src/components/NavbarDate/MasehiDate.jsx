// src/MasehiDate.js
import React, { useState, useEffect } from 'react';

const MasehiDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Membersihkan interval saat komponen di-unmount
    }, []);

    const formatDate = (date) => {
        const weekday = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu"
        ];

        const monthname = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember"
        ];

        const y = date.getFullYear();
        const m = date.getMonth();
        const d = date.getDate();
        const dow = date.getDay();
        return `${weekday[dow]} ${d} ${monthname[m]} ${y} M`;
    };

    return (
        <div id="tglMasehi">
            {formatDate(date)}
        </div>
    );
};

export default MasehiDate;
