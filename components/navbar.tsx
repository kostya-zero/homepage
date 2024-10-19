import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  FaBars,
  FaBook,
  FaBriefcase,
  FaCoffee,
  FaGithub,
  FaHome,
  FaUserFriends,
} from "react-icons/fa";
import Link from "next/link";
import { Icon } from "./icon";

export default function NavBar() {
  return (
    <>
      <header className="flex items-center justify-between mt-[16px] m-[16px]">
        <Link href="/">
          <Icon />
        </Link>

        <div className="flex items-center">
          <div className="text-neutral-300 flex flex-row items-center gap-5 transition duration-200">
            <Link
              href="/"
              className="hover:text-neutral-50 transition duration-200"
            >
              <p>Home</p>
            </Link>
            <Link
              href="https://github.com/kostya-zero"
              className="hover:text-neutral-50 transition duration-200"
            >
              <p>GitHub</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
