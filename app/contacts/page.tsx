import ContactCard from "@/components/contactcard";
import { FaDiscord, FaMailBulk, FaTelegram } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konstatin Zero",
  description: "List of my contacts.",
};

export default function Contacts() {
    return (
        <>
            <div className="m-[16px]">
                    <h2 className="text-4xl font-bold font-worksans leading-[1.2]">Contacts</h2>
                <p className="text-neutral-700 dark:text-neutral-300">You can ask me a question or simply talk to me by the ways below.</p>
            </div>
            <ContactCard name="Email" contact="zero@kostyazero.com" icon={<FaMailBulk/>} link="mailto:zero@kostyazero.com" />
            <ContactCard name="Telegram" contact="@kostya_zero" icon={<FaTelegram/>} link="https://t.me/kostya_zero" />
            <ContactCard name="Discord" contact="kostya_zero" icon={<FaDiscord/>} link="https://discord.com/users/414264955617935371" />
        </>
    );
}