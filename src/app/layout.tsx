import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cameron Bartlett",
    description:
        "Welcome to my little website here. It's not much right now but it will be... maybe.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/globe.svg" type="image/svg+xml"></link>
            </head>
            <body
                className={`antialiased min-h-screen flex flex-col items-start justify-start`}
            >
                {children}
            </body>
        </html>
    );
}
