import EChart from "@/components/echart";
import {
    ewasteGeneratedGraph,
    ewasteCountryGraph,
    ewasteCapitaGraph,
    ewasteTypeGraph,
} from "@/lib/graphs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-Waste Data",
};

export default function DataPage() {
    return (
        <section className="max-w-6xl mx-auto px-6 mb-4">
            <EChart className="mt-8 h-[500px]" option={ewasteGeneratedGraph} />
            <EChart className="mt-8 h-[500px]" option={ewasteCountryGraph} />
            <EChart className="mt-8 h-[500px]" option={ewasteCapitaGraph} />
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 items-center relative">
                <p className="md:w-[50%] text-lg">
                    71% of people on the planet were protected by national
                    e-waste policies, laws, or regulations as of October 2019.
                    This is an improvement, as just 44% of the population was
                    covered in 2014.
                    <br></br>
                    However, this high coverage rate is mainly due to the most
                    populous nations like China and India implementing national
                    legislative frameworks. Only 78 of the world's 193 countries
                    are actually represented by this population coverage. As a
                    result, policies, laws, or regulations currently apply to
                    fewer than half of all nations worldwide.
                </p>
                <figure className="md:w-[50%]">
                    <img
                        className="w-full object-contain rounded-md"
                        src="/assets/lawschart.png"
                    />
                    <figcaption className="mt-1 text-sm text-zinc-300">
                        Diagram: UN E-Waste Monitor
                    </figcaption>
                </figure>
            </div>
            <EChart className="mt-8 h-[500px]" option={ewasteTypeGraph} />
        </section>
    );
}
