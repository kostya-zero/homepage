import Link from "next/link";
import HoverText from "./blocks/hovertext";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center mb-[45px]">
        <p className="text-sm text-neutral-500"> © Konstantin Zhigaylo 2024.</p>
        <p className="text-sm flex  text-neutral-500 items-center">
          The source code is available on {" "}
          <Link
            href="https://github.com/kostya-zero/homepage"
            className="ml-1 hover:text-neutral-50 transition duration-200"
          >
            <HoverText> GitHub</HoverText>
          </Link>
          .
        </p>
      </div>
    </>
  );
}
