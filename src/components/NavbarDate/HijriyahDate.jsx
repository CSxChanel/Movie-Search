// src/HijriyahDate.js
import React, { useState, useEffect } from "react";

const HijriyahDate = () => {
    const [hijriDate, setHijriDate] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            let fixd;

            function gregToFixed(year, month, day) {
                let a = Math.floor((year - 1) / 4);
                let b = Math.floor((year - 1) / 100);
                let c = Math.floor((year - 1) / 400);
                let d = Math.floor((367 * month - 362) / 12);

                return 1 - 1 + 365 * (year - 1) + a - b + c + d + day;
            }

            function Hijri(year, month, day) {
                this.year = year;
                this.month = month;
                this.day = day;
                this.toFixed = hijriToFixed;
                this.toString = hijriToString;
            }

            function hijriToFixed() {
                return (
                    this.day +
                    Math.ceil(29.5 * (this.month - 1)) +
                    (this.year - 1) * 354 +
                    Math.floor((3 + 11 * this.year) / 30) +
                    227015 -
                    1
                );
            }

            function hijriToString() {
                let months = [
                    "Muharram",
                    "Safar",
                    "Rabiul Awwal",
                    "Rabiul Tsani",
                    "Jumadil Ula",
                    "Jumadil Tsani",
                    "Rajab",
                    "Sya'ban",
                    "Ramadhan",
                    "Syawwal",
                    "Dzul Qa'dah",
                    "Dzul Hijjah"
                ];

                return (
                    this.day + " " + months[this.month - 1] + " " + this.year
                );
            }

            function fixedToHijri(f) {
                let i = new Hijri(1100, 1, 1);
                i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
                let i2 = new Hijri(i.year, 1, 1);
                let m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
                i.month = Math.min(m, 12);
                i2.year = i.year;
                i2.month = i.month;
                i2.day = 1;
                i.day = f - i2.toFixed() + 1;
                return i;
            }

            let tod = new Date();
            let y = tod.getFullYear();
            let m = tod.getMonth();
            let d = tod.getDate();

            m++;
            fixd = gregToFixed(y, m, d);
            let h = new Hijri(1421, 11, 28);
            h = fixedToHijri(fixd);

            let tglHijriyah = h.toString() + " H";
            setHijriDate(tglHijriyah);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div id="tglHijriyah">{hijriDate}</div>;
};

export default HijriyahDate;
