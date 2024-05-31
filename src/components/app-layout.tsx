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
            <main>{children}</main>
        </>
    );
}
