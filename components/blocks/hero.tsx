import * as React from "react";

function Hero({ children, ...props }: { children: React.ReactNode } & React.ComponentProps<"p">) {
    return (
        <p
            className="text-4xl font-bold mt-4 font-funnel leading-[1.1] bg-linear-to-b from-white to-neutral-300 bg-clip-text text-transparent"
            {...props}
        >
            {children}
        </p>
    );
}

export default Hero;
