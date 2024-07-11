import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const services = [
    {
        name: "Pengangguran",
        description:
            "reprehenderit consectetur ea cillum aliquip voluptate tempor sint labore laboris veniam ex laboris velit quis veniam consectetur deserunt anim minim",
        link: "Learn more."
    },
    {
        name: "Butuh Uang",
        description:
            "commodo adipisicing quis amet sunt dolor consequat laborum in veniam labore duis dolor ex consequat ea culpa deserunt",
        link: "Learn more."
    },
    {
        name: "Banyak Utang",
        description:
            "nisi veniam commodo elit do laborum aliquip minim nulla aute qui duis irure non minim sit est",
        link: "Learn more."
    },
    {
        name: "Single",
        description:
            "elit aliquip labore consectetur incididunt cillum aliqua nulla et dolore tempor esse duis enim mollit adipisicing amet ea proident voluptate",
        link: "Learn more."
    }
];
const Services = () => {
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
                        <h3 className="h3 max-w-[455px] mb-16">
                            i'm a freelance Front-end Developer with over 5
                            years of experience.
                        </h3>
                        <button className="btn btn-sm">See my work</button>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1"
                    >
                        <div>
                            {services.map((service, index) => {
                                const { name, description, link } = service;
                                return (
                                    <div
                                        className="border-b border-white/20 h-[146px] mb-[48px] flex"
                                        key={index}
                                    >
                                        <div className="max-w-[476px]">
                                            <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                                                {name}
                                            </h4>
                                            <p className="font-secondary leading-tight">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col flex-1 items-end">
                                            <a
                                                href="https://github.com/CSxChanel"
                                                className="btn h-9 w-9 mb-[42px] flex justify-center items-center"
                                            >
                                                <BsArrowUpRight />
                                            </a>
                                            <a
                                                href="https://github.com/CSxChanel"
                                                className="text-gradient text-sm"
                                            >
                                                {link}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
