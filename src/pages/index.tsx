import AppLayout from "../components/app-layout";
import { motion, Variants } from "framer-motion";

export default function HomePage() {
    const headerAnim: Variants = {
        hidden: {
            opacity: 0,
            y: 100,
            transition: {
                when: "beforeChildren",
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeInOut",
                staggerChildren: 0.3,
                duration: 1.4,
            },
        },
    };

    return (
        <AppLayout navBarClassName="absolute top-0 left-0">
            <section className="h-screen">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
                <img
                    src="/assets/banner.jpeg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <motion.div
                    className="absolute z-10 w-full h-full flex flex-col items-center justify-center"
                    variants={headerAnim}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={headerAnim}
                        className="text-5xl font-bold text-center"
                    >
                        Reduce E-Waste.
                    </motion.h1>
                    <motion.p
                        variants={headerAnim}
                        className="mt-2 text-lg font-semibold"
                    >
                        E-waste is becoming an increasingly large problem.
                    </motion.p>
                </motion.div>
            </section>
        </AppLayout>
    );
}
