import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/lora";
import AppLayout from "@/components/app-layout";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased bg-zinc-900 text-zinc-50">
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
