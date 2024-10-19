"use client";

import { FaGithubAlt } from "react-icons/fa6";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function AuthButton() {
  return (
    <Button className="mt-4" onClick={() => signIn("github")}>
      <FaGithubAlt /> Sign In with GitHub
    </Button>
  );
}
