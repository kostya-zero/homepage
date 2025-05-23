import { Inter, Funnel_Display, Geist } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "./globals.css";
import SessionProvider from "@/components/sessionwrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${funnel_display.variable}`}
    >
      <body className="min-h-[85svh] bg-[#101010] max-w-[620px] mx-auto font-geist antialiased">
        <SessionProvider session={session}>
          <NavBar />
          <main className="dark sm:mx-auto mb-2">{children}</main>
          <Footer />
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
