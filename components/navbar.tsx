import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
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
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <header className="flex items-center justify-between mr-[15px] ml-[15px] mt-[15px]">
                <div className="flex items-center">
                    <a className="text-xl font-bold font-opensans">Konstantin Zero</a>
                    <Link className="cursor-default" href="/coffee"><FaCoffee className="h-4 w-4 text-xl ml-[8px]" /></Link>

                </div>

                <div className="flex items-center">
                    <ThemeSwitcher />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <FaBars className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[200px]">
                            <Link href="/">
                                <DropdownMenuItem>
                                    <FaHome className="mr-2 h-4 w-4" />
                                    Home
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/projects">
                                <DropdownMenuItem>
                                    <FaBriefcase className="mr-2 h-4 w-4" />
                                    Projects
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/blog">
                                <DropdownMenuItem>
                                    <FaBook className="mr-2 h-4 w-4" />
                                    Blog
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/contacts">
                                <DropdownMenuItem>
                                    <FaUserFriends className="mr-2 h-4 w-4" />
                                    Contacts
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <Link href="https://github.com/kostya-zero/homepage">
                                <DropdownMenuItem>
                                    <FaGithub className="mr-2 h-4 w-4" />
                                    View Source Code
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </>
    )
}