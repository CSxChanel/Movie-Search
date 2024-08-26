import React from "react";
import { Link } from "react-router-dom";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";

const About = () => {
    // const [ref, inView] = useInView({
    //     threshold: 0.5
    // });
    return (
        <section className="section" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-36 h-screen">
                    <div className="flex-1 bg-about bg-contain bg-no-repeat lg:h-[560px] mix-blend-lighten bg-top"></div>
                    <div className="flex-1">
                        <h2 className="h2 text-accent">About me.</h2>
                        <h3 className="h3">
                            I am Pengangguran handal and have not worked for
                            more than 5 years.
                        </h3>
                        <p className="">
                            excepteur deserunt in deserunt ullamco minim quis
                            Lorem ullamco exercitation nulla velit ut anim eu
                            elit reprehenderit.
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 mb-2">
                            <div>
                                <div className="text-[20px] font-tertiary text-gradient mb-2"></div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Years of <br />
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className="text-[20px] font-tertiary text-gradient mb-2"></div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Project <br />
                                    Completed
                                </div>
                            </div>
                            <div>
                                <div className="text-[20px] font-tertiary text-gradient mb-2"></div>
                                <div className="font-primary text-sm tracing-[2px]">
                                    Statisfied <br />
                                    Clients
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <Link
                                to="https://wa.me/6282213452856?text=*Hallo!*,%20Agar%20silaturahmi%20tetap%20terjaga%20Pinjam%20dulu%20*Seratus*🙈%20"
                                className="btn py-1.5 px-5"
                            >
                                Contact Me
                            </Link>
                            <Link
                                to="https://github.com/CSxChanel"
                                className="text-gradient btn-link"
                            >
                                My Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
