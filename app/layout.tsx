import { Funnel_Display, Geist } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "./globals.css";
import SessionProvider from "@/components/sessionwrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Metadata } from "next";
import Snowfall from "@/components/snowfall";
import { ChristmasLights } from "@/components/christmas-lights";

const funnel_display = Funnel_Display({
    subsets: ["latin"],
    variable: "--font-funnel",
});
const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
});

export const metadata: Metadata = {
    title: {
        absolute: "Konstantin Zero",
        template: "%s // Konstantin Zero",
    },
    description: "My own homepage website.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="en" className={`${geist.variable} ${funnel_display.variable}`}>
            <body className="min-h-[90svh] bg-page-background max-w-155 mx-auto font-geist antialiased">
                <ChristmasLights />
                <Snowfall />
                <NavBar />
                <SessionProvider session={session}>
                    <main className="dark sm:mx-auto mb-2 mt-4">{children}</main>
                </SessionProvider>
                <Footer />
            </body>
        </html>
    );
}
