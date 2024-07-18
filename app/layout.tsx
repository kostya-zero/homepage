'use client';

import { Work_Sans, Open_Sans } from "next/font/google";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Transition from "@/components/transition";
import { usePathname } from "next/navigation";

const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-open", });
const worksans = Work_Sans({ subsets: ["latin"], variable: "--font-work", });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const key = usePathname();

  return (
    <html lang="en" className="">
      <body className={`${opensans.variable} ${worksans.variable} antialiased transition-all duration-200 ease-in-out font-opensans bg-neutral-50 dark:bg-neutral-900 "`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <main className="max-w-[620px] m-4 mt-1 sm:m-0 sm:ml-auto sm:mr-auto">
            <NavBar />
            <Transition key={key}>
            {children}
            </Transition>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
