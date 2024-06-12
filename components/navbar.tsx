"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NavBar({
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            {...props}
            className={`z-50 bg-zinc-900 w-full ${props.className}`}
        >
            <div className="max-w-6xl px-6 py-2 mx-auto flex items-center justify-between">
                <span className="inline-block text-3xl font-bold font-serif">
                    Reduce E-Waste
                </span>
                <nav>
                    <button
                        className="block md:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                    <ul
                        className={`font-semibold flex flex-col md:flex-row items-center justify-center md:justify-between md:space-x-6 fixed md:relative top-0 left-0 w-screen md:w-fit bg-zinc-900 z-50 text-xl md:text-base ${
                            isOpen ? "translate-y-0" : "-translate-y-full"
                        } md:translate-y-0`}
                    >
                        <button
                            className="inline-block md:hidden absolute top-4 right-6"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                            </svg>
                        </button>
                        <li>
                            <Link
                                className="inline-block py-4 md:py-0 hover:text-green-600"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="inline-block py-4 md:py-0 hover:text-green-600"
                                href="/data"
                            >
                                Data
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="inline-block py-4 md:py-0 hover:text-green-600"
                                href="/sources"
                            >
                                Sources
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
