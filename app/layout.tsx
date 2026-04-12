import { Funnel_Display, Geist, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "./globals.css";
import { Metadata } from "next";

const funnel_display = Funnel_Display({
    subsets: ["latin"],
    variable: "--font-funnel",
});
const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: {
        absolute: "Konstantin Zero",
        template: "%s // Konstantin Zero",
    },
    description: "Systems programmer specializing in Rust.",
    openGraph: {
        title: "Konstantin Zero",
        description: "Systems programmer specializing in Rust.",
        url: "https://kostyazero.com",
        siteName: "Konstantin Zero",
        type: "website",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.variable} ${funnel_display.variable} ${jetbrains.variable}`}>
            <body className="min-h-[90svh] bg-page-background max-w-155 mx-auto font-geist antialiased">
                <NavBar />
                <main className="dark sm:mx-auto mb-2 mt-4">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
