import AppLayout from "../components/app-layout";
import Hero from "../components/hero";
import Definition from "../components/definition";

export default function HomePage() {
    return (
        <AppLayout navBarClassName="absolute top-0 left-0">
            <Hero />
            <Definition />
        </AppLayout>
    );
}
