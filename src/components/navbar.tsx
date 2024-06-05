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
                <span className="text-3xl font-bold font-serif">
                    Reduce E-Waste
                </span>
                <nav>
                    <ul className="flex items-center justify-between space-x-6 font-semibold">
                        <li>
                            <Link className="hover:text-green-600" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-green-600" to="/about">
                                Data
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
