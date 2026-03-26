import { cn } from "@/lib/utils";
import * as React from "react";

function Hero({
    className = "",
    children,
    ...props
}: { className?: string; children: React.ReactNode } & React.ComponentProps<"p">) {
    return (
        <h1 className={cn("text-4xl font-bold mt-4 font-funnel leading-[1.1] text-white", className)} {...props}>
            {children}
        </h1>
    );
}

export default Hero;
