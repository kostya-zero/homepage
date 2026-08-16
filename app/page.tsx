import Bold from "@/components/blocks/bold";
import ContactLink from "@/components/blocks/contactlink";
import FriendLink from "@/components/blocks/friend-link";
import Hero from "@/components/blocks/hero";
import MainContent from "@/components/blocks/maincontent";
import Text from "@/components/blocks/text";
import { Contact } from "@/lib/types/contact.types";
import { Friend } from "@/lib/types/friend.types";
import { Bird, GitBranch, LoaderPinwheel, Music } from "lucide-react";

const socials: Array<Contact> = [
    {
        id: "github",
        name: "GitHub",
        contact: "kostya-zero",
        icon: <GitBranch size={24} />,
        url: "https://github.com/kostya-zero",
    },
    {
        id: "twitter",
        name: "Twitter",
        contact: "@kostyazer0",
        icon: <Bird size={24} />,
        url: "https://x.com/kostyazer0",
    },
    {
        id: "lastfm",
        name: "Last.fm",
        contact: "kostya_zer0",
        icon: <Music size={24} />,
        url: "https://www.last.fm/user/kostya_zer0",
    },
    {
        id: "codewars",
        name: "CodeWars",
        contact: "kostya-zero",
        icon: <LoaderPinwheel size={24} />,
        url: "https://www.codewars.com/users/kostya-zero",
    },
];

const friends: Array<Friend> = [
    {
        id: "octobanon",
        name: "OctoBanon",
        contact: "octobanon.com",
        avatar: "https://avatars.githubusercontent.com/u/82901151?v=4",
        url: "https://octobanon.com",
    },
    {
        id: "honakac",
        name: "HonakAC",
        contact: "honakac.r2squad.ru",
        avatar: "https://avatars.githubusercontent.com/u/115927225?v=4",
        url: "https://honakac.r2squad.ru",
    },
    {
        id: "shadowcj",
        name: "ShadowCj",
        contact: "shadowcj.site",
        avatar: "https://avatars.githubusercontent.com/u/155315982?v=4",
        url: "https://shadowcj.site/",
    },
];

export const dynamic = "force-static";

export default function Home() {
    return (
        <MainContent>
            <Hero>Welcome</Hero>
            <Text>
                Hey, I’m <Bold>Konstantin Zhigaylo</Bold>, but you can just call me <Bold>Kostya</Bold>.
            </Text>
            <Text>
                I’m a <Bold>systems programmer</Bold> who enjoys building software. Most of my work revolves around{" "}
                <Bold>Rust</Bold>, where I focus on creating efficient CLI tools and backend systems. Occasionally, I
                dive into <Bold>Next.js</Bold> and <Bold>React</Bold> to build small web projects like this one (though
                my heart stays closer to the terminal).
            </Text>
            <Text>
                Lately, I’ve been exploring <Bold>network programming in Rust</Bold> and <Bold>DevOps</Bold>, mainly
                because I like to build complex things from the ground up.
            </Text>
            <Text>You can check out my socials:</Text>
            <div className="flex flex-col gap-4 items-center mb-4 text-foreground">
                {socials.map((contact) => (
                    <ContactLink key={contact.id} contact={contact} icon={contact.icon} />
                ))}
            </div>
            <Text>Also, you can look at my friend&apos;s pages:</Text>
            <div className="flex flex-col gap-4 items-center mb-4 text-foreground">
                {friends.map((friend) => (
                    <FriendLink key={friend.id} friend={friend} />
                ))}
            </div>
        </MainContent>
    );
}
