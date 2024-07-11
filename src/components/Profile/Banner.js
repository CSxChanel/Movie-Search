import React from "react";
import Image from "../../assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../..//variants";
import { FaGithub, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Banner = () => {
    return (
        <section
            className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
            id="home"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-36">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn("Up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-gradient text-[30px] font-bold leading-[0.8] lg:text[110px]"
                        >
                            CECEP <span>SUDRAJAT</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn("Up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
                        >
                            <span className="text-white mr-4">I am a</span>
                            <TypeAnimation
                                sequence={[
                                    "Single",
                                    2000,
                                    "Pengangguran",
                                    2000,
                                    "Butuh Uang",
                                    2000,
                                    "Banyak Utang",
                                    2000,
                                    "Gali Lobang",
                                    2000,
                                    "Tutup Lobang",
                                    2000
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn("Up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="mb-8 max-w-max mx-auto lg:mx-0"
                        >
                            et exercitation nisi sit amet dolore voluptate
                            pariatur est velit magna culpa excepteur irure irure
                            sunt dolor quis
                        </motion.p>
                        <motion.div
                            variants={fadeIn("Up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
                        >
                            <button className="btn btn-lg">Contact Me</button>
                            <a
                                href="https://github.com/CSxChanel"
                                className="text-gradient btn-link"
                            >
                                My Portfolio{" "}
                            </a>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("Up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
                        >
                            <a href="https://github.com/CSxChanel">
                                <FaGithub />
                            </a>
                            <a href="https://youtube.com/@CSudrajat">
                                <FaYoutube />
                            </a>
                            <a href="https://wa.me/6282213452856?text=*Hallo!*,%20Agar%20silaturahmi%20tetap%20terjaga%20Pinjam%20dulu%20*Seratus*🙈%20">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.tiktok.com/@au_eeya">
                                <FaTiktok />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn("Down", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
                    >
                        <img
                            className="w-[300px] h-[300px]"
                            src={Image}
                            alt="cecep sudrajat"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
