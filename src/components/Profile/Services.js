import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
    const services = [
        {
            name: "Movie-Search",
            description:
                "Sebuah aplikasi pencarian film yang memungkinkan pengguna mencari informasi tentang film, termasuk detail seperti tanggal rilis, bahasa asli, ulasan, dan popularitas.",
            subDes: "Teknologi yang Digunakan: React.js, Tailwind CSS, API MovieDB.",
            link: "View more.",
            webUrl: "https://cpsudrajat-movie.vercel.app",
            gitUrl: "https://github.com/CSxChanel/Movie-Search.git"
        },
        {
            name: "Next-Area",
            description:
                "Proyek berbasis Next.js yang mengeksplorasi pembuatan halaman dinamis dan rendering sisi server (SSR).",
            subDes: "Teknologi yang Digunakan: Next.js, TypeScript, Tailwind CSS.",
            link: "View more.",
            webUrl: "https://indihome-area.com",
            gitUrl: "https://github.com/CSxChanel/Next-Area.git"
        },
        {
            name: "My-Bot",
            description:
                "Bot WhatsApp yang terintegrasi dengan API OpenAI dan Google Gemini untuk merespons pesan otomatis dan memproses gambar.",
            subDes: "Teknologi yang Digunakan: Node.js, Baileys Library, OpenAI API.",
            link: "Sourc Code.",
            gitUrl: "https://github.com/CSxChanel/bot-app.git"
        },
        {
            name: "Hostpot-Contoh",
            description:
                "Contoh proyek hotspot yang memanfaatkan konsep-konsep dasar dalam jaringan dan konfigurasi hotspot.",
            subDes: "Teknologi yang Digunakan: JavaScript, HTML, CSS.",
            link: "Sourc Code",
            gitUrl: "https://github.com/CSxChanel/Hotspot-contoh.git"
        }
    ];
    const handleNavigate = () => {
        window.location.href = "https://github.com/CSxChanel";
    };
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
                    >
                        <h2 className="h2 text-accent mb-6">What i Do.</h2>
                        <h3 className="md:h3 font-primary leading-tight max-w-[455px] mb-12">
                            Untuk menerapkan apa yang telah saya pelajari, saya
                            telah mengerjakan beberapa proyek dan menyimpannya
                            di GitHub. Beberapa proyek yang telah saya
                            selesaikan antara lain:
                        </h3>
                        <button onClick={handleNavigate} className="btn btn-sm">
                            See my work
                        </button>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <div>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="border-b border-white/20 h-[220px] mb-[48px] flex gap-x-2"
                                >
                                    <div className="max-w-[476px]">
                                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                                            {service.name}
                                        </h4>
                                        <p className="font-secondary leading-tight">
                                            {service.description}
                                        </p>
                                        <p className="font-secondary font-semibold">
                                            {service.subDes}
                                        </p>
                                    </div>
                                    <div className="flex flex-col flex-1 items-end justify-around">
                                        <Link
                                            to={service.webUrl}
                                            className="btn h-9 w-9 mb-[42px] flex justify-center items-center"
                                        >
                                            <BsArrowUpRight />
                                        </Link>
                                        <Link
                                            to={service.gitUrl}
                                            className="text-gradient text-sm"
                                        >
                                            {service.link}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
