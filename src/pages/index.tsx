import AppLayout from "../components/app-layout";
import Hero from "../components/hero";
import Definition from "../components/definition";
import Gallery from "../components/gallery";
import Solutions from "../components/solutions";

export default function HomePage() {
    return (
        <AppLayout navBarClassName="absolute top-0 left-0">
            <Hero />
            <Definition />
            <Gallery />
            <Solutions />
        </AppLayout>
    );
}
