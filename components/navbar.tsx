"use client";

import Link from "next/link";
import { Icon } from "./icon";
import HoverText from "./blocks/hovertext";
import { usePathname } from "next/navigation";

type NavBarLinkProps = {
    href: string;
    route: string;
    title: string;
    pathname: string;
};

function NavBarLink({ href, route, title, pathname }: NavBarLinkProps) {
    return (
        <Link
            href={href}
            className={`hover:text-neutral-50 transition duration-200 ${pathname === route ? "text-neutral-50" : ""}`}
        >
            <HoverText>{title}</HoverText>
        </Link>
    );
}

export default function NavBar() {
    const pathname = usePathname();

    return (
        <header className="flex items-center justify-between mt-10 m-4">
            <Link href="/">
                <Icon />
            </Link>

            <div className="text-neutral-500 flex flex-row items-center gap-5 transition duration-200">
                <NavBarLink href="/" route="/" title="Home" pathname={pathname} />
                <NavBarLink href="/blog" route="/blog" title="Blog" pathname={pathname} />
                <NavBarLink href="/guestbook" route="/guestbook" title="Guestbook" pathname={pathname} />
                <NavBarLink href="/projects" route="/projects" title="Projects" pathname={pathname} />
            </div>
        </header>
    );
}
