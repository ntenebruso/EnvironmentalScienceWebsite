import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <header
            {...props}
            className={`z-50 bg-zinc-900 w-full ${props.className}`}
        >
            <div className="max-w-6xl px-12 py-2 mx-auto flex items-center justify-between">
                <span className="text-3xl font-bold">Reduce EWaste</span>
                <nav>
                    <ul className="flex items-center justify-between space-x-6 font-semibold">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
