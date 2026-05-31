"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import Button from "./ui/button";
import {
    BookMarked,
    FolderBookmark,
    House,
    Menu as MenuIcon,
    Monitor,
    Moon,
    Notebook,
    Sun,
    SunMoon,
} from "lucide-react";
import { Menu, MenuContent, MenuItem, MenuTrigger } from "./ui/menu";

export default function NavBar() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <header className="flex items-center justify-between mt-10 mx-6 md:mx-4">
            <Link href="/" className="text-2xl flex flex-row text-custom-white font-funnel font-black">
                <span className="text-neutral-400">K.</span>
                <span>ZERO</span>
            </Link>

            <div className="flex flex-row gap-2 items-center">
                <Menu>
                    <MenuTrigger
                        render={
                            <Button size="icon" aria-label="Switch theme" suppressHydrationWarning>
                                <SunMoon size={18} />
                            </Button>
                        }
                    />
                    <MenuContent>
                        <MenuItem onClick={() => setTheme("light")}>
                            <Sun /> Light
                        </MenuItem>
                        <MenuItem onClick={() => setTheme("dark")}>
                            <Moon /> Dark
                        </MenuItem>
                        <MenuItem onClick={() => setTheme("system")}>
                            <Monitor /> System
                        </MenuItem>
                    </MenuContent>
                </Menu>

                <Menu>
                    <MenuTrigger
                        render={
                            <Button size={"icon"}>
                                <MenuIcon size={18} />
                            </Button>
                        }
                    ></MenuTrigger>
                    <MenuContent>
                        <Link href="/" className="cursor-default">
                            <MenuItem>
                                <House /> Home
                            </MenuItem>
                        </Link>
                        <Link href="/blog" className="cursor-default">
                            <MenuItem>
                                <Notebook /> Blog
                            </MenuItem>
                        </Link>
                        <Link href="/guestbook" className="cursor-default">
                            <MenuItem>
                                <BookMarked /> Guestbook
                            </MenuItem>
                        </Link>
                        <Link href="/projects" className="cursor-default">
                            <MenuItem>
                                <FolderBookmark /> Projects
                            </MenuItem>
                        </Link>
                    </MenuContent>
                </Menu>
            </div>
        </header>
    );
}
