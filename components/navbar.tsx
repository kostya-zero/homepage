"use client";

import Link from "next/link";
import { Icon } from "./icon";
import HoverText from "./blocks/hovertext";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between mt-[32px] m-[16px]">
      <Link href="/">
        <Icon />
      </Link>

      <div className="flex items-center">
        <div className="text-neutral-400 flex flex-row items-center gap-5 transition duration-200">
          <Link
            href="/guestbook"
            className={`hover:text-neutral-50 transition duration-200 ${
              pathname === "/guestbook" ? "text-neutral-50" : ""
            }`}
          >
            <HoverText>Guestbook</HoverText>
          </Link>
          <Link
            href="/projects"
            className={`hover:text-neutral-50 transition duration-200 ${
              pathname === "/projects" ? "text-neutral-50" : ""
            }`}
          >
            <HoverText>Projects</HoverText>
          </Link>
        </div>
      </div>
    </header>
  );
}
