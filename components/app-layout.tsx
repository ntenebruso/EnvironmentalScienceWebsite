import NavBar from "./navbar";

export default function AppLayout({
    children,
    navBarClassName,
}: {
    children: React.ReactNode;
    navBarClassName?: string;
}) {
    return (
        <>
            <NavBar className={navBarClassName} />
            <main className="relative">{children}</main>
            <footer className="bg-zinc-950">
                <p className="max-w-6xl px-6 mx-auto py-4 text-center">
                    Made by{" "}
                    <a
                        href="https://ntenebruso.com/"
                        className="text-green-300 hover:underline hover:text-green-500"
                        target="_blank"
                    >
                        Nick Tenebruso
                    </a>
                </p>
            </footer>
        </>
    );
}
