import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-36 h-screen">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-about bg-contain bg-no-repeat lg:h-[560px] mix-blend-lighten bg-top"
                    ></motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <h2 className="h2 text-accent">About me.</h2>
                        <h3 className="font-secondary leading-tight font-semibold mb-3">
                            Saya adalah Pengembang Web yang bersemangat dengan
                            pengalaman lebih dari 5 tahun di berbagai industri,
                            termasuk perawatan mesin, penjualan, pemasaran, dan
                            merchandising. Perjalanan saya dalam pengembangan
                            web dimulai sebagai pengembang otodidak, dan saya
                            telah mengasah keterampilan saya melalui berbagai
                            proyek dan pembelajaran berkelanjutan. more than 5
                            years.
                        </h3>
                        <p className="font-secondary leading-tight">
                            Saya mengkhususkan diri dalam teknologi frontend
                            seperti React.js, Next.js, dan Tailwind CSS, dan
                            saya selalu bersemangat untuk menghadapi tantangan
                            baru dan berkolaborasi dalam proyek inovatif.
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 mb-2">
                            <div>
                                <div className="text-[20px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={5}
                                            duration={18}
                                        />
                                    ) : null}
                                    +
                                </div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Years of <br />
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-[20px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={20}
                                            duration={18}
                                        />
                                    ) : null}
                                    k+
                                </div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Project <br />
                                    Completed
                                </div>
                            </div>
                            <div>
                                <div className="text-[20px] font-tertiary text-gradient mb-2">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={12}
                                            duration={18}
                                        />
                                    ) : null}
                                    k+
                                </div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Statisfied <br />
                                    Clients
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Contact Me</button>
                            <a
                                href="https://github.com/CSxChanel"
                                className="text-gradient btn-link"
                            >
                                My Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
