"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }
    return (
        <>
            <Button variant="outline" size="icon" className="mr-2 " onClick={() => switchTheme()}>
            <FaMoon className="h-4 w-4 scale-100 dark:scale-0"/>
            <FaSun className="h-4 w-4 absolute scale-0 dark:scale-100"/>
            </Button>
        </>
    )
}