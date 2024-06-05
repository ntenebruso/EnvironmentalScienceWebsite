import { motion, Variants } from "framer-motion";

export default function Hero() {
    const headerAnim: Variants = {
        hidden: {
            transition: {
                when: "afterChildren",
            },
        },
        visible: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const headerItem: Variants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1,
            },
        },
    };

    return (
        <section className="h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
            <img
                src="/assets/banner.jpeg"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <motion.div
                className="px-3 absolute z-10 w-full h-full flex flex-col text-center items-center justify-center"
                variants={headerAnim}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={headerItem} className="text-5xl font-bold">
                    Reduce E-Waste.
                </motion.h1>
                <motion.p
                    variants={headerItem}
                    className="mt-2 text-lg font-semibold"
                >
                    Stop E-Waste from filling our landfills with toxic
                    chemicals.
                </motion.p>
            </motion.div>
        </section>
    );
}
