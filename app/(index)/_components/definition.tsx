"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Definition() {
    const sectionRef = useRef(null);

    return (
        <section
            className="h-screen max-w-6xl px-6 mx-auto top-0 relative"
            ref={sectionRef}
        >
            <div className="top-0 left-0 flex md:flex-row flex-col h-screen py-8 md:space-x-24">
                <div className="md:flex-1 flex items-center justify-center">
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ amount: "all" }}
                        className="text-5xl md:text-7xl md:text-right text-center font-bold italic"
                    >
                        What is E-Waste?
                    </motion.h2>
                </div>
                <div className="md:flex-1 md:mt-0 mt-8 flex flex-col justify-center">
                    <motion.p
                        className="text-xl font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ amount: "all" }}
                    >
                        <span className="text-green-600">E-Waste</span> simply
                        refers to discarded electronic waste. Many of these
                        electronic devices contain small amounts of valuable
                        materials including{" "}
                        <span className="text-yellow-100">
                            gold, silver, copper, platinum, palladium, lithium,
                            and cobalt
                        </span>
                        . However, they also carry toxic heavy metals such as{" "}
                        <span className="text-red-200">
                            lead, mercury, cadmium, and arsenic
                        </span>
                        . Exposure to these toxins can lead to irreversible
                        health and environmental effects.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
