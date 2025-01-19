import Link from "next/link";
import HoverText from "./blocks/hovertext";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center mb-[45px]">
        <p className="text-sm text-neutral-500">© Konstantin Zhigaylo 2024.</p>
        <div className="flex flex-row gap-0.5 text-sm text-neutral-500 items-center">
          <p>The source code is available on</p>
          <Link
            href="https://github.com/kostya-zero/homepage"
            className="ml-1 text-neutral-500 hover:text-neutral-50 transition duration-200"
          >
            <HoverText>GitHub</HoverText>
          </Link>
          .
        </div>
      </div>
    </>
  );
}
