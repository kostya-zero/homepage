"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { IoIosExit } from "react-icons/io";

export default function SignOutButton() {
  return (
    <Button
      variant="outline"
      className="mt-4"
      onClick={() => {
        signOut();
      }}
    >
      <IoIosExit /> Sign Out
    </Button>
  );
}
