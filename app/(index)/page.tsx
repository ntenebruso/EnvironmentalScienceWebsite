import Hero from "./_components/hero";
import Definition from "./_components/definition";
import Gallery from "./_components/gallery";
import Solutions from "./_components/solutions";
import MoreInfo from "./_components/more-info";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Definition />
            <Gallery />
            <Solutions />
            <MoreInfo />
        </>
    );
}
