import { Contact } from "@/lib/types/contact.types";
import Link from "next/link";
import { JSX } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
    contact: Contact;
    icon: JSX.Element;
};

function ContactLink({ contact, icon }: Props) {
    return (
        <Link
            href={contact.url}
            className="flex flex-row group justify-between items-center w-full cursor-pointer transition duration-200 hover:text-neutral-50 px-1"
        >
            <div className="flex flex-row gap-2 items-center">
                {icon}
                <p>{contact.name}</p>
            </div>
            <div className="flex flex-row gap-2">
                <p className="text-foreground-muted group-hover:text-neutral-400 duration-200 transition">
                    {contact.contact}
                </p>
                <FiArrowUpRight className="w-6 h-6" />
            </div>
        </Link>
    );
}

export default ContactLink;
