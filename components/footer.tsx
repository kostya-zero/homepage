import Link from "next/link";
import HoverText from "./blocks/hovertext";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center mb-[15px] p-4 text-sm">
            <p className="text-neutral-500">© 2025 Konstantin Zhigaylo</p>
            <div className="flex text-neutral-500 items-center">
                <p>The source code is available on</p>
                <Link
                    href="https://github.com/kostya-zero/homepage"
                    className="ml-1 text-neutral-500 hover:text-neutral-50 transition duration-200"
                >
                    {" "}
                    <HoverText>GitHub</HoverText>
                </Link>
            </div>
        </footer>
    );
}
