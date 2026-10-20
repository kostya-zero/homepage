"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { cn } from "@/lib/utils";

const links = [
    { href: "/", name: "Home", icon: <House /> },
    { href: "/blog", name: "Blog", icon: <Notebook /> },
    { href: "/guestbook", name: "Guestbook", icon: <BookMarked /> },
    { href: "/projects", name: "Projects", icon: <FolderBookmark /> },
];

export default function NavBar() {
    const { setTheme } = useTheme();
    const pathname = usePathname();

    const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <header className="flex items-center justify-between px-6 py-5">
            <Link href="/" className="text-2xl flex flex-row text-custom-white font-funnel font-black">
                <span className="text-neutral-400">K.</span>
                <span>ZERO</span>
            </Link>

            <div className="flex flex-row gap-6 items-center">
                <nav className="hidden sm:flex flex-row gap-5 text-sm">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-custom-white",
                                isActive(link.href) ? "text-custom-white" : "text-foreground-muted"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

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
                                <Button size="icon" aria-label="Open navigation" className="sm:hidden">
                                    <MenuIcon size={18} />
                                </Button>
                            }
                        />
                        <MenuContent>
                            {links.map((link) => (
                                <Link key={link.href} href={link.href} className="cursor-default">
                                    <MenuItem>
                                        {link.icon} {link.name}
                                    </MenuItem>
                                </Link>
                            ))}
                        </MenuContent>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
