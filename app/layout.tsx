import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/lora";
import AppLayout from "@/components/app-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Reduce E-Waste",
        default: "Reduce E-Waste",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased bg-zinc-900 text-zinc-50 selection:bg-green-900 selection:text-white">
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
