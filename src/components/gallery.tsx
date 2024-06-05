import { useState } from "react";
import { motion } from "framer-motion";

function Buttons() {}

export default function Gallery() {
    const [index, setIndex] = useState<number>(0);

    const nextSlide = () => setIndex(index + 1);
    const prevSlide = () => setIndex(index - 1);

    return (
        <section>
            <div className="slideshow h-screen w-screen">
                <div className="buttons absolute bottom-2 right-2 z-50 flex space-x-2">
                    <button
                        className="text-lg bg-zinc-900 hover:bg-zinc-950 w-8 h-8 rounded-full"
                        onClick={prevSlide}
                    >
                        &lt;
                    </button>
                    <button
                        className="text-lg bg-zinc-900 hover:bg-zinc-950 w-8 h-8 rounded-full"
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </div>
                <div
                    className="slider"
                    style={{ transform: `translateX(${-index * 100}%)` }}
                >
                    <div className="slide bg-[url('/assets/ewaste1.jpeg')] bg-cover">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ amount: "all" }}
                            className="absolute left-[5%] mr-[5%] top-[5%] max-w-lg z-50 bg-zinc-950/70 backdrop-blur-lg p-5 rounded-md"
                        >
                            <h2 className="font-bold text-4xl">The Problem</h2>
                            <p className="mt-4">
                                E-waste is the fastest growing source of solid
                                waste in the world. But, as of 2019, less than{" "}
                                <b className="text-red-400">one quarter</b> of
                                the world's E-waste was actually recycled.
                            </p>
                            <button
                                onClick={nextSlide}
                                className="mt-4 text-zinc-300 hover:text-white float-right text-sm"
                            >
                                Next
                            </button>
                        </motion.div>
                    </div>
                    <div className="slide bg-[url('/assets/ewaste2.webp')] bg-cover">
                        <div className="absolute top-[5%] ml-[5%] right-[5%] z-50 bg-zinc-950/70 backdrop-blur-lg p-5 rounded-md">
                            <h2 className="font-bold text-4xl">The Problem</h2>
                            <p className="mt-4 text-lg">
                                According to the WHO, the improper disposal of
                                E-waste includes:
                            </p>
                            <ol className="ml-8 text-lg list-decimal marker:text-green-400 marker:font-semibold">
                                <li>Scavenging</li>
                                <li>Dumping on land or in water bodies</li>
                                <li>Landfilling along with regular waste</li>
                                <li>Opening burning or heating</li>
                                <li>Acid baths or acid leaching</li>
                                <li>
                                    Stripping and shredding plastic coatings
                                </li>
                                <li>Manual disassembly of equipment</li>
                            </ol>
                            <button
                                onClick={nextSlide}
                                className="mt-4 text-zinc-300 hover:text-white float-right text-sm"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
