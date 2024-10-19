import { Josefin_Sans, Inter } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const josefinsans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.variable} ${josefinsans.variable} antialiased transition-all duration-200 ease-in-out font-inter bg-neutral-950 text-netrual-50 dark"`}
      >
        {/* <div className="w-full bg-neutral-300 h-[2px]"></div> */}
        <main className="max-w-[620px] dark sm:mx-auto">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
