import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { motion, Variants } from "framer-motion";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Solutions() {
    const container: Variants = {
        hidden: {
            opacity: 0,
        },
        shown: {
            opacity: 1,
            transition: {
                staggerChildren: 0.07,
            },
        },
    };

    const item: Variants = {
        hidden: {
            opacity: 0,
        },
        shown: {
            opacity: 1,
        },
    };

    return (
        <section className="min-h-screen max-w-6xl px-12 py-4 mx-auto">
            <h2 className="font-bold text-6xl text-center">What can we do?</h2>
            <TabGroup className="max-w-3xl mx-auto mt-4">
                <TabList className="p-1 bg-zinc-950 flex flex-col md:flex-row space-x-1 rounded-md font-semibold">
                    <Tab className="flex-1 w-full px-8 py-4 rounded-md data-[selected]:bg-blue-200 data-[selected]:text-zinc-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/60">
                        People
                    </Tab>
                    <Tab className="flex-1 w-full px-8 py-4 rounded-md data-[selected]:bg-green-200 data-[selected]:text-zinc-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/60">
                        Governments
                    </Tab>
                    <Tab className="flex-1 w-full px-8 py-4 rounded-md data-[selected]:bg-yellow-200 data-[selected]:text-zinc-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/60">
                        Corporations
                    </Tab>
                </TabList>
                <TabPanels className="mt-4 bg-zinc-950 text-lg p-4 rounded-md">
                    <TabPanel>
                        <h3 className="font-bold">
                            What people can do to lessen the effects of e-waste
                        </h3>
                        <motion.ul
                            className="list-disc ml-8 mt-2 space-y-1"
                            variants={container}
                            initial="hidden"
                            animate="shown"
                        >
                            <motion.li variants={item}>
                                <span className="text-green-400">
                                    Reduce, recycle, and reuse
                                </span>{" "}
                                electronic devices.
                            </motion.li>
                            <motion.li variants={item}>
                                Maintain your current electronic equipment.
                            </motion.li>
                            <motion.li variants={item}>
                                Keep product lifespan in mind when buying an
                                electronic product.
                            </motion.li>
                            <motion.li variants={item}>
                                Always check for an environmental seal.
                            </motion.li>
                            <motion.li variants={item}>
                                <b className="text-red-400">
                                    Don't dispose of electronic devices in the
                                    trash
                                </b>
                                . Either return the product to the manufacturer
                                (if possible), or bring the product to your
                                local town/county's DPW.
                            </motion.li>
                        </motion.ul>
                    </TabPanel>
                    <TabPanel>
                        <h3 className="font-bold">
                            What governments can do to lessen the effects of
                            e-waste
                        </h3>
                        <motion.ul
                            className="list-disc ml-8 mt-2 space-y-1"
                            variants={container}
                            initial="hidden"
                            animate="shown"
                        >
                            <motion.li variants={item}>
                                Create legislature to prohibit throwing harmful
                                electronics (ex. Lithium-ion batteries) into the
                                trash.
                            </motion.li>
                            <motion.li variants={item}>
                                Create dedicated electronic waste collection
                                sites.
                            </motion.li>
                            <motion.li variants={item}>
                                Create facilities where electronics are{" "}
                                <b>properly</b> dismantled and prepared for
                                reuse (instead of dumping them in landfills or
                                shipping them to countries where labor/safety
                                laws do not exist).
                            </motion.li>
                            <motion.li variants={item}>
                                Monitor existing e-waste sites.
                            </motion.li>
                            <motion.li variants={item}>
                                Incorporate national health protection laws.
                            </motion.li>
                        </motion.ul>
                    </TabPanel>
                    <TabPanel>
                        <h3 className="font-bold">
                            What corporations can do to lessen the effects of
                            e-waste
                        </h3>
                        <motion.ul
                            className="list-disc ml-8 mt-2 space-y-1"
                            variants={container}
                            initial="hidden"
                            animate="shown"
                        >
                            <motion.li variants={item}>
                                <span className="bg-yellow-700">
                                    Don't design software that deliberately
                                    slows down older devices through updates.
                                </span>
                            </motion.li>
                            <motion.li variants={item}>
                                Create recycling programs to collect and reuse
                                older electronics.
                            </motion.li>
                            <motion.li variants={item}>
                                Allow devices to be returned to reuse components
                                in newer products.
                            </motion.li>
                            <motion.li variants={item}>
                                Eliminate child labor.
                            </motion.li>
                            <motion.li variants={item}>
                                Educate workers about e-waste related health
                                issues.
                            </motion.li>
                        </motion.ul>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </section>
    );
}
