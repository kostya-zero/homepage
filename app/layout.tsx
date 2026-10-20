import { Funnel_Display, Geist, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "./globals.css";
import { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";

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
        <html
            lang="en"
            className={`${geist.variable} ${funnel_display.variable} ${jetbrains.variable}`}
            suppressHydrationWarning
        >
            <body className="bg-page-background font-geist antialiased">
                <ThemeProvider>
                    <div className="mx-auto min-h-svh w-full max-w-165 border-x">
                        <NavBar />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
