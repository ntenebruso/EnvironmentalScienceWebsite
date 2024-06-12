"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import VideoDialog from "./video-dialog";

function NavButtons({
    nextSlide,
    prevSlide,
    index,
    numSlides,
}: {
    nextSlide: () => void;
    prevSlide: () => void;
    index: number;
    numSlides: number;
}) {
    return (
        <div className="mt-4 text-sm float-right">
            {index > 0 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="text-zinc-300 hover:text-white"
                    >
                        Back
                    </button>
                </>
            )}
            {index > 0 && index < numSlides - 1 && <> | </>}
            {index < numSlides - 1 && (
                <button
                    onClick={nextSlide}
                    className="text-zinc-300 hover:text-white"
                >
                    Next
                </button>
            )}
        </div>
    );
}

export default function Gallery() {
    const slidesRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef(null);

    const [index, setIndex] = useState<number>(0);
    const [numSlides, setNumSlides] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setNumSlides(slidesRef.current!.childNodes.length);
    }, []);

    const nextSlide = () => index < numSlides - 1 && setIndex(index + 1);
    const prevSlide = () => index > 0 && setIndex(index - 1);

    const dragX = useMotionValue(0);

    function onDragEnd() {
        const x = dragX.get();

        if (x <= -50) {
            nextSlide();
        } else if (x >= 50) {
            prevSlide();
        }
    }

    return (
        <section ref={containerRef}>
            <div className="slideshow h-screen w-screen bg-zinc-900">
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
                <motion.div
                    className="slider"
                    ref={slidesRef}
                    animate={{ translateX: `${-index * 100}%` }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    style={{ x: dragX }}
                    onDragEnd={onDragEnd}
                >
                    <div className="slide bg-[url('/assets/ewaste1.jpeg')] bg-cover">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ amount: "all", root: containerRef }}
                            className="absolute left-[5%] mr-[5%] top-[5%] max-w-lg z-50 bg-zinc-950/70 backdrop-blur-lg p-5 rounded-md"
                        >
                            <h2 className="font-bold text-4xl">The Problem</h2>
                            <p className="mt-4">
                                E-waste is the fastest growing source of solid
                                waste in the world. But, as of 2019, less than{" "}
                                <b className="text-red-400">one quarter</b> of
                                the world's E-waste was actually recycled.
                            </p>
                            <NavButtons
                                nextSlide={nextSlide}
                                prevSlide={prevSlide}
                                index={index}
                                numSlides={numSlides}
                            />
                        </motion.div>
                    </div>
                    <div className="slide bg-[url('/assets/ewaste2.webp')] bg-cover">
                        <motion.div
                            className="absolute top-[5%] ml-[5%] right-[5%] z-50 bg-zinc-950/70 backdrop-blur-lg p-5 rounded-md"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ amount: "all", root: containerRef }}
                        >
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
                            <NavButtons
                                nextSlide={nextSlide}
                                prevSlide={prevSlide}
                                index={index}
                                numSlides={numSlides}
                            />
                        </motion.div>
                    </div>
                    <div className="slide bg-[url('/assets/ewaste3.jpeg')] bg-cover">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ amount: "all", root: containerRef }}
                            className="absolute left-[5%] mr-[5%] top-[5%] max-w-lg z-50 bg-zinc-950/70 backdrop-blur-lg p-5 rounded-md"
                        >
                            <h2 className="font-bold text-4xl">The Problem</h2>
                            <p className="mt-4 text-lg">
                                Developed countries send roughly{" "}
                                <span className="text-blue-200 font-bold">
                                    24%
                                </span>{" "}
                                of their E-waste to developing countries, where
                                these harmful methods of disposal are used due
                                to a lack proper government safety regulations,
                                training, and infrastructure. This number is
                                expected to rise significantly as the use of
                                technology grows in developed countries.
                            </p>
                            <button
                                className="mt-4 text-lg bg-green-600 font-bold px-2 py-1 rounded-lg"
                                onClick={() => setIsOpen(true)}
                            >
                                Play video
                            </button>
                            <VideoDialog
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            />

                            <NavButtons
                                nextSlide={nextSlide}
                                prevSlide={prevSlide}
                                index={index}
                                numSlides={numSlides}
                            />
                        </motion.div>
                    </div>
                    <div className="slide bg-[url('/assets/ewaste4.jpeg')] bg-cover">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ amount: "all", root: containerRef }}
                            className="absolute right-[5%] ml-[5%] top-[5%] max-w-lg z-50 bg-zinc-950/70 backdrop-blur-lg p-5 rounded-md"
                        >
                            <h2 className="font-bold text-4xl">The Problem</h2>
                            <p className="mt-4">
                                These unsafe disposal methods have led to
                                E-waste plants in less developed countries being
                                some of the most toxic areas in the world, as
                                toxicants such as lead and mercury are released
                                when recycling E-waste improperly, which then
                                contaminate water streams and pollute the air.
                                Additionally, these toxicants have detrimental
                                effects on human health. According to the WHO,
                                high exposure to lead and mercury may heavily
                                disrupt pregnancy, the central nervous system,
                                and the structural development of the lungs.
                            </p>
                            <NavButtons
                                nextSlide={nextSlide}
                                prevSlide={prevSlide}
                                index={index}
                                numSlides={numSlides}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
