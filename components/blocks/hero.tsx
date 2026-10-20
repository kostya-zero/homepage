import { cn } from "@/lib/utils";
import * as React from "react";

function Hero({
    className = "",
    children,
    ...props
}: { className?: string; children: React.ReactNode } & React.ComponentProps<"p">) {
    return (
        <h1
            className={cn(
                "text-4xl sm:text-5xl text-white font-semibold tracking-tight font-funnel leading-[1.1]",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
}

export default Hero;
