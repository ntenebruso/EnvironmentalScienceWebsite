import Link from "next/link";

export default function MoreInfo() {
    return (
        <section className="bg-zinc-950">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="font-bold italic text-5xl md:text-6xl text-center">
                    Want more information?
                </h2>
                <p className="mt-8 text-2xl text-center">
                    <Link
                        href="/data"
                        className="font-semibold text-blue-200 hover:text-blue-300 hover:underline"
                    >
                        See the data.
                    </Link>
                </p>
            </div>
        </section>
    );
}
