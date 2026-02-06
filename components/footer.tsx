import Link from "next/link";
import HoverText from "./blocks/hovertext";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center mb-3.75 p-4 text-sm">
            <p className="text-foreground-muted">© {new Date().getFullYear()} Konstantin Zhigaylo</p>
            <div className="flex text-foreground-muted items-center">
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
