import Link from "next/link";
import { Icon } from "./icon";
import HoverText from "./blocks/hovertext";

export default async function NavBar() {
  return (
    <>
      <header className="flex items-center justify-between mt-[32px] m-[16px]">
        <Link href="/">
          <Icon />
        </Link>

        <div className="flex items-center">
          <div className="text-neutral-400 flex flex-row items-center gap-5 transition duration-200">
            <Link
              href="/guestbook"
              className="hover:text-neutral-50 transition duration-200"
            >
              <HoverText>Guestbook</HoverText>
            </Link>
            <Link
              href="/wallpapers"
              className="hover:text-neutral-50 transition duration-200"
            >
              <HoverText>Wallpapers</HoverText>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
