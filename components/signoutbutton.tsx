"use client";
import { authClient } from "@/lib/auth-client";
import Button from "./ui/button";
import { IoIosExit } from "react-icons/io";

export default function SignOutButton() {
    return (
        <Button
            className="mt-4"
            onClick={() => {
                void authClient.signOut();
            }}
        >
            <IoIosExit /> Sign Out
        </Button>
    );
}
