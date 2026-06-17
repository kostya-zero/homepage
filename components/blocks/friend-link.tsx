import { Friend } from "@/lib/types/friend.types";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

type Props = {
    friend: Friend;
};

function FriendLink({ friend }: Props) {
    return (
        <Link
            href={friend.url}
            className="flex flex-row group justify-between items-center w-full cursor-pointer transition duration-200 dark:hover:text-neutral-50 hover:text-neutral-950  px-1"
        >
            <div className="flex flex-row gap-4 items-center">
                <Image
                    src={friend.avatar}
                    alt={`${friend.name}\'s avatar`}
                    height={24}
                    width={24}
                    className="size-[24px] rounded-full"
                />
                <p>{friend.name}</p>
            </div>
            <div className="flex flex-row gap-4">
                <p className="text-foreground-muted group-hover:text-neutral-500 duration-200 transition">
                    {friend.contact}
                </p>
                <FiArrowUpRight className="w-6 h-6" />
            </div>
        </Link>
    );
}

export default FriendLink;
