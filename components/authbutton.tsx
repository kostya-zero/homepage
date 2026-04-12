"use client";

import { FaGithub } from "react-icons/fa6";
import Button from "./ui/button";
import { authClient } from "@/lib/auth-client";

export default function AuthButton() {
    const handleSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
            errorCallbackURL: "/auth-failed",
            newUserCallbackURL: "/",
        });
    };

    return (
        <Button className="mt-4" onClick={handleSignIn}>
            <FaGithub /> Sign In with GitHub
        </Button>
    );
}
