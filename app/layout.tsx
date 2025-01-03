import { Inter, Funnel_Display } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "./globals.css";
import SessionProvider from "@/components/sessionwrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Toaster } from "@/components/ui/toaster";
import { SnowfallEffect } from "@/components/snowfall";
import { ChristmasLights } from "@/components/christmas-lights";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const funnel_display = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={`${inter.variable} ${funnel_display.variable}`}>
      <body className="min-h-[85svh] bg-[#101010] max-w-[620px] mx-auto font-inter antialiased">
        <SessionProvider session={session}>
          <ChristmasLights />
          <SnowfallEffect />
          <NavBar />
          <main className="dark sm:mx-auto my-2">
            {children}
          </main>
          <Footer />
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
